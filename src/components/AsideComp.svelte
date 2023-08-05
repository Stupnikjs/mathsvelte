<script lang="ts">
import "@fontsource/voltaire"
    import { deleteBlank } from "../functions/deleteBlank";

export let items:string[]

</script>


<aside class="voltaire flex flex-col bg-indigo-50 gap-2">
    {#each items as item}
        <a  href={`#${deleteBlank(item)}`}>{item} <i class="fa-solid fa-arrow-right ml-1"></i> </a>
    {/each}

</aside>


<style> 

.voltaire{
    font-family: "Voltaire", sans-serif;
    font-size: .6rem;
}

</style>