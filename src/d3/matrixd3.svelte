<script>
  import { onMount } from 'svelte';
  import { select } from 'd3-selection';
  import { scaleLinear } from 'd3-scale';
  import * as d3 from 'd3'; // Import the d3 module

  let svg;
  let originalPoint = [0, 1];
  let transformationMatrix = [[2, 0.5], [0.5, 1.5]];
  let transformedPoint;

  onMount(() => {
    const svgElement = select(svg);

    const xScale = scaleLinear().domain([0, 10]).range([0, 400]);
    const yScale = scaleLinear().domain([0, 10]).range([400, 0]);

    transformedPoint = [
      transformationMatrix[0][0] * originalPoint[0] + transformationMatrix[0][1] * originalPoint[1],
      transformationMatrix[1][0] * originalPoint[0] + transformationMatrix[1][1] * originalPoint[1]
    ];

    svgElement.selectAll('*').remove();

    svgElement.append('g')
      .attr('transform', 'translate(0, 400)')
      .call(d3.axisBottom(xScale));

    svgElement.append('g')
      .call(d3.axisLeft(yScale));

    svgElement.append('circle')
      .attr('cx', xScale(originalPoint[0]))
      .attr('cy', yScale(originalPoint[1]))
      .attr('r', 5)
      .style('fill', 'blue');

    svgElement.append('circle')
      .attr('cx', xScale(transformedPoint[0]))
      .attr('cy', yScale(transformedPoint[1]))
      .attr('r', 5)
      .style('fill', 'red');

    svgElement.append('line')
      .attr('x1', xScale(originalPoint[0]))
      .attr('y1', yScale(originalPoint[1]))
      .attr('x2', xScale(transformedPoint[0]))
      .attr('y2', yScale(transformedPoint[1]))
      .style('stroke', 'green');
  });
</script>

<style>
  svg {
    border: 1px solid #2c2727;
  }
</style>

<svg bind:this={svg} width="400" height="400"></svg>