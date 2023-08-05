<script lang="ts">

$: style = "nothidden"

export let title:string


function clickHandler(e:MouseEvent){
    e.preventDefault()
    style = "nothidden"

}

</script>



<div class=" p-5 mx-auto relative my-4 w-4/5 ">
        <div class="separateur"></div>
        <h2 class="text-center rounded w-1/4 absolute -top-2">{title}</h2>
        <div class={style + " flex flex-col gap-2 text-xs"}>
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
   
   
</style>

