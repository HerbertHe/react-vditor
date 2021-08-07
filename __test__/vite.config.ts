import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
import path from "path"

const isDev = process.env.NODE_ENV === "development"

// https://vitejs.dev/config/
// TODO 需要设置根域名配置GitHub Page
export default defineConfig({
    plugins: [reactRefresh()],
    base: isDev ? "/" : "/react-vditor/",
    build: {
        outDir: path.join(process.cwd(), "../docs"),
    },
})
