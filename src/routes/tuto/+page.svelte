<script>
    import '@fontsource/voltaire'
</script>

<div>
    <h1 class="bg-red-50 voltaire"> Ceci est un tutoriel Sveltekit </h1>
    <p>Deployer rapidement votre site en utilisant Sveltekit / Docker / fly.io / Tailwindcss </p>
    <div class="m-10">
        <code class="darkcode"> npm create svelte@latest my-app</code>
        <p> Creation du projet Sveltekit </p>
        <code class="darkcode"> npm install </code>
    </div>
    <div>
        <code class="darkcode"> npm install -D tailwindcss postcss autoprefixer </code>
        <p> Instalation des dependances </p>
    </div>
</div>




<style>
    .voltaire{
        font-family: "Voltaire", sans-serif;
    }
    .darkcode{
            margin: 10%; 
            background-color: rgb(28, 5, 50);
            color: rgb(172, 195, 149); 
            padding: 1%;
    }
</style>