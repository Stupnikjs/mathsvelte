<script lang="ts">

  import { browser } from '$app/environment';
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  let el: any;
  $: x = 0.01;
  let l = 1 ; 

  function getAxes (l:number){
      return  [
      new THREE.Vector3(l, 0, 0), // X-axis
      new THREE.Vector3(0, l, 0), // Y-axis
      new THREE.Vector3(0, 0, l), // Z-axis
    ];
      
    }
  const axes = getAxes(l)

  function test(axes:THREE.Vector3[]){
    if (browser) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

    
    axes.forEach((axis) => {
      const points = [new THREE.Vector3(0, 0, 0), axis.addScalar(1)]; // Line from origin to the axis
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      scene.add(line);
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
  
      scene.children[1].rotation.y += x
      scene.children[2].rotation.y += x

      renderer.render(scene, camera);
    };
   
    const resize = () => {
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
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
  }
  test(axes)
  
</script>

<canvas bind:this={el}></canvas>



