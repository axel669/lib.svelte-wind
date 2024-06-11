<script context="module">
    const identity = i => i
    const alwaysGood = () => true
</script>

<script>
    import Input from "../control/input.svelte"

    export let fields
    export let values
    export let valid = {}

    const refs = fields.reduce(
        (refs, field) => {
            refs[field.name] = {
                vt: field.value.transform ?? identity,
                t: field.value.out ?? identity,
                v: field.value.validate ?? alwaysGood,
                e: (value) => {
                    if (valid[field.name] !== false) {
                        return null
                    }
                    return field.value.error?.(value) ?? null
                }
            }
            return refs
        },
        {}
    )
    let internal = fields.reduce(
        (initial, field) => {
            initial[field.name] = field.value.initial ?? ""
            return initial
        },
        {}
    )
    let value = new Proxy(
        {},
        {
            get(_, name) {
                return internal[name]
            },
            set(_, name, value) {
                const ref = refs[name]
                internal[name] = ref.vt(value)
                values = { ...values, [name]: ref.t(internal[name]) }
                valid = { ...valid, [name]: ref.v(values[name]) }
                return true
            }
        }
    )
</script>

{#each fields as field}
    <Input
        {...field.props}
        bind:value={value[field.name]}
        error={refs[field.name].e(value[field.name])}
    />
{/each}
