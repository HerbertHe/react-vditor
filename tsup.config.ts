import type { Options } from "tsup"

export const tsup: Options = {
    entryPoints: ["src/index.ts"],
    external: ["react", "react-dom", "vditor", "vditor/dist/method"],
    outDir: "lib",
    sourcemap: true,
    dts: true,
    format: ["cjs", "esm"],
    legacyOutput: false,
    clean: true,
}
