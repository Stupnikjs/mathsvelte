<script lang="ts">
    import "../style/style.css" 
    import "@fontsource/voltaire" 
    import "@fontsource/lato"
    import OnlineEx from "../three/OnlineEx.svelte";
    

    
    function returnWidth(width:number){
      if (width  < 900) return ".5rem"
      else return "1rem"
    }

    

</script>



   <div class="p-5 bg-pink-100 voltaire py-20 text-3xl">
      
    <div class="bg-indigo-300 p-5 text-center mt-10 full">
      <h1 class="voltaire  text-center"> Bienvenue sur MathSvelte </h1>
      <h2> Blog éducatif consacré aux Mathematiques, au developpement et Machine Learning </h2>
    </div>   
   </div> 
  









<style>
   .full{
    height: 100vh;
   }
  
</style>