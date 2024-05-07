import { onMount } from "svelte"
import { writable, derived } from "svelte/store"

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

const emptyStack = Symbol("empty stack")
export const stackStore = (initial = stackStore.empty) => {
    const stack = [writable(initial)]
    const current = writable(initial)
    let attachment = stack[0].subscribe(current.set)

    return {
        subscribe: current.subscribe,
        push: (initial) => {
            const item = writable(initial)
            onMount(() => {
                stack.push(item)
                attachment()
                attachment = item.subscribe(current.set)
                return () => {
                    stack.pop()
                    attachment()
                    attachment = stack[stack.length - 1].subscribe(current.set)
                }
            })
            return item
        }
    }
}
stackStore.empty = emptyStack
