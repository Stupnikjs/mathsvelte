<script lang="ts">
    import "../style/style.css" 
    import "@fontsource/voltaire" 
    import "@fontsource/lato"
    import "@fontsource/rajdhani"
 
    function returnWidth(width:number){
      if (width  < 900) return ".5rem"
      else return "1rem"
    }
 
</script>

    <nav class="w-full bg-green-50 lato flex justify-around">
        <a href="/blog">Blog</a>  
        <a href="/projet">Projets</a>
    </nav>
    <div class="bg-gray-200 p-5 m-5 rajdhani">

        <h1>Boudier Nicolas</h1>
        <div>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>

        </div>
    </div>
   

    
   

  

<style>
    .lato{
        font-family: 'Lato', sans-serif;
    }
</style>