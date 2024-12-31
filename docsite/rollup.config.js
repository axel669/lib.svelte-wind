import fs from "node:fs/promises"
import path from "node:path"

import asuid from "@axel669/asuid"
import svelte from "rollup-plugin-svelte"
import resolve from "@rollup/plugin-node-resolve"
import html from "@axel669/rollup-html-input"
import terser from "@rollup/plugin-terser"
import del from "rollup-plugin-delete"
import copy from "@axel669/rollup-copy-static"

import { marked } from "marked"
import Prism from "prismjs"
import "prism-svelte"

const root = path.resolve("docsite/example")
const docsroot = path.resolve("docsite/docs")
const exampleFiles = (await fs.readdir(
    root,
    { withFileTypes: true, recursive: true }
)).filter(
    ent => ent.isFile()
).map(
    ent => path.relative(
        root,
        path.resolve(ent.path, ent.name)
    ).replaceAll(path.sep, "/")
)

const componentList = exampleFiles.filter(
    file => file.includes("/") === false && file.startsWith("--") === false
)
const exampleGroups = await Promise.all(
    componentList.map(
        async (file) => {
            const id = path.basename(file, path.extname(file))
            const name = id.replace(
                /(^|\-)(\w)/g,
                (_, _0, letter) => letter.toUpperCase()
            )
            const files = [
                file,
                ...exampleFiles.filter(
                    exf => exf.startsWith(`${id}/`) === true
                )
            ]
            const contents = await Promise.all(
                files.map(
                    filename => fs.readFile(
                        path.resolve(root, filename),
                        "utf8"
                    )
                )
            )
            const docs = await fs.readFile(
                path.resolve(docsroot, `${id}.md`),
                "utf8"
            )
            return {
                id,
                name,
                path: path.resolve(root, file),
                code: files.map(
                    (filename, i) => [
                        filename,
                        Prism.highlight(
                            contents[i],
                            Prism.languages.svelte,
                            "svelte"
                        )
                    ]
                ),
                docs: marked.parse(docs),
            }
        }
    )
)

export default {
    input: "docsite/index.html",
    output: {
        file: `site/app-${asuid()}.js`,
        format: "iife",
        sourcemap: true,
    },
    plugins: [
        del({
            targets: ["site/*.js", "site/*.js.map"],
            force: true,
        }),
        {
            resolveId(id) {
                if (id === "$examples") {
                    return id
                }
                if (id === "@axel669/zephyr") {
                    return path.resolve("src/index.js")
                }
                return undefined
            },
            async load(file) {
                if (file !== "$examples") {
                    return
                }

                const imports = exampleGroups.map(
                    (ex) => `import ${ex.name}Example from ${JSON.stringify(ex.path)}`
                )
                const exports = exampleGroups.map(
                    ex => {
                        const id = JSON.stringify(ex.id)
                        const name = JSON.stringify(ex.name)
                        const code = JSON.stringify(ex.code)
                        const docs = JSON.stringify(ex.docs)
                        return `{
                            id: ${id},
                            name: ${name},
                            code: ${code},
                            docs: ${docs},
                            component: ${ex.name}Example
                        }`
                    }
                )

                const output = [
                    ...imports,
                    "",
                    "export default [",
                    exports.join(",\n"),
                    "]",
                    ""
                ].join("\n")

                return output
            }
        },
        html(),
        svelte({
            emitCss: false,
            compilerOptions: {
                generate: "client",
                runes: true,
            }
        }),
        resolve({ browser: true }),
        terser(),
        copy("docsite/static"),
    ]
}
