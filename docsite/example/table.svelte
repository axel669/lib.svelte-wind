<script>
    import { Table } from "@axel669/zephyr"

    const data = Array.from(
        { length: 10 },
        (_, i) => [i, i ** 2, i ** 3]
    )
</script>

<Table {data}>
    <tr slot="header">
        <th>N</th>
        <th>Squared</th>
        <th>Cubed</th>
    </tr>

    <tr slot="row" let:row>
        <td>{row[0]}</td>
        <td>{row[1]}</td>
        <td>{row[2]}</td>
    </tr>
</Table>

<Table {data} color="@secondary" fillHeader>
    <tr slot="header">
        <th>N</th>
        <th>Squared</th>
        <th>Cubed</th>
    </tr>

    <tr slot="row" let:row>
        <td>{row[0]}</td>
        <td>{row[1]}</td>
        <td>{row[2]}</td>
    </tr>
</Table>
