<script lang="ts">
// Import the SVG.js library
import { SVG } from "@svgdotjs/svg.js";
import { onMount } from "svelte";

// Define your neural network architecture
const layers = [
    { type: "input", label: "Input Layer" },
    { type: "hidden", label: "Hidden Layer 1" },
    { type: "hidden", label: "Hidden Layer 2" },
    { type: "output", label: "Output Layer" }
];

// Create an SVG canvas


// Create nodes and edges
const nodeRadius = 30;
const spacing = 150;
const startX = 50;
const startY = 200;



  onMount(
    () => {const canvas = SVG().addTo("#network-container").size(800, 600);
    

    for (let i = 0; i < 10 ; i +=1 ){
      canvas.circle(5*i).center( i * 10 + i , i).fill("#ffffff").stroke("#000000");
    } 
    



    canvas.line( 118, 118, 200 ,200 ).stroke({ color: "#000000", width: 2 });
    
});


   

</script>


<svg id="network-container" class="m-auto" width="300" height="300">  
</svg>
