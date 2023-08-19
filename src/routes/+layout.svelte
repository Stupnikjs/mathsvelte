<script>
    import Footer from "../components/Footer.svelte";
    import Header from "../components/header.svelte";  
    import "../style/app.css";
</script>



<Header></Header>
<slot />
<Footer></Footer>


<style >
 
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

    
        :global(.gridtemp){
            display: grid;
            grid-template-columns: 25% 1fr;
        }
        :global(.asideItem){
        border: .2px solid rgb(138, 138, 173);
        padding: 1%;
    }
    
        :global(.asideItem > i){
          display: none;
    }
        
    

    :global(.katex-html){
    display: none;
}
 </style>