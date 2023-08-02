<script lang="ts">

$: style = "hidden"

export let color:string
export let title:string


</script>



<div class="p-4 m-4 flex flex-col gap-2 colorclass" 
     style="--color: {color}" 
     on:focus={() => { style = "nothidden"}}
     >
        <h2>{title}</h2>
        <div class={style}>
            <slot></slot>
        </div>
        
</div>

<style>
    .colorclass{
        background-color: var(--color);
    }
    h2{
        background-color: black;
        color: rgb(152, 226, 72); 
        margin-bottom: 2rem;
    }
    .hidden{
        display: none;
    }
    .nothidden{
        display: flex;
    }
</style>

