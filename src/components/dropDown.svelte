<script lang="ts">
    import { deleteBlank } from "../functions/deleteBlank";

    
    export let title:string
    export let items: string[]
    $: dropDown = "nodropdown"
    $: hoverIndex = -1

</script>


<!-- svelte-ignore a11y-no-static-element-interactions -->
<div  class="relative"
on:mouseenter={ () => { dropDown = "dropdown"}}  
on:mouseleave={() => { dropDown = "nodropdown"}}>
  <a href={`/${deleteBlank(title)}`} class=" h-full text-center bg-red-200 w-full px-5 text-2xl">{title}</a>
  <div class={dropDown} >
      {#each items as item, ind}
      <li class={hoverIndex === ind ? "hover": "nohover"} 
      id={ind.toString()}
      on:mouseenter={() => { 
        hoverIndex = ind
        }}  
      on:mouseleave={() => { hoverIndex = -1}}
        ><a href={`/${deleteBlank(title)}/${deleteBlank(item)}`}>{item}</a></li>
      {/each}
  </div>
</div>


<style>


.dropdown{
      position: absolute;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: antiquewhite;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: .9rem;
      

      
    }

    .nodropdown{
        display: none;
    }

    .nohover{
        
        width: 100%;
        text-align: center;
    }

    .hover{
        background-color: aliceblue;
        width: 100%;
        text-align: center;

    }
</style>