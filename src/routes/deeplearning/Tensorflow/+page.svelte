<script lang="ts">
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




    <AsideComp items={itemTitles}></AsideComp>
    <div class="voltaire mt-5">
        <Item title="Generalitées " onMountCb={registerChildComponent}>

            
        </Item>
     
        <Item title="Example simple" onMountCb={registerChildComponent}>
            <p> La première étape à la creation d'un modéle de machine learning est le data enginering  ou l'analyse de notre dataset </p>
            <p> Donc première étape on charge nos donées </p>
            <Codecomp>

    import sklearn.datasets as datasets
           </Codecomp>
           <Codecomp>

            data = datasets.fetch_california_housing()
       df = pd.DataFrame(data=data["data"], columns=data["feature_names"])           
           </Codecomp>
           <p> On recherche les elements manquants dans le datasets </p>
           <p> S'il y en a on cherchera soit a les remplacer par une valeur, soit suprimer la feature  </p>
            <p>la somme des données manquantes par features </p>
           <Codecomp>
            df.isnull().sum()
           </Codecomp>
           <p> On cherche la correlation de la feature par rapport au prix, ou la valeur que l'on cherche a predire </p>
           <Codecomp>
            df.corr()["price"].sort_values()
           </Codecomp>
           <p> On supprime la colonne price </p>
           <Codecomp>
            df.drop('price', axis=1) 
           </Codecomp>
           <p> On reparti notre dataset en set d'entrainement et de test</p>
           <Codecomp>
X = df.drop("price", axis=1).values
     y = df["price"].values
           </Codecomp>
           <Codecomp>
  from sklearn.model_selection import train_test_split
    X_train, X_test, y_test, y_train = train_test_split(X,y, test_size=0.25, random_state=12)
            
           </Codecomp>
           <Codecomp>
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Activation,Dropout
           </Codecomp>
           <Codecomp>
                model = Sequential()
            model.add(Dense(units=8, activation="relu"))
            model.add(Dense(units=8, activation="relu"))
            model.add(Dense(units=1, activation='sigmoid'))
           </Codecomp>
           <p> Evolution de loss et val_loss en fonction des epochs </p>
           <Codecomp>
            model_loss = pd.DataFrame(model.history.history)
            model_loss.plot();
           </Codecomp>
            
        </Item>
        <Item title="Parametres de model.compile()" onMountCb={registerChildComponent}>
            <p> En fonction du modele c'est a nous de decider combien de neurones on aura dans les couches cachées </p>
            <p> le type de modele "regression" , "classification" nous impose un fonction de "loss" ou cout </p>
            <p> pour les classification on utilise par exemple loss="binary_crossentropy" et pour la regression loss="mean_squared_error" </p>
            <p> on doit choisir egalement l'optimizer </p>
        </Item>
        <Item title="Couche Dropout" onMountCb={registerChildComponent}>
         <p> C'est une couche qui desactive un certain pourcentage de neurones </p>
          <p> Elle previent le surapprentissage </p>
        </Item>
        
       
    </div>

