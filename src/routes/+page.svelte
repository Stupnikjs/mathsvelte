<script lang="ts">
    import "../style/style.css" 
    import "@fontsource/voltaire" 
    import icon from "../static/favicon.png"
    

    
    function returnWidth(width:number){
      if (width  < 900) return ".5rem"
      else return "1rem"
    }

    

</script>


<div  class="voltaire flex items-center justify-center w-full bg-red-50 p-5 flex-col min-full-h">
  <h1 class="voltaire inline"> Bienvenue sur MathSvelte </h1>
   <div>
      <img src={icon} alt="svelte" class="h-12">
   </div> 
   <h2> Blog éducatif consacré aux Mathematiques, au developpement et Machine Learning</h2>

</div>







<style>
   
  
</style>