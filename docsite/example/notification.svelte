<script>
    import {
        Notification,
        Button,
        Text,
        Icon,
        Grid
    } from "@axel669/zephyr"
</script>

<Grid cols="1fr 1fr">
    <Notification>
        <Icon name="hexagon">
            Icon with the notif text
        </Icon>
    </Notification>
    <Notification>
        <Icon name="hexagon" slot="start" -adorn />
        <Text>
            Icon outside the notif text
        </Text>
    </Notification>

    <Notification color="@danger">
        <Icon name="hexagon" slot="start" -adorn />

        <Text>
            Danger!
        </Text>

        <Button slot="end">
            Fix!
        </Button>
    </Notification>
    <Notification color="@primary">
        <Button slot="start">
            Fix!
        </Button>

        <Text>
            Reverse the slots
        </Text>

        <Icon name="hexagon" slot="end" -adorn />
    </Notification>
</Grid>
