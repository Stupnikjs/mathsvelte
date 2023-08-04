<script lang="ts">
    import katexify from "../functions/Katexify";
    export let text:string
</script>

<div>
    {katexify(`${text}`, false)}
</div>