<script lang="ts">
    import katexify from "../functions/Katexify";
    export let text:string
</script>

<div class="p-2 w-2/5">
    {@html katexify(`${text}`, true)}
</div>