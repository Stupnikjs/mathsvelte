<script>
    import { SVG }  from "@svgdotjs/svg.js"
    import { onMount } from "svelte";

   

    onMount(
        () => {
            var draw = SVG().addTo("#app").size(300, 300);
            var rect = draw.rect(500, 100).attr({ fill: '#f06' });
        }
    ) 

</script>


<svg id="app" width="300" height="300">
      <rect width="100" height="100" fill="#f06"></rect>
</svg>

