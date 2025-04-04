import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "tailwindcss"

export default defineConfig({
    plugins: [react()],
    base: '/',
    build: {
        target: 'esnext'
    },
    css: {
        postcss: {
            plugins: [tailwindcss()],
        }
    }
})