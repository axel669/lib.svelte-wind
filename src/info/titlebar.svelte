<script>
    import wsx from "../wsx.mjs"

    export let color
    export let fill = false

    $: wind = {
        "$color": color,
        "$fill": fill,
        ...$$restProps
    }
</script>

<ws-titlebar use:wsx={wind}>
    {#if $$slots.menu}
        <div ws-x="[$menu] [grid] [p 0px]">
            <slot name="menu" />
        </div>
    {/if}
    {#if $$slots.title}
        <div ws-x="[$title] [grid] [p 0px]">
            <slot name="title" />
        </div>
    {/if}
    {#if $$slots.action}
        <div ws-x="[$action] [grid] [p 0px]">
            <slot name="action" />
        </div>
    {/if}
</ws-titlebar>
