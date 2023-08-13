<script lang="ts">
import * as THREE from "three";
import Three from "./three.svelte"

export let arr: number[][]; 

let axisHelper = new THREE.AxesHelper(1.7)

const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const points = [];
    
points.push( new THREE.Vector3( ...arr[0]));
points.push( new THREE.Vector3( ...arr[1]));


const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material)
   

</script>




<div class="three">
    <Three objArr={[axisHelper, line]}></Three>
    <div class="labelx">x</div>
    <div class="labely">y</div>
    <div class="labelz">z</div>
</div>



<style>
    .three{
      position:relative
    }
    .labelx{
      position: absolute;
      top:35%;
      right: 25%;
      color:white;
      font-size: .5rem;
    }
    .labely{
      position: absolute;
      top:10%;
      left: 50%;
      color:white;
      font-size: .5rem;
    }
  
    .labelz{
      position: absolute;
      top:55%;
      right: 55%;
      color:white;
      font-size: .5rem;
    }
  </style>