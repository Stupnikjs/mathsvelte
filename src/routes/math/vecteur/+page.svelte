<script lang="ts">
    import "../../../style/style.css"
    import "@fontsource/voltaire"
    import Item from "../../../components/item.svelte";
    import AsideComp from "../../../components/AsideComp.svelte";
    import Katex from "../../../katex/katex.svelte";
    import Vectordemo from "../../../three/Vectordemo.svelte";
    import Matrix from "../../../components/Matrix.svelte";


    $: itemTitles = [] as string[]; 


    function registerChildComponent(componentTitle:string) {
    if (!itemTitles.includes(componentTitle)) itemTitles.push(componentTitle);
    itemTitles = itemTitles
   }

   

</script>



    <AsideComp items={itemTitles}></AsideComp>
    <div class="voltaire flex-col flex gap-2 fontsize bg-yellow-50 mt-5">
        <h1 class="text-xl text-center mt-2"> Les Vecteurs </h1>
        <Item title="Definition" onMountCb={registerChildComponent}>
            <p> Un vecteur peut être défini par une direction et une magnitude </p>
            <p> Un vecteur posséde une ou plusieurs dimensions </p>
        </Item>
        <Item title="Operations Vectorielles" onMountCb={registerChildComponent}>
            <h3> Le produit scalaire</h3>
            <Katex text={` v_1 = \\begin{pmatrix} a \\\\ b \\\\ c \\\\ d \\end{pmatrix} \\space  \\space 
            v_2 = \\begin{pmatrix} e \\\\ f \\\\ g \\\\ h \\end{pmatrix} `} tailwind={"text-center"} ></Katex>
            <Katex text={`v1.v2 \\space = = ae + fb + gc + dh `} tailwind={"text-center"}></Katex>
            <h3>La projection scalaire </h3>
            <Katex text={` s = \\mid v_1 \\mid \\cos\\Theta =  \\frac{v_1 . v_2}{\\mid v1 \\mid} `} tailwind={' text-center'}></Katex>
            <h3> La projection vecotrielle </h3>
            <Katex text={` s = \\frac{v_1 . v_2}{\\mid v1 \\mid} * \\frac{v_1}{\\mid v_1 \\mid } `} tailwind={' text-center'}></Katex>
    
        </Item> 
        <Item title="Vecteur 3D" onMountCb={registerChildComponent}>
            <div class="flex flex-col items-center ">
                <h1 class="text-xs mb-2">Je crée un vecteur avec les coordonées </h1>
                <Matrix arr={[["x"], ["y"], ["z"]]} tailwind="text-xs inline" type="b"></Matrix>
            </div>
        </Item>       
    </div>
   


<style>
     
    
    .voltaire{
        font-family: "Voltaire", sans-serif;
    }
    
    
</style>