<script lang="ts">
    import katexify from "../functions/Katexify";

    export let text:string
    export let center: boolean

    $: display = center?  "block": "flex"

</script>


<div class="katex" style="--display: {display}">
    {@html katexify(`${text}`, true)}
</div>

<style>

    .katex{
        display: var(--display)
    }
</style>