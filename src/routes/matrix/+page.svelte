<script>
    import "../../style/style.css"
    import katexify from "../../functions/Katexify";
    import "@fontsource/voltaire"
    let math1 = `\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 4 \\\\ 3 & 6 & 8  \\end{bmatrix}`
    let math2 = `\\begin{bmatrix} 7 & -6 \\\\ 12 & 8  \\end{bmatrix}\\begin{bmatrix} 5 \\\\ 6  \\end{bmatrix} = \\begin{bmatrix} 7*5 + -6*6 \\\\ 12 * 5 + 8 * 6  \\end{bmatrix} `
    let math3 = `5\\begin{bmatrix} 7 & -6 \\\\ 12 & 8  \\end{bmatrix}\\begin{bmatrix} 1 \\\\ 0  \\end{bmatrix} + 
         6\\begin{bmatrix} 7 & -6 \\\\ 12 & 8  \\end{bmatrix}\\begin{bmatrix} 0 \\\\ 1  \\end{bmatrix}`
    let math4 = `5\\begin{bmatrix} 7  \\\\ 12 \\end{bmatrix} + 6\\begin{bmatrix} -6 \\\\ 8  \\end{bmatrix}`
    let math5 = `\\begin{bmatrix} 35  \\\\ 60 \\end{bmatrix} + \\begin{bmatrix} -36 \\\\ 48  \\end{bmatrix}`
    let math6 =  `\\begin{bmatrix} -1 \\\\ 108  \\end{bmatrix}`
    let math7 = `\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 4 \\\\ 3 & 6 & 8  \\end{bmatrix}\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1  \\end{bmatrix} = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 4 \\\\ 3 & 6 & 8  \\end{bmatrix} `
    let math8 = `B = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}`
    let math9 = `B^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}`
</script>



<div class="voltaire text-center flex-col flex gap-2">
    <div class="flex flex-col gap-2 bg-green-50 m-4">
        <h1 class=" text-2xl">Les Matrices</h1>
        <p> Les matrices peuvent nous aider a resoudres des equations simultanées </p>
        <div>{@html katexify(math1, true)}</div>
        <div class="p-2 flex flex-col gap-4">
            <h2 class="text-xl">Multiplication de matrices </h2>
            <div>
                <div>{@html katexify(math2, true)}</div> 
            <p class="m-2">Developpement possible</p>
            <div>
                {@html katexify(math3, true)}
                </div>
                {`=`}
                <div>{@html katexify(math4, true)}</div>
                {`=`}
                <div>{@html katexify(math6, true)}</div>
            </div>
        </div>
       
    </div>

    <div class="p-4 m-4 bg-gray-50 flex flex-col gap-2">
        <h3>La Matrice Identité</h3>
        <p>C'est la matrice de meme dimension qui lorsque on multiplie une matrice, nous donne la meme matrice </p>
        <p>elle est composé de 1 sur la digonale et de 0 sur le reste</p>
        <div></div>{`AI = A `}
        <p>pour une matrice de cette forme </p>    
        {@html katexify(math7, true)}
    </div>
   
    <div class="m-5 p-5 flex flex-col bg-yellow-100">
        <h2> Matrice Inversible </h2>
        <p> c'est la matrice carré <i>A</i> pour laquelle il existe une matrice carré <i>B</i> selon lequelles {@html katexify('AB = I ', true)}  ou {@html katexify('BA = I ', true)} la matrice identité</p>
        {@html katexify(math8, true)}

    </div>

    <div class="m-5 p-5 flex flex-col bg-yellow-100">
       <h2> Calcul de la Matrice Inversible </h2>
       <p> soit {@html katexify(math8, true)} </p>
       {@html katexify(math9, true)}
    </div>

    <div class="m-5 p-5 flex flex-col bg-blue-100">
        <h2>Changement de base </h2>
        <p> Pour changer de base on mutliplie le vecteur par l'inverse de la nouvelle matrice base </p>
    </div>
    <div class="m-5 p-5 flex flex-col bg-indigo-100">
        <h2>Rotation et Changement de base </h2>
        <p> Pour efectuer une rotation dans un nouvel ensemeble de coordonées  Pour changer de base on mutliplie le vecteur par l'inverse de la nouvelle matrice base </p>
        <div class="m-4">
            <p> Rotation de 45° </p>
            {@html katexify(`\\frac{1}{\\sqrt{2}}\\begin{pmatrix} - 1 & 1 \\\\ 1 & 1 \\end{pmatrix} `, false)}
            B
            {@html katexify(`\\binom{n}{k}`, false)}
            <div class="m-4">
                <p> Exemple soit B = {@html katexify(` \\begin{pmatrix} 5 & 1  \\\\  2 & 1 \\end{pmatrix} `, false)}
                  et le vecteur  {@html katexify(` v = \\begin{bmatrix} 5 & 1  \\\\  2 & 1 \\end{bmatrix}`, false)}
                </p>
            </div>
        </div>
    </div>
    <div class="bg-orange-50 m-5 p-5 flex flex-col gap-2">
        <h2>le procédé de gram-schmidt</h2>
        <p>ou Comment construire un "othonormal vector set" ?</p>
        <p>prenons un ensemble de vecteur lineairement independants </p>
        <p> pour verifier l'independance il faut ecrire la matrice et verifier que le determinent n'est pas 0 ( vecteur dependants )</p>
        <div class="m-2">
            <p> prenons le premier vecteur du set  {@html katexify(`v_1 \\medspace e_1 = \\frac{v_1}{\\mid v_1 \\mid} `, false)} </p>
            <p>  {@html katexify(`v2  = \\frac{(v_2.e_1)e_1}{\\mid e_1 \\mid} + u_2 \\space \\space donc \\space u_2  = v_2 - (v_2.e_1)e_1 `, false)} </p>
        </div>
       <div class="m-2">
            <p> ensuite prenons v3 qui n'est pas dans le meme plan que v1 et v2  </p>
            <p>{@html katexify(`u_3 = v_3 - (v_3.e_1)e_1 - (v_3.e_2)e_2`, false)}</p>
            <p> Ainsi de suite pour les vecteurs de dimensions superieures </p>
       </div>
      
    </div>
    
</div>


<style>
    .voltaire{
        font-family: "Voltaire", sans-serif;
    }
    h2{
        background-color: black;
        color: rgb(152, 226, 72); 
        margin-bottom: 2rem;
    }
</style>