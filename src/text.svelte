<svelte:options immutable />

<script>
    import wsx from "./wsx.mjs"

    export let adorn = false
    export let subtitle = false
    export let title = false

    $: wind = {
        "$title-text": title,
        "$subtitle-text": subtitle,
        "$adorn": adorn,
        ...$$restProps
    }
</script>

<span use:wsx={wind}>
    <slot />
</span>
