import { readFile, writeFile } from "node:fs/promises";

const file = new URL("../dist/styles.css", import.meta.url);
const css = await readFile(file, "utf8");

await writeFile(
  file,
  css.replaceAll("--tw-", "--wpxdev-tw-"),
);
