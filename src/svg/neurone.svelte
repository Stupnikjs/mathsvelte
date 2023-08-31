<script lang="ts">
    import type {neuroneSvg} from "./svg";
    import {sqrt, cos, pow} from "mathjs"
  
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
  
    let arr = [1, 3, 3 ]
    type circleType = {
        cy :number,
        cx: number,
    }

    function getCoordinates(arr:number[]){
        let circles = []; 
        for (let i = 0 ; i < arr.length; i++){
            for (let j = 0 ; j < arr[i]; j++ ){
                let circle:circleType = {
                   cx : neurone.xPos + j * length, 
                   cy : neurone.yPos + j * arr[i]
                }
                   
                
        }
        }
        
    }
  </script>
  
  
  <div class="bg-red-50">
    <svg width="1000" height="500" xmlns="http://www.w3.org/2000/svg" >
      <!-- Circle -->
      
  
      
  
      // first neurone 
      <circle cx={ lineLenght } cy={neurone.yPos} r={neurone.r} fill="red" />
      <line x1={lineLenght + neurone.r} x2={neurone.xPos - neurone.r  } y1={neurone.yPos} y2={neurone.yPos + neurone.r *4} stroke="black"></line>
      <line x1={lineLenght + neurone.r} x2={neurone.xPos - neurone.r } y1={neurone.yPos} y2={neurone.yPos} stroke="blue"></line>
      <line x1={lineLenght + neurone.r} x2={neurone.xPos - neurone.r  } y1={neurone.yPos} y2={neurone.yPos - neurone.r *4} stroke="black"></line>
  
  
  
      // premiere couche
      <circle cx={neurone.xPos} cy={neurone.yPos} r={neurone.r} fill="pink" />
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
      <circle cx={neurone.xPos + lineLenght + neurone.r} cy={neurone.yPos + neurone.r *4 } r={neurone.r} fill="blue" /> 
      <circle cx={neurone.xPos + lineLenght + neurone.r} cy={neurone.yPos - neurone.r *4 } r={neurone.r} fill="blue" />
      
  
  
     
      
      
    </svg>
  </div>
  
  