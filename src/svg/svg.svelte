<script lang="ts">
  import type {neuroneSvg} from "./svg";
  import {sqrt, cos, pow} from "mathjs"
  import Katex from "../katex/katex.svelte";
  let lineLenght = 200
  console.log(cos(30))
 // math.sqrt(neurone.r - neurone.r * math.cos(22.5))

 let neurone:neuroneSvg = {
    r:40,
    xPos: 400,
    yPos: 200,
   }

 let y1: number;
 // let y1 = sqrt( neurone.r - Math.pow(((1- cos(30 * (Math.PI / 180))) * (neurone.r)), 2)) as number

  y1 = neurone.yPos + neurone.r

</script>


<div class="bg-red-50">
  <svg width="1000" height="500" xmlns="http://www.w3.org/2000/svg" >
    <!-- Circle -->
    

    

    // first neurone 
    <circle cx={ lineLenght } cy={neurone.yPos} r={neurone.r} fill="red" />
    <line x1={lineLenght + neurone.r} x2={neurone.xPos - neurone.r  } y1={neurone.yPos} y2={neurone.yPos + neurone.r *4} stroke="black">
    </line>
    <text x={ (lineLenght + neurone.r + neurone.xPos - neurone.r ) / 2} y={(neurone.yPos + neurone.yPos + neurone.r * 5 )/2}
    font-size="20"
    fill="black"
    text-anchor="middle"
    dominant-baseline="middle"
    > w3 </text>
    <line x1={lineLenght + neurone.r} x2={neurone.xPos - neurone.r } y1={neurone.yPos} y2={neurone.yPos} stroke="blue"></line>
    <text x={ (lineLenght + neurone.r + neurone.xPos - neurone.r ) / 2} y={neurone.yPos - neurone.r / 2  }
    font-size="20"
    fill="black"
    text-anchor="middle"
    dominant-baseline="middle"
    > w2 </text>

    <line x1={lineLenght + neurone.r} x2={neurone.xPos - neurone.r  } y1={neurone.yPos} y2={neurone.yPos - neurone.r *4} stroke="black"></line>
    <text x={ (lineLenght + neurone.r + neurone.xPos - neurone.r ) / 2} y={(neurone.yPos - neurone.yPos + neurone.r *5 )/2}
    font-size="20"
    fill="black"
    text-anchor="middle"
    dominant-baseline="middle"
    > w1 </text>



    // premiere couche
    <circle cx={neurone.xPos} cy={neurone.yPos} r={neurone.r} fill="pink" />
    <text x={ neurone.xPos } y={neurone.yPos}
    font-size="15"
    fill="black"
    text-anchor="middle"
    dominant-baseline="middle"
    > sigma(w2 + b) </text>
    <circle cx={neurone.xPos} cy={neurone.yPos + neurone.r * 4} r={neurone.r} fill="pink" />
    <circle cx={neurone.xPos} cy={neurone.yPos - neurone.r *4 } r={neurone.r} fill="pink" />

    <line x1={neurone.xPos + neurone.r} x2={neurone.xPos + lineLenght } y1={neurone.yPos} y2={neurone.yPos } stroke="black"></line>
    
    <line x1={neurone.xPos + neurone.r} x2={neurone.xPos + lineLenght } y1={neurone.yPos - neurone.r * 4 } y2={neurone.yPos } stroke="black"></line>
    <line x1={neurone.xPos + neurone.r} x2={neurone.xPos + lineLenght } y1={neurone.yPos - neurone.r * 4 } y2={neurone.yPos + neurone.r * 4 } stroke="black"></line>
    <line x1={neurone.xPos + neurone.r} x2={neurone.xPos + lineLenght } y1={neurone.yPos - neurone.r * 4 } y2={neurone.yPos - neurone.r * 4 } stroke="black"></line>
    
    <line x1={neurone.xPos + neurone.r} x2={neurone.xPos + lineLenght } y1={neurone.yPos  } y2={neurone.yPos } stroke="black"></line>
    <line x1={neurone.xPos + neurone.r} x2={neurone.xPos + lineLenght } y1={neurone.yPos } y2={neurone.yPos + neurone.r * 4 } stroke="black"></line>
    <line x1={neurone.xPos + neurone.r} x2={neurone.xPos + lineLenght } y1={neurone.yPos  } y2={neurone.yPos - neurone.r * 4 } stroke="black"></line>
  
    <line x1={neurone.xPos + neurone.r} x2={neurone.xPos + lineLenght } y1={neurone.yPos + neurone.r * 4 } y2={neurone.yPos } stroke="black"></line>
    <line x1={neurone.xPos + neurone.r} x2={neurone.xPos + lineLenght } y1={neurone.yPos + neurone.r * 4 } y2={neurone.yPos + neurone.r * 4 } stroke="black"></line>
    <line x1={neurone.xPos + neurone.r} x2={neurone.xPos + lineLenght } y1={neurone.yPos + neurone.r * 4  } y2={neurone.yPos - neurone.r * 4 } stroke="black"></line>

    





    // deuxieme couche 

    <circle cx={neurone.xPos + lineLenght + neurone.r} cy={neurone.yPos} r={neurone.r} fill="blue" />
    <text x={neurone.xPos + lineLenght + neurone.r} y={neurone.yPos}
    font-size="15"
    fill="white"
    text-anchor="middle"
    dominant-baseline="middle"
    > sigma(w5 + w8 + w11 + b) </text>
    <circle cx={neurone.xPos + lineLenght + neurone.r} cy={neurone.yPos + neurone.r *4 } r={neurone.r} fill="blue" /> 
    <circle cx={neurone.xPos + lineLenght + neurone.r} cy={neurone.yPos - neurone.r *4 } r={neurone.r} fill="blue" />
    <line x1={neurone.xPos + neurone.r * 2 +  lineLenght} x2={neurone.xPos + lineLenght * 2 } y1={neurone.yPos + neurone.r * 4  } y2={neurone.yPos  } stroke="black"></line>
    <line x1={neurone.xPos + neurone.r * 2 +  lineLenght} x2={neurone.xPos + lineLenght * 2 } y1={neurone.yPos - neurone.r * 4  } y2={neurone.yPos  } stroke="black"></line>
    <line x1={neurone.xPos + neurone.r * 2 +  lineLenght} x2={neurone.xPos + lineLenght * 2 } y1={neurone.yPos   } y2={neurone.yPos  } stroke="black"></line>





    // output 
    <circle cx={neurone.xPos + lineLenght * 2 + neurone.r  } cy={neurone.yPos } r={neurone.r} fill="purple" />


   
    
    
  </svg>
</div>

