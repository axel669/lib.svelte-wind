<script>
    import { Paper, Tabs, Text, Titlebar, Grid } from "@axel669/zephyr"
</script>

<Grid cols="1fr 1fr">
    <Paper l-gap="12px">
        <Titlebar slot="header">
            <Text slot="title" title>
                Some Title
            </Text>
        </Titlebar>

        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
    </Paper>

    <Paper card>
        <Titlebar slot="header">
            <Text slot="title" title>
                Some Other Title
            </Text>
        </Titlebar>

        <Paper slot="content">
            <div>Content 1</div>
            <div>Content 2</div>
            <div>Content 3</div>
        </Paper>

        <div slot="footer" ws-x="[b 2px solid @text-color-normal] [p 4px]">
            Wat
        </div>
    </Paper>

    <Paper card color="@primary">
        <Titlebar slot="header" fill color="@primary">
            <Text slot="title" title>
                Some Title
            </Text>
        </Titlebar>

        <div>Content</div>
    </Paper>
</Grid>
