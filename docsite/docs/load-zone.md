# LoadZone
A component for putting content that is behind an async function.

## Props

### message _string_
The text to show while the promise is pending. Only used if the `loading` slot
is not used.

### source _Promise_
The promise that will resolve into some kind of content-related information.

## Slots

### default
The default slot will be shown when the promise resolves.

### loading
The content to show while the promise is pending. Overrides the default of a
load spinner with some text.

### error
The content to show when the promise rejects. Use `let:error` on the error slot
item to get the error that was thrown.
