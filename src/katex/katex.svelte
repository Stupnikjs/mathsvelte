<script lang="ts">
    import katexify from "../functions/Katexify";
    export let text:string
</script>

<div class="inline">
    {@html katexify(`${text}`, false)}
</div>