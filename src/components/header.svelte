<script>
    
    import "@fontsource/voltaire";
    import DropDown from "./dropDown.svelte";
  
    let mathDrop = {
      title: "math",
      items : ["matrice", "vecteur"]
    }
    let codeDrop = {
      title: "programmation",
      items : ["python", "javascript"]
    }

    let dataDrop = {
      title: "data", 
      items : ["pandas", "analyse", "machine learning"]
    }

  </script>
  
  <header class="bg-indigo-100 voltaire h-8 fixed w-full">
        <nav class="h-full flex items-center justify-around">
            <DropDown
            {...mathDrop}>
            </DropDown> 
            <DropDown
            {...codeDrop}>
            </DropDown>    
            <DropDown
            {...dataDrop}>
            </DropDown>    
               

        </nav>
        
  </header>
  
  <style>
    .voltaire {
      font-family: "Voltaire", sans-serif;
      z-index: 1; 
    }
  

  </style>
  