import ws from "@axel669/windstorm"

export default (node, props) => {
    const update = (props) => {
        const { slot = null, ...goodProps } = props ?? {}
        if (goodProps === null || goodProps === undefined) {
            node.setAttribute("ws-x", null)
            return
        }
        const formatted = Object.entries(goodProps).reduce(
            (props, [key, value]) => {
                const realKey = key.replaceAll("--", ":").replace(/^\-/, "$")
                props[realKey] = value
                return props
            },
            {}
        )
        node.setAttribute(
            "ws-x",
            ws.x(formatted)
        )
    }
    update(props)
    return { update }
}
