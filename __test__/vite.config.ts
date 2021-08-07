import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    build: {
        outDir: path.join(process.cwd(), "../docs"),
    },
})
