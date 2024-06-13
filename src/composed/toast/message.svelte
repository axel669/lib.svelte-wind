<script>
    import { createEventDispatcher } from "svelte"

    import Button from "../../control/button.svelte"
    import Icon from "../../info/icon.svelte"
    import Notification from "../../info/notification.svelte"
    import Text from "../../text.svelte"

    export let message = ""
    export let icon = false
    export let color = false
    export let actionText = null

    const dispatch = createEventDispatcher()
    const dismiss = () => dispatch("action", null)
    const respond = () => dispatch("action", true)
</script>

<Notification {color} on:click={dismiss}>
    <Text slot="start" -adorn>
        {#if icon !== false}
            <Icon name={icon} />
        {/if}
    </Text>
    <span>{message}</span>
    <div slot="end" ws-x="[grid]">
        {#if actionText}
            <Button on:click={respond} r.l="0px">
                {actionText}
            </Button>
        {/if}
    </div>
</Notification>
