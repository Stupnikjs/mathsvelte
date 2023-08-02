<script lang="ts">
import { SVG }  from "@svgdotjs/svg.js"
import { onMount } from "svelte";

$: x = 100
$: width = 2 

function draw3Axis(x:number, width:number) {
  var draw = SVG().addTo("#app").size(200, 200);

  // Coordinates of the origin point
  
  var originX = x;
  var originY = x;
  var vectorLength = x/3 ;

  // Length of the vectors
  function drawVector( arr1:[number, number], arr2:[number, number], color:string){
    var xAxis = draw.line( arr1[0] , arr1[1], arr2[0], arr2[1]).stroke({ color: color, width: width });
    var xArrowhead = draw.polygon(`${arr1[0] + vectorLength}, ${arr1[1] - 5} ${arr1[0] + vectorLength},${originY + 5} ${arr1[1] + vectorLength + 15},${arr1[1]}`).fill(color);
  }

  //  x-axis 
  drawVector([originX, originY], [originX + vectorLength, originY], "red")
  // y-axis 
  drawVector([originX, originY], [originX, originY - vectorLength], "blue")
  // z-axis
  drawVector([originX,originY] , [originX - vectorLength, originY + vectorLength], "gray")

  /*
  // Draw the x-axis arrowhead (red triangle)
  var xArrowhead = draw.polygon(`${originX + vectorLength},${originY - 5} ${originX + vectorLength},${originY + 5} ${originX + vectorLength + 15},${originY}`).fill('#f44336');

  // Draw the y-axis arrowhead (green triangle)
  var yArrowhead = draw.polygon(`${originX - 5},${originY - vectorLength} ${originX + 5},${originY - vectorLength} ${originX},${originY - vectorLength - 15}`).fill('#4caf50');

  // Draw the z-axis arrowhead (blue triangle)
  var zArrowhead = draw.polygon(`${originX - vectorLength},${originY + vectorLength - 10 } ${originX  - vectorLength},${originY + vectorLength + 5} ${originX - vectorLength},${originY + vectorLength + 15}`).fill('#4caf50');

  /*    
  yArrowhead.animate().attr({fill:"#4caf50"}).move(150, 0)          
  function update(){yAxis.plot(originX, originY, originX +  vectorLength , originY - vectorLength)}
  yAxis.click(() => update())
  draw.text("X").move(originX + vectorLength + 20, originY - 10).font({ size: 16, fill: '#f44336' });
  */ 


  }


  onMount(
    () => {draw3Axis(x, width)}
  )
   

</script>


<svg id="app" width="300" height="300">
      <line></line>   
</svg>

<button on:click={ () => { x = 140}}> X </button>
