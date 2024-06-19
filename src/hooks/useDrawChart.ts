import { useEffect } from "react";
import * as d3 from "d3";

type DataPoint = {
  date: Date;
  value: number;
};

export const useDrawChart = (
  dataPromise: Promise<DataPoint[]>,
  ref: React.RefObject<HTMLDivElement>,
  dateRange: Date[],
  valueRange: number[],
  color: string,
  label: string,
  widthGraph: number,
  fontSize: string,
  styleTransform?: string,
  unit?: string
) => {
  useEffect(() => {
    const drawChart = async () => {
      // Wait for the data promise to resolve
      const data = await dataPromise;

      // Remove any existing SVG element
      d3.select(ref.current).select("svg").remove();
      d3.select(ref.current).select("div").remove();

      const margin = { top: 20, right: 20, bottom: 30, left: 60 };
      const width = window.innerWidth * widthGraph;
      const height = 210;

      const x = d3
        .scaleUtc()
        .domain(dateRange)
        .range([margin.left, width - margin.right]);

      const y = d3
        .scaleLinear()
        .domain(valueRange)
        .range([height - margin.bottom, margin.top]);

      // model
      const svg = d3
        .select(ref.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("transform", `${styleTransform}`);

      const tooltip = d3
        .select(ref.current)
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("font-size", "1.4rem")
        .style("font-weight", "800")
        .style("height", "14px");

      // Append gridlines for x-axis
      svg
        .append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(
          d3
            .axisBottom(x)
            .tickSize(-(height - margin.top - margin.bottom))
            .tickFormat((domainValue) => {
              const date = domainValue as Date;
              return d3.timeFormat("%d-%b")(date);
            })
        )
        .selectAll("text")
        .style("font-size", fontSize);

      // Append gridlines for y-axis
      svg
        .append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).tickSize(-(width - margin.left - margin.right)))
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
        .attr("stroke", color)
        .attr("stroke-width", 3)
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
        .attr("r", 5)
        .attr("fill", color)
        .on("mouseover", (event, d) => {
          tooltip.transition().duration(200).style("opacity", 0.9);
          tooltip
            .html(`Value: ${d.value}${unit}`)
            .style("left", event.pageX + "px")
            .style("top", event.pageY - 28 + "px");
        })
        .on("mouseout", () => {
          tooltip.transition().duration(500).style("opacity", 0);
        });

      svg
        .append("text")
        .attr("x", width - 180)
        .attr("y", 11)
        .style("font-size", "1.4rem")
        .style("font-weight", "800")
        .style("fill", "#000000")
        .text(label);
    };

    drawChart();
  }, [
    dataPromise,
    ref,
    color,
    dateRange,
    valueRange,
    label,
    unit,
    widthGraph,
    fontSize,
    styleTransform,
  ]);
};

