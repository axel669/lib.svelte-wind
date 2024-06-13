# Confirm Dialog
A nicer confirm dialog to use with [Modal](#/modal).

## Props

### color _string_
Sets the $color macro.

### icon _string_
The name of an icon to show with the title of the dialog. See [Icon](#/icon)
for details about icon names.

### message _string_
The message to shwo in the confirm.

### cancelText _string_
The text for the button that cancels the dialog.

### okText _string_
The text for the button that confirms the dialog.

### title _string_
The title for the dialog.

## Return Values
The Confirm component will return `true` from the `Modal.show` function if the
OK button is clicked, and false if the Cancel button is clicked.
