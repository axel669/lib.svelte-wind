# AsyncButton
A button that makes it simpler to fire off async functions in response to button
clicks. In addition to calling the function, the button will disable itself
during the function duration and show a load spinner inside the button.

## Props
The AsyncButton supports all of the [Button](#/button) props.

### handler _Function_
The async function to call when the button is clicked.

### spincolor _string_
The color for the load spinner to use. Defaults to `@primary`.
