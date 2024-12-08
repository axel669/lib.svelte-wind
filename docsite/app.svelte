<svelte:options immutable />

<script>
    import {
        EntryButton,
        Icon,
        Link,
        Paper,
        Screen,
        Select,
        Text,
        Titlebar,

        Flex,
        Grid,

        Route,
        Title,

        wsx,
        stackStore,
    } from "#lib"

    import Docs from "#comp/docs"
    import Test from "./test.svelte"
    import SideMenu from "#comp/side-menu"
    import { theme } from "#state/theme"

    import examples from "$examples"

    const page = stackStore("Home")

    const options = [
        { label: "Theme: Light", value: "light" },
        { label: "Theme: Dark", value: "dark" },
        { label: "Theme: Tron", value: "tron" },
    ]
</script>

<Title format={data => `Zephyr - ${data}`} data="Home" />

<svelte:head>
    <link href="https://cdn.jsdelivr.net/npm/prismjs@v1.29.0/themes/prism-twilight.css" rel="stylesheet" />
    <link href="./md-fix.css" rel="stylesheet" />
</svelte:head>
<svelte:body use:wsx={{"@@theme": $theme, "@@app": true}} />

<Screen alignLeft width="100%">
    <Paper square l!p="0px">
        <Titlebar slot="header" fill color="@primary">
            <Text title slot="title">
                Zephyr Docs - {$page}
            </Text>

            <EntryButton slot="menu" component={SideMenu} ground w!props={{animTime: "100ms"}}>
                <Icon name="list" />
            </EntryButton>
        </Titlebar>

        <Flex w="min(100%, 720px)">
            <Route exact path="/">
                Home Screen?
            </Route>
            {#each examples as example}
                <Route path={example.id} component={Docs} props={{...example, page}} />
            {/each}
        </Flex>
    </Paper>
</Screen>
