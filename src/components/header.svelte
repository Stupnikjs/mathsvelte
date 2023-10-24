<script>
    
    import "@fontsource/voltaire";
    import "@fontsource/lato";
    import DropDown from "./dropDown.svelte";
  
    let mathDrop = {
      title: "math",
      items : ["matrice", "vecteur", "derivation", "neurones artificiels"]
    }
   

    let dataDrop = {
      title: "data", 
      items : [ "analyse"]
    }
    let machineDrop = {
      title: "deep learning",
      items : ["ANN", "CNN", "Tensorflow"]
    }

  </script>
  
  <header class="bg-indigo-100 lato fixed w-full header h10">
        <nav class="flex items-center h10">
            <DropDown
            {...mathDrop}>
            </DropDown>    
            <DropDown
            {...dataDrop}>
            </DropDown>    
            <DropDown
            {...machineDrop}>
            </DropDown>    
               

        </nav>
        
  </header>
  
  <style>
    
   
    .lato{
      font-family: "Lato", sans-serif;
      z-index:1; 
    }

  </style>
  