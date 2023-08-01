<script>
    export let vecteursDeBase;
  </script>
  
  <svg width="400" height="400" >
    {#each vecteursDeBase as vecteur}
      <line
        x1="0"
        y1="0"
        z1="0"
        x2={vecteur.x}
        y2={vecteur.y}
        z2={vecteur.z}
        stroke="black"
        stroke-width="2"
       
      />
      <text
      x={vecteur.x}
      y={vecteur.y - 5} <!-- Adjust the y-coordinate to position the text above the vector -->
      text-anchor="middle" <!-- Center the text horizontally -->
      font-size="12"
      fill="black"
    >
      {`(${vecteur.x}, ${vecteur.y})`}
    </text>
    {/each}
  </svg>
 

  
  
  
  
  