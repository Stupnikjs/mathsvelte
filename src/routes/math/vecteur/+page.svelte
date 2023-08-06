<script lang="ts">
    import "../../../style/style.css"
    import Katex from "../../../katex/katex.svelte";
    import "@fontsource/voltaire"
    import Item from "../../../components/item.svelte";
    import Header from "../../../components/header.svelte";
    import AsideComp from "../../../components/AsideComp.svelte";



    $: itemTitles = [] as string[]; 

    function registerChildComponent(componentTitle:string) {
    if (!itemTitles.includes(componentTitle)) itemTitles.push(componentTitle);
    itemTitles = itemTitles
   }

   

</script>


<Header></Header>
<div class="gridtemp">
    <AsideComp items={itemTitles}></AsideComp>
    <div class="voltaire flex-col flex gap-2 fontsize bg-yellow-50">
        <h1 class="text-xl text-center mt-2"> Les Vecteurs </h1>
        <Item title="Definition" onMountCb={registerChildComponent}>
            <p> Un vecteur peut être défini par une direction et une magnitude </p>
            <p> Un vecteur posséde une ou plusieurs dimensions </p>

        </Item>
        <Item title="Operations Vectorielles" onMountCb={registerChildComponent}>
            <p> Le produit scalaire</p>
            <p>La projection scalaire </p>
            <p> La projection vecotrielle </p>
    
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