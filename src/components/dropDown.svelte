<script lang="ts">
    export let title:string
    export let items: string[]
    $: dropDown = "nodropdown"
    $: itemHover = "nohover"

</script>


<!-- svelte-ignore a11y-no-static-element-interactions -->
<div  class=""
on:mouseenter={ () => { dropDown = "dropdown"}}  
on:mouseleave={() => { dropDown = "nodropdown"}}>
  <a href="/math/matrix" class="relative h-full">{title}</a>
  <div class={dropDown} >
      {#each items as item, ind}
      <li class={itemHover} 
      id={ind.toString()}
      on:mouseenter={(e) => { 
        if(e.target && e.target.id === ind.toString()) itemHover = "hover" 
        }}  
      on:mouseleave={() => { dropDown = "nodropdown"}}
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