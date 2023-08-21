<script lang="ts">
    import { browser } from "$app/environment";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/header.svelte";  
    import "../style/app.css";
    
    
    let myclasses = "gridtemp fontsize"; // Initial classes
    
    function updateClasses() {
        if(browser){
            if (window.innerWidth <= 1000) {
            myclasses = "gridtemp smallfont h10 smallasideItem";
        } else {
            myclasses = "gridtemp bigfont min-full-h bigasideItem";
        }
        }
       
    }
    
    // Update classes when the window is resized
    if (browser) window.addEventListener('resize', updateClasses);
    
    // Call the update function initially
    updateClasses();
    



</script>



    <Header></Header>
    <div class={myclasses}>
        <slot />
    </div>
    <Footer></Footer>




<style>
   
    :global(.voltaire){
     font-family: "Voltaire", sans-serif;
    
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
            min-height: 90vh;
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
    :global(.min-full-h){
      min-height: 90vh;
    }
 </style>