# Paper

The Paper component is a container that has slots for header and footer
content that is independant from the regular content scrolling. It also uses
Flex as a default layout for its slotted content, but allows any container
to be used as a layout without increasing the indentation of all the content
needlessly.

## Props

### card _bool_
Sets `$outline`

### color _string_
Sets `$color`

### layout _Component_
Sets the layout the card will use to display content. Default is Flex.

### square _bool_
Sets `r[0px]`

### scrollable _bool_
Sets `over[auto]` on the layout component

### l!*
Any prop that is prefixed with `l!` will be passed to the layout
component, with the remaining props acting as the normal wind functions
on the paper itself

## Slots

### header
The header content for the Paper. Header content does not scroll with
the regular content of the component (acts sticky)

### footer
The footer content for the Paper. Same scrolling properties as the
header slot

### content/default
The default slot (unnamed) for Paper will be rendered in the layout
component defined in the props. As an alternative, a content slot may
be used that will be rendered directly in the content slot of the Paper
without the layout component/props being rendered (useful when nesting
papers for example)
