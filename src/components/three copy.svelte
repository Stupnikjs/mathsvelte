<script lang="ts">

    import { browser } from '$app/environment'
    import { onMount } from 'svelte'; 
    import * as THREE from 'three';
    
    let el: any;
    $: x = 0.01
    
    if (browser){
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
    const points = [];
    
    points.push( new THREE.Vector3( 0, 1, 0 ));
    points.push( new THREE.Vector3( 1, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 0, 1 ) );

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material)
   
    let renderer: THREE.WebGLRenderer;
    scene.add(line);
    
    camera.position.set(2, 2, 5); // Adjust camera position for a better view of the lines
    camera.lookAt(scene.position);
    
    
    // cliquer sur le vecteur pour l'etirer 
    const animate = () => {
      requestAnimationFrame(animate);
      line.rotation.x += x;
      line.rotation.y += x ; 
      renderer.render(scene, camera);
    };
    
    const resize = () => {
      renderer.setSize(window.innerWidth/2, window.innerHeight/2)
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
<div>hello</div>