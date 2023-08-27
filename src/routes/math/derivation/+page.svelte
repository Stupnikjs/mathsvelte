<script lang="ts">
    import "../../../style/style.css"
    import Katex from "../../../katex/katex.svelte";
    import "@fontsource/voltaire"
    import Item from "../../../components/item.svelte";
    import AsideComp from "../../../components/AsideComp.svelte";
 
    
   
    $: itemTitles = [] as string[]; 

    function registerChildComponent(componentTitle:string) {
    if (!itemTitles.includes(componentTitle)) itemTitles.push(componentTitle);
    itemTitles = itemTitles
   }

   

</script>




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
        <Item title="Derivées a connaitre" onMountCb={registerChildComponent}>
            <div class="flex flex-col items-center">
                <p> Dérivé de <Katex text={`e^x = e^x`} tailwind=""> </Katex></p>
                <p> Dérivé de <Katex text={`ln(x) = \\frac{1}{x}`} tailwind=""> </Katex></p>
                <p> Dérivé de <Katex text={`\\frac{1}{x} = - \\frac{1}{x^2}`} tailwind=""> </Katex></p>
            </div>
          
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
            <Katex text={"\\frac{df}{dx}"} tailwind=""></Katex>
        </Item>

        <Item title="Matrice Jacobiènne " onMountCb={registerChildComponent}>
        </Item>
        <Item title="Matrice Hessienne" onMountCb={registerChildComponent}>

        </Item>
        <Item title="Série de Taylor" onMountCb={registerChildComponent}>
            <p> Soit f une fonction indefiniment derivable en un point a </p>
            <p> la serie de Taylor de f en ce point est la serie de fonction </p>
            <Katex text={` f(x) + \\frac{f'(a)}{1!}(x - a ) + \\frac{f''(a)}{2!}(x - a ) + \\frac{f''(a)}{2!}(x - a ) `} tailwind=""></Katex>
            <Katex text={`\\sum^{n}_{k=0}{\\frac{f^{(k)}(a)}{k!}}(X - a)^k`} tailwind=""></Katex>
        </Item>
        

    </div>



<style>
</style>