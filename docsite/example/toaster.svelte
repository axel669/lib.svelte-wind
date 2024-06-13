<script>
    import { Toaster, Notification, Text, Icon } from "@axel669/zephyr"
</script>

<Text>
    See the notification component in the bottom-right corner of the window
</Text>
<Toaster position="br">
    <Notification color="@accent">
        <Icon slot="start" -adorn name="info-circle" />
        <Text>
            Some kind of notification of things
        </Text>
    </Notification>
</Toaster>
