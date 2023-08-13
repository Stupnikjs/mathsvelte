<script lang="ts">
    import Codecomp from "../../../components/codecomp.svelte";
    import Three from "../../../three/three.svelte";
    import Threecss2D from "../../../three/threecss2D.svelte";
    import * as THREE from "three" ; 

    let lines = [] as any 

    function returnLine(arr:number[][], color:string){
    const material = new THREE.LineBasicMaterial( { color: color } );
    const points = [];
      
    points.push( new THREE.Vector3( ...arr[0]));
    points.push( new THREE.Vector3( ...arr[1]));


    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material)
    return line
    }

    let lineX = returnLine([[0,0,0], [1, 0, 0]], "yellow")
    let lineY = returnLine([[0,0,0], [0, 1, 0]], "red")
    let lineZ = returnLine([[0,0,0], [1, 0, 1]], "blue")

    lines.push(lineX)
    lines.push(lineY) 
    lines.push(lineZ)

</script>
<main class="voltaire">
    <h1> three js est un bibliothèque Javascript 3D </h1>
    <section>
        <div class="flex flex-col">
            <h2> il repose sur une hierarchie de composant</h2>
            <h3>le composant principal est la scene </h3>
            <Codecomp>
                const scene = new THREE.Scene();
            </Codecomp>
            <p> Puis viens la camera qui est le deuxième element indispensable car c'est le point de vue </p>
            <Codecomp>
                const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            </Codecomp>
            <p> Prenons l'exemple très simple ou l'ou crée une ligne </p>
            <Codecomp>
                {`
                const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
                const points = [];
                
                points.push( new THREE.Vector3(0,0,1)); // les coordonées du premier point 
                points.push( new THREE.Vector3(1,0,1)); // les coordonées du second point  
                
                
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                const line = new THREE.Line(geometry, material)`}
            </Codecomp>
        </div>
        <Three objArr={[...lines]}></Three>
    </section>
   
   
</main>