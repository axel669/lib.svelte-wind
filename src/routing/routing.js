import { getContext, setContext, onMount } from "svelte"
import { writable, get, derived } from "svelte/store"

import { hash } from "../hash.js"

export const route = derived(
    hash,
    hash => {
        if (hash.startsWith("/") === false) {
            return `/${hash}`
        }
        return hash
    }
)

export const ctx = {
    router: Symbol("Router Context"),
    parent: Symbol("Route Parent"),
    layout: Symbol("Layout Context"),
}
export const resolve = (base, part) => {
    if (part === "") {
        return base
    }
    if (base === "/" || base === undefined) {
        return `/${part}`
    }
    return `${base}/${part}`
}

export const createLayoutContext = (initial) => {
    const source = writable(initial)
    setContext(
        ctx.layout,
        new Proxy(
            { subscribe: source.subscribe },
            {
                set(_, prop, value) {
                    source.set({ ...get(source), [prop]: value })
                    return true
                }
            }
        )
    )
    return source
}
export const layoutContext = () => getContext(ctx.layout)

export const storeTop = () => {
    const stack = writable([])
    const current = derived(
        stack,
        stack => stack[stack.length - 1]
    )

    return {
        subscribe: current.subscribe,
        push: (initial) => {
            const item = writable(initial)
            onMount(() => {
                const items = get(stack)
                stack.set([...items, item])
                return () => stack.set(
                    get(stack).slice(0, -1)
                )
            })
            return item
        }
    }
}