export const useDrawChartDoubleLine = (
  dataPromise1: Promise<DataPoint[]>,
  dataPromise2: Promise<DataPoint[]>,
  ref: React.RefObject<HTMLDivElement>,
  dateRange: Date[],
  valueRange: number[],
  color1: string,
  color2: string,
  label1: string,
  label2: string,
  positionRect1: number,
  positionRect2: number,
  positionText1: number,
  positionText2: number,
  widthGraph: number,
  fontSize: string,
  styleTransform?: string,
  unit?: string
) => {
  useEffect(() => {
    const drawChart = async () => {
      // Wait for the data promise to resolve
      const data1 = await dataPromise1;
      const data2 = await dataPromise2;

      // Remove any existing SVG element
      d3.select(ref.current).select("svg").remove();
      d3.select(ref.current).select("div").remove();

      const margin = { top: 20, right: 20, bottom: 30, left: 60 };
      const width = window.innerWidth * widthGraph;
      const height = 210;

      const x = d3
        .scaleUtc()
        .domain(dateRange) // May 1, 2024 to May 30, 2024
        .range([margin.left, width - margin.right]);

      const y = d3
        .scaleLinear()
        .domain(valueRange)
        .range([height - margin.bottom, margin.top]);

      // model
      const svg = d3
        .select(ref.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("transform", `${styleTransform}`);

      const tooltip = d3
        .select(ref.current)
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("font-size", "1.4rem")
        .style("font-weight", "800")
        .style("height", "14px");

      // Append gridlines for x-axis
      svg
        .append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(
          d3
            .axisBottom(x)
            .tickSize(-(height - margin.top - margin.bottom))
            .tickFormat((domainValue) => {
              const date = domainValue as Date;
              return d3.timeFormat("%d-%b")(date);
            })
        )
        .selectAll("text")
        .style("font-size", fontSize);

      // Append gridlines for y-axis
      svg
        .append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).tickSize(-(width - margin.left - margin.right)))
        .selectAll("text")
        .style("font-size", fontSize);

      svg.selectAll("line").attr("stroke", "#ABABAB");

      const line = d3
        .line<DataPoint>()
        .x((d) => x(d.date))
        .y((d) => y(d.value));

      svg
        .append("path")
        .datum(data1)
        .attr("fill", "none")
        .attr("stroke", color1)
        .attr("stroke-width", 3)
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
        .selectAll("circle1")
        .data(data1)
        .enter()
        .append("circle")
        .attr("cx", (d) => x(d.date))
        .attr("cy", (d) => y(d.value))
        .attr("r", 5)
        .attr("fill", color1)
        .on("mouseover", (event, d) => {
          tooltip.transition().duration(200).style("opacity", 0.9);
          tooltip
            .html(`Value: ${d.value}${unit}`)
            .style("left", event.pageX + "px")
            .style("top", event.pageY - 28 + "px");
        })
        .on("mouseout", () => {
          tooltip.transition().duration(500).style("opacity", 0);
        });

      // Append legend for data1
      svg
        .append("rect")
        .attr("x", width - positionRect1)
        .attr("y", 0)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", color1);

      svg
        .append("text")
        .attr("x", width - positionText1)
        .attr("y", 11)
        .style("font-size", "1.4rem")
        .style("fill", "#000000")
        .text(label1);

      svg
        .append("path")
        .datum(data2)
        .attr("fill", "none")
        .attr("stroke", color2)
        .attr("stroke-width", 3)
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
        .selectAll("circle2")
        .data(data2)
        .enter()
        .append("circle")
        .attr("cx", (d) => x(d.date))
        .attr("cy", (d) => y(d.value))
        .attr("r", 5)
        .attr("fill", color2)
        .on("mouseover", (event, d) => {
          tooltip.transition().duration(200).style("opacity", 0.9);
          tooltip
            .html(`Value: ${d.value}${unit}`)
            .style("left", event.pageX + "px")
            .style("top", event.pageY - 28 + "px");
        })
        .on("mouseout", () => {
          tooltip.transition().duration(500).style("opacity", 0);
        });

      // Append legend for data1
      svg
        .append("rect")
        .attr("x", width - positionRect2)
        .attr("y", 0)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", color2);

      svg
        .append("text")
        .attr("x", width - positionText2)
        .attr("y", 11)
        .style("font-size", "1.4rem")
        .style("fill", "#000000")
        .text(label2);
    };

    drawChart();
  }, [
    dataPromise1,
    dataPromise2,
    color1,
    color2,
    label1,
    label2,
    unit,
    ref,
    valueRange,
    dateRange,
    widthGraph,
    positionRect1,
    positionRect2,
    positionText1,
    positionText2,
    fontSize,
    styleTransform,
  ]);
};

