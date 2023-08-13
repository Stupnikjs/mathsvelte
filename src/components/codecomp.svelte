<script>
   
$: show = false

</script>


<button  class="bg-yellow-100 p-2 w-1/3 m-auto" on:click={() => { show = !show}}> Code </button>
{#if show}
<pre class={" codeclass overflow-x-scroll" }>
    <code class="text-white">
       <slot/>
    </code>   
</pre>
{/if}

<style>

    .codeclass{
        
        background-color: rgb(47, 61, 74);
        color: yellow;
        font-size: .7rem;

    }
    .show{
        display: block;
    }
    .noshow{
        display: none;
    }

</style>
