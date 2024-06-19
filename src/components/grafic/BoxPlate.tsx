// src/BoxPlot.tsx

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface BoxPlotProps {
  data: number[];
  height: number;
  tickInterval?: number; // Optional prop for tick interval
}

const BoxPlot: React.FC<BoxPlotProps> = ({ data, height }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      drawPlot();
    };

    const drawPlot = () => {
      if (!svgRef.current || !containerRef.current || data.length === 0) return;

      // Clear previous plot
      d3.select(svgRef.current).selectAll("*").remove();

      // Sort the data
      const sortedData = [...data].sort(d3.ascending);

      // Calculate summary statistics using d3.quantileSorted
      const q1 = d3.quantileSorted(sortedData, 0.25)!;
      const median = d3.quantileSorted(sortedData, 0.5)!;
      const q3 = d3.quantileSorted(sortedData, 0.75)!;
      const min = sortedData[0];
      const max = sortedData[sortedData.length - 1];

      const tickInterval = q3 - q1;

      const firstDomain = data[1] - tickInterval;
      const lastDomain = data[data.length - 1] + tickInterval;

      // Get the current width of the container
      const width = containerRef.current.clientWidth;

      // Define margins and plot dimensions
      const margin = { top: 10, right: 30, bottom: 50, left: 50 };
      const plotWidth = width - margin.left - margin.right;
      const plotHeight = height - margin.top - margin.bottom;

      // Create scales
      const xScale = d3
        .scaleLinear()
        .domain([firstDomain, lastDomain]) // Fixed temperature range from 0 to 30
        .range([0, plotWidth]);

      // Create the SVG container
      const svg = d3
        .select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Generate ticks based on the tickInterval
      const xTicks = d3.range(0, 31, tickInterval); // Generate ticks from 0 to 30 with interval

      // Add X axis
      const xAxis = d3
        .axisBottom(xScale)
        .tickValues(xTicks) // Use tick values
        .tickFormat((d) => `${d}°C`); // Append °C to each tick value

      // Add gridlines for x axis
      const xGridlines = d3
        .axisBottom(xScale)
        .tickValues(xTicks) // Use the same tick values for gridlines
        .tickSize(-plotHeight)
        .tickFormat(() => "");

      svg
        .append("g")
        .attr("class", "x grid")
        .attr("transform", `translate(0,${plotHeight})`)
        .call(xGridlines)
        .selectAll("line")
        .style("stroke", "#ccc");

      // Add X axis
      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(0,${plotHeight})`)
        .call(xAxis)
        .selectAll("text")
        .style("font-size", "1rem")
        .style("font-weight", "600");

      // Y position for the box plot
      const yPos = plotHeight / 2;

      // Add a box plot
      svg
        .append("rect")
        .attr("x", xScale(q1))
        .attr("y", yPos - 25)
        .attr("width", xScale(q3) - xScale(q1))
        .attr("height", 50)
        .attr("stroke", "black")
        .style("fill", "#69b3a2");

      // Add vertical lines for min, median, and max
      svg
        .selectAll("toto")
        .data([min, median, max])
        .enter()
        .append("line")
        .attr("x1", (d) => xScale(d))
        .attr("x2", (d) => xScale(d))
        .attr("y1", yPos - 25)
        .attr("y2", yPos + 25)
        .attr("stroke", "black");

      // Add whiskers
      svg
        .append("line")
        .attr("x1", xScale(min))
        .attr("x2", xScale(q1))
        .attr("y1", yPos)
        .attr("y2", yPos)
        .attr("stroke", "black");

      svg
        .append("line")
        .attr("x1", xScale(max))
        .attr("x2", xScale(q3))
        .attr("y1", yPos)
        .attr("y2", yPos)
        .attr("stroke", "black");
    };

    drawPlot();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [data, height]); // Include tickInterval in dependencies

  return (
    <div ref={containerRef} style={{ width: "100%", height: `${height}px` }}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default BoxPlot;
