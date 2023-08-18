<script lang="ts">
    import Katex from "../../../katex/katex.svelte";
    import "@fontsource/voltaire"
    import Item from "../../../components/item.svelte";
    import AsideComp from "../../../components/AsideComp.svelte";
    import Codecomp from "../../../components/codecomp.svelte";
    import Matrix from "../../../components/Matrix.svelte";
    
   
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
           <p> CNN ou Convolutional Neural Network </p>
         
        </Item>

        <Item title="Noyaux d'image ou Filtre" onMountCb={registerChildComponent}>
            <p> Une image est un ensemble de pixels </p>
            <p> On applique un filtre d'image sur une image d'entrée </p>
            <Matrix type="p" tailwind="" arr={[[0.0625,0.125, 0.062], [0.125, 0.25, 0.125], [0.0625,0.125, 0.0625]]}></Matrix>
            <p> C'est le reseau de neurones convolutif qui determinera les poids reels pour faire de la classification d'images </p>
            <p> Pour gerer les bords de l'image on ajoute du padding a l'image pour ne pas perdre de données aux bords de l'image </p>
            
        </Item>
        <Item title="Couches de convolution" onMountCb={registerChildComponent}>
            <p>C'est un partie du reseau de neurones convolutif</p>
            <p> Si l'on utilise des resaux de neurones artificiels classiques, le nombre de parametres sera trop importants, lorsque l'on traite les images</p>
        </Item>
       
    </div>
</div>