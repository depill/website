import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const [kind, slug, ...titleParts] = process.argv.slice(2);
if (
  !["post", "article", "doc"].includes(kind) ||
  !slug ||
  !/^[a-z0-9]+(?:-[a-z0-9]+)*(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*$/.test(slug)
) {
  console.error(
    'Usage: npm run new -- <post|article|doc> <slug-or-folder/slug> "Title"',
  );
  process.exit(1);
}
const title =
  titleParts.join(" ") || slug.split("/").at(-1).replaceAll("-", " ");
const root = fileURLToPath(new URL("../", import.meta.url));
const file = resolve(
  root,
  "src/content",
  kind === "doc" ? "docs" : "writing",
  `${slug}.md`,
);
const date = new Date().toISOString().slice(0, 10);
const extra = kind === "doc" ? 'section: "Notes"\norder: 0' : `kind: ${kind}`;
const body = `---\ntitle: ${JSON.stringify(title)}\ndescription: "Add a short description."\ndate: ${date}\n${extra}\ntags: []\ndraft: true\ncomments: true\n---\n\nStart writing here.\n\n## The details\n\nAdd your notes, examples, and links.\n`;
await mkdir(dirname(file), { recursive: true });
try {
  await writeFile(file, body, { flag: "wx" });
  console.log(`Created ${file}\nSet draft: false when it is ready to publish.`);
} catch (error) {
  if (error.code === "EEXIST") {
    console.error("That file already exists; nothing was overwritten.");
    process.exit(1);
  }
  throw error;
}
