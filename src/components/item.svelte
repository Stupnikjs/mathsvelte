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



<div class=" p-5 mx-auto relative my-4 w-4/5" id={`${deleteBlank(title)}`}>
        <div class="separateur"></div>
        <h2 class="text-center rounded w-1/4 absolute -top-2">{title}</h2>
        <div class={style + " flex flex-col gap-2 fontsize"}>
            <slot></slot>
        </div>
        
</div>

<style>
    h2{
        font-size: 1.1rem; 
        white-space: nowrap;
    }
    .separateur{
        border-bottom: 1px solid gray;
        margin-bottom: 1rem;
    }
    .hidden{
        display: none;
    }
    .nothidden{
        display: flex;
    }
    .fontsize{
        font-size: 0.6rem;
    }
   
</style>

