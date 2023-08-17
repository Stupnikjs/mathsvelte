<script lang="ts">
    import { browser } from "$app/environment";
    import * as THREE from "three";
    import createScene from "./createScene";
    import { onMount } from "svelte";
    


    let el:any ; 
    $: count = 0 
    const r = 100;
    

    const createLine = () => {
        const geometry = new THREE.BufferGeometry();
		const material = new THREE.LineBasicMaterial( { vertexColors: true } );
                
		const positions = [];
		const colors = [];

		for ( let i = 0; i < 1000; i ++ ) {

            const x = Math.random() * r - r / 2;
            const y = Math.random() * r - r / 2;
            const z = Math.random() * r - r / 2;

            // positions

            positions.push( x, y, z );

            // colors

            colors.push( ( x / r ) + 0.5 );
            colors.push( ( y / r ) + 0.5 );
            colors.push( ( z / r ) + 0.5 );

			}

            geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
            geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
            

            geometry.computeBoundingSphere();
            generateMorphTargets(geometry)

            return new THREE.Line( geometry, material );
   }

   let line = createLine()

   function generateMorphTargets(geometry:THREE.BufferGeometry) {
        const data = [];
        for ( let i = 0; i < 1000; i ++ ) {

            const x = Math.random() * r - r / 2;
            const y = Math.random() * r - r / 2;
            const z = Math.random() * r - r / 2;

            data.push( x, y, z );

        }

        const morphTarget = new THREE.Float32BufferAttribute( data, 3 );
        morphTarget.name = 'target1';

        geometry.morphAttributes.position = [ morphTarget ];

    }
    function clickHandler(){
        let target = document.querySelector("#target")
        return target
    }
    function onAnimate(){
            line.rotation.x += .01
            line.rotation.y += .01
            line.rotation.y -= .01
    }
    function onResize(){}

    onMount(() => {
        let element = clickHandler()
        createScene([line],onAnimate,onResize)(el, element!)
    })

</script>


<div id="target" class="w-full bg-black overflow-hidden border border-indigo-50 border-4 rounded"></div>