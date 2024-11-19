<svelte:options immutable />

<script>
    import CircleSpinner from "../spinner/circle-spinner.svelte"

    $: component = $$props["!component"]
    $: list =
        Object.entries($$props)
        .filter(
            ([key]) => key !== "!component"
        )
    $: wait = Promise.all(
        list.map(
            async pair => [pair[0], await pair[1]]
        )
    )
</script>

{#await wait}
    <slot name="loading">
        <div ws-x="[flex] [fl-center] [p 4px]">
            <CircleSpinner size="56px" />
            <span>Loading</span>
        </div>
    </slot>
{:then entries}
    <svelte:component this={component} {...Object.fromEntries(entries)} />
{:catch error}
    <slot name="error">
        <div ws-x="[b 1px solid red] [p 8px]">
            {error}
        </div>
    </slot>
{/await}
