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
        <Text adorn slot="start">
            <Icon name="hexagon" />
        </Text>

        <Text>
            Icon outside the notif text
        </Text>
    </Notification>

    <Notification color="@danger">
        <Text adorn slot="start">
            <Icon name="hexagon" />
        </Text>

        <Text>
            Danger!
        </Text>

        <Button slot="end" ground>
            Fix!
        </Button>
    </Notification>
    <Notification color="@primary">
        <Button slot="start" ground>
            Fix!
        </Button>

        <Text>
            Reverse the slots
        </Text>

        <Text adorn slot="end">
            <Icon name="hexagon" />
        </Text>
    </Notification>
</Grid>
