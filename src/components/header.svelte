<script>
    
    import "@fontsource/voltaire";
  
    let list = ["example", "michel"];
    $: dropdown = "nodropdown";
  

  </script>
  
  <header class="bg-indigo-100 voltaire h-8">
        <nav class="h-full flex items-center justify-around">
            <div>
                <a href="/math/matrix" class="relative" on:mouseenter={ () => { dropdown = "dropdown"}} 
                    on:mouseleave={() => { dropdown = "nodropdown"}}>Algebre Linéaire</a>
                <div class={dropdown}>
                    {#each list as item}
                    <li class="item">{item}</li>
                    {/each}
                </div>
              
            </div>
            <div><a href="/programmation">Programmation</a></div>
        </nav>
        
  </header>
  
  <style>
    .voltaire {
      font-family: "Voltaire", sans-serif;
    }
  
    .dropdown{
      position: absolute;
      padding: 2%;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: antiquewhite;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    .nodropdown{
        display: none;
    }
  </style>
  