<svelte:options immutable />

<script>
    import wsx from "./wsx.mjs"

    export let title = false
    export let subtitle = false
    export let adorn = false

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
