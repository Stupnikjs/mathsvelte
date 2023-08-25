<script lang="ts">
import "@fontsource/voltaire"
import { deleteBlank } from "../functions/deleteBlank";
    import { browser } from "$app/environment";

$: hoverStatus = -1

export let items:string[]

let myclasses = "gridtemp fontsize"; // Initial classes
    
    function updateClasses() {
        if(browser){
            if (window.innerWidth <= 900) {
            myclasses = "smallasideItem";
        } else {
            myclasses = "bigasideItem";
        }
        }
       
    }
    
    // Update classes when the window is resized
    if (browser) window.addEventListener('resize', updateClasses);
    
    // Call the update function initially
    updateClasses();
</script>


<!-- svelte-ignore a11y-no-static-element-interactions -->
<aside class={"voltaire bg-indigo-50 gap-2 pt-10 mt-5 pl-5"}>
    <div class="fixed w-1/5 my-10 flex flex-col">
        {#each items as item, ind}
        <div class={`flex items-center w-10/12 mx-auto" + ${myclasses} + ${hoverStatus === ind ? "hovered": "nothovered"}`} 
             on:mouseenter={() => { hoverStatus = ind}} 
             on:mouseleave={() => { hoverStatus = -1}}>
            <a  href={`#${deleteBlank(item)}`} class="flex-1 mr-1">{item}</a><i class="fa-solid fa-arrow-right mtop mr-2"></i>
        </div>
        {/each}
    </div>
    

</aside>


<style> 


.voltaire{
    font-family: "Voltaire", sans-serif;
    font-size: .35rem;
     
}
.mtop{
    margin-top: .9%;
}

.hovered{
    transition: all .1s;
    transform: translateY(10%);
}

.nothovered{
    display: flex;
}


</style>