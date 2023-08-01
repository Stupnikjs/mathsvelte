<script>
    
    import Vectors from "../../components/vectors.svelte";

    const vecteursDeBase = [
    { x: 100, y: 0, z:0}, // Vecteur de base 1
    { x: 0, y: 100, z: 100 },  // Vecteur de base 2
    { x: 0, y: 0, z: 100 },
  ];
</script>


<Vectors vecteursDeBase={vecteursDeBase}></Vectors>