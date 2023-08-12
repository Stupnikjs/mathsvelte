


<script lang="ts">

  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import * as THREE from 'three';


  let el: any;
  $: x = 0;
  $: y = 0;
  $: z = 0;

  let l = 3 ; 

  
  function getAxes (l:number){
      return  [
      new THREE.Vector3(l, 0, 0), // X-axis
      new THREE.Vector3(0, l, 0), // Y-axis
      new THREE.Vector3(0, 0, l), // Z-axis
    ];
      
  }


  const axes = getAxes(l)

  // objectif grandir vecteur via le scalar 
  function test(axes:THREE.Vector3[]){
    const scene = new THREE.Scene();
    if (browser) {
    
    scene.background = new THREE.Color("#3f6ad7")
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const material = new THREE.LineBasicMaterial({ color: "black" });

    
    const lines = axes.map((axis) => {
      const points = [new THREE.Vector3(0, 0, 0), axis.clone().addScalar(1)];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
     

    
      scene.add(line);
      return line;
    });


    let renderer: THREE.WebGLRenderer;

    camera.position.set(5, 5, 5); // Adjust camera position for a better view of the lines
    camera.lookAt(scene.position);

    const animate = () => {
      requestAnimationFrame(animate);

      
      axes.forEach((axis, index) => {
        // Rotate each line around its own axis
        axis.applyAxisAngle(axes[index], x); // Rotate each line around its own axis
       
      });
  
      
      
      renderer.render(scene, camera);
    };
   

    const resize = () => {
      renderer.setSize(window.innerWidth / 4, window.innerHeight / 3);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    const createScene = (el: any) => {
      renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
      resize();
      animate();
    };
    
    onMount(() => {
      createScene(el);
    });
    
  }
  return scene; 
  }
  let scene = test(axes)

  
  
  
  

  

  
</script>

<div class="flex flex-col">
  <canvas class="" bind:this={el}></canvas>
  <fieldset>
    <label for="x">x</label>
    <input type="number" on:input={ (e) => {  x = +e.currentTarget.value }} bind:value={x}>
  </fieldset>
  <fieldset>
    <label for="y">y</label>
    <input type="number" on:input={ (e) => {  y = +e.currentTarget.value }} bind:value={y}>
  </fieldset>
  <fieldset>
    <label for="z">z</label>
    <input type="number" on:input={ (e) => {  z = +e.currentTarget.value }} bind:value={z}>
  </fieldset>
  
</div>






