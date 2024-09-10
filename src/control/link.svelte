<svelte:options immutable />

<script>
    import wsx from "../wsx.mjs"
    import variant from "../variant.mjs"

    export let button = false
    export let color = false
    export let compact = false
    export let ground = false

    export let href = ""
    export let rel = "noreferrer"
    export let target = null

    export let fill = false
    export let outline = false
    export let flat = false

    export let disabled = null

    $: type = variant(
        "$flat",
        { fill },
        { outline },
        { flat }
    )

    $: wind = {
        "@@button": button,
        [type]: true,
        "$color": color,
        $compact: compact,
        $ground: ground,
        ...$$restProps
    }
</script>

<a {href} {target} {rel} disabled={disabled || null} use:wsx={wind} on:click>
    <slot />
</a>
