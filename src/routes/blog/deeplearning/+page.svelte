<script lang="ts">

    import "@fontsource/voltaire"
    import Item from "../../components/item.svelte";
    import AsideComp from "../../components/AsideComp.svelte";
   
    
   
    $: itemTitles = [] as string[]; 

    function registerChildComponent(componentTitle:string) {
    if (!itemTitles.includes(componentTitle)) itemTitles.push(componentTitle);
    itemTitles = itemTitles
   }

   

</script>



    <AsideComp items={itemTitles}></AsideComp>
    <div class="voltaire">
        <Item title=" Generalitées  " onMountCb={registerChildComponent}>
            <div>
                Le Machine Learning est un terme anglais designant l'apprentissage automatisé 
           </div> 
         
        </Item>
       
    </div>


