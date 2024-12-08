<script>
    import {
        Drawer,
        Icon,
        Link,
        Paper,
        Tabs,
        Text,
        Titlebar,

        Flex,
        Grid,

        route,
        trackChanges,
    } from "#lib"

    import examples from "$examples"
    import { theme } from "#state/theme"

    export let close

    export const cancel = () => close()

    const routeChanged = trackChanges($route)
    const bg = (id, route) => {
        if (route === `/${id}`) {
            return "@secondary-ripple"
        }
        return null
    }

    const options = [
        { label: "Light", value: "light" },
        { label: "Dark", value: "dark" },
        { label: "Tron", value: "tron" },
    ]

    $: if (routeChanged($route) === true) {
        close()
    }
</script>

<Drawer w="200px" layout={Grid}
l!rows="auto 48px auto auto 1fr" l!p="0px" l!scrollable={false}
l!h="100%" l!gap="0px">
    <Titlebar fill color="@primary">
        <Text slot="title" title>Zephyr</Text>
    </Titlebar>
    <Link href="#" button ground r="0px">
        <Icon name="house-fill" t.sz="20px" />
    </Link>
    <Paper $ground r="0px">
        <Titlebar slot="header" color="@accent">
            <Text slot="title" title>Theme</Text>
        </Titlebar>
        <Tabs {options} bind:value={$theme} vertical color="@accent" />
    </Paper>
    <Titlebar color="@secondary">
        <Text slot="title" title>Components</Text>
    </Titlebar>
    <Flex p="0px" scrollable>
        {#each examples as {id, name}}
            <Link href="#/{id}" button !$color_hover="@secondary"
            bg={bg(id, $route)} ground r="0px">
                {name}
            </Link>
        {/each}
    </Flex>
</Drawer>
