<script lang="ts">
    import { browser } from "$app/environment";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/header.svelte";  
    import "../style/app.css";
    
    
    let myclasses = "gridtemp fontsize"; // Initial classes
    if (browser) console.log(window.innerWidth)

    function updateClasses() {
        if(browser){
            if (window.innerWidth <= 900) {
            myclasses = "nogridtemp smallfont min-full-h h10 smallasideItem noaside";
        } else {
            myclasses = "gridtemp bigfont min-full-h bigasideItem aside";
        }
        }
       
    }
    
    // Update classes when the window is resized
    if (browser) window.addEventListener('resize', updateClasses);
    
    // Call the update function initially
    updateClasses();
    



</script>



    
        <div class="relative">
            <Header></Header>
            <div class={myclasses}>
                    <slot />
            </div>
        </div>
        <Footer></Footer>
        
        
        

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
    
 </style>