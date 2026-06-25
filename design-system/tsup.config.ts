import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  sourcemap: false,
  // React is provided by the host (the design runtime / consumer app)
  external: ["react", "react-dom", "react/jsx-runtime"],
  // Bundle imported .css into a single dist/index.css
  injectStyle: false,
  esbuildOptions(options) {
    options.jsx = "automatic";
  },
});
