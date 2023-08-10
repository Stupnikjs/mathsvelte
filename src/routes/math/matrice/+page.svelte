<script lang="ts">
    import "../../../style/style.css"
    import Katex from "../../../katex/katex.svelte";
    import "@fontsource/voltaire"
    import Item from "../../../components/item.svelte";
    import Header from "../../../components/header.svelte";
    import AsideComp from "../../../components/AsideComp.svelte";
    import Python from "../../../components/python.svelte";
    import { onMount } from "svelte";

 
    let math7 = `\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 4 \\\\ 3 & 6 & 8  \\end{bmatrix}\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1  \\end{bmatrix} = \\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 4 \\\\ 3 & 6 & 8  \\end{bmatrix} `
    let math8 = `B = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}`
    let math9 = `B^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}`
    $: itemTitles = [] as string[]; 

    function registerChildComponent(componentTitle:string) {
    if (!itemTitles.includes(componentTitle)) itemTitles.push(componentTitle);
    itemTitles = itemTitles
   }

   

</script>



<div class="gridtemp">
    <AsideComp items={itemTitles}></AsideComp>
    <div class="voltaire flex-col flex gap-2 fontsize bg-yellow-50">
    
        
            <h1 class="text-xl text-center mt-4"> Les Matrices </h1>

            <div class="p-4 mx-auto relative my-4 w-4/5">
                <p> Elles sont caractérisées par leur nombre de lignes et de colonnes </p>
                <p> 
                    On appelle matrice ligne les matrices qui ne sont composé que d'une seule ligne 
                    <Katex text={`\\begin{bmatrix} a & b & c & d \\end{bmatrix}`} tailwind={"my-3 text-center"}></Katex>
                </p>
                <p> 
                    On appelle matrice colonne les matrices qui ne sont composé que d'une seule colonne
                    <Katex text={`\\begin{bmatrix} a \\\\ b \\\\ c \\\\ d \\end{bmatrix}`} tailwind={"my-3 text-center"}></Katex>
                </p>
                <p class="mb-3"> Elles peuvent nous aider a resoudres des equations simultanées </p>
                <Katex text={`\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 4 \\\\ 3 & 6 & 8  \\end{bmatrix}`} tailwind={"text-center "}></Katex>
                <p> Reviens a poser le systeme   
               </p>
               <ul class="text-center">
                
                <li>1x + 2y + 3z = 3 </li>
                <li>2x + 3y  + 5z = 4 </li>
                <li>3x + 6y + 1z = 8</li>
            </ul>
            <p class="text-center"> ou </p>
                <Katex tailwind=" text-center" text={`\\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 5 \\\\ 3 & 6 & 1 \\end{pmatrix} \\begin{pmatrix}  x \\\\ y \\\\ z \\end{pmatrix} = 
                \\begin{pmatrix} 3 \\\\ 4 \\\\ 8 \\end{pmatrix} `}></Katex>
               
            </div>
            
            
           
                 
   
    <Item title="Multiplication des matrices" onMountCb={registerChildComponent}>
        <div class="px-2"> 
                <p class="mb-4">On peut seulement multiplier deux matrices dont la première a un nombre de colonne égale au nombre de ligne de la deuxième </p>
                <Katex tailwind={""} text={`\\begin{bmatrix} a & b \\\\ c & d  \\end{bmatrix}\\begin{bmatrix} 5 \\\\ 6  \\end{bmatrix} = \\begin{bmatrix} 5a + 6b \\\\ 5c + 6d  \\end{bmatrix} `}></Katex>
         </div>
            <p class="px-2">Developpement possible</p>
        <div class="p-2">
            <Katex tailwind={""} text={`5\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}\\begin{bmatrix} 1 \\\\ 0  \\end{bmatrix} + 
                    6\\begin{bmatrix} a & b \\\\ c & d  \\end{bmatrix}\\begin{bmatrix} 0 \\\\ 1  \\end{bmatrix} \\space = \\space 5\\begin{bmatrix} a  \\\\ c \\end{bmatrix} + 6\\begin{bmatrix} b \\\\ d  \\end{bmatrix} \\space`}></Katex>
        </div>   
    </Item>
            
    <Item title="La Matrice Identité" onMountCb={registerChildComponent}>
        <p>C'est la matrice de meme dimension qui lorsque on multiplie une matrice, nous donne la meme matrice </p>
        <p>elle est composé de 1 sur la digonale et de 0 sur le reste</p>
        <div class="flex flex-col gap-2">

            <Katex tailwind={"text-center"} text={`AI_n = A_n `}></Katex>
            <p>pour une matrice carrée de norme n  </p>    
            <Katex  tailwind={"text-center"} text={math7} ></Katex>
        </div>
    </Item>
    
    <Item title="Matrice inverse" onMountCb={registerChildComponent}>
        <p class=""> C'est la matrice carré <i>A</i> pour laquelle il existe une matrice carré <i>B</i> selon lequelles <Katex tailwind={"text-center"} text={'AB = I \\space ou \\space BA = I  \\space \\space  la \\space matrice \\space identité'}></Katex> </p>
         <Katex tailwind={"text-center"} text={` ou \\space A^{-1} `}></Katex>
        <Katex  tailwind={"text-center"} text={math8}></Katex>
        <Katex  tailwind={"text-center"} text={math9} ></Katex>
    </Item >
     
    <Item title="Determinent" onMountCb={registerChildComponent}>
        <p> Le determinent peut se definir comme le facteur de croissance d'une matrice  par exemple ad - bc dans une matrice a deux dimensions</p>
    </Item>

    <Item title="Changement de base" onMountCb={registerChildComponent}>
            <p> Pour changer de base on mutliplie le vecteur par l'inverse de la nouvelle matrice base </p>
    </Item>
    <Item title="Rotation et Changement de base" onMountCb={registerChildComponent}>
        <p> Pour effectuer une rotation dans un nouvel ensemeble de coordonées  Pour changer de base on mutliplie le vecteur par l'inverse de la nouvelle matrice base </p>
        <div class="m-4">
            <p> Rotation de 45° </p>
            <Katex  tailwind={""} text={`\\frac{1}{\\sqrt{2}}\\begin{pmatrix} - 1 & 1 \\\\ 1 & 1 \\end{pmatrix} `}></Katex>
            B
            <Katex  tailwind={""} text={`\\binom{n}{k}`}></Katex>
            <div class="m-4">
                <p> 
                Exemple soit B = <Katex tailwind={""} text={` \\begin{pmatrix} 5 & 1  \\\\  2 & 1 \\end{pmatrix} `}></Katex>
                  et le vecteur  <Katex  tailwind={""} text={` v = \\begin{bmatrix} 5 & 1  \\\\  2 & 1 \\end{bmatrix}`}></Katex></p>
            </div>
        </div>
    </Item>

    <Item title="Transposition" onMountCb={registerChildComponent}>
        <p> C'est l'operation dans laqquelle nous allons transformer les colones en ligne et vice versa </p>
        <p> cette operation est possible sur des matrices carrées </p>
        <Katex text={`A^T A = I_n `} tailwind=''></Katex>
        <p> donc la transposée fait partie des inverse d'une matrice </p>
    </Item>

    <Item title="le procédé de gram-schmidt" onMountCb={registerChildComponent}>
            <p class="mb-4"> ou Comment construire une base vectorielle orthnormale ?</p>
            <p> prenons un ensemble de vecteur lineairement independants </p>
            <p class="my-2"> pour verifier l'independance il faut ecrire la matrice et verifier que le determinent n'est pas 0 ( vecteur dependants )</p>
            <div>
                <p> prenons le premier vecteur du set  <Katex tailwind={""} text={`v_1 \\medspace e_1 = \\frac{v_1}{\\mid v_1 \\mid} `}/> </p>
                <p>  <Katex  tailwind={""} text={`v2  = \\frac{(v_2.e_1)e_1}{\\mid e_1 \\mid} + u_2 \\space \\space donc \\space u_2  = v_2 - (v_2.e_1)e_1 `}></Katex> </p>
            </div>
           <div>
                <p> ensuite prenons v3 qui n'est pas dans le meme plan que v1 et v2  </p>
                <p><Katex  tailwind={""} text={`u_3 = v_3 - (v_3.e_1)e_1 - (v_3.e_2)e_2`}></Katex></p>
                <p> Ainsi de suite pour les vecteurs de dimensions superieures </p>
           </div> 
           <Python>
            def gsBasis(A) :
            B = np.array(A, dtype=np.float_) # Make B as a copy of A, 
            # Loop over all vectors, starting with zero, label them with i
            for i in range(B.shape[1]) :
                # loop over all previous vectors, j, to subtract.
                for j in range(i) :
                    B[:, i] = B[:, i] - B[:, i] @ B[:, j] * B[:, j]
                # Next insert code to do the normalisation test for B[:, i]
                if la.norm(B[:, i]) > verySmallNumber :
                    B[:, i] = B[:, i] / la.norm(B[:, i])
                else :
                    B[:, i] = np.zeros_like(B[:, i])
            return B
           </Python>   
    </Item>
        


    <Item title="Mise en situiation" onMountCb={registerChildComponent}>  
            <p> Soit un ensemble de 3 vecteurs <Katex tailwind={""} text={` \\begin{pmatrix}  1  \\\\ 1 \\\\ 1  \\end{pmatrix} \\begin{pmatrix}  2  \\\\ 0 \\\\ 1  \\end{pmatrix} \\begin{pmatrix}  3  \\\\ 1 \\\\ -1  \\end{pmatrix}`}></Katex> </p>
            <p> On cherche a obtenir une base orthonormale composée d'un plan et d'un 3ème vecteur orthonormale a ce dernier </p>
            <p> Tout d'abord on cherche <Katex tailwind={""}  text={`e_1 = \\frac{v_1}{\\mid v_1 \\mid } `}/> </p>
            <p> Donc <Katex  tailwind={""} text={`e_1 = \\frac{1}{\\sqrt{3}}\\begin{pmatrix}  1  \\\\ 1 \\\\ 1  \\end{pmatrix}  `}></Katex>
             Ensuite on cherche <Katex  tailwind={""} text={`e_2 = \\frac{u_2}{\\mid u_2 \\mid}  `}/> avec <Katex tailwind={""} text={`u_2 = v_2 - (v_2.e_1)e_1 `}></Katex> 
            <p> Finalement on cherche v3 par le même procédé, avec notre nouvelle matrice de transformation <Katex tailwind={""} text={`E = \\begin{bmatrix} \\begin{pmatrix} e_1 \\end{pmatrix} \\begin{pmatrix} e_2 \\end{pmatrix} \\begin{pmatrix} e_3 \\end{pmatrix} \\end{bmatrix} `} /> </p>
            <p> prenons maintenant un vecteur aleatoire que nous voulons refleter dans le plan defini par nos deux premier vecteurs <Katex tailwind={""} text={` v_1 \\space et \\space v_2  `} />
            <p> 
              On estime que ce vecteur a une composante dans le plan <Katex tailwind={""}  text={'e_1 e_2'}></Katex> et la reflexion devrai juste negativer la composante de <Katex tailwind={""} text={"e_3"} /> ce qui reviens a utiliser la 
              matrice de transformation <Katex tailwind={""} text={" T_E \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 &  0 & -1\\end{bmatrix}"} />
            </p>
            <p> En transformant le vecteur dans la base du plan grace a <Katex tailwind={""} text={'E^{-1}'}/> </p>
            <p> Ensuite j'applique la transformation <Katex  tailwind={""} text={"T_E"}/> </p>
            <p> Finalement on utilise E pour retransformer le vecteur dans ma base </p>
            <p> Pour resumer <Katex tailwind={""} text={"E T_E E^{-1} r = r^p "}/></p>
            <Python>
                def build_reflection_matrix(bearBasis) : 
                # The parameter bearBasis is a 2×2 matrix 
                E = gsBasis(bearBasis) 
                # Write a matrix in component form that performs the mirror's reflection in the mirror's basis.
                Einv = inv(E)
                
                # Recall, the mirror operates by negating the last component of a vector.
                TE = np.array([[1,0], [0, -1]])

                T = E @ TE @ Einv
                return T
            </Python>
    </Item>  
    <Item title=" Vecteur Propres (eigenvectors et eigenvalues)" onMountCb={registerChildComponent}>
            <p> 
                les Vecteur Propres d'une matrice sont les vecteurs qui vont garder 
                la même direction pendant la transformation de la matrice
            </p>
            <p> pour une matrice A carrée a 2 dimensions  <Katex tailwind={""} text={` A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}`}></Katex></p>
            <Katex tailwind={""} text={` (A - \\lambda I )r = 0`}></Katex>
             <p> On recherche les solutions a cette équation </p><Katex tailwind={""} text={`det(A - \\lambda I) = 0 `}></Katex>
             <p> On obtient en developpant <Katex tailwind={""} text={`\\lambda^2 - ( a + d)\\lambda + ad - bc = 0 `}></Katex></p>
    </Item>
</div>
</div>


<style>
    .gridtemp{
        display: grid;
        grid-template-columns: 20% 1fr;
    }
    .voltaire{
        font-family: "Voltaire", sans-serif;
    }
    
    .fontsize{
        font-size: 0.6rem;
    }
</style>