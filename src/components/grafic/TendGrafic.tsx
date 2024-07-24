import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import moment from "moment-timezone";

interface DataPoint {
  date: Date;
  value: number;
}

interface DrawChartProps {
  data: DataPoint[];
  lineColor: string;
  pointColor: string;
  label: string;
  fontSize: string;
  heightGrafic: number;
  styleTransform?: string;
  unit?: string;
  mode: "month" | "24hour";
  positionLabel?: number;
  setValue?: any;
  backgroundColor?: string;
  stroke: string;
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
  positionLabel = 105,
  setValue,
  backgroundColor = "#333",
  stroke = "#fff",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const processData = (rawData: DataPoint[]): DataPoint[] => {
    const hourlyData = new Map<string, { count: number; sumValue: number }>();

    rawData.forEach((entry) => {
      const hour = moment(entry.date).startOf("hour").toISOString();
      if (!hourlyData.has(hour)) {
        hourlyData.set(hour, { count: 0, sumValue: 0 });
      }
      const hourData = hourlyData.get(hour)!;
      hourData.count += 1;
      hourData.sumValue += entry.value;
    });

    const averagedData: DataPoint[] = [];
    hourlyData.forEach((value, key) => {
      averagedData.push({
        date: new Date(key),
        value: value.sumValue / value.count,
      });
    });

    return averagedData;
  };

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

      const processedData = processData(data);

      const domainDate = processedData.map((d) => d.date);
      const domainValue = processedData.map((d) => d.value);

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
        // mode === "month" ? d3.timeMonth.every(1) : d3.timeHour.every(6);
        mode === "month" ? d3.timeMonth.every(1) : d3.timeHour.every(2);

      const y = d3
        .scaleLinear()
        .domain([firstDomainValue, lastDomainValue])
        .range([height - margin.bottom, margin.top]);

      const svg = d3
        .select(ref.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("transform", styleTransform)
        .style("background", backgroundColor) // Dark background
        .style("transform", "translateX(-10px)") // Dark background
        .style("padding-top", "10px"); // Dark background

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
                : d3.timeFormat("%H:%M")(date); // Include both date and time
            })
        );

      xAxis
        .selectAll("text")
        .style("font-size", fontSize)
        .style("fill", stroke); // White text for x-axis
      xAxis.selectAll("line").attr("stroke", "#aaa"); // White grid lines for x-axis

      // Append gridlines for y-axis
      const yAxis = svg
        .append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(
          d3
            .axisLeft(y)
            .ticks(5)
            .tickSize(-(width - margin.left - margin.right))
        );

      yAxis
        .selectAll("text")
        .style("font-size", fontSize)
        .style("fill", stroke); // White text for y-axis
      yAxis.selectAll("line").attr("stroke", "#aaa"); // White grid lines for y-axis

      svg
        .selectAll("path.domain")
        .attr("stroke", stroke)
        .attr("stroke-width", 1.5); // White axis lines

      const area = d3
        .area<DataPoint>()
        .x((d) => x(d.date))
        .y0(height - margin.bottom)
        .y1((d) => y(d.value))
        .curve(d3.curveMonotoneX); // Apply curve

      svg
        .append("path")
        .datum(processedData)
        .attr("fill", lineColor) // Fill color for the area
        .attr("opacity", 0.5) // Fill color for the area
        .attr("filter", "contrast(500%)")
        .attr("d", area);

      const line = d3
        .line<DataPoint>()
        .x((d) => x(d.date))
        .y((d) => y(d.value))
        .curve(d3.curveMonotoneX); // Apply curve

      svg
        .append("path")
        .datum(processedData)
        .attr("fill", "none")
        .attr("stroke", lineColor)
        .attr("stroke-width", 4)
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
        .data(processedData)
        .enter()
        .append("circle")
        .attr("cx", (d) => x(d.date))
        .attr("cy", (d) => y(d.value))
        .attr("r", 4) // Increase radius for better visibility
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
          setValue({
            timestamp: moment(d.date).format("DD-MM-YYYY HH:mm:ss"),
            value: d.value,
          });

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
        .attr("x", width - positionLabel)
        .attr("y", 11)
        .style("font-size", fontSize)
        // .style("font-weight", "800")
        .style("fill", stroke) // White label text
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
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: backgroundColor,
      }}
    ></div>
  );
};

export default TrendGrafic;
