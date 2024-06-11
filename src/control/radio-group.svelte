<svelte:options immutable />

<script>
    import wsx from "../wsx.mjs"
    import { handler$ } from "../handler$.mjs"

    import Flex from "../layout/flex.svelte"

    export let options = []
    export let layout = Flex
    export let value
</script>

<svelte:component this={layout} {...$$restProps}>
    {#each options as {value: itemValue, label, disabled, ...wind}, index (value)}
        <label use:wsx={{"@@toggle": true, ...wind}} {disabled}>
            <span>{label}</span>
            <input type="radio" value={itemValue} bind:group={value} />
        </label>
    {/each}
</svelte:component>
