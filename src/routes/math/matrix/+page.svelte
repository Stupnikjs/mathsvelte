<script>
    import "../../../style/style.css"
    import katexify from "../../../functions/Katexify";
    import Katex from "../../../katex/katex.svelte";
    import "@fontsource/voltaire"
    import Item from "../../../components/item.svelte";
    import Header from "../../../components/header.svelte";
    
    let math1 = `\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 4 \\\\ 3 & 6 & 8  \\end{bmatrix}`
    let math5 = `\\begin{bmatrix} 35  \\\\ 60 \\end{bmatrix} + \\begin{bmatrix} -36 \\\\ 48  \\end{bmatrix}`
    let math6 =  `\\begin{bmatrix} -1 \\\\ 108  \\end{bmatrix}`
    let math7 = `\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 4 \\\\ 3 & 6 & 8  \\end{bmatrix}\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1  \\end{bmatrix} = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 4 \\\\ 3 & 6 & 8  \\end{bmatrix} `
    let math8 = `B = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}`
    let math9 = `B^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}`

</script>


<Header></Header>
<div class="voltaire flex-col flex gap-2 text-xs">
    <h1 class="text-2xl mt-5 mb-10">Les Matrices</h1>
    <p> Les matrices peuvent nous aider a resoudres des equations simultanées </p>
    
    <div><Katex text={math1}></Katex></div>
            
    <Item title="Multiplication des matrices" color="#ffecc4">

                <p> <Katex text={`\\begin{bmatrix} a & b \\\\ c & d  \\end{bmatrix}\\begin{bmatrix} 5 \\\\ 6  \\end{bmatrix} = \\begin{bmatrix} 5a + 6b \\\\ 5c + 6d  \\end{bmatrix} `}></Katex>
                </p>
                    <p class="m-2">Developpement possible</p>
                <div>
                     <Katex text={`5\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}\\begin{bmatrix} 1 \\\\ 0  \\end{bmatrix} + 
                    6\\begin{bmatrix} a & b \\\\ c & d  \\end{bmatrix}\\begin{bmatrix} 0 \\\\ 1  \\end{bmatrix}`}></Katex>
                    </div>
                    {`=`}
                    <div><Katex text={`5\\begin{bmatrix} 7  \\\\ 12 \\end{bmatrix} + 6\\begin{bmatrix} -6 \\\\ 8  \\end{bmatrix}`}></Katex></div>
                    {`=`}
                    <div><Katex text={math6} ></Katex></div>
             
    </Item>
    <Item title="Operations Vectorielles" color="aqua">
        <p> Le produit scalaire</p>
        <p>La projection scalaire </p>
        <p> La projection vecotrielle </p>

    </Item>          
    <Item title="La Matrice Identité" color="lightyellow">
        <p>C'est la matrice de meme dimension qui lorsque on multiplie une matrice, nous donne la meme matrice </p>
        <p>elle est composé de 1 sur la digonale et de 0 sur le reste</p>
        <div></div>{`AI = A `}
        <p>pour une matrice de cette forme </p>    
        <Katex text={math7} ></Katex>
    </Item>
    
    <Item title={"Matrice inverse"} color={"lightblue"}>
        <p> c'est la matrice carré <i>A</i> pour laquelle il existe une matrice carré <i>B</i> selon lequelles <Katex text={'AB = I ', true)}  ou <Katex text={'BA = I ', true)} la matrice identité</p>
        <Katex text={math8}></Katex>
    </Item>
       
    
    <Item title="Calcul de la Matrice Inversible" color="lightyellow">
        <div class="m-5 p-5 flex flex-col bg-yellow-100">
            <p> soit <Katex text={math8, true)} </p>
            <Katex text={math9} ></Katex>
        </div>
    </Item>
    <Item title="Changement de base" color="lightblue">
            <p> Pour changer de base on mutliplie le vecteur par l'inverse de la nouvelle matrice base </p>
    </Item>
    <Item title="Rotation et Changement de base" color="indigo">
        <p> Pour effectuer une rotation dans un nouvel ensemeble de coordonées  Pour changer de base on mutliplie le vecteur par l'inverse de la nouvelle matrice base </p>
        <div class="m-4">
            <p> Rotation de 45° </p>
            <Katex text={`\\frac{1}{\\sqrt{2}}\\begin{pmatrix} - 1 & 1 \\\\ 1 & 1 \\end{pmatrix} `}></Katex>
            B
            <Katex text={`\\binom{n}{k}`}></Katex>
            <div class="m-4">
                <p> Exemple soit B = <Katex text={` \\begin{pmatrix} 5 & 1  \\\\  2 & 1 \\end{pmatrix} `, true)}
                  et le vecteur  <Katex text={` v = \\begin{bmatrix} 5 & 1  \\\\  2 & 1 \\end{bmatrix}`, true)}
                </p>
            </div>
        </div>
    </Item>

    <div class="p-5 m-5 bg-blue-200">
        <h2> Transposition </h2>
    </div>

    <Item title="le procédé de gram-schmidt" color="lightgreen">
            <p class="-mt-5 mb-4 text-xl"> ou Comment construire une base vectorielle orthnormale ?</p>
            <p> prenons un ensemble de vecteur lineairement independants </p>
            <p class="my-2"> pour verifier l'independance il faut ecrire la matrice et verifier que le determinent n'est pas 0 ( vecteur dependants )</p>
            <div>
                <p> prenons le premier vecteur du set  <Katex text={`v_1 \\medspace e_1 = \\frac{v_1}{\\mid v_1 \\mid} `, false)} </p>
                <p>  <Katex text={`v2  = \\frac{(v_2.e_1)e_1}{\\mid e_1 \\mid} + u_2 \\space \\space donc \\space u_2  = v_2 - (v_2.e_1)e_1 `, false)} </p>
            </div>
           <div class="">
                <p> ensuite prenons v3 qui n'est pas dans le meme plan que v1 et v2  </p>
                <p><Katex text={`u_3 = v_3 - (v_3.e_1)e_1 - (v_3.e_2)e_2`, false)}</p>
                <p> Ainsi de suite pour les vecteurs de dimensions superieures </p>
           </div>    
    </Item>
        


    <Item title="Mise en situiation" color="aliceblue">  
            <p> Soit un ensemble de 3 vecteurs <Katex text={` \\begin{pmatrix}  1  \\\\ 1 \\\\ 1  \\end{pmatrix} \\begin{pmatrix}  2  \\\\ 0 \\\\ 1  \\end{pmatrix} \\begin{pmatrix}  3  \\\\ 1 \\\\ -1  \\end{pmatrix}`, false)} </p>
            <p> On cherche a obtenir une base orthonormale composée d'un plan et d'un 3ème vecteur orthonormale a ce dernier </p>
            <p> Tout d'abord on cherche <Katex text={`e_1 = \\frac{v_1}{\\mid v_1 \\mid }  `, false)} </p>
            <p> Donc <Katex text={`e_1 = \\frac{1}{\\sqrt{3}}\\begin{pmatrix}  1  \\\\ 1 \\\\ 1  \\end{pmatrix}  `, false)}
            <p> Ensuite on cherche <Katex text={`e_2 = \\frac{u_2}{\\mid u_2 \\mid}  `, false)} avec <Katex text={`u_2 = v_2 - (v_2.e_1)e_1 `, false)} </p>
            <p> Finalement on cherche v3 par le même procédé, avec notre nouvelle matrice de transformation <Katex text={`E = \\begin{bmatrix} \\begin{pmatrix} e_1 \\end{pmatrix} \\begin{pmatrix} e_2 \\end{pmatrix} \\begin{pmatrix} e_3 \\end{pmatrix} \\end{bmatrix} `, false)}  </p>
            <p> prenons maintenant un vecteur aleatoire que nous voulons refleter dans le plan defini par nos deux premier vecteurs <Katex text={` v_1 \\space et \\space v_2  `, false)} 
            <p> 
              On estime que ce vecteur a une composante dans le plan <Katex text={'e_1 e_2'}></Katex> et la reflexion devrai juste negativer la composante de <Katex text={"e_3"} /> ce qui reviens a utiliser la 
              matrice de transformation <Katex text={" T_E \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 &  0 & -1\\end{bmatrix}"} />
            </p>
            <p> En transformant le vecteur dans la base du plan grace a <Katex text={'E^{-1}'}/> </p>
            <p> Ensuite j'applique la transformation <Katex text={"T_E"}/> </p>
            <p> Finalement on utilise E pour retransformer le vecteur dans ma base </p>
            <p> Pour resumer <Katex text={"E T_E E^{-1} r = r^p "}/></p>
    </Item>  
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