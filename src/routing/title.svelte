<script context="module">
    import { writable } from "svelte/store"

    import { stackStore } from "./routing.js"

    // const stack = writable([])
    const stack = stackStore()

    const updateTitle = (format, data) => {
        if (format === null || data === stackStore.empty) {
            return
        }

        document.title = format(data)
    }
</script>

<script>
    import { onMount } from "svelte"
    export let data = ""
    export let format = null

    stack.push(data)

    $: updateTitle(format, $stack)
</script>
