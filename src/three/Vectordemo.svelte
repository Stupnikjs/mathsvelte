<script lang="ts">
  
    import * as THREE from "three" ; 
    import createScene from "./createScene";
    import { browser } from "$app/environment";
    import Matrix from "../components/Matrix.svelte";

   $: x = 0 
   $: y = 0 
   $: z = 0 
   $: count = 0 

   let el:any ; 


   const helpers = new THREE.AxesHelper(0.5)

   const createLine = () => {
    const material = new THREE.LineBasicMaterial( { color: "red" } );
    const points = [];
      
    points.push( new THREE.Vector3(0,0,0));
    points.push( new THREE.Vector3(x/2,y/2,z/2));


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


<div class="flex h-full mb-5">
    
    <div id="target" class="w-1/2 bg-black overflow-hidden border border-indigo-50 border-4 rounded"></div>
    <div class="flex flex-col justify-center items-center bg-indigo-50 w-1/2">
        
        <fieldset class="flex items-center">
            <label for="x" class="flex">x </label><div class="w-3 h-3 bg-orange-400"></div>
            <input name="x" type="number" bind:value={x}/>
        </fieldset >
        <fieldset class="flex items-center">
            <label for="y">y</label><div class="w-3 h-3 bg-green-400"></div>
            <input name="y" type="number" bind:value={y}/>
        </fieldset>
        <fieldset class="flex items-center">
            <label for="x">z</label><div class="w-3 h-3 bg-blue-400"></div>
            <input name="z" type="number" bind:value={z}/>
        </fieldset>
        <button on:click={clickHandler}> Valider </button>
    </div>
    
</div>