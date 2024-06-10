<script>
    import { Progress, Grid } from "@axel669/zephyr"
</script>

<Grid cols="1fr 1fr">
    <Progress label="With Label" color="@primary" value={0.1} />
    <Progress label="With Label" color="@secondary" value={5} max={10} />
    <Progress label="With Label" outline color="@accent" value={0.1} />
    <Progress label="With Label" outline color="@danger" value={5} max={10} />
    <Progress color="@primary" value={0.1} />
    <Progress color="@secondary" value={5} max={10} />
    <Progress outline color="@warning" value={0.1} />
    <Progress outline color="@accent" value={5} max={10} />
</Grid>
