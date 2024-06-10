# Table
Wrapper for making tables in a way that is easy to maintain.

## Props

### color _string_
Sets the $color macro.

### data _Array_
The data to display in the table.

### fillHeader _bool_
If true, the header row will have the background filled instead of just the
colored border.

## Slots

### header
Used to render the header for the table. Needs to include the `tr`.

### row
Used to render an item that is not `undefined`. Needs to include the `tr`. Uses
`let:row` for the row data, and `let:rowNum` for the row number (0-based).

### empty-row
If given, will render when the item in the array is `undefined`. Uses
`let:rowNum` for the row number (0-based).
