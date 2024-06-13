<script>
    import { Alert, Button, Modal } from "@axel669/zephyr"

    let alertModal = null
    const show = () => alertModal.show({
        title: "Alert Example",
        message: "This is an alert!"
    })
</script>

<Modal component={Alert} bind:this={alertModal} />
<Button on:click={show} outline color="@primary">
    Alert Modal
</Button>
