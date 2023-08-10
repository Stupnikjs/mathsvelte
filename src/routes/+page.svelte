<script lang="ts">
    import "../style/style.css" 
    import "@fontsource/voltaire" 
    import icon from "../static/favicon.png"
    

    
    function returnWidth(width:number){
      if (width  < 900) return ".5rem"
      else return "1rem"
    }

    

</script>


<div  class="voltaire flex items-center justify-center w-full bg-red-50">
  <h1 class="voltaire inline"> Bienvenue sur MathSvelte </h1>
   <div>
      <img src={icon} alt="svelte" class="h-12">
   </div> 
</div>
<div class="voltaire flex justify-center flex-col items-center p-5">
  <p> Apprend les fondements mathematiques du MachineLearning </p>
  <p> Discipline qui revolutionne le monde </p>
</div>






<style>
 
   .voltaire{
    font-family: "Voltaire", sans-serif;
   
   }
</style>