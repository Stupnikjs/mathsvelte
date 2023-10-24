<script lang="ts">
    import "../../../style/style.css"
    import Katex from "../../../../katex/katex.svelte";
    import "@fontsource/voltaire"
    import Item from "../../../../components/item.svelte";
    import Codecomp from "../../../../components/codecomp.svelte";
    import AsideComp from "../../../../components/AsideComp.svelte";
    import { onMount } from "svelte";
    import Svg from "../../../../svg/svg.svelte";
    import type { neuroneSvg } from "../../../../svg/svg";
    import Neurone from "../../../../svg/neurone.svelte";


    $: itemTitles = [] as string[]; 


    function registerChildComponent(componentTitle:string) {
    if (!itemTitles.includes(componentTitle)) itemTitles.push(componentTitle);
    itemTitles = itemTitles
   }

  

   

</script>



    <AsideComp items={itemTitles}></AsideComp>
    <div class="voltaire flex-col flex gap-2 fontsize bg-yellow-50 mt-5">
       <Item title="Generalitées" onMountCb={registerChildComponent}>
        <p>Un neurone artificel est un concept mathematique que l'on peut representer par une fonction</p>
        <div class="flex gap-4 justify-center">
            <Katex text={`f(x)= \\sigma(\\sum_{ij}{w_{ij}x_{ij} + b})`} tailwind="inline"></Katex>
            <span class="inline"> avec </span>
            <Katex text={`\\sigma(x) = \\frac{1}{1+e^{-x}}`} tailwind="inline"></Katex>
        </div>
        </Item> 
        <Item title="Biomimetisme" onMountCb={registerChildComponent}>
            <p> Il est fascinant de remarquer une analogie parfaite entre le fonctionement des neurones artificiels  et des neurones biologiques</p>
            <p> en effet les neurones biologiques vont posseder des <strong> dendrites </strong> qui recoivent l'influx nerveux des neurones en amont </p>
            <p> ces dendrites communiques avec le centre du neurones c'est à dire le noyau, dans le neurones mathematique la dendrite correspond a la valeur d'entrée ou <strong>input</strong> qui correspond a x dans la fonction ci dessous </p>
            <p> <Katex text={`f(x)= \\sigma(\\sum_{ij}{w_{ij} \\bm{x}_{ij} + b})`} tailwind="text-center"></Katex> </p>
            <p> Le noyau va gerer tout les influx arrivant vers lui pour s'activer ou non en fonction des stimulations recues </p>
            <p> dans notre neurone artificel on utilise la fonction d'activation, on utilse des fonctions particulieres notament une des plus courante la fonction sigmoide </p>
            <Katex text={`\\sigma(x) = \\frac{1}{1+e^{-x}}`} tailwind="m-auto"></Katex>

        </Item>
        <Item title=" Reseau de neurones " onMountCb={registerChildComponent}>
            <p> On utilisera ces neurones sous la forme de reseaux multicouches ou chaque neurones est connecté aux neurones de la couche suivante </p>
            <p> les neurones </p>
        </Item>
        <Item title=" Fonction de cout " onMountCb={registerChildComponent}>
            <p> L'objectif du reseau de neurones est de parvenir a ajuster les parametre de la fonction w et b appelé poids et biais pour tendre vers les valeurs de sorties de notre set d'entrainement </p>
            <p> Car pour entrainer notre reseaux de neurones nous allons avoir besoin d'un bon nombre de données qui comportent une valeur de sortie pour la valeur que l'on cherchera a avoisiner par la suite </p>
            <Katex text={` C = ( Y - Y_{test})^2`} tailwind="m-auto"></Katex>
            <p> le nombre de poids dans une couche d'un reseau de neurones est egale au produit du nombre d'input et d'output pour cette couche </p>
            <Codecomp>
                a1_0 = sigma(x[0] * W[0,0] + x[1] * W[0, 1] + x[2] * W[0, 2] + b[0]) 
       a1_1 = sigma(x[0] * W[1,0] + x[1] * W[1, 1] + x[2] * W[1, 2] + b[1]) 

            </Codecomp>
        </Item>
        <Item title="Rétropropagation" onMountCb={registerChildComponent}>
            <p> Pour determiner la variation des parametres w et b on recherche la derivé de la fonction de cout </p>
            <p> Qui nous permet de trouver son minimum </p>
            <Katex text={` \\frac{\\partial{C_k}}{\\partial{W^{(2)}}} = \\frac{\\partial{C_k}}{\\partial{a^{(2)}}} \\frac{\\partial{a^{(2)}}}{\\partial{z^{(2)}}} \\frac{\\partial{z^{(2)}}}{\\partial{W^{(2)}}} `} tailwind="text-xl m-auto"></Katex>
            <p> Pour le calcul de la derivé du cout de la couche precedente </p>
             <div class="flex gap-2 justify-center"> 
                <Katex text={`a^{(2)} = \\sigma(W^{(2)}a^{(1)} + b^{(2)})`} tailwind=""></Katex>  <p> avec </p> <Katex text={`a^{(1)} = \\sigma(W^{(1)}a{(0)} + b^{(0)})`} tailwind=""></Katex>
             </div>
             <p class="m-auto"> Donc </p>
            <Katex text={` \\frac{\\partial{C_k}}{\\partial{W^{(2)}}} = \\frac{\\partial{C_k}}{\\partial{a^{(2)}}} \\frac{\\partial{a^{(2)}}}{\\partial{a^{(1)}}} \\frac{\\partial{a^{(1)}}}{\\partial{z^{(1)}}} \\frac{\\partial{z^{(2)}}}{\\partial{W^{(2)}}} `} tailwind="text-xl m-auto"></Katex>
           <p class="m-auto"> On s'interesse a ce terme </p>
           <Katex text={`\\frac{\\partial{a^{(2)}}}{\\partial{a^{(1)}}}`} tailwind="m-auto text-xl"> </Katex>
           <Katex text={`\\frac{\\partial{a^{(2)}}}{\\partial{a^{(1)}}} = \\frac{\\partial{a^{(2)}}}{\\partial{z^{(2)}}}\\frac{\\partial{z^{(2)}}}{\\partial{a^{(1)}}} `} tailwind="m-auto text-xl"> </Katex>
           <Katex text={`\\frac{\\partial{z^{(2)}}}{\\partial{a^{(1)}}} = W^{(2)}`} tailwind="m-auto text-xl"></Katex>
           <p class="text-center"> Donc </p>
           <Katex text={`\\frac{\\partial{a^{(n)}}}{\\partial{a^{(n-1)}}} = \\frac{\\partial{a^{(n)}}}{\\partial{z^{(n)}}}\\frac{\\partial{z^{(n)}}}{\\partial{a^{(n-1)}}} = \\sigma '(z^{n})W^{n} `} tailwind="m-auto text-xl"> </Katex>
        </Item>
        <div class="w-3/4 mx-auto mb-5 border-blue-200 border-4">
            <Neurone></Neurone>
        
        </div>
       
    </div>
   


<style>
  
    
    
</style>