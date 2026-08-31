import { appendFile, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const publishedPackages = JSON.parse(process.env.PUBLISHED_PACKAGES ?? "[]");
const notesPath = process.env.RELEASE_NOTES_PATH;

if (!Array.isArray(publishedPackages) || publishedPackages.length === 0) {
  throw new Error("PUBLISHED_PACKAGES must contain at least one published package.");
}

if (!notesPath) {
  throw new Error("RELEASE_NOTES_PATH is required.");
}

const preferredOrder = [
  "@wpxdev/shared-kit",
  "@wpxdev/components",
  "@wpxdev/hooks",
  "@wpxdev/styles",
  "@wpxdev/utils",
];

publishedPackages.sort((left, right) => {
  const leftIndex = preferredOrder.indexOf(left.name);
  const rightIndex = preferredOrder.indexOf(right.name);
  return (leftIndex === -1 ? Number.MAX_SAFE_INTEGER : leftIndex) -
    (rightIndex === -1 ? Number.MAX_SAFE_INTEGER : rightIndex);
});

async function changelogSection(packageName, version) {
  const directory = packageName.split("/").at(-1);
  const changelog = await readFile(
    path.join(process.cwd(), "packages", directory, "CHANGELOG.md"),
    "utf8",
  );
  const lines = changelog.split("\n");
  const heading = `## ${version}`;
  const start = lines.findIndex((line) => line.trim() === heading);

  if (start === -1) {
    return "No package-specific release notes were recorded.";
  }

  const nextHeading = lines.findIndex(
    (line, index) => index > start && line.startsWith("## "),
  );
  const end = nextHeading === -1 ? lines.length : nextHeading;
  return lines
    .slice(start + 1, end)
    .join("\n")
    .trim()
    .replace(/^### /gm, "#### ");
}

const releaseDate = new Date().toISOString().slice(0, 10);
const runNumber = process.env.GITHUB_RUN_NUMBER ?? "local";
const repository = process.env.GITHUB_REPOSITORY ?? "wpxdevlabs/shared-kit";
const commit = process.env.GITHUB_SHA ?? "main";
const tag = `release-${releaseDate}.${runNumber}`;
const title = `WPXDev Shared Kit — ${releaseDate} (#${runNumber})`;

const packageRows = publishedPackages.map(
  ({ name, version }) =>
    `| [\`${name}\`](https://www.npmjs.com/package/${name}/v/${version}) | \`${version}\` |`,
);

const changeSections = await Promise.all(
  publishedPackages.map(async ({ name, version }) => {
    const changes = await changelogSection(name, version);
    return `### ${name} ${version}\n\n${changes}`;
  }),
);

const notes = [
  "# WPXDev Shared Kit release",
  "",
  "## Published packages",
  "",
  "| Package | Version |",
  "| --- | --- |",
  ...packageRows,
  "",
  "## Changes",
  "",
  changeSections.join("\n\n"),
  "",
  `**Source:** [\`${commit.slice(0, 7)}\`](https://github.com/${repository}/commit/${commit})`,
  "",
].join("\n");

await writeFile(notesPath, notes, "utf8");

if (process.env.GITHUB_OUTPUT) {
  await appendFile(process.env.GITHUB_OUTPUT, `tag=${tag}\ntitle=${title}\n`, "utf8");
}

console.log(`Generated consolidated release notes for ${publishedPackages.length} packages.`);
