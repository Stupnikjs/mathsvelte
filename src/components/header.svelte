<script>
    
    import "@fontsource/voltaire";
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
      items : ["ANN", "CNN", "RNN"]
    }

  </script>
  
  <header class="bg-indigo-100 voltaire fixed w-full header h10">
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
    .voltaire {
      font-family: "Voltaire", sans-serif;
      z-index: 1; 
    }
   
  

  </style>
  