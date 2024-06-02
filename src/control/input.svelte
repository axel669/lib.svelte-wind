<svelte:options immutable />

<script>
    import wsx from "../wsx.mjs"

    export let type = "text"

    export let flat = false
    export let label
    export let color = "@default"
    export let disabled

    export let value = ""
    export let autocompleteOptions = null

    let input = null
    export const focus = () => input.focus()

    const id =
        (autocompleteOptions === null)
        ? null
        : `${Math.random().toString(16)}_${Date.now()}`

    const update = (evt) => value = evt.target.value

    $: restKeys = Object.keys($$restProps)
    $: props = restKeys.reduce(
        (props, key) => {
            const [target, name] =
                (key.startsWith("i-") === true)
                ? [props.input, key.slice(2)]
                : [props.wind, key]
            target[name] = $$restProps[key]
            return props
        },
        {wind: {}, input: {}}
    )

    $: wind = {
        "$flat": flat,
        "@@control": true,
        "$color": color,
        ...props.wind,
    }

    $: tag = (type === "area") ? "textarea" : "input"
</script>

<label use:wsx={wind}>
    {#if label}
        <span use:wsx={{ "$label": true }}>{label}</span>
    {/if}
    <svelte:element
        this={tag}
        {...props.input}
        {disabled}
        {type}
        {value}
        list={id}
        on:focus
        on:blur
        on:input={update}
        bind:this={input}
    />

    {#if $$slots.start}
        <span use:wsx={{ "$start": true }}>
            <slot name="start" />
        </span>
    {/if}
    {#if $$slots.end}
        <span use:wsx={{ "$end": true }}>
            <slot name="end" />
        </span>
    {/if}
    {#if $$slots.extra}
        <span use:wsx={{ "$extra": true }}>
            <slot name="extra" />
        </span>
    {/if}

    {#if autocompleteOptions !== null}
        <datalist {id}>
            {#each autocompleteOptions as value}
                <option {value} />
            {/each}
        </datalist>
    {/if}
</label>
