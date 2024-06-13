<svelte:options immutable />

<script>
    import {
        Grid,
        Icon,
        Link,
        Paper,
        Screen,
        Select,
        Text,
        Titlebar,

        Route,
        Title,

        wsx,
        stackStore,
    } from "#lib"

    import Docs from "#comp/docs"

    import examples from "$examples"

    let theme = localStorage.theme ?? "dark"
    $: localStorage.theme = theme

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
<svelte:body use:wsx={{"@@theme": theme, "@@app": true}} />

<Screen>
    <Paper square card>
        <Titlebar slot="header" fill color="@primary">
            <Text title slot="title">
                Zephyr Docs - {$page}
            </Text>

            <Link href="#" button slot="menu">
                <Icon name="house-fill" t.sz="20px" />
            </Link>

            <Select m="4px" {options} bind:value={theme} slot="action" b.w="0px" />
        </Titlebar>

        <Route exact>
            <Grid cols="1fr 1fr 1fr" autoRow="48px" p="0px">
                {#each examples as {id, name}}
                    <Link href="#/{id}" button outline -color--hover="@secondary">{name}</Link>
                {/each}
            </Grid>
        </Route>
        {#each examples as example}
            <Route path={example.id} component={Docs} props={{...example, page}} />
        {/each}
    </Paper>
</Screen>
