<script lang="ts">
import "@fontsource/voltaire"
    import { deleteBlank } from "../functions/deleteBlank";

export let items:string[]

</script>


<aside class="voltaire flex flex-col bg-indigo-50 gap-2 py-4">
    {#each items as item}
        <div class="flex items-center w-10/12 mx-auto">
            <a  href={`#${deleteBlank(item)}`} class="flex-1">{item}</a><i class="fa-solid fa-arrow-right mtop"></i>
        </div>
    {/each}

</aside>


<style> 

.voltaire{
    font-family: "Voltaire", sans-serif;
    font-size: .6rem;
}
.mtop{
    margin-top: .9%;
}

</style>