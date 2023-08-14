<script lang="ts">

    import { browser } from '$app/environment'
    import { onMount } from 'svelte'; 
    import type * as THREE from 'three';
    import createScene from "./createScene"
   
    export let objArr:THREE.Object3D[]
    let el: any;
    

    if (browser){ 
  
    onMount(() => {     
      let sceneCreate = createScene(objArr) 
      sceneCreate(el)   
    });
    
    
  }

  </script>
  
  
<canvas class="border border-blue-100 border-2" bind:this={el} />
 