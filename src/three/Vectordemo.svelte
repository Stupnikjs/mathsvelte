<script lang="ts">
  
    import * as THREE from "three" ; 
    import createScene from "./createScene";
    import { browser } from "$app/environment";

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



<div class="flex h-full">
    <div id="target" class="w-1/2 bg-black overflow-hidden"></div>
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