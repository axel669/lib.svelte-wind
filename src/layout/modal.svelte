<svelte:options immutable />

<script context="module">
    let topClose = null
    export const modalContext = Symbol("modal context")
</script>

<script>
    import { tick, setContext } from "svelte"
    import { writable } from "svelte/store"

    import wsx from "../wsx.mjs"

    export let component
    export let animTime = "200ms"

    let modalProps = null
    let resolver = null
    let displayed = null

    const close = (value) => {
        resolver(value)
        resolver = null
        modalProps = null
        visible.checked = false
        if (topClose !== close) {
            return
        }
        topClose = null
    }
    const closeToTop = (value) => {
        topClose(value)
    }
    const cancel = () => displayed.cancel?.()

    export const show = (props) => new Promise(
        async (resolve) => {
            modalProps = props ?? {}
            resolver = resolve
            topClose = topClose ?? close
            await tick()
            setTimeout(
                () => visible.checked = true,
                0
            )
        }
    )

    let visible = null
    const animationTime = writable(animTime)
    $: wind = {
        "@anim-time": $animationTime,
    }
    setContext(modalContext, animationTime)
</script>

<input type="checkbox" bind:this={visible} ws-x="[disp none]" />
{#if resolver !== null}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <ws-modal on:click={cancel} role="dialog" use:wsx={wind}>
        <svelte:component
        bind:this={displayed}
        this={component}
        {...modalProps}
        {close}
        {closeToTop}
        />
    </ws-modal>
{/if}
