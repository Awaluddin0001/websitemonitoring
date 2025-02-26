import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface FuelGaugeProps {
  value: number; // Value between 0 and 100
  title: string;
  volume: number;
  type: string;
}

const FuelGauge: React.FC<FuelGaugeProps> = ({
  value,
  title,
  volume,
  type,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const width = 250;
  const height = 85;
  const radius = Math.min(width, height) / 2;

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const gaugeGroup = svg
      .append("g")
      .attr(
        "transform",
        `translate(${width / 2}, ${height - height * 0.25}) scale(1.5)`
      );

    const arcGenerator = d3
      .arc<d3.DefaultArcObject>()
      .innerRadius(radius * 0.6)
      .outerRadius(radius * 0.8)
      .cornerRadius(10);

    const arcsData = [
      {
        startAngle: -Math.PI / 2,
        endAngle: -Math.PI / 6,
        color:
          value <= 34
            ? "#CB300E"
            : value <= 64
            ? "#fcfd11"
            : value <= 100
            ? "#56CB0E"
            : "#ddd",
      },
      {
        startAngle: -Math.PI / 6,
        endAngle: Math.PI / 6,
        color:
          value <= 34
            ? "#ddd"
            : value <= 64
            ? "#fcfd11"
            : value <= 100
            ? "#56CB0E"
            : "#ddd",
      },
      {
        startAngle: Math.PI / 6,
        endAngle: Math.PI / 2,
        color:
          value <= 34
            ? "#ddd"
            : value <= 64
            ? "#ddd"
            : value <= 100
            ? "#56CB0E"
            : "#ddd",
      },
    ];

    arcsData.forEach((arcData: any) => {
      gaugeGroup
        .append("path")
        .attr("d", arcGenerator(arcData) as string)
        .attr("fill", arcData.color);
    });

    gaugeGroup
      .append("defs")
      .append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "0 0 10 10")
      .attr("refX", 3) // Position of the arrowhead
      .attr("refY", 5)
      .attr("markerWidth", 1.5)
      .attr("markerHeight", 1.5)
      .attr("orient", "auto")
      .append("polygon")
      .attr("points", "0,0 10,5 0,10") // Arrowhead shape
      .attr("fill", "black");

    const needleAngle = ((value - 50) / 100) * Math.PI - Math.PI / 2;
    const needleLength = radius * 0.5;

    gaugeGroup
      .append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", needleLength * Math.cos(needleAngle))
      .attr("y2", needleLength * Math.sin(needleAngle))
      .attr("stroke", "black")
      .attr("stroke-width", 4)
      .attr("marker-end", "url(#arrowhead)"); // Attach the arrowhead marker

    gaugeGroup
      .append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", radius * 0.15)
      .attr(
        "fill",
        value <= 34
          ? "#CB300E"
          : value <= 64
          ? "#fcfd11"
          : value <= 100
          ? "#56CB0E"
          : "#ddd"
      );
  }, [value]);

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: width,
        marginTop: "1rem",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "1.8rem",
          fontWeight: "700",
          width: width,
        }}
      >
        {title}
      </h2>
      <svg ref={svgRef} width={width} height={height}></svg>
      <h2
        style={{
          textAlign: "center",
          fontSize: "1.6rem",
          width: width,
          fontWeight: "600",
        }}
      >
        {type === "bbm"
          ? volume.toLocaleString("id-ID", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }) + " Liter / 12.000 Liter"
          : volume.toLocaleString("id-ID", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }) + " kVa / 1.250 kVa"}
      </h2>
    </div>
  );
};

export default FuelGauge;
