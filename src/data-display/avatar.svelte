<svelte:options immutable />

<script>
    import wsx from "../wsx.mjs"

    export let alt = ""
    export let image = null

    export let text = ""

    export let color = false

    $: wind = {
        "$color": color,
        ...$$restProps
    }
</script>

<ws-avatar use:wsx={wind}>
    {#if image !== null}
        <!-- svelte-ignore a11y-missing-attribute -->
        <object data={image} type="image/png" ws-x="[w 100%] [h 100%] [flex] [fl-center]">
            {alt}
        </object>
    {:else}
        {text}
    {/if}
</ws-avatar>
