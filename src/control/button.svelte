<svelte:options immutable />

<script>
    import wsx from "../wsx.mjs"
    import variant from "../variant.mjs"

    export let color = false
    export let compact = false
    export let ground = false
    export let disabled

    export let fill = false
    export let outline = false
    export let flat = false

    // $: type = variant({ fill, outline, flat })
    $: type = variant(
        "$flat",
        { fill },
        { outline },
        { flat }
    )

    $: wind = {
        [type]: true,
        "$color": color,
        $compact: compact,
        $ground: ground,
        ...$$restProps
    }
</script>

<button use:wsx={wind} {disabled} on:click|stopPropagation>
    <slot />
</button>
