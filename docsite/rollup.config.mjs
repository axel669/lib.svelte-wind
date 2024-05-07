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
                    return path.resolve("src/index.mjs")
                }
                return undefined
            },
            async load(file) {
                if (file !== "$examples") {
                    return
                }
                const root = path.resolve("docsite/example")
                const docsroot = path.resolve("docsite/docs")
                const list = await fs.readdir(root)
                const content = await Promise.all(
                    list.map(
                        file => fs.readFile(
                            path.resolve(root, file),
                            "utf8"
                        )
                    )
                )
                const docs = await Promise.all(
                    list.map(
                        file => {
                            const base = path.basename(file, path.extname(file))
                            return fs.readFile(
                                path.resolve(docsroot, `${base}.md`),
                                "utf8"
                            )
                        }
                    )
                )
                const exports = content.map(
                    (str, i) => {
                        const code = JSON.stringify(
                            Prism.highlight(
                                str,
                                Prism.languages.svelte,
                                "svelte"
                            )
                        )
                        const name = list[i].split(".")[0]
                        const dochtml = JSON.stringify(
                            marked.parse(docs[i])
                        )
                        const Name = name.replace(
                            /(^|\-)(\w)/g,
                            (_, _0, letter) => letter.toUpperCase()
                        )
                        return `{
                            id: "${name}",
                            name: "${Name}",
                            component: example${i},
                            code: ${code},
                            docs: ${dochtml}
                        }`
                    }
                )
                const output = [
                    ...list.map(
                        (file, i) => `import example${i} from ${JSON.stringify(path.resolve(root, file))}`
                    ),
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
            emitCss: false
        }),
        resolve({ browser: true }),
        terser(),
        copy("docsite/static"),
    ]
}
