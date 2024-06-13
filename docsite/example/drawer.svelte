<script>
    import { EntryButton } from "@axel669/zephyr"
    import Drawer from "./drawer/custom.svelte"
</script>

<EntryButton component={Drawer} outline>
    Open Menu Drawer
</EntryButton>
<EntryButton component={Drawer} outline props={{ type: "action" }}>
    Open Action Drawer
</EntryButton>
<EntryButton component={Drawer} outline props={{ type: "select" }}>
    Open Select Drawer
</EntryButton>
