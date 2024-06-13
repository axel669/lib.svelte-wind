<script>
    import { Title } from "#lib"

    export let code
    export let component
    export let docs
    export let name
    export let page

    page.push(name)
</script>

<Title data={name} />

<div>
    {@html docs}

    <h2>Example</h2>

    <svelte:component this={component} />
    {#each code as [filename, codeHTML]}
        <h3>{filename}</h3>
        <pre class="language-svelte"><code class="language-svelte">{@html codeHTML}</code></pre>
    {/each}
</div>
