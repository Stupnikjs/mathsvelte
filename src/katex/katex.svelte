<script lang="ts">
    import katexify from "../functions/Katexify";
    export let text:string
    export let center: boolean
</script>


<div class="katex" style="--display: {center? "flex": "block"}"">
    {@html katexify(`${text}`, true)}
</div>

<style>

    .katex{
        display: `${`;
    }
</style>