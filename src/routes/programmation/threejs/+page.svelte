<script lang="ts">
    import Codecomp from "../../../components/codecomp.svelte";
    import * as THREE from "three" ; 
    import createScene from "../../../three/createScene";
    import { browser } from "$app/environment";

   $: x = 0 
   $: y = 0 
   $: z = 0 
   $: count = 0 

   let el:any ; 


   const helpers = new THREE.AxesHelper(2)

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

        <div class="flex h-full">
            <div id="target" class="w-1/2 bg-black"></div>
            <div class="flex flex-col justify-center items-center bg-indigo-50 w-1/2">
                <fieldset>
                    <label for="x">x</label>
                    <input name="x" type="number" bind:value={x}/>
                </fieldset>
                <fieldset>
                    <label for="y">y</label>
                    <input name="y" type="number" bind:value={y}/>
                </fieldset>
                <fieldset>
                    <label for="x">z</label>
                    <input name="z" type="number" bind:value={z}/>
                </fieldset>
                <button on:click={clickHandler}> Valider </button>
            </div>
            
        </div>
        
    </section>
   
   
</main>