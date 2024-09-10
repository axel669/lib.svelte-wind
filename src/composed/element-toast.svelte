<svelte:options immutable />

<script context="module">
    const genID = () => `${Date.now()}:${Math.random().toString(16)}`

    const delays = {}
    const delay = ({time, action, id}) => {
        const trigger = () => {
            const info = delays[id]
            clearTimeout(info.id)
            action()
            delete delays[id]
        }
        const timeoutID = setTimeout(trigger, time)
        delays[id] = { trigger, id: timeoutID }
    }
    delay.trigger = (id) => delays[id].trigger()

    const macros = {
        top: {
            "-y": "100%",
            flex: "column-reverse",
        },
        bottom: {
            "y": "100%",
            flex: "column"
        },
    }
</script>

<script>
    import { createEventDispatcher } from "svelte"
    import { fade } from "svelte/transition"

    import { eventHandler$ } from "../handler$.mjs"
    import wsx from "../wsx.mjs"

    import Toaster from "../info/toaster.svelte"

    import ToastMessage from "./toast/message.svelte"

    export let component = ToastMessage
    export let position = "top"

    let items = []

    const dispatch = createEventDispatcher()
    const act = eventHandler$(
        (evt, id, props) => {
            delay.trigger(id)
            dispatch(
                "action",
                { value: evt.detail, props }
            )
        }
    )

    export const show = (duration, props) => {
        const id = genID()
        items = [...items, { id, props }]
        delay({
            action: () => items = items.filter(
                item => item.id !== id
            ),
            time: duration,
            id,
        })
    }
    export const clear = () => items = []


    $: wind = {
        gap: "8px",
        pos: "absolute",
        x: "50%",
        z: "50",
        tf: "translateX(-50%)",
        ...macros[position],
        ...$$restProps,
    }
</script>

<zephyr-element-toaster ws-x="[disp inline-grid] [pos relative]">
    <slot {show} />
    <zephyr-element-toast-messages use:wsx={wind}>
        {#each items as {props, id} (id)}
            <zephyr-toast-wrapper ws-x="[grid]" transition:fade={{duration: 200}}>
                <svelte:component
                this={component}
                {...props}
                on:action={act(id, props)}
                />
            </zephyr-toast-wrapper>
        {/each}
    </zephyr-element-toast-messages>
</zephyr-element-toaster>
