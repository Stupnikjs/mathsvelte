<script>
   
$: show = false
import "@fontsource/noto-sans-mongolian"

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
        
        background-color: rgb(69, 77, 84);
        color: rgb(209, 209, 175);
        

    }
    .show{
        display: block;
    }
    .noshow{
        display: none;
    }

    .fontFamily{
        font-family: "Noto sans mongolian", sans-serif;
        color: rgb(196, 196, 131)
    }
</style>
