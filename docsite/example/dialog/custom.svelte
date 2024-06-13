<script>
    import { Button, Dialog, Titlebar, Text } from "@axel669/zephyr"

    export let close
</script>

<Dialog>
    <Titlebar slot="header">
        <Text slot="title" title>
            Some Title
        </Text>
    </Titlebar>

    <Text>Content</Text>

    <Button slot="footer" color="@secondary" on:click={() => close()}>
        Close
    </Button>
</Dialog>
