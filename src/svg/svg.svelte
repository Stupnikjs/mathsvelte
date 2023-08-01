<script lang="ts">
import { SVG }  from "@svgdotjs/svg.js"
import { onMount } from "svelte";

$: x = 120

function draw3DVectors(x:number) {
  var draw = SVG().addTo("#app").size(300, 300);

  // Coordinates of the origin point
  
  var originX = x;
  var originY = x;
  var vectorLength = x/3 ;

  // Length of the vectors
  

  // Draw the x-axis vector (red)
  var xAxis = draw.line(originX, originY, originX + vectorLength, originY)
                 .stroke({ color: '#f44336', width: 3 });

  // Draw the x-axis arrowhead (red triangle)
  var xArrowhead = draw.polygon(`${originX + vectorLength},${originY - 5} ${originX + vectorLength},${originY + 5} ${originX + vectorLength + 15},${originY}`)
                       .fill('#f44336');

  // Draw the y-axis vector (green)
  var yAxis = draw.line(originX, originY, originX, originY - vectorLength)
                 .stroke({ color: '#4caf50', width: 3 });
  
  
  // Draw the y-axis arrowhead (green triangle)
  var yArrowhead = draw.polygon(`${originX - 5},${originY - vectorLength} ${originX + 5},${originY - vectorLength} ${originX},${originY - vectorLength - 15}`)
                       .fill('#4caf50');
    yArrowhead.animate().attr({fill:"#4caf50"}).move(150, 0)
  // Draw the z-axis vector (blue)
  var zAxis = draw.line(originX,originY, originX - vectorLength, originY + vectorLength)
                 .stroke({ color: '#2196f3', width: 3 });

  // Draw the z-axis arrowhead (blue triangle)
  var zArrowhead = draw.polygon(`${originX - vectorLength},${originY + vectorLength} ${originX - vectorLength + 5},${originY + vectorLength} ${originX - vectorLength },${originY + vectorLength + 15}`)
                       .fill('#2196f3');

  /*              
  function update(){yAxis.plot(originX, originY, originX +  vectorLength , originY - vectorLength)}
  yAxis.click(() => update())
  draw.text("X").move(originX + vectorLength + 20, originY - 10).font({ size: 16, fill: '#f44336' });
  */ 


  }


  onMount(
    () => {draw3DVectors(x)}
  )
   

</script>


<svg id="app" width="300" height="300">
      <line></line>   
</svg>

<button on:click={ () => { x = 140}}> X </button>
