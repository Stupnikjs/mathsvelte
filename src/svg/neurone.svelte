<script lang="ts">
  import { browser } from "$app/environment";
  import type {neuroneSvg} from "./svg";



   
  
    let r = 20; 
    let xPos = 400; 
    let yPos =  200; 
  
  class circleCoords {
    cx :number; 
    cy:number; 
    r:number; 
    nextLines: lineCoords[]; 
    constructor(cx:number, cy:number, r:number, nextLines:lineCoords[]){
      this.cx = cx ; 
      this.cy = cy; 
      this.r = r
      this.nextLines = nextLines
    }
     
    
  }
  class lineCoords {
    x1 :number; 
    x2:number; 
    y1:number;
    y2:number; 

    
    constructor(x1:number, x2:number, y1:number, y2:number){
      this.x1 = x1; 
      this.x2 = x2; 
      this.y1 = y1; 
      this.y2 = y2; 
    }
     
    
  }
  
  $: svgWidth = 0;
  let lineLenght = svgWidth; 
  let size:number;
  let offset :number = 50; 
  let colors = [ "red", "purple", "pink", "red"] 
   

  let input = [1, 3, 2 ]

  function returnCirles(input:number[], size:number){
    let circles:circleCoords[] = []; 
    for (let i = 0; i < input.length ; i++ ){
      for (let j = 0; j < input[i]; j++){
        let cx =  i * size / input.length + r + offset; 
        let cy = ( j + 1 ) * size * ( 2 / 3 ) / ( input[i] + 1)
        let nextLayer = i < input.length - 1 ? input[i+1] : 0 
        let lines: lineCoords[] = []; 
        for (let x = 0 ; x < nextLayer; x ++){
          let x1 = cx + r ; 
          let x2 = (i+1) * size / input.length + 2*r; 
          let y1 = cy ; 
          let y2 = ( x + 1 ) * size * ( 2 / 3 ) / ( nextLayer + 1)
          let line = new lineCoords(x1, x2, y1, y2) 
          console.log(line)
          lines.push(line)
        }
        let cirle = new circleCoords( cx , cy , r , lines)
        circles.push(cirle)

      }
    }
    return circles
  }
   
</script>


<div class="bg-red-50" bind:clientWidth={size}  style=" width={size}">
  <svg width={size} height={size * 2/3} xmlns="http://www.w3.org/2000/svg" >
    <!-- Circle -->
  
    {#each  returnCirles(input, size) as circle, ind}
      <circle cx={circle.cx} cy={circle.cy} r={circle.r} fill={colors[ind]}></circle>
      {#each circle.nextLines as line }
      <line x1={line.x1} x2={line.x2} y1={line.y1} y2={line.y2} stroke="black"></line>
      {/each}
    {/each}
    
  </svg>
</div>

