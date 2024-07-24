import React, { useRef, useLayoutEffect } from "react";
import * as d3 from "d3";

interface PieChartProps {
  data: { label: string; value: number }[];
  width?: string;
  height?: string;
  title: string;
}

const PieChart: React.FC<PieChartProps> = ({
  data,
  width = "100%",
  height = "100%",
  title,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);
  const legendRef = useRef<SVGGElement>(null);

  useLayoutEffect(() => {
    if (!svgRef.current || !gRef.current || !legendRef.current) return;

    const svg = d3.select(svgRef.current);
    const g = d3.select(gRef.current);
    const legend = d3.select(legendRef.current);

    const parent = svg.node()?.parentNode as HTMLElement;
    if (!parent) return;

    const parentWidth = window.innerWidth;
    const parentHeight = parent.clientHeight;

    const radius = Math.min(parentWidth, parentHeight) / 3;
    const centerX = parentWidth / 10;
    const centerY = parentHeight / 2;

    const color = d3
      .scaleOrdinal<string, string>()
      .domain(["free", "usage"])
      .range(["#fff", "#CB300E"]);

    const pie = d3
      .pie<{ label: string; value: number }>()
      .value((d) => d.value);

    const arc = d3
      .arc<d3.PieArcDatum<{ label: string; value: number }>>()
      .innerRadius(0)
      .outerRadius(radius);

    // Compute total value for percentage calculation
    const totalValue = d3.sum(data, (d) => d.value);

    // Bind data and create one 'g' element per pie slice
    const arcs = g
      .selectAll(".arc")
      .data(pie(data))
      .join("g")
      .attr("class", "arc")
      .attr("transform", `translate(${centerX}, ${centerY})`);

    // Append path for each slice
    arcs
      .append("path")
      .attr("fill", (d) => color(d.data.label))
      .attr("d", arc as any);

    // Append text label for each slice
    arcs
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .style("font-size", "2rem")
      .style("font-weight", "600")
      .text((d) => `${((d.data.value / totalValue) * 100).toFixed(1)}%`);

    // Clear existing legend items before appending new ones
    legend.selectAll("*").remove();

    const legendData = data.map((d) => d.label);

    const legendItems = legend
      .selectAll(".legend-item")
      .data(legendData)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .attr("transform", (_, i) => `translate(${i * 220}, 0)`);

    legendItems
      .append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .attr("fill", (d) => color(d));

    legendItems
      .append("text")
      .attr("x", 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("font-size", "2rem")
      .style("fill", "#fff")
      .text((d) => d);
  }, [data, height]);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#0ECBC0",
        padding: "10px 16px",
        borderRadius: "15px",
      }}
    >
      <p style={{ fontSize: "2.4rem", fontWeight: "600", color: "#fff" }}>
        {`${title.slice(0, 1).toUpperCase()}${title.slice(1)}`}
      </p>
      <svg
        ref={svgRef}
        width={width}
        height={height}
        style={{ display: "block", margin: "0 auto" }}
      >
        <g ref={gRef} />
        <g
          ref={legendRef}
          transform={`translate(0, ${parseFloat(height) - 90})`}
        />
      </svg>
    </div>
  );
};

export default PieChart;
