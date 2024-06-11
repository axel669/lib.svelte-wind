# Route _Experimental_
Component for doing client side routing using a hash router, using components
that sit within the components where content goes, rather than a top level
route map.

## Props

### path _string_
The path that should be matched against to render the content. Leading slashes'
are optional, and do not resolve to the root path (unlike filesystems). Path
parameters can be added using `:<param name>`. If an empty string or `"/"` is
given, the route will match whatever its parent matches. Path parameters can be
found in the `routeInfo` object that is accesible in slotted content and
rendered components. All paths are relative to the full matching path of the
route above them.

### exact _bool_
Determines if the route will render content when the path doesnt match exactly.
Default is false, allowing nested routes to work as expected. If true, content
is only rendered if the patch matches exactly, no extra bits at the start or
end will match.

### component _Component_
Optional. Renders a component if no slotted content is provided.

### props
The props to pass to the component when it's rendered.

## routeInfo
`routeInfo` is a prop that is automatically passed into the component that is
rendered by the route, and can be bound to for slotted content.

### routeInfo.params
Contains the path parameter values for the current route. All path params from
matched parent routes are contained along with any params from the route passing
the object.