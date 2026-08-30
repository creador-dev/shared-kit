import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/components/ui/*.tsx"],
  format: ["esm"],
  target: "es2022",
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react/jsx-runtime"],
});
