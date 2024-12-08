# Popover

The Popover component is for displaying content over something without it
being modal (you can interact with things under it still).

## Variables
- show
- hide
The Popover exposes 2 variables for use: `show` and `hide`. These functions
are given to the content so that it can control when to display the popover
content without needing to bind to the parent.

> Beacuse the hide function is given to a named slot, the `let:hide` declaration
> needs to be on the slotted element.

## Slots

### _default_
The default slot is the element that is displayed normally and should trigger
the popover to be shown

### content
The content of the popover
