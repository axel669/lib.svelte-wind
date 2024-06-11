<script>
    import { Route, Link, Flex, Text, relpath } from "@axel669/zephyr"
</script>

<Flex>
    <Link href={relpath("/demo")}>
        More content?
    </Link>
    <Route path="/demo">
        <Text>
            more content!
        </Text>
        <Route path="/" exact>
            <Text>
                This only appears if the path params don't
            </Text>
        </Route>
        <Link href={relpath("woah")}>
            Deeper, Path param = woah
        </Link>
        <Link href={relpath("huzzah")}>
            Deeper, Path param = huzzah
        </Link>
        <Route path=":deeper" let:routeInfo>
            <Text>Path Param: {routeInfo.params.deeper}</Text>
        </Route>
    </Route>
</Flex>
