import React, { useRef, useLayoutEffect } from "react";
import * as d3 from "d3";

interface DonutChartProps {
  data: { label: string; value: number }[];
  width?: string;
  height?: string;
  title: string;
}

const DonutChart: React.FC<DonutChartProps> = ({
  data,
  width = "100%",
  height = "100%",
  title,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);

  useLayoutEffect(() => {
    if (!svgRef.current || !gRef.current) return;

    const svg = d3.select(svgRef.current);
    const g = d3.select(gRef.current);

    const parent = svg.node()?.parentNode as HTMLElement;
    if (!parent) return;

    const parentWidth = parent.clientWidth;
    const parentHeight = parent.clientHeight;

    const radius = Math.min(parentWidth, parentHeight) / 3.35;
    const centerX = parentWidth / 2;
    const centerY = parentHeight / 3;

    const totalValue = d3.sum(data, (d) => d.value);

    // Skala warna untuk label yang tersisa
    const getColor = (value: number, label: string) => {
      const percentage = (value / totalValue) * 100;
      if (label.slice(0, 7) === "Tersisa") {
        if (percentage > 70) {
          return "#2ECC40";
        } else if (percentage > 50) {
          return "#0eaacb";
        } else {
          return "#FF0000";
        }
      } else {
        return "#ababab";
      }
    };

    // Skala ordinal untuk label yang digunakan
    const color = d3
      .scaleOrdinal<string, string>()
      .domain(data.map((d) => d.label))
      .range([...data.map((d) => getColor(d.value, d.label))]);

    const pie = d3
      .pie<{ label: string; value: number }>()
      .value((d) => d.value)
      .padAngle(0.03); // Menambahkan jarak antar slice

    const arc = d3
      .arc<d3.PieArcDatum<{ label: string; value: number }>>()
      .innerRadius(radius * 0.5)
      .outerRadius(radius);

    const arcHover = d3
      .arc<d3.PieArcDatum<{ label: string; value: number }>>()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 1.05);

    // Create tooltip
    const tooltip = d3
      .select(parent)
      .append("div")
      .style("position", "absolute")
      .style("background", "#333")
      .style("color", "#fff")
      .style("padding", "5px 10px")
      .style("border-radius", "5px")
      .style("display", "none")
      .style("pointer-events", "none")
      .style("font-size", "1.5rem");

    // Fungsi untuk menghitung posisi offset
    const getOffset = (d: any, offset: any) => {
      const midAngle = (d.startAngle + d.endAngle) / 2;
      const x = Math.sin(midAngle) * offset;
      const y = -Math.cos(midAngle) * offset;
      return `translate(${x}, ${y})`;
    };

    // Bind data and create one 'g' element per pie slice
    const arcs = g
      .selectAll(".arc")
      .data(pie(data))
      .join("g")
      .attr("class", "arc")
      .attr("transform", `translate(${centerX}, ${centerY})`)
      .on("mouseover", function (_, d) {
        d3.select(this)
          .select("path")
          .transition()
          .duration(200)
          .attr("d", arcHover as any);
        tooltip
          .style("display", "block")
          .html(
            `${d.data.label}: ${d.data.value} (${(
              (d.data.value / totalValue) *
              100
            ).toFixed(1)}%)`
          );
      })
      .on("mousemove", function (event) {
        tooltip
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 25}px`);
      })
      .on("mouseout", function () {
        d3.select(this)
          .select("path")
          .transition()
          .duration(200)
          .attr("d", arc as any);
        tooltip.style("display", "none");
      });

    // Append path for each slice with offset transform
    arcs
      .append("path")
      .attr("fill", (d) => color(d.data.label))
      .attr("d", arc as any)
      .attr("transform", (d) => getOffset(d, 10)); // Adjust the offset as needed

    // Append text label for each slice
    arcs
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .style("font-size", "2rem")
      .style("font-weight", "600")
      .text((d) => `${((d.data.value / totalValue) * 100).toFixed(1)}%`);
  }, [data, height]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width,
        height: "100%",
        padding: "5px 8px",
      }}
    >
      <p
        style={{
          fontSize: "2.4rem",
          fontWeight: "600",
          color: "#000",
          margin: 0,
        }}
      >
        {`${title.slice(0, 1).toUpperCase()}${title.slice(1)}`}
      </p>
      <svg
        ref={svgRef}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <svg viewBox="250 30 -50 -100">
          <g
            ref={gRef}
            style={{
              height: "100%",
              objectFit: "contain",
            }}
          />
        </svg>
      </svg>
    </div>
  );
};

export default DonutChart;