export const useDrawChartThreeLine = (
  dataPromise1: Promise<DataPoint[]>,
  dataPromise2: Promise<DataPoint[]>,
  dataPromise3: Promise<DataPoint[]>,
  ref: React.RefObject<HTMLDivElement>,
  dateRange: Date[],
  valueRange: number[],
  color1: string,
  color2: string,
  color3: string,
  label1: string,
  label2: string,
  label3: string,
  positionRect1: number,
  positionRect2: number,
  positionRect3: number,
  positionText1: number,
  positionText2: number,
  positionText3: number,
  widthGraph: number,
  fontSize: string,
  styleTransform?: string,
  unit?: string
) => {
  useEffect(() => {
    const drawChart = async () => {
      // Wait for the data promise to resolve
      const data1 = await dataPromise1;
      const data2 = await dataPromise2;
      const data3 = await dataPromise3;

      // Remove any existing SVG element
      d3.select(ref.current).select("svg").remove();
      d3.select(ref.current).select("div").remove();

      const margin = { top: 20, right: 20, bottom: 30, left: 60 };
      const width = window.innerWidth * widthGraph;
      const height = 210;

      const x = d3
        .scaleUtc()
        .domain(dateRange) // May 1, 2024 to May 30, 2024
        .range([margin.left, width - margin.right]);

      const y = d3
        .scaleLinear()
        .domain(valueRange)
        .range([height - margin.bottom, margin.top]);

      // model
      const svg = d3
        .select(ref.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("transform", `${styleTransform}`);

      const tooltip = d3
        .select(ref.current)
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .style("font-size", "1.4rem")
        .style("font-weight", "800")
        .style("height", "14px");

      // Append gridlines for x-axis
      svg
        .append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(
          d3
            .axisBottom(x)
            .tickSize(-(height - margin.top - margin.bottom))
            .tickFormat((domainValue) => {
              const date = domainValue as Date;
              return d3.timeFormat("%d-%b")(date);
            })
        )
        .selectAll("text")
        .style("font-size", fontSize);

      // Append gridlines for y-axis
      svg
        .append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).tickSize(-(width - margin.left - margin.right)))
        .selectAll("text")
        .style("font-size", fontSize);

      svg.selectAll("line").attr("stroke", "#ABABAB");

      const line = d3
        .line<DataPoint>()
        .x((d) => x(d.date))
        .y((d) => y(d.value));

      svg
        .append("path")
        .datum(data1)
        .attr("fill", "none")
        .attr("stroke", color1)
        .attr("stroke-width", 3)
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
        .selectAll("circle1")
        .data(data1)
        .enter()
        .append("circle")
        .attr("cx", (d) => x(d.date))
        .attr("cy", (d) => y(d.value))
        .attr("r", 5)
        .attr("fill", color1)
        .on("mouseover", (event, d) => {
          tooltip.transition().duration(200).style("opacity", 0.9);
          tooltip
            .html(`Value: ${d.value}${unit}`)
            .style("left", event.pageX + "px")
            .style("top", event.pageY - 28 + "px");
        })
        .on("mouseout", () => {
          tooltip.transition().duration(500).style("opacity", 0);
        });

      // Append legend for data1
      svg
        .append("rect")
        .attr("x", width - positionRect1)
        .attr("y", 0)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", color1);

      svg
        .append("text")
        .attr("x", width - positionText1)
        .attr("y", 11)
        .style("font-size", "1.4rem")
        .style("fill", "#000000")
        .text(label1);

      svg
        .append("path")
        .datum(data2)
        .attr("fill", "none")
        .attr("stroke", color2)
        .attr("stroke-width", 3)
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
        .selectAll("circle2")
        .data(data2)
        .enter()
        .append("circle")
        .attr("cx", (d) => x(d.date))
        .attr("cy", (d) => y(d.value))
        .attr("r", 5)
        .attr("fill", color2)
        .on("mouseover", (event, d) => {
          tooltip.transition().duration(200).style("opacity", 0.9);
          tooltip
            .html(`Value: ${d.value}${unit}`)
            .style("left", event.pageX + "px")
            .style("top", event.pageY - 28 + "px");
        })
        .on("mouseout", () => {
          tooltip.transition().duration(500).style("opacity", 0);
        });

      // Append legend for data2
      svg
        .append("rect")
        .attr("x", width - positionRect2)
        .attr("y", 0)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", color2);

      svg
        .append("text")
        .attr("x", width - positionText2)
        .attr("y", 11)
        .style("font-size", "1.4rem")
        .style("fill", "#000000")
        .text(label2);

      svg
        .append("path")
        .datum(data3)
        .attr("fill", "none")
        .attr("stroke", color3)
        .attr("stroke-width", 3)
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
        .selectAll("circle3")
        .data(data3)
        .enter()
        .append("circle")
        .attr("cx", (d) => x(d.date))
        .attr("cy", (d) => y(d.value))
        .attr("r", 5)
        .attr("fill", color3)
        .on("mouseover", (event, d) => {
          tooltip.transition().duration(200).style("opacity", 0.9);
          tooltip
            .html(`Value: ${d.value}${unit}`)
            .style("left", event.pageX + "px")
            .style("top", event.pageY - 28 + "px");
        })
        .on("mouseout", () => {
          tooltip.transition().duration(500).style("opacity", 0);
        });

      // Append legend for data1
      svg
        .append("rect")
        .attr("x", width - positionRect3)
        .attr("y", 0)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", color3);

      svg
        .append("text")
        .attr("x", width - positionText3)
        .attr("y", 11)
        .style("font-size", "1.4rem")
        .style("fill", "#000000")
        .text(label3);
    };

    drawChart();
  }, [
    dataPromise1,
    dataPromise2,
    dataPromise3,
    color1,
    color2,
    color3,
    label1,
    label2,
    label3,
    unit,
    ref,
    valueRange,
    dateRange,
    widthGraph,
    positionRect1,
    positionRect2,
    positionRect3,
    positionText1,
    positionText2,
    positionText3,
    fontSize,
    styleTransform,
  ]);
};
