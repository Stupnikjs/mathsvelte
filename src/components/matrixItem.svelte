<script lang="ts">

$: style = "hidden"

export let color:string
export let title:string

function clickHandler(e:MouseEvent){
    e.preventDefault()
    style = "nothidden"

}

</script>



<div class="p-4 m-4 flex flex-col  colorclass" 
     style="--color: {color}" 
     >
        <h2>{title}</h2>
        <button  class="bg-gray-50 w-1/3 m-auto mb-5" on:click={ (e) => clickHandler(e)}> Afficher </button>
        <div class={style + " flex flex-col gap-2 text-xs"}>
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

