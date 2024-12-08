<svelte:options immutable />

<script>
    import { writable } from "svelte/store"

    import wsx from "../wsx.mjs"
    import { handler$ } from "../handler$.mjs"
    import { filterProps } from "../props.js"

    export let color = "@default"
    export let fill = false
    export let options = []
    export let value
    export let vertical = false

    $: wind = {
        "$fill": fill,
        "$color": color,
        $vert: vertical,
        ...$$restProps,
    }
    $: tabProps = filterProps($$restProps, "t!")
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<ws-tabs use:wsx={wind} role="tablist">
    {#each options as tab, i}
        <label>
            <input type="radio" value={tab.value} bind:group={value} />
            <ws-tab use:wsx={tabProps}>{tab.label}</ws-tab>
        </label>
    {/each}
</ws-tabs>
