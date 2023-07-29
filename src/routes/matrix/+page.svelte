<script>
    import "../../style/style.css"
    import katexify from "../../functions/Katexify";
    import "@fontsource/voltaire"

    let math1 = `\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 4 \\\\ 3 & 6 & 8  \\end{bmatrix}`
    let math2 = `\\begin{bmatrix} 7 & -6 \\\\ 12 & 8  \\end{bmatrix}\\begin{bmatrix} 5 \\\\ 6  \\end{bmatrix}`
    let math3 = `5\\begin{bmatrix} 7 & -6 \\\\ 12 & 8  \\end{bmatrix}\\begin{bmatrix} 1 \\\\ 0  \\end{bmatrix} + 
         6\\begin{bmatrix} 7 & -6 \\\\ 12 & 8  \\end{bmatrix}\\begin{bmatrix} 0 \\\\ 1  \\end{bmatrix}`
    let math4 = `5\\begin{bmatrix} 7  \\\\ 12 \\end{bmatrix} + 6\\begin{bmatrix} -6 \\\\ 8  \\end{bmatrix}`
    let math5 = `\\begin{bmatrix} 35  \\\\ 60 \\end{bmatrix} + \\begin{bmatrix} -36 \\\\ 48  \\end{bmatrix}`
    let math6 =  `\\begin{bmatrix} -1 \\\\ 108  \\end{bmatrix}`
    let math7 = `\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 4 \\\\ 3 & 6 & 8  \\end{bmatrix}\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1  \\end{bmatrix} = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 4 \\\\ 3 & 6 & 8  \\end{bmatrix} `

</script>



<div class="voltaire text-center flex-col flex gap-2">
    <div class="flex flex-col gap-2 bg-green-50 m-4">
        <h1 class=" text-xl">Les Matrices</h1>
        <p>
            Les matrices peuvent nous aider a resoudres des equations simultanées 
        </p>
        <p> Les colones des matrices </p>
        <div>{@html katexify(math1, true)}</div>
        <h2>Multiplitcation de matrices </h2>
        <div>{@html katexify(math2, true)}</div>
        <p>Developpement</p>
        <div>
            {@html katexify(math3, true)}
        </div>
            <div></div>
                {`=`}
        <div>{@html katexify(math4, true)}</div>
            <div></div>
                {`=`}
        <div>{@html katexify(math6, true)}</div>
    </div>
    
     
    <div class="p-4 m-4 bg-gray-50 flex flex-col gap-2">
        <h3>La Matrice Identité</h3>
        <p>C'est la matrice de meme dimension qui lorsque on multiplie une matrice, nous donne la meme matrice </p>
        <p>elle est composé de 1 sur la digonale et de 0 sur le reste</p>
        <div></div>{`AI = A `}
        <p>pour une matrice de cette forme </p>    
        {@html katexify(math7, true)}
    </div>
   
</div>


<style>
    .voltaire{
        font-family: "Voltaire", sans-serif;
    }
</style>