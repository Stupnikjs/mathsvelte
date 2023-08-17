<script lang="ts">
import "@fontsource/voltaire"
import { deleteBlank } from "../functions/deleteBlank";

$: hoverStatus = -1

export let items:string[]

</script>


<!-- svelte-ignore a11y-no-static-element-interactions -->
<aside class={"voltaire bg-indigo-50 gap-2 py-4"}>
    <div class="fixed w-1/5 my-5 flex flex-col">
        {#each items as item, ind}
        <div class={"flex items-center w-10/12 mx-auto asideItem " + (hoverStatus === ind ? "hovered": "nothovered")} 
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