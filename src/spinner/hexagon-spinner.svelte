<svelte:options immutable />

<script>
    import wsx from "../wsx.mjs"

    export let size = "100px"
    export let color = "@primary"

    $: wind = {
        ...$$restProps,
        "@size": size,
        "$color": color,
    }
</script>

<ws-hexagon-spinner use:wsx={wind} style="aspect-ratio: 1 / 1;" />
