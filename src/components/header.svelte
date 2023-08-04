<script>

    import "@fontsource/voltaire"

    let list = [ "exaple", "michel"]
    $: dropdown = false 
</script>

<header class="bg-indigo-100 voltaire">
    <nav>
        <div class="flex items-center justify-around">
            
            <div> <a href="/math/matrix">Algebre Linéaire</a>      
            </div>
            {#if dropdown }
                {#each list as item }
                    <div>{item}</div>
                {/each}
                {/if}
            <div> <a href="/programmation">Programation</a> </div>
        </div>
    </nav>
</header>

<style>
    .voltaire{
        font-family: "Voltaire", sans-serif;
    }
</style>