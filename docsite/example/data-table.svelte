<script>
    import { DataTable, TH, sorts } from "@axel669/zephyr"

    let page
    const data = [
        { a: 1, b: 1 ** 2, c: 1 ** 3 },
        { a: 2, b: 2 ** 2, c: 2 ** 3 },
        { a: 3, b: 3 ** 2, c: 3 ** 3 },
        { a: 4, b: 4 ** 2, c: 4 ** 3 },
        { a: 5, b: 5 ** 2, c: 5 ** 3 },
        { a: 6, b: 6 ** 2, c: 6 ** 3 },
        { a: 7, b: 7 ** 2, c: 7 ** 3 },
        { a: 8, b: 8 ** 2, c: 8 ** 3 },
        { a: 9, b: 9 ** 2, c: 9 ** 3 },
        { a: 10, b: 10 ** 2, c: 10 ** 3 },
        { a: 11, b: 11 ** 2, c: 11 ** 3 },
        { a: 12, b: 12 ** 2, c: 12 ** 3 },
        { a: 13, b: 13 ** 2, c: 13 ** 3 },
    ]
</script>

<DataTable {data} color="@primary" pageSize={3} bind:page fillHeader={false}>
    <svelte:fragment slot="header">
        <TH sort={sorts.number("a")}>N</TH>
        <th>Squared</th>
        <th>Cubed</th>
    </svelte:fragment>

    <svelte:fragment slot="row" let:row>
        <td>{row.a}</td>
        <td>{row.b}</td>
        <td>^3 = {row.c}</td>
    </svelte:fragment>
</DataTable>

<div ws-x="[h 4px]" />

<DataTable {data} color="@primary" pageSize={3} bind:page>
    <svelte:fragment slot="header">
        <TH sort={sorts.number("a")}>N</TH>
        <th>Squared</th>
        <th>Cubed</th>
    </svelte:fragment>

    <svelte:fragment slot="row" let:row>
        <td>{row.a}</td>
        <td>{row.b}</td>
        <td>^3 = {row.c}</td>
    </svelte:fragment>
</DataTable>
