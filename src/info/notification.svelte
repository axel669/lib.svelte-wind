<script>
    import wsx from "../wsx.mjs"

    export let color = false

    $: wind = {
        "$color": color,
        ...$$restProps,
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-interactive-supports-focus -->
<ws-notification use:wsx={wind} on:click role="button">
    {#if $$slots.start}
        <div ws-x="[$start] [grid]">
            <slot name="start" />
        </div>
    {/if}
    <div ws-x="[$notif-text]">
        <slot />
    </div>
    {#if $$slots.end}
        <div ws-x="[$end] [grid]">
            <slot name="end" />
        </div>
    {/if}
</ws-notification>
