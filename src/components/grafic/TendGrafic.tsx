import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface DataPoint {
  date: Date;
  value: number;
}

interface DrawChartProps {
  data: DataPoint[] | undefined;
  lineColor: string;
  pointColor: string;
  label: string;
  fontSize: string;
  heightGrafic: number;
  styleTransform?: string;
  unit?: string;
  mode: "month" | "24hour";
}

const TrendGrafic: React.FC<DrawChartProps> = ({
  data,
  lineColor,
  pointColor,
  heightGrafic,
  label,
  fontSize,
  styleTransform = "",
  unit = "",
  mode,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (ref.current) {
        setContainerWidth(ref.current.clientWidth);
      }
    };

    const currentRef = ref.current;
    const resizeObserver = new ResizeObserver(updateWidth);

    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    updateWidth();

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const drawChart = async () => {
      if (!data || !data.length || !containerWidth) return;
      const domainDate = data.map((d) => d.date);
      const domainValue = data.map((d) => d.value);

      d3.select(ref.current).select("svg").remove();
      d3.select(ref.current).select(".tooltip").remove();

      const margin = { top: 20, right: 20, bottom: 30, left: 60 };
      const width = containerWidth || 800; // Default width if containerWidth is not set
      const height = heightGrafic;

      const sortedDataDate = [...domainDate].sort(d3.ascending);

      const firstDomainDate = new Date(sortedDataDate[0].getTime());
      const lastDomainDate = new Date(
        sortedDataDate[sortedDataDate.length - 1].getTime()
      );

      const sortedDataValue = [...domainValue].sort(d3.ascending);
      const q1Value = d3.quantileSorted(sortedDataValue, 0.25)!;
      const q3Value = d3.quantileSorted(sortedDataValue, 0.75)!;

      const tickIntervalValue = q3Value - q1Value;
      const firstDomainValue = sortedDataValue[0] - tickIntervalValue;
      const lastDomainValue =
        sortedDataValue[sortedDataValue.length - 1] + tickIntervalValue;

      const x = d3
        .scaleUtc()
        .domain([firstDomainDate, lastDomainDate])
        .range([margin.left, width - margin.right]);

      // Generate ticks for the x-axis based on the mode
      const xTicks =
        mode === "month" ? d3.timeMonth.every(1) : d3.timeHour.every(6);

      const y = d3
        .scaleLinear()
        .domain([firstDomainValue, lastDomainValue])
        .range([height - margin.bottom, margin.top]);

      const svg = d3
        .select(ref.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("transform", styleTransform);

      const tooltip = d3
        .select(ref.current)
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("font-size", fontSize)
        .style("font-weight", "800")
        .style("position", "absolute")
        .style("background", "white")
        .style("border", "1px solid black")
        .style("padding", "5px")
        .style("pointer-events", "none"); // Ensure tooltip does not interfere with pointer events

      // Append gridlines for x-axis
      const xAxis = svg
        .append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(
          d3
            .axisBottom(x)
            .ticks(xTicks)
            .tickSize(-(height - margin.top - margin.bottom))
            .tickFormat((domainValue) => {
              const date = domainValue as Date;
              return mode === "month"
                ? d3.timeFormat("%d-%b")(date)
                : d3.timeFormat("%d-%b %H:%M")(date); // Include both date and time
            })
        );

      xAxis.selectAll("text").style("font-size", fontSize);

      // Append gridlines for y-axis
      svg
        .append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(
          d3
            .axisLeft(y)
            .ticks(5)
            .tickSize(-(width - margin.left - margin.right))
        )
        .selectAll("text")
        .style("font-size", fontSize);

      svg.selectAll("line").attr("stroke", "#ABABAB");

      const line = d3
        .line<DataPoint>()
        .x((d) => x(d.date))
        .y((d) => y(d.value));

      svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", lineColor)
        .attr("stroke-width", 2)
        .attr("d", line)
        .attr("stroke-dasharray", function () {
          return this.getTotalLength();
        })
        .attr("stroke-dashoffset", function () {
          return this.getTotalLength();
        })
        .transition()
        .duration(2000)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0);

      // Append circles to the path
      svg
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", (d) => x(d.date))
        .attr("cy", (d) => y(d.value))
        .attr("r", 2) // Increase radius for better visibility
        .attr("fill", pointColor)
        .on("mouseover", (event, d) => {
          const containerRect = ref.current!.getBoundingClientRect();
          const tooltipWidth = 100; // Assume tooltip width
          const tooltipHeight = 50; // Assume tooltip height

          const tooltipX = Math.min(
            Math.max(event.clientX - containerRect.left, 0),
            containerRect.width - tooltipWidth
          );
          const tooltipY = Math.min(
            Math.max(event.clientY - containerRect.top - tooltipHeight, 0),
            containerRect.height - tooltipHeight
          );

          tooltip.transition().duration(200).style("opacity", 0.9);
          tooltip
            .html(`Value: ${d.value}${unit}`)
            .style("left", tooltipX + "px")
            .style("top", tooltipY + "px");
        })
        .on("mouseout", () => {
          tooltip.transition().duration(500).style("opacity", 0);
        });

      svg
        .append("text")
        .attr("x", width - 105)
        .attr("y", 11)
        .style("font-size", fontSize)
        .style("font-weight", "800")
        .style("fill", "#000000")
        .text(label);
    };

    if (containerWidth > 0) {
      drawChart();
    }
  }, [
    data,
    containerWidth,
    lineColor,
    pointColor,
    label,
    fontSize,
    styleTransform,
    unit,
    mode,
    heightGrafic,
  ]);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: heightGrafic + "px",
        position: "relative",
      }}
    ></div>
  );
};

export default TrendGrafic;
