<script lang="ts">
    import "../../../style/style.css"
    import Katex from "../../../katex/katex.svelte";
    import "@fontsource/voltaire"
    import Item from "../../../components/item.svelte";
    import AsideComp from "../../../components/AsideComp.svelte";
    import Codecomp from "../../../components/codecomp.svelte";
    
   
    $: itemTitles = [] as string[]; 

    function registerChildComponent(componentTitle:string) {
    if (!itemTitles.includes(componentTitle)) itemTitles.push(componentTitle);
    itemTitles = itemTitles
   }

   

</script>



<div class="gridtemp fontsize">
    <AsideComp items={itemTitles}></AsideComp>
    <div class="voltaire">
        <Item title=" Generalitées  " onMountCb={registerChildComponent}>
            <p> Les derivées sont des fonctions qui expriment la variation de la fonction en fonction du temps </p>
            <p> On peut demontrer , et essayer de trouver mathematiquement la valeur d'une derivé, en utilisant <Katex text={"\\Delta_x"} tailwind="inline"></Katex></p>
            <Katex text={"f(x)' = \\frac{f(x + \\Delta_x ) - f(x) }{\\Delta_x }"} tailwind=""></Katex>
            
            <div class="items-center flex flex-col gap-2">
                <p> Donc par exemple pour la fonction <Katex text="f(x) = x^2" tailwind="inline"></Katex></p>
                <Katex text={`f(x)' = \\frac{ (x + \\Delta_x )^2 - x^2 }{ \\Delta_x} `} tailwind=""></Katex>
                <Katex text={`f(x)' = \\frac{ x^2 + 2x\\Delta_x + \\Delta_x^2 - x^2}{ \\Delta_x} `} tailwind=""></Katex>
                <Katex text={`f(x)' = \\frac{  2x\\Delta_x + \\Delta_x^2}{ \\Delta_x} `} tailwind=""></Katex>
                <Katex text={`f(x)' =  2x + \\Delta_x  `} tailwind=""></Katex>
                <p> On néglige  <Katex text={`\\Delta_x  `} tailwind="inline"></Katex> donc on obtient <Katex text={`f(x)' =  2x  `} tailwind="inline"></Katex> </p>

            </div>
         
        </Item>
        <Item title="Exponentielle" onMountCb={registerChildComponent}>

        </Item>
        <Item title="" onMountCb={registerChildComponent}>

        </Item>

        <Item title="Derivée d'une somme de deux fonctions" onMountCb={registerChildComponent}>

        </Item>

        <Item title=" Derivée d'un produit de deux fonctions" onMountCb={registerChildComponent}>
            <div class="">
                <p class="inline mr-4"> Soit f une fonction tel que </p>
                <Katex text={"f(x) = g(x) * h(x) "} tailwind="inline"></Katex>
                <Katex text={"f(x)' = f(x)g(x)' + g(x)f(x)'"} tailwind="" ></Katex>
            </div>
        </Item>
        <Item title=" Dérivée de fonctions imbriquées" onMountCb={registerChildComponent}>

        </Item>
    </div>
   

</div>


<style>

    
    .gridtemp{
        display: grid;
        grid-template-columns: 20% 1fr;
    }
  
  
</style>