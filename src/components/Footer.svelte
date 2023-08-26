<script>
import icon from "../static/favicon.png"
import vercel from "../static/vercel.svg"
import three from "../static/three.png"
</script>

<footer  class="footer items-center text-center voltaire w-full  text-xs ">
    <div class="flex justify-around items-center h-full fontsize">
        <p>developpé avec SvelteKit <img src={icon} class="w-1/4 inline" alt="svelte"></p>
        <p>Tailwindcss </p>
        <p>hébérgé sur vercel <img src={vercel} alt="vercel" class="inline vercel"> </p>
    </div>

</footer>


<style>
    .footer{
        background-color: black;
        color: white; 
        flex:0;
        
       
    }

    .voltaire{
        font-family: "Voltaire", sans-serif;
    }
    .vercel{
        filter: invert();
        height: 50px; 

    }
    
</style>