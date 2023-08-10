<script>
   
 $: show = false

</script>


<button  class="bg-yellow-100 p-2" on:click={() => { show = !show}}>Example en Python</button>
{#if show}
<pre class={" codeclass overflow-x-scroll" }>
    <code class="text-white" >
       <slot/>
    </code>   
</pre>
{/if}

<style>

    .codeclass{
        
        background-color: rgb(47, 61, 74);
        color: yellow;

    }
    .show{
        display: block;
    }
    .noshow{
        display: none;
    }

</style>
