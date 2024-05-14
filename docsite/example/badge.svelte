<script>
    import { Badge, Button } from "@axel669/zephyr"

    let count = 1
    const inc = () => count += 1
</script>

<Badge text={count}>
    Unread Messages
</Badge>
<Badge text="1k+" color="@warning">
    <Button on:click={inc} color="@primary">Clickable Content</Button>
</Badge>
