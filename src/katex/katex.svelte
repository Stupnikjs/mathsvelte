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
  
  <div class={tailwind} bind:this={mathElement}></div>
  
  <style>
    
  </style>