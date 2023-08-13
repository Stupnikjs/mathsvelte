<script lang="ts">
import * as THREE from "three";
import Three from "./three.svelte"
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

export let arr: any; 

let lines: any =  [] 

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




<div class="three">
    <Three objArr={[...lines]}></Three>
</div>



<style>
    .three{
      position:relative
    }
    
  </style>