import { defineConfig } from 'vitest/config'
import topLevelAwait from "vite-plugin-top-level-await";
import wasm from "vite-plugin-wasm";

export default defineConfig({
    build: {
        lib: {
            entry: './browser/diff_updater.js',
            name: 'json-patcher',
            fileName: 'index',
            formats: ['es']
        },
        outDir: 'browser',
        emptyOutDir: false
    },
    plugins: [
        wasm(),
        topLevelAwait(),
    ],
    test: {
        include: ['test/**/*.spec.{js,ts}'],
        globals: true,
        resolve: {
            mainFields: ['browser']
        },
        browser: {
            enabled: true,
            name: 'chrome', // browser name is required
        },
    }
})
