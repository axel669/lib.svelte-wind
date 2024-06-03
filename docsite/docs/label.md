# Label
The label component is a wrapper around a `<label>` element.

## Props

### button _bool_
If true, the label will have the button appearance.

### color _string_
Sets `$color` of the button styled lable. To change text properties for a
regular label, use the normal text macros from windstorm.

### compact _bool_
If true, will make the label button be more compact. No effect is `button` is
`false`.

### disabled _bool_
Disables the label.

### fill / outline / flat _bool_
Sets the button variant of the label when `button` is `true`.

### for _string_
[Label for attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#for)
