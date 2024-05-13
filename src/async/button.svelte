<script>
    import Button from "../control/button.svelte"
    import Spinner from "../spinner/circle-spinner.svelte"

    export let handler = null
    export let disabled
    export let spincolor = "@primary"

    let running = false
    const asyncHandler = async (evt) => {
        running = true
        await handler(evt)
        running = false
    }

    $: inactive = disabled || running
    $: props = {
        ...$$restProps,
        disabled: inactive,
    }
</script>

<async-button ws-x="[disp inline-grid] [gr.cols 1fr] [pos relative]">
    <Button {...props} on:click={asyncHandler}>
        <slot />
    </Button>
    {#if running === true}
        <Spinner
            size="unset"
            pos="absolute"
            x="50%" y="0px"
            tf="translateX(-50%)"
            h="100%"
            color={spincolor}
        />
    {/if}
</async-button>
