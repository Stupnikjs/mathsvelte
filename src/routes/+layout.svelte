<script>
    import Footer from "../components/Footer.svelte";
import Header from "../components/header.svelte";
    
    import "../style/app.css";
</script>



<Header></Header>
<slot />
<Footer></Footer>


<style>
 
    :global(.voltaire){
     font-family: "Voltaire", sans-serif;
    
    }
 </style>