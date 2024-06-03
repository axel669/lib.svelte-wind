<script>
    import { Label, Grid } from "@axel669/zephyr"
</script>

<div ws-x="[b 2px solid @primary]">
    <input type="checkbox" id="checkbox" />
</div>

<Grid cols="1fr 1fr 1fr">
    <Label for="checkbox">Toggle Checkbox</Label>
    <Label for="checkbox" t.c="@primary">Toggle Checkbox</Label>
    <Label for="checkbox" t.c="@secondary">Toggle Checkbox</Label>
    <Label for="checkbox" t.c="@accent">Toggle Checkbox</Label>
    <Label for="checkbox" t.c="@warning">Toggle Checkbox</Label>
    <Label for="checkbox" t.c="@danger">Toggle Checkbox</Label>
</Grid>
<Grid cols="1fr 1fr 1fr">
    <Label button outline for="checkbox">Toggle Checkbox</Label>
    <Label button outline for="checkbox" color="@primary">Toggle Checkbox</Label>
    <Label button outline for="checkbox" color="@secondary">Toggle Checkbox</Label>
    <Label button outline for="checkbox" color="@accent">Toggle Checkbox</Label>
    <Label button outline for="checkbox" color="@warning">Toggle Checkbox</Label>
    <Label button outline for="checkbox" color="@danger">Toggle Checkbox</Label>
</Grid>
