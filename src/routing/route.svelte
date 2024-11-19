<script context="module">
    const urlChars = "[\\w\\-\\%\\(\\)\\.@!\\*\\^\\$]"
    const urlPattern = (path, exact) => {
        const regexSource = path.replace(
            /:([\w\-]+)/g,
            (_, name) => `\(?<${name}>${urlChars}+\)`
        )
        if (exact === true) {
            return new RegExp(`(?<_path>^${regexSource})$`)
        }
        return new RegExp(`(?<_path>^${regexSource})(((?<=\\/)${urlChars})|\\/|$)`)
    }
</script>

<script>
    import { getContext, setContext } from "svelte"

    import { ctx, resolve, route } from "./routing.js"

    export let path = ""
    export let component = null
    export let props = {}
    export let exact = false

    const parent = getContext(ctx.parent) ?? "/"
    const fullPath = resolve(parent, path)

    setContext(ctx.parent, fullPath)
    $: pattern = urlPattern(fullPath, exact)
    $: match = $route.match(pattern)
    $: routeParams = Object.fromEntries(
        Object.entries({ ...match?.groups }).map(
            ([key, value]) => [key, decodeURIComponent(value)]
        )
    )
    $: routeInfo = {
        params: routeParams,
        match: routeParams._path,
        route: $route,
    }
</script>

{#if match !== null}
    {#key routeParams._path}
        <slot {routeInfo}>
            <svelte:component this={component} {...props} {routeInfo} />
        </slot>
    {/key}
{/if}
