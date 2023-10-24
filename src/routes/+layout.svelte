<script>
    import "../style/app.css"
    import "@fontsource/ubuntu-mono"
</script>

<slot />


<style>
    :global(.noaside > aside){
        display: none;
    }

    :global(.voltaire){
     font-family: "Voltaire", sans-serif;
    
    }
  
    :global(.roboto){
     font-family: "Roboto", sans-serif;
    
    }
   
    :global(.smallfont){
            font-size: .5rem;
    }
    
   
    :global(.bigfont){
            font-size: 1rem;
    }
    

    
    :global(.gridtemp){
        display: grid;
        grid-template-columns: 25% 1fr;
        
    }

    :global(.nogridtemp){
        display: block;
        
    }

    :global(.smallasideItem){
        border: .2px solid rgb(138, 138, 173);
        font-size: .7rem;
        
    }
    :global(.bigasideItem){
        border: .2px solid rgb(138, 138, 173);
        
        font-size: 1rem;
        
    }
    
    :global(.asideItem > i){
        display: none;
    }
        
    

    :global(.katex-html){
    display: none;
    }

    :global(.h10){
        height: 10vh;
        }

    :global(.rajdhani){
        font-family: "rajdhani", sans-serif;
    }
    :global(.shaddow){
        box-shadow: .01rem .01rem .1rem  gray;
    }

    :global(.ubuntu-mono){
        font-family: "Ubuntu-mono", sans-serif;
    }
</style>