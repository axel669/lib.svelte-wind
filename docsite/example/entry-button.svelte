<script>
    import { Alert, Confirm, EntryButton } from "@axel669/zephyr"

    const alertProps = {
        title: "Static Props",
        message: "Insert cool confirmation message here",
    }
    const propsFunc = () => ({
        title: "Dynamic Props",
        message: `Opened at: ${new Date().toLocaleString()}`,
    })
</script>

<EntryButton component={Confirm} props={alertProps} on:entry={console.log}>
    Show Confirm
</EntryButton>
<EntryButton component={Alert} props={propsFunc} on:entry={console.log}>
    Show Dynamic Alert
</EntryButton>
