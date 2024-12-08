<svelte:options immutable />

<script>
    import Button from "../control/button.svelte"
    import Dialog from "../layout/dialog.svelte"
    import Icon from "../info/icon.svelte"
    import Text from "../text.svelte"
    import Titlebar from "../info/titlebar.svelte"

    export let close
    export let color = "@primary"
    export let icon
    export let message
    export let okText = "OK"
    export let title = "Alert"
</script>

<Dialog card {color}>
    <Titlebar slot="header" {color}>
        <Text title slot="title">
            <Icon name={icon}>
                {title}
            </Icon>
        </Text>
    </Titlebar>

    <Text>
        {message}
    </Text>

    <Button slot="footer" on:click={close} {color} ground>
        {okText}
    </Button>
</Dialog>
