<script>
    import { RadioGroup, Grid, Titlebar, Text } from "@axel669/zephyr"

    const options = [
        { label: "Number", value: 1 },
        { label: "Array", value: [], $color: "@secondary" },
        { label: "String", value: "3", "$color": "@warning" },
        { label: "Really any value", value: new Date() },
    ]
    let value = null
</script>

<pre>Value: {JSON.stringify(value)}</pre>

<Titlebar>
    <Text title slot="title">
        Flex Layout (default)
    </Text>
</Titlebar>
<RadioGroup {options} bind:value />

<Titlebar>
    <Text title slot="title">
        Grid Layout Example
    </Text>
</Titlebar>
<RadioGroup {options} bind:value layout={Grid} gr.cols="1fr 1fr" />
