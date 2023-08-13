<script lang="ts">

    import { browser } from '$app/environment'
    import { onMount } from 'svelte'; 
    import * as THREE from 'three';
    import { CSS2DRenderer, CSS2DObject } from "three/addons/renderers/CSS2DRenderer.js";
    
    export let objArr:any
    
    let el: any;
    let labelRenderer = new CSS2DRenderer()
    labelRenderer.setSize(window.innerWidth, window.innerHeight)  
    
    $: x = 0.01

  
    
    
    if (browser){

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    

    let renderer: THREE.WebGLRenderer;
    
    
    for (let obj of objArr){
      scene.add(obj);
    }
    
    
   
    scene.add(new AxesHelper())

    camera.position.set(2, 2, 5); // Adjust camera position for a better view of the lines
    camera.lookAt(scene.position);


    // cliquer sur le vecteur pour l'etirer 
    const animate = () => {
      requestAnimationFrame(animate);
      for (let obj of objArr){
        obj.rotation.x += x*0.2 
    }
      
      renderer.render(scene, camera);
      labelRenderer.render(scene, camera)
    };

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight/2)
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };


    const createScene = (el:any) => {
      renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
      resize();
      animate();
    }


    onMount(() => {
      createScene(el)
    });

  }
   
  

</script>
  
<canvas bind:this={el}></canvas>






