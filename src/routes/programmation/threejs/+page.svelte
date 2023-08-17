<script lang="ts">
    import Codecomp from "../../../components/codecomp.svelte";
    import * as THREE from "three" ; 
    import createScene from "../../../three/createScene";
    import { browser } from "$app/environment";
    import Plandemo from "../../../three/Plandemo.svelte";
    import TestTrain from "../../../three/TestTrain.svelte"
    import "@fontsource/noto-sans-mongolian"
    import OnlineEx from "../../../three/OnlineEx.svelte";

   $: x = 0 
   $: y = 0 
   $: z = 0 
   $: count = 0 

   let el:any ; 


   const helpers = new THREE.AxesHelper(1)

   const createLine = () => {
    const material = new THREE.LineBasicMaterial( { color: "red" } );
    const points = [];
      
    points.push( new THREE.Vector3( 0,0,0));
    points.push( new THREE.Vector3( x,y,z));


    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return new THREE.Line(geometry, material)
   }
    

 

    function clickHandler(){
    let target = document.querySelector("#target")
    if (browser && target){
        if (count === 0 ) createScene([helpers, createLine()])(el, target)
        if (count > 0 ) {
        let canavas = document.querySelectorAll("canvas")
        canavas.forEach(el => el.remove())
        count = 0
        createScene([helpers, createLine()])(el, target)
        }
        count += 1

    }
    

    
        

    }


</script>

<main class="voltaire fontsize">
    <h1 class=""> three js est un bibliothèque Javascript 3D </h1>
    <section class="mt-8">
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
            <p> Maintenant une imbrication plus complexe de lignes </p>
            <Codecomp>
                {`const geometry = new THREE.BufferGeometry();
				const material = new THREE.LineBasicMaterial( { vertexColors: true } );

				const positions = [];
				const colors = [];

				for ( let i = 0; i < segments; i ++ ) {

					const x = Math.random() * r - r / 2;
					const y = Math.random() * r - r / 2;
					const z = Math.random() * r - r / 2;

					// positions

					positions.push( x, y, z );

					// colors

					colors.push( ( x / r ) + 0.5 );
					colors.push( ( y / r ) + 0.5 );
					colors.push( ( z / r ) + 0.5 );

				}

				geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
				geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
				generateMorphTargets( geometry );

				geometry.computeBoundingSphere();

				line = new THREE.Line( geometry, material );`}
            </Codecomp>
        </div>

       
            
        <TestTrain></TestTrain>
        <OnlineEx></OnlineEx>
        
    </section>
   
   
</main>