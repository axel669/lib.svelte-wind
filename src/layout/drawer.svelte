<svelte:options immutable />

<script context="module">
    const defs = {
        select: {
            "@@select": true,
            "w.min": "35vw",
            grid: true,
            over: "hidden"
        },
        menu: {
            "@@menu": true,
        },
        action: {
            "@@action": true,
        }
    }
    const parseTime = (timestring) => {
        if (!timestring) {
            return 200
        }
        const { base, scale } =
            timestring.match(/(?<base>\d+)(?<scale>s|ms)/)?.groups ?? {}
        if (base === undefined) {
            return 200
        }
        const numeric = parseInt(base)
        if (scale === "ms") {
            return numeric
        }
        return numeric * 1000
    }
</script>

<script>
    import { getContext } from "svelte"

    import wsx from "../wsx.mjs"

    import Paper from "./paper.svelte"
    import { modalContext } from "./modal.svelte"

    export let height
    export let type = "menu"

    const animTime = getContext(modalContext)

    // When Svelte removes things from the DOM they are removed immediately
    // unless Svelte has a transition running. Adding this prevents the drawer
    // from disappearing without first letting the built in animations run.
    const trick = (node, options) => ({
        delay: 0,
        duration: parseTime($animTime),
        css: () => "",
    })

    $: container = {
        ...defs[type],
        $show: true,
        h: (type === "select") ? height : "100%",
        grid: true,
    }
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-interactive-supports-focus -->
<wind-drawer-container use:wsx={container} on:click|stopPropagation
role="menubar" transition:trick>
    <Paper r="0px" {...$$restProps}>
        <slot name="header" slot="header" />
        <slot />
        <slot name="footer" slot="footer" />
    </Paper>
</wind-drawer-container>
