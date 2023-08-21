<script>
import icon from "../static/favicon.png"
import vercel from "../static/vercel.svg"
import three from "../static/three.png"
</script>

<footer  class="footer items-center text-center voltaire w-full  text-xs h10 block">
    <div class="flex justify-around items-center h-full fontsize">
        <p>developpé avec SvelteKit <img src={icon} class="w-1/4 inline" alt="svelte"></p>
        <p> Three js <img src={three} alt="threejs" class="w-1/4 vercel inline"></p>
        <p>mathjs</p>
        <p>hébérgé sur vercel <img src={vercel} alt="vercel" class="inline vercel"> </p>
    </div>

</footer>


<style>
    .footer{
        background-color: black;
        color: white; 
        z-index: 2;
       

    }
    .voltaire{
        font-family: "Voltaire", sans-serif;
    }
    .vercel{
        filter: invert();
        height: 50px; 

    }
    
</style>