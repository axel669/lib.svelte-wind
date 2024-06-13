<script>
    import { Drawer, Titlebar, Text } from "@axel669/zephyr"

    export let close
    export let type

    export const cancel = () => close()
</script>

<Drawer {type}>
    <Titlebar slot="header">
        <Text slot="title" title>
            Some Title
        </Text>
    </Titlebar>

    <Text>Content</Text>
</Drawer>
