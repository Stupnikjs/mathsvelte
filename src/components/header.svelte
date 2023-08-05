<script>
    
    import "@fontsource/voltaire";
    import DropDown from "./dropDown.svelte";
  
    let mathItems = ["matrix", "vector"];
    let codeItems = ["python", "javascript"]
    

  

  </script>
  
  <header class="bg-indigo-100 voltaire h-8">
        <nav class="h-full flex items-center justify-around">
            
              
            <DropDown
            title="Algébre Lineaire"
            items={mathItems}
            >
            </DropDown> 
            <DropDown
            title="Programmation"
            items={codeItems}
            >

            </DropDown>  
            
        </nav>
        
  </header>
  
  <style>
    .voltaire {
      font-family: "Voltaire", sans-serif;
    }
  

  </style>
  