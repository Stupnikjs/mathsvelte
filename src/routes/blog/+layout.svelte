<script lang="ts">
    import { browser } from "$app/environment";
    import Header from "../../components/header.svelte";
    import "../../style/app.css";
    
    
    let myclasses = "gridtemp fontsize"; // Initial classes
    

    function updateClasses() {
        if(browser){
            if (window.innerWidth <= 900) {
            myclasses = "nogridtemp smallfont min-full-h h10 smallasideItem noaside flex-1";
        } else {
            myclasses = "gridtemp bigfont min-full-h bigasideItem aside flex-1";
        }
        }
       
    }
    
    // Update classes when the window is resized
    if (browser) window.addEventListener('resize', updateClasses);
    
    // Call the update function initially
    updateClasses();
    



</script>


        <div class="flex flex-col">
            <Header></Header>
            <div class={myclasses}>
                    <slot />
            </div>
        </div>
        
        
        
        

<style>
   
    
    
 </style>