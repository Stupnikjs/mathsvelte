<script lang="ts">
 
import Three from "./three.svelte";
import * as THREE from "three"; 
export let arr:number[][]; 

 
 function getLine(arr:number[][]){
    const lines = []
    for ( let i = 0; i < arr.length - 1 ; i+=2 ){

        const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
        const points = [];
        
        points.push( new THREE.Vector3( ...arr[i] ));
        points.push( new THREE.Vector3( ...arr[i + 1 ] ));
        
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material)
       

        lines.push(line)
        
    }
    
    return lines
 }



</script>
<style>
    
</style>




<Three objArr={getLine(arr)}></Three>