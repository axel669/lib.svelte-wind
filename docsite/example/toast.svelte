<script>
    import { Toast, Button } from "@axel669/zephyr"

    let toast = [null, null]
    const notify = () => {
        toast[0].show(
            5000,
            { message: "Toast Message!", icon: "exclamation-triangle" }
        )
        toast[1].show(
            5000,
            {
                message: "Toast Message!",
                color: "@secondary",
                actionText: "Click!"
            }
        )
    }
</script>

<Toast bind:this={toast[0]} position="tc" on:action={console.log} />
<Toast bind:this={toast[1]} position="tl" on:action={console.log} />
<Button on:click={notify}>
    Show a Notif
</Button>
