<script>
    import {
        Screen,
        Paper,
        Titlebar,
        Text,
        Button,
    } from "@axel669/zephyr"

    export let close
</script>

<Screen>
    <Paper card square>
        <Titlebar slot="header">
            <Text title slot="title">
                Subscreen Demo
            </Text>

            <Button slot="action" on:click={() => close("done")}>
                Close
            </Button>
        </Titlebar>

        <Text>
            This is area intentially left blank
        </Text>

        <Titlebar slot="footer">
            <Text subtitle slot="title">
                This area was an accident
            </Text>
        </Titlebar>
    </Paper>
</Screen>
