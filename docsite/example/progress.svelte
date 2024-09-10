<script>
    import { Progress, Flex, Text } from "@axel669/zephyr"
</script>

<Flex>
    <Text title>Basic Progress Bar</Text>
    <Progress value="0.3" />
    <Progress value="0.7" />

    <Text title>Colorized Progress Bar</Text>
    <Progress value="0.3" color="@primary" />
    <Progress value="0.7" color="@secondary" />

    <Text title>Interdemindate (busy) Progress Bar</Text>
    <Progress busy />
    <Progress busy color="@primary" />
    <Progress busy color="@accent" />

    <Text title>Buffered Progress Bar</Text>
    <Progress value="0.3" buffer="0.5" />
    <Progress value="0.7" buffer="0.9" color="@danger" r="0px" />
</Flex>
