<script>
    import { Suspend, Button } from "@axel669/zephyr"

    import PretendSync from "./suspend/pretend-sync.svelte"

    let asyncOp = null
    let failedOp = null
    const wait = (time) => new Promise(
        (resolve) => setTimeout(resolve, time)
    )
    const asyncTask = async () => {
        await wait(2000)
        return Date.now()
    }
    const failedTask = () => Promise.reject(new Error("Example Error"))

    const runTasks = () => {
        asyncOp = asyncTask()
        failedOp = failedTask()
    }
</script>

<Button fill color="@primary" on:click={runTasks}>
    Run Async Task
</Button>
{#if asyncOp !== null}
    <Suspend !component={PretendSync} time={asyncOp} />
    <Suspend !component={PretendSync} time={asyncOp} other={failedOp} />
{/if}
