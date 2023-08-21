<script lang="ts">
import { onMount } from "svelte";
import { deleteBlank } from "../functions/deleteBlank";

$: style = "nothidden"

export let title:string
export let onMountCb: Function

onMount(() => {
    onMountCb(title)
  });



</script>



<div class="pt-20  mx-auto relative  w-4/5 fontsize" id={`${deleteBlank(title)}`}>
        
        <h2 class=" rounded bg-pink-50 p-2 mb-2 shaddow">{title}</h2>
        <div class={style + " flex flex-col gap-2 fontsize border border-blue-100 p-2 bg-purple-50"}>
            <slot></slot>
        </div>
        
</div>

<style>
    h2{
        font-size: 2rem; 
        white-space: nowrap;
    }
    .separateur{
        border-bottom: 1px solid rgb(182, 179, 179);
        
    }
    .hidden{
        display: none;
    }
    .nothidden{
        display: flex;
    }
    
   
    .shaddow{
        box-shadow: .01rem .01rem .1rem gray;
    }
</style>

