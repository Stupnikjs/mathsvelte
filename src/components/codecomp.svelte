<script>
   
$: show = false

</script>


<button  class="bg-yellow-100 p-2 w-1/3 m-auto" on:click={() => { show = !show}}> Code </button>
{#if show}
<pre class={" fontsize codeclass overflow-x-scroll border-2 border-indigo-100" }>
    <code class="text-white fontFamily ">
       <slot/>
    </code>   
</pre>
{/if}

<style>

    .codeclass{
        
        background-color: rgb(143, 160, 176);
        color: yellow;

    }
    .show{
        display: block;
    }
    .noshow{
        display: none;
    }

    .fontFamily{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: rgb(224, 224, 144)
    }
</style>
