<script>
    import { ElementToaster, Button, handler$ } from "@axel669/zephyr"

    // let toast = [null, null]
    const message = handler$(
        show => show(
            5000,
            { message: "Toast Message!", icon: "exclamation-triangle" }
        )
    )
    const warning = handler$(
        show => show(
            5000,
            {
                message: "Toast Message!",
                color: "@warning",
                actionText: "Click!"
            }
        )
    )
</script>

<ElementToaster let:show position="top" on:action={console.log}>
    <Button on:click={message(show)}>
        Show a Message
    </Button>
</ElementToaster>
<ElementToaster let:show position="bottom" on:action={console.log} w.min="300px">
    <Button on:click={warning(show)}>
        Show a Warning
    </Button>
</ElementToaster>
