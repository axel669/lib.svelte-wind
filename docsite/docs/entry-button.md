# EntryButton
The EntryButton is a convenient way to display modals and screens over
content without needing to bind variables have lots of Modal elements in
addition to the buttons that show them.

## Props
Any props passed that are not listed for the `EntryButton` are passed to the
`Button` component that is wrapped by this component.

### component
The component to show when clicked

### props
The props to pass to the component when it is shown, or a function that
generates the props when called.

### this
The wrapper for the component. Default is [Modal](#/modal) but any
component that has the same interface as Modal will work.

## Events

### entry
When the component is closed the entry event is fired. The detail
property of the event will have the value from closing it.
