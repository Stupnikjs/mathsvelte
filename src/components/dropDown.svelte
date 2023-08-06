<script lang="ts">
    
    export let title:string
    export let items: string[]
    $: dropDown = "nodropdown"
    $: hoverIndex = -1

</script>


<!-- svelte-ignore a11y-no-static-element-interactions -->
<div  class=""
on:mouseenter={ () => { dropDown = "dropdown"}}  
on:mouseleave={() => { dropDown = "nodropdown"}}>
  <a href="/math/matrix" class="relative h-full">{title}</a>
  <div class={dropDown} >
      {#each items as item, ind}
      <li class={hoverIndex === ind ? "hover": "nohover"} 
      id={ind.toString()}
      on:mouseenter={() => { 
        hoverIndex = ind
        }}  
      on:mouseleave={() => { hoverIndex = -1}}
        >{item}</li>
      {/each}
  </div>
</div>


<style>


.dropdown{
      position: absolute;
      padding: 2%;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: antiquewhite;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    .nodropdown{
        display: none;
    }

    .nohover{
        display: flex;
    }

    .hover{
        background-color: aliceblue;
    }
</style>