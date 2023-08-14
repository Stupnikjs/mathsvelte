<script lang="ts">

    import { browser } from '$app/environment'
    import {  onMount } from 'svelte'; 
    import * as THREE from 'three';
    import  { OrbitControls } from 'three/addons/controls/OrbitControls.js';
   
    export let objArr:THREE.Object3D[]
    
    let el: any;
    let labelRenderer: any; 
  
  
    
    if (browser){ 
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    let renderer: THREE.WebGLRenderer; 
   
    for (let obj of objArr){
      scene.add(obj);
    }
  
    camera.position.set(1, 3, 6); // Adjust camera position for a better view of the lines
    camera.lookAt(scene.position);
    camera.layers.enable(0)

    const animate = () => {
      requestAnimationFrame(animate);  
      renderer.render(scene, camera);
    };
  
    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
  
  
    const createScene = (el:any) => {
      renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
      renderer.setPixelRatio( window.devicePixelRatio );
      
      document.body.appendChild( renderer.domElement );
     
      const controls = new OrbitControls(camera, renderer.domElement )
      controls.update();
      resize();
      animate();
      
    }
   
    onMount(() => {     
      createScene(el)    
    });
  }

  </script>
  
  
<canvas class="m-auto" bind:this={el} />
 