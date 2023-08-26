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



<div class="pt-20  mx-auto w-4/5 fontsize" id={`${deleteBlank(title)}`}>
        
        <h2 class="bg-yellow-50 pl-10 mb-2 shaddow merri">{title}</h2>
        <div class={style + " flex flex-col gap-2 fontsize border border-blue-100 p-2 bg-purple-50"}>
            <slot></slot>
        </div>
        
</div>
<div class="separateur w-4/5 mx-auto mb-5" ></div>

<style>
    .separateur{
        border-top: 0.5px solid grey;
    }
    h2{
        font-size: 1.7rem; 
        white-space: nowrap;
        background-color: black;
        color: white; 
       
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

