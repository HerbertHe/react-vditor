import type { Options } from "tsup"

export const tsup: Options = {
    entryPoints: ["src/index.ts"],
    external: ["react", "react-dom", "vditor"],
    outDir: "lib",
    sourcemap: true,
    dts: true,
    format: ["cjs", "esm"],
    legacyOutput: false,
    clean: true,
}
