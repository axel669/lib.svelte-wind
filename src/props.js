export const filterProps = (props, filter) => Object.entries(props).reduce(
    (p, [name, value]) => {
        if (name.startsWith(filter) === true) {
            p[name.slice(filter.length)] = value
        }
        return p
    },
    {}
)
