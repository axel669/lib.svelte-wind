# Suspend
Allows properties that are promises to be resolved before being passed into a
component without needing to handle all of the promises directly.

> This is probably going to replace the `LoadZone` component since it does the
> same job, but better.

## Props
All of the props passed into `Suspend` are passed to the rendered component
(except `!component`), after all the promises have been resolved among the prop
values. When all the promises have resolved, the resolved values are passed to
the rendered component so that it does not need any code to handle promises for
any of the props.

### !component _Component_
The component that should be rendered once the promises have resolved.

## Slots

### error
Content to display when any of the promises reject. This slot is given the error
in the `error` prop.

### loading
Content to display while the promises are pending.
