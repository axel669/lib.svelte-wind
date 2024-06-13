# RadioGroup

The radio group component displays a list of radio options and provides an
interface to control which one is selected and react to changes in the
selected value. It also uses a layout component to decide how the options
are presented.

## Base
Each radio item rendered is a
[Windstorm Labeled Toggle](https://windstorm.axel669.net/lib/css/component/toggle)
that uses a radio input.

## Props

The wind functions passed as props to the Radio component are passed directly to
the layout specified because the Radio does not have a container element of its
own.

### layout _Component_
The component to use for layout out the options. Default is
[Flex](../layout/flex.md).

### options _Array[Object]_
An array of objects that defines the options to show. Details below.

### value _any_
The value currently selected. Can be bound to react to selections or change the
current selection.

## Options
Each object in the options array supplied should have a `value` and `label`
prop specified. Additionally, any wind functions that should be applied to
the option can be passed as additional props.

Labels should be strings, but values can be any type as long as they are
unique in the list.
