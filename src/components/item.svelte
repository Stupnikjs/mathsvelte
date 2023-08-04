<script lang="ts">

$: style = "nothidden"

export let color:string
export let title:string


function clickHandler(e:MouseEvent){
    e.preventDefault()
    style = "nothidden"

}

</script>



<div class="colorclass p-5 mx-auto relative my-4 w-4/5 " 
     style="--color: {color}" 
     >
        <h2 class="text-center rounded w-1/4 absolute -top-2">{title}</h2>
        <div class={style + " flex flex-col gap-2 text-xs"}>
            <slot></slot>
        </div>
        
</div>

<style>
    .colorclass{
        background-color: var(--color);
        box-shadow: .1em .1em .1em .1em gray;
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

