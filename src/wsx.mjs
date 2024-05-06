import ws from "@axel669/windstorm"

export default (node, props) => {
    const update = (props) => {
        const { slot = null, ...goodProps } = props ?? {}
        if (goodProps === null || goodProps === undefined) {
            node.setAttribute("ws-x", null)
            return
        }
        node.setAttribute(
            "ws-x",
            ws.x(goodProps)
        )
    }
    update(props)
    return { update }
}
