<script>
    import {
        LoadZone,

        Button,
        Grid,
        Paper,
        Text,
        Titlebar
    } from "@axel669/zephyr"

    const endless = new Promise(() => {})
    const resolved = Promise.resolve("success")
    const rejected = Promise.reject(new Error("failure"))

    let pass = true
    const wait = (time) => new Promise(
        (resolve, reject) => {
            if (pass === true) {
                setTimeout(
                    () => resolve((new Date()).toString()),
                    time
                )
                pass = false
                return
            }
            setTimeout(
                () => reject(new Error("failed")),
                time
            )
            pass = true
        }
    )
    const demo = () => demoPromise = wait(2500)
    let demoPromise = null
</script>

<Grid cols="1fr 1fr">
    <Paper card>
        <Titlebar slot="header">
            <Text slot="title" title>No Source</Text>
        </Titlebar>

        <LoadZone source={null} />
    </Paper>
    <Paper card>
        <Titlebar slot="header">
            <Text slot="title" title>Loading State</Text>
        </Titlebar>

        <LoadZone source={endless} />
    </Paper>

    <Paper card>
        <Titlebar slot="header">
            <Text slot="title" title>Resolved</Text>
        </Titlebar>

        <LoadZone source={resolved} let:result>
            <Text>Resolved with: {result}</Text>
        </LoadZone>
    </Paper>
    <Paper card>
        <Titlebar slot="header">
            <Text slot="title" title>Rejected</Text>
        </Titlebar>

        <LoadZone source={rejected}>
            <Text slot="error" let:error>
                Resolved with: {error.message}
            </Text>
        </LoadZone>
    </Paper>

    <Button on:click={demo} outline color="@primary">
        Run Demo
    </Button>
    <Paper card color="@primary">
        <LoadZone source={demoPromise} let:result>
            <Text slot="loading">Override Loading Text</Text>

            <Text>Finished At: {result}</Text>

            <Text slot="error" let:error>
                Error: {error.message}
            </Text>
        </LoadZone>
    </Paper>
</Grid>
