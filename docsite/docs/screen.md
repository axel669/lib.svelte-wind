# Screen
The screen is a container component that is used for displaying content
over its parent and stacks as more screens are displayed. Screens that stack
on top of a parent screen use the Modal to control when they are shown and
pass values back from child screens. The stacking effect of the Screen is
controlled by internally tracked svelte context, so no manual effort is
required to get stacking screens to have the effect.

## Props

### width _string_
The width of the screen before stack-based padding is applied
