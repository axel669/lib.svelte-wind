<script context="module">
    import { writable } from "svelte/store"

    import { storeTop } from "./routing.js"

    // const stack = writable([])
    const stack = storeTop()
</script>

<script>
    import { onMount } from "svelte"
    export let data = ""
    export let format = null

    const pass = stack.push(data)

    $: current = $stack
    $: titleText = (format !== null && current !== undefined) ? format($current) : ""
    $: document.title = titleText
</script>
