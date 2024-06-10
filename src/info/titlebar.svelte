<script>
    import wsx from "../wsx.mjs"

    export let color
    export let fill = false

    $: titleProps = {
        "$color": color,
        "$fill": fill,
        $title: true,
    }
    $: wind = {
        ...$$restProps,
        "gr.cols": "auto 1fr auto"
    }
</script>

<ws-titlebar use:wsx={wind}>
    {#if $$slots.title}
        <div use:wsx={titleProps}>
            <slot name="title" />
        </div>
    {/if}

    {#if $$slots.menu}
        <div ws-x="[$menu] [grid] [p 0px]">
            <slot name="menu" />
        </div>
    {/if}
    {#if $$slots.action}
        <div ws-x="[$action] [grid] [p 0px]">
            <slot name="action" />
        </div>
    {/if}
</ws-titlebar>
