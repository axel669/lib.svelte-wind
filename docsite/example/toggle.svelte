<script>
    import { Toggle, Grid, Text, Titlebar } from "@axel669/zephyr"

    let checked = false
    let group = []
</script>

<Grid cols="1fr 1fr" gap="8px">
    <Titlebar col="span 2">
        <Text title slot="title">
            Switch Toggle
        </Text>
    </Titlebar>
    <Toggle label="Default" bind:checked />
    <Toggle label="Primary" bind:checked color="@primary" />
    <Toggle label="Secondary Reverse" reverse bind:checked color="@secondary" />
    <Toggle label="Accent Reverse" reverse bind:checked color="@accent" />
    <Toggle label="Warning Flat" flat bind:checked color="@warning" />
    <Toggle label="Danger Flat" flat bind:checked color="@danger" />

    <Titlebar col="span 2">
        <Text title slot="title">
            Checkbox Toggle
        </Text>
    </Titlebar>
    <Toggle label="Default" checkbox bind:checked />
    <Toggle label="Primary" checkbox bind:checked color="@primary" />
    <Toggle label="Secondary Reverse" reverse checkbox bind:checked color="@secondary" />
    <Toggle label="Accent Reverse" reverse checkbox flat bind:checked color="@accent" />
    <Toggle label="Warning Flat" checkbox flat bind:checked color="@warning" />
    <Toggle label="Danger Flat" checkbox flat bind:checked color="@danger" />

    <Titlebar col="span 2">
        <Text title slot="title">
            Bind Group
        </Text>
    </Titlebar>
    <pre ws-x="[col span 2] [p 4px] [m 0px]">Checked: {JSON.stringify(group)}</pre>
    <Toggle label="Number 1" checkbox bind:group value={1} />
    <Toggle label="String '2'" checkbox bind:group value="2" />
    <Toggle label="Array [3]" bind:group value={[3]} />
    <Toggle label="Bool true" bind:group value={true} />
</Grid>
