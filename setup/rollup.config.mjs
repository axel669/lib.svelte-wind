import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import svelte from "rollup-plugin-svelte"
import del from "rollup-plugin-delete"
import html from "@axel669/rollup-html-input"
import $path from "@axel669/rollup-dollar-path"
import copy from "@axel669/rollup-copy-static"
import asuid from "@axel669/asuid"
import {terser} from "rollup-plugin-terser"

export default {
    input: "src/index.html",
    output: {
        file: `artifacts/app-${asuid()}.js`,
        format: "esm",
        sourcemap: true,
    },
    plugins: [
        del({
            targets: [
                "artifacts/app-*.js",
                "artifacts/app-*.js.map",
                "artifacts/index.html",
            ]
        }),
        html(),
        $path({
            root: "src"
        }),
        svelte({
            emitCss: false,
        }),
        resolve(),
        commonjs(),
        copy("static"),
        terser()
    ]
}
