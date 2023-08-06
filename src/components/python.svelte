<script>

    $: show = false
</script>



<button  class="bg-yellow-100 p-2" on:click={() => { show = !show}}>Example en Python</button>
{#if show}
<pre class={"smallfont bg-black overflow-x-scroll" }>
    <code class="text-white" >
       <slot/>
    </code>   
</pre>
{/if}

<style>

    .smallfont{
        font-size: .45rem;
    }
    .show{
        display: block;
    }
    .noshow{
        display: none;
    }

</style>

