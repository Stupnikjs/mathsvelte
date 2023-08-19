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



<div class="gridtemp fontsize mb-5">
    <AsideComp items={itemTitles}></AsideComp>
    <div class="voltaire">
        <Item title=" Generalitées  " onMountCb={registerChildComponent}>
           <p> CNN ou Convolutional Neural Network </p>
         
        </Item>

        <Item title="Noyaux d'image ou Filtre" onMountCb={registerChildComponent}>
            <p> Une image est un ensemble de pixels </p>
            <p> On applique un filtre d'image sur une image d'entrée </p>
            <p> On va balayer le filtre sur l'ensemble de l'image</p>
            <Matrix type="p" tailwind="" arr={[[0.0625,0.125, 0.062], [0.125, 0.25, 0.125], [0.0625,0.125, 0.0625]]}></Matrix>
            <p> C'est le reseau de neurones convolutif qui determinera les poids reels pour faire de la classification d'images </p>
            <p> Pour gerer les bords de l'image on ajoute du padding a l'image pour ne pas perdre de données aux bords de l'image </p>
            
        </Item>
        <Item title="Couches de convolution" onMountCb={registerChildComponent}>
            <p>C'est un partie du reseau de neurones convolutif</p>
            <p> Si l'on utilise des resaux de neurones artificiels classiques, le nombre de parametres sera trop importants, lorsque l'on traite les images</p>
            <p> Reduction de la connectivité locale , tout les neurones ne seront pas entierment connecté </p>
            <p> Ils sont plutot connecté a un sous ensemble de neurones locaux dans la couche suivante, qui finissent par devenir les filtres </p>
            <p> On peut choisir le nombre de filtre appliqué a une image </p>
            <p> le reseau se charge d'apprendre les meilleurs poids pour le filtre </p>
            <p> Il faut preserver les informations bidimenstionelles dans la couches de convolution </p>
            <p> On obtient donc des connexion localisée a partir des images fournis en input, des valeurs de pixels, qui vont etre connectée a des sous ensemble de neurones seulement dans la couche suivante  </p>
            <p> Se fesant nous determinons un filtre, qui va ensuite se voir attribué un poids par le reseaux pendant l'entrainement </p>
            <p> On repete le processus avec d'autres filtes si besoin, c'est en empilant ces filtres ensemble que l'on obtient la couche </p>
            <p> Il est possible d'empiler plusieurs couches convolutive </p>
            <p> le reseau peut alors decouvrir des modeles a l'interieur d'autres modeles </p>
        </Item>
        <Item title="Images en couleurs" onMountCb={registerChildComponent}>
           <p> On apprehende les images comme des tensor ou vecteurs tridimensionels </p>
           <p> les trois dimensions correspondants a des niveaux de rouge vert et bleu  RGB </p>
           <p> chaque niveau de couleur aura un niveau d'intensité different</p>
           <div> 
            <p>la matrice de couleur à alors 3 dimensions </p>
            <ul class="p-2">
                <li>la largeur </li>
                <li> la hauteur </li>
                <li>les niveaux de couleurs </li>
            </ul>
           </div>
           <p> l'ordre des couleurs n'importe pas </p>
        </Item>
        <Item title="Couche de Pooling" onMountCb={registerChildComponent}>

        </Item>
        <Item title="Pratique MNIST" onMountCb={registerChildComponent}>
            <p> On importe le dataset depuis keras qui contient des images correspondant a des representation de chiffres  </p>
            <Codecomp>
                from tensorflow.keras.datasets import mnist
            </Codecomp>
           <p> On charge les images regroupé dans des groupes d'entrainement et de test </p>
           <Codecomp>
            (x_train, x_test),(y_train, y_test ) = mnist.load_data()
           </Codecomp>
           <p> dans les features x on a 6000 tableau de 28 px sur 28 px </p>
           <Codecomp>
            x_train.shape
           </Codecomp>
            <p> pour les y ou les label, on a un tableau simple de 6000 labels </p>
            <p> on utilise alors le one hot encoding puisqu'il s'agit d'une classification </p>
            <Codecomp>
                from tensorflow.keras.utils import to_categorical

                y_categorical_test = to_categorical(y_test)
                y_categorical_train = to_categorical(y_train)
            </Codecomp>
            <p> ensuite il faut normaliser les données, on veux des valeurs entre 0 et 1</p>
            <p> pour cela on divise simlpement par 255 la valeur maximale du pixel </p>
            <Codecomp>
                x_train = x_train / 255
                x_test = x_train / 255
            </Codecomp>
            <p> on reshape nos données pour ajouter le nombre de canaux de couleurs </p>
            <Codecomp>
                # taille de l'echantillon , argeur, hauteur, canaux de couleurs
                x_test = x_test.reshape(6000,28,28, 1)
            </Codecomp>

        </Item>

       
    </div>

</div>