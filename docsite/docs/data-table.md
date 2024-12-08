# DataTable

The DataTable is a more advanced way to show data on screen. Underneath is
a [Table](#/table) component, but with additional functionality
for pagination, sorting, and fitering.

> If pagination is not needed, the DataTable may not be necessary as it will
> only be shortcutting data formatting at that point.

## Props

### color _string_
Sets `$color`

### data _Array_
The data to display. Each item in the array can be in either the same
format as the Table, or any kind of object if column format functions
are used.

### page _Number_
The current page of data being viewed. Can be bound, or set to control
which page is displayed

### pageSize _Number_
The number of items to show on each page. Default is 10.

### rowHeight _string_
The height of each row. The component uses this to make empty rows the same
height as rows with data so that the pagination doesnt randomly resize the
visual area of the table.

## Slots

### header
A fragment that should contain the header cells for the table header. A standard
`th` can be used, but the `TH` element from zephyr has additional configuration
to handle more complex header-related actions.

### row
A fragment that should use regular `td` elements to define how a row should be
layed out. The fragment will need `let:row` to access each row's data for
displaying it.

# TH
The TH component has no use outside fo the DataTable, but is used to support
the filter and sorting functionality for that component.

## Props

### sort _function_
The sorting function to use for the column defined. Should return values that
match the expected values for `Array.sort`.

### filter _function_
The function to use for filtering based on the column. The function is given
2 arguments: a row of data and the text from the filter input field. The
function should return `true` if the item should be shown. A filter function on
a specific column does not need to only look at the specified column, but not
doing could cause confusion for users without proper context.
