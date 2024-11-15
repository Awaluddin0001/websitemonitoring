import React, { useRef, useLayoutEffect } from "react";
import * as d3 from "d3";

interface DonutChartProps {
  data: { title: string; slices: { label: string; value: number }[] }[];
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

    // Clear previous elements
    g.selectAll("*").remove();

    const parent = svg.node()?.parentNode as HTMLElement;
    if (!parent) return;

    const parentWidth = parent.clientWidth;
    const parentHeight = parent.clientHeight;

    const radius = Math.min(parentWidth, parentHeight) / 3.1;
    const centerX = parentWidth / 2;
    const centerY = parentHeight / 2.25;

    const colors = d3.scaleOrdinal(["#56CB0E", "#ddd"]);

    // Create tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("background", "#333")
      .style("color", "#fff")
      .style("padding", "5px 10px")
      .style("border-radius", "5px")
      .style("display", "none")
      .style("pointer-events", "none")
      .style("font-size", "1.5rem");

    // Arc generator
    const arcGenerator = (innerR: number, outerR: number) =>
      d3
        .arc<d3.PieArcDatum<{ label: string; value: number }>>()
        .innerRadius(innerR)
        .outerRadius(outerR);

    // For each dataset, generate one donut ring
    data.forEach((dataset, index) => {
      const totalValue = d3.sum(dataset.slices, (d) => d.value);
      const pie = d3
        .pie<{ label: string; value: number }>()
        .value((d) => d.value);

      const innerRadius = radius * (0.5 + index * 0.2);
      const outerRadius = radius * (0.7 + index * 0.2);

      const arc = arcGenerator(innerRadius, outerRadius * 0.95);
      const arcHover = arcGenerator(innerRadius, outerRadius * 1.02);

      const arcs = g
        .selectAll(`.arc-${index}`)
        .data(pie(dataset.slices))
        .join("g")
        .attr("class", `arc-${index}`)
        .attr("transform", `translate(${centerX}, ${centerY})`)
        .on("mouseover", function (_, d) {
          d3.select(this)
            .select("path")
            .transition()
            .duration(300)
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
            .duration(300)
            .attr("d", arc as any);
          tooltip.style("display", "none");
        });

      // Append path for each slice with an outline
      arcs
        .append("path")
        .attr("fill", (d) => colors(d.data.label))
        .attr("d", arc as any)
        .attr("stroke", "#000") // Add stroke for the outline
        .attr("stroke-width", 0.5); // Adjust the width of the outline

      // Append percentage text inside the donut
      arcs
        .append("text")
        .attr("transform", (d) => `translate(${arc.centroid(d)})`)
        .attr("text-anchor", "middle")
        .attr("dy", ".35em")
        .style("font-size", "1.2rem")
        .style("font-weight", "600")
        .text((d) => `${((d.data.value / totalValue) * 100).toFixed(1)}%`);

      // Generate lines (arrows) pointing from the donut slices to the title
      const pieData = pie(dataset.slices); // Pie data generation
      const angle = (pieData[0].startAngle + pieData[0].endAngle) / 1.92;
      const [xStart, yStart] = arc.centroid(pieData[0]);

      // Calculate the offset for each donut
      const arrowOffset = index * 30; // Adjust this value for more/less space between arrows
      const arrowLength = 150 + arrowOffset;

      // Calculate the diagonal xEnd and yEnd for text placement
      const xEnd = centerX + arrowLength * Math.cos(angle);
      const yEnd = centerY - arrowLength * Math.sin(angle) - arrowOffset;

      // Draw the arrow line
      g.append("line")
        .attr("x1", xStart + centerX)
        .attr("y1", yStart + centerY)
        .attr("x2", xEnd)
        .attr("y2", yEnd)
        .attr("stroke", "black")
        .attr("stroke-width", 1.5)
        .attr("marker-end", "url(#arrow)");

      // Add the text title at the end of the arrow
      g.append("text")
        .attr("x", xEnd)
        .attr("y", yEnd)
        .attr("text-anchor", "start")
        .attr("dy", "-0.5em")
        .attr("dx", "0.5em")
        .style("font-size", "1.4rem")
        .style("font-weight", "600")
        .text(dataset.title);
    });

    // Append arrow marker to SVG
    svg
      .append("defs")
      .append("marker")
      .attr("id", "arrow")
      .attr("viewBox", "0 0 10 10")
      .attr("refX", 6)
      .attr("refY", 5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto-start-reverse")
      .append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 z")
      .style("fill", "black");

    return () => {
      d3.select(".tooltip").remove(); // Remove tooltip when the component unmounts
    };
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
        position: "relative",
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
        <g ref={gRef} style={{ height: "100%", objectFit: "contain" }} />
      </svg>
    </div>
  );
};

export default DonutChart;
