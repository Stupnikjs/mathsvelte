<script lang="ts">
    
    import katex from "katex";
    import { onMount } from "svelte";
  
    export let text: string;
    export let tailwind:string; 
  
    let mathElement:HTMLElement; 
    
  
  
    function renderMath(text:string) {
      try {
        // Convert LaTeX math expression to HTML using katex function
        const htmlContent = katex.renderToString(text, { displayMode: false });
        mathElement.innerHTML = htmlContent;
      } catch (error) {
        // Handle any errors that occur during rendering
        console.error("Error rendering math:", error);
        mathElement.innerHTML = ""; // Clear the content in case of errors
      }

    }
    
    onMount(() => renderMath(text)) 

  </script>
  
  <div class={tailwind + " bg-orange-100 w-1/2 flex justify-center p-2 shaddow min-width"} bind:this={mathElement}></div>
  
  <style>
    .min-width{
      min-width: 10vw;
    }
  </style>