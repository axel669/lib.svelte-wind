<script>
    import { Details, Icon } from "@axel669/zephyr"

    let open = false
</script>

<div>Open: {open}</div>
<Details label="Info" bind:open>
    Look, more info could go here!
</Details>

<Details bind:open outline color="@primary">
    <div slot="label">
        Slotted labels allowed! <Icon name="hexagon" />
    </div>
    Another one!
</Details>
