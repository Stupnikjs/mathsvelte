<script lang="ts">
    import "../style/style.css" 
    import "@fontsource/voltaire" 
    import icon from "../static/favicon.png"
    import TestTrain from "../three/TestTrain.svelte";
    import OnlineEx from "../three/OnlineEx.svelte";
    

    
    function returnWidth(width:number){
      if (width  < 900) return ".5rem"
      else return "1rem"
    }

    

</script>



   <div style=" background-color:beige">
     <OnlineEx ratio={4}></OnlineEx>
     
   </div>
   <div class="p-5 bg-indigo-100 voltaire py-20 text-3xl">
      
    <div class="bg-indigo-300 p-5 text-center mt-10">
      <h1 class="voltaire  text-center"> Bienvenue sur MathSvelte </h1>
      <h2> Blog éducatif consacré aux Mathematiques, au developpement et Machine Learning </h2>
    </div>  
    
      
   </div> 
  









<style>
   
  
</style>