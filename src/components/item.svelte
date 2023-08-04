<script lang="ts">

$: style = "nothidden"

export let color:string
export let title:string


function clickHandler(e:MouseEvent){
    e.preventDefault()
    style = "nothidden"

}

</script>



<div class="colorclass p-2 ml-5 relative" 
     style="--color: {color}" 
     >
        <h2 class="text-center rounded w-1/3 absolute -top-2">{title}</h2>
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

