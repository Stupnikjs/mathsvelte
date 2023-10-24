<script lang="ts">
    import { deleteBlank } from "../functions/deleteBlank";

    
    export let title:string
    export let items: string[]
    $: dropDown = "nodropdown"
    $: hoverIndex = -1

</script>


<!-- svelte-ignore a11y-no-static-element-interactions -->
<div  class="relative flex-1 flex"
on:mouseenter={ () => { dropDown = "dropdown"}}  
on:mouseleave={() => { dropDown = "nodropdown"}}>
  <a href={`/${deleteBlank(title)}`} class="link h10 flex items-center justify-center  text-2xl text-center">{title}</a>
  <div class={dropDown}>
      {#each items as item, ind}
      <li class={hoverIndex === ind ? "hover": "nohover"} 
      id={ind.toString()}
      on:mouseenter={() => { 
        hoverIndex = ind
        }}  
      on:mouseleave={() => { hoverIndex = -1}}
        ><a href={`/blog/${deleteBlank(title)}/${deleteBlank(item)}`}>{item}</a></li>
      {/each}
  </div>
</div>


<style>


.dropdown{
      position: absolute;
      top: 100%;
      width: 50%;
      left: 25%;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: antiquewhite;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 1.2rem;

      
    }
  .link{
    flex: .5; 
    margin: auto;
    
    font-size: 2rem;
  

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