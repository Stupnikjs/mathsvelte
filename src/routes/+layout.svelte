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
    @media (width < 1000px) {
        :global(.fontsize){
            font-size: .5rem;
        }
    }
    @media (width > 1000px){
    :global(.fontsize){
            font-size: .7rem;
        }
    }
 </style>