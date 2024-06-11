# Form _Experimental_
> This component may or may be removed in a future version pending feedback and
> my ability to maintain it.

Creates a form with multiple inputs and manages the values, validation, and
display of errors within each component.

## Props

### fields _Array[Object]_
An array of objects detailing the input to manage. Each item should be of the
form:
```js
{
    name: "string",
    props: {},
    value: {
        initial: "string",
        transform: () => "string",
        out: () => Object,
        validate: () => true,
    }
}
```

| Property | Description |
| --- | --- |
| name | The name of the field, will be used as the key for the values/valid objects |
| props | `optional` The props to pass to the input that is created for the field |
| value.initial | `optional` An initial value for the field |
| value.transform | `optional` A function that transforms what value is seen in the input (not the output) |
| value.out | `optional` A function that can modify the transformed input value before putting it in the output values |
| value.validate | `optional` A function that returns true if the current input value is valid, false otherwise |

### values
An object containing the values of each input field using the field names as
keys. This object should only be bound to in order to respond to changes;
writing changes to this object will not be reflected in the form value.

### valid
An object containing the validity of each input field using the field names as
keys. This object should only be bound to in order to respond to changes;
writing changes to this object will not be reflected in the form value.
