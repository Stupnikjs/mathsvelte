<script lang="ts">
    
    import "@fontsource/voltaire"
    import Item from "../../../../components/item.svelte";
    import Codecomp from "../../../../components/codecomp.svelte";
    import AsideComp from "../../../../components/AsideComp.svelte";
   
    $: itemTitles = [] as string[]; 

    function registerChildComponent(componentTitle:string) {
    if (!itemTitles.includes(componentTitle)) itemTitles.push(componentTitle);
    itemTitles = itemTitles
   }

   

</script>




    <AsideComp items={itemTitles}></AsideComp>
    <div class="voltaire mt-5">
        <Item title="pd.read_csv(path)" onMountCb={registerChildComponent}>
        </Item>
        <Item title="dataFrame.plot()" onMountCb={registerChildComponent}>
        </Item>
        
        <Item title="pd.get_dummies()" onMountCb={registerChildComponent}>
         <p> C'est une fonction de la librairie pandas pour les features categoriels</p>
         <p> Cela permet de rendre la feature plus inteligible par le model </p>
         <p> Elle va créer une colone avec en valeur 1 , ou 0. 1 si la feature avait le label correspondant au nouveau nom de colonne et 0 à l'inverse </p>
        </Item>
        <Item title="sklearn.preprocessing" onMountCb={registerChildComponent}>
         <Codecomp>
            scaler = MinMaxScaler()
       scaler.fit(X_train)
       scaler.transform(X_train)
         </Codecomp>
         <p>Cela permet de mettre les données a l'échelle </p>
         <p> Ce qui va nettement facilité le traitement par le model </p>
         <p> On n'utlise pas ce scaler sur les données test puisque on veut simuler des données brutes </p>
        </Item>

        <Item title="" onMountCb={registerChildComponent}>
         
        </Item>
        
       
    </div>


