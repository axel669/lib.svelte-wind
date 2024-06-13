<script>
    import { Popover, Button } from "@axel669/zephyr"
</script>

<Popover let:show>
    <Button on:click={show} outline>
        Show
    </Button>
    <div ws-x="[inset.x 0px] [y 0px] [h 100px] [bg teal]" slot="content" let:hide>
        <Button on:click={hide} outline>
            Hide
        </Button>
    </div>
</Popover>
