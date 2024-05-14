<script>
    import { Button, Grid } from "@axel669/zephyr"
</script>

<Button on:click={() => alert("clicked!")}>
    JS Alert!
</Button>
<Button color="@primary" outline on:click={console.log}>
    Console Log
</Button>

<h3>Button Variants</h3>
<Grid cols="1fr 1fr 1fr">
    <Button flat>Default</Button>
    <Button outline>Default</Button>
    <Button fill>Default</Button>

    <Button color="@primary" flat>Default</Button>
    <Button color="@primary" outline>Default</Button>
    <Button color="@primary" fill>Default</Button>

    <Button color="@secondary" flat>Secondary</Button>
    <Button color="@secondary" outline>Secondary</Button>
    <Button color="@secondary" fill>Secondary</Button>

    <Button color="@accent" flat>Accent</Button>
    <Button color="@accent" outline>Accent</Button>
    <Button color="@accent" fill>Accent</Button>

    <Button color="@warning" flat>Warning</Button>
    <Button color="@warning" outline>Warning</Button>
    <Button color="@warning" fill>Warning</Button>

    <Button color="@danger" flat>Danger</Button>
    <Button color="@danger" outline>Danger</Button>
    <Button color="@danger" fill>Danger</Button>
</Grid>
