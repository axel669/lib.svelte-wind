<svelte:options immutable />

<script>
    import wsx from "../wsx.mjs"

    export let value = 0
    export let min = 0
    export let max = 1
    export let buffer = 0
    export let busy = false
    export let color = "@default"

    $: wind = {
        "$color": color,
        ...$$restProps,
    }

    $: busyStatus = (busy === true) ? { busy: true } : {}
</script>

<ws-progress use:wsx={wind} {...busyStatus} {min} {max} {value} {buffer} />
