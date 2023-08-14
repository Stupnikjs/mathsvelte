<script>
    import Header from "../components/header.svelte";
    
    import "../style/app.css";
</script>



<Header></Header>
<slot />


<style>
 
    :global(.voltaire){
     font-family: "Voltaire", sans-serif;
    
    }
 </style>