import { readFile, writeFile } from "node:fs/promises";

const file = new URL("../dist/styles.css", import.meta.url);
const css = await readFile(file, "utf8");

const shadcnVariables = [
  "_base",
  "_highlight",
  "_scroll-fade-size-b",
  "_scroll-fade-size-e",
  "_scroll-fade-size-s",
  "_spread",
  "scroll-fade-b",
  "scroll-fade-e",
  "scroll-fade-inline",
  "scroll-fade-mask",
  "scroll-fade-s",
  "scroll-fade-t",
  "shimmer-angle",
  "shimmer-image",
  "shimmer-text-fill",
];

const prefixedCss = shadcnVariables.reduce(
  (result, variable) =>
    result.replaceAll(`--${variable}`, `--wpxdev-shadcn-${variable}`),
  css.replaceAll("--tw-", "--wpxdev-tw-"),
);

await writeFile(file, prefixedCss);
