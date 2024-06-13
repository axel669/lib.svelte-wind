<script>
    import {
        Titlebar,
        Button,
        Paper,
        Text,
        Icon,
        Flex,
    } from "@axel669/zephyr"
</script>

<Titlebar>
    <Text title slot="title">
        Some Title
    </Text>

    <Button slot="menu">
        <Icon name="list" />
    </Button>
</Titlebar>

<Paper card color="@secondary">
    <Titlebar color="@secondary" slot="header">
        <Text title slot="title">
            Paper Title
            <Text subtitle>
                Indented Subtitle
            </Text>
        </Text>

        <Button slot="menu">
            <Icon name="list" />
        </Button>
    </Titlebar>
</Paper>

<Paper card color="@secondary">
    <Titlebar color="@secondary" slot="header" fill>
        <Flex p="0px" slot="title">
            <Text title>
                Paper Title
            </Text>
            <Text subtitle>
                Aligned Subtitle
            </Text>
        </Flex>

        <Button slot="action">
            Save
        </Button>
    </Titlebar>
</Paper>
