<script lang="ts">
    import "@fontsource/voltaire"
    import Item from "../../../../components/item.svelte";
    import AsideComp from "../../../../components/AsideComp.svelte";
  
    $: itemTitles = [] as string[]; 

    function registerChildComponent(componentTitle:string) {
    if (!itemTitles.includes(componentTitle)) itemTitles.push(componentTitle);
    itemTitles = itemTitles
   }

   

</script>




    <AsideComp items={itemTitles}></AsideComp>
    <div class="voltaire mt-5">
        <Item title=" Generalitées " onMountCb={registerChildComponent}>

           <h2> ANN ou Artificial Neural Network ou Reseau de neurones artificiels </h2>
        
                <p> C'est un algorithme composé de neurones qui communiquent entre eux </p>
                <p> Ils sont repartis dans plusieurs couches </p>
                <p> la premiere la couche <strong>input</strong> </p>
                <p> viennent ensuite les couches profondes </p>
                <p> 
                 puis la couche <strong>output</strong> cette couche correspont au resultat que l'on souhaite obtenir
                 cela peut representer une probabilité ou une cateogrie en general
                 </p>
                 <p> dans une resaux de neurones conventionel chaques neurones et relié a tout les neurones de la couche suivante </p>
         
          

         
        </Item>
        <Item title="Modéle Perceptron simplifié " onMountCb={registerChildComponent}>
            <p> On peut simplifier notre perceptron en une fonction f(x) qui aeccepte plusieurs input x </p>
            <p> Cette fonction de x va produire un output y </p>
            <p> On souhaite ajuster des parametres de la fonctions pour que le neurone apprene </p>
            <p> donc on ajoute un poids de x1 noté w1 tel que y = x1w1 + x2w2</p>
            <p> on ajoute aussi un biais dans la fonction pour le cas ou x = 0 </p>
            <p> y = (x1w1 + b) + (x2w2 + b) </p>
        </Item>
        <Item title="Reseaux " onMountCb={registerChildComponent}>
            
        </Item>
        <Item title="Fonction d'activation" onMountCb={registerChildComponent}>
            <p> La Fonction d'activation va devoir être coherente avec le problème que cherche a resoudre le reseau de neurone </p>
            <p> il existe une mutitude de fonction d'activation </p>
            <p> Dans un problème de classification les fonction sigmoide, tangente hyperbolique ou echelon seront preferées </p>
            <p> Dans un problème de regression la fonction Unité lineaire rectifié ReLU importante dans le cas de vanishing gradient</p>
        </Item>


     
       
    </div>

