<svelte:options immutable />

<script>
    import { writable } from "svelte/store"

    import wsx from "../wsx.mjs"
    import { handler$ } from "../handler$.mjs"

    export let color = "@default"
    export let options = []
    export let vertical = false
    export let fill = false
    export let value

    $: wind = {
        "$fill": fill,
        "$color": color,
        $vert: vertical,
        ...$$restProps,
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<ws-tabs use:wsx={wind} role="tablist">
    {#each options as tab, i}
        <label>
            <input type="radio" value={tab.value} bind:group={value} />
            <ws-tab>{tab.label}</ws-tab>
        </label>
    {/each}
</ws-tabs>
