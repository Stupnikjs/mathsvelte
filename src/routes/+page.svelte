<script>
    import "../style/style.css"
    import katexify from "../functions/Katexify";
    let math = `\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 4 \\\\ 3 & 6 & 8  \\end{bmatrix}\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1  \\end{bmatrix} = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 4 \\\\ 3 & 6 & 8  \\end{bmatrix} `
    
    
</script>

<div>
  {@html katexify(math,false)}
</div>




<style>
 
   
</style>