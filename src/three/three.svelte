<script lang="ts">

  import { browser } from '$app/environment'
  import {  onMount } from 'svelte'; 
  import * as THREE from 'three';
  import  { OrbitControls } from 'three/addons/controls/OrbitControls.js';
  import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
  
  export let objArr:any
  
  let el: any;
  let labelRenderer: any; 
  
  
  if (browser){
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  
 


  let renderer: THREE.WebGLRenderer;
  

  for (let obj of objArr){
    const div = document.createElement( 'div' );
    div.className = 'label';
    div.textContent = 'Earth';

    div.style.backgroundColor = 'transparent';
    div.style.fontSize = '.7rem';

    const label = new CSS2DObject( div );
    label.position.set( -1.5 , -2, 0 );
    label.center.set( 0, 1 );
    obj.add(label)
    label.layers.set( 0 );
    scene.add(obj);
  }

  
  

  camera.position.set(1, 3, 6); // Adjust camera position for a better view of the lines
  camera.lookAt(scene.position);
  camera.layers.enable(0)


  
  const animate = () => {
    requestAnimationFrame(animate);
    
    
    renderer.render(scene, camera);
    labelRenderer.render( scene, camera );
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
    
    labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize( window.innerWidth, window.innerHeight );
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.color = 'white';

    labelRenderer.domElement.style.top = '0px';
    document.body.appendChild( labelRenderer.domElement );
   
    const controls = new OrbitControls(camera, labelRenderer.domElement )
    controls.update();
    resize();
    animate();
    
  }
  
  
  
  onMount(() => { 
    
    createScene(el)
    
  });



}
 


</script>

<div style="position:relative">
<canvas class="m-auto" bind:this={el} />
</div>
