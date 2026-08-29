import { sassPlugin } from "esbuild-sass-plugin";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  target: "es2022",
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react"],
  esbuildPlugins: [
    sassPlugin({
      embedded: true,
      type: (css) => `
        const css = ${JSON.stringify(css)};
        if (typeof document !== "undefined") {
          const style = document.createElement("style");
          style.appendChild(document.createTextNode(css));
          document.head.appendChild(style);
        }
        export { css };
      `,
    }),
  ],
});
