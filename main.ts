// news-image-20261126 — entry program.
// Copies the pre-rendered summary image (entry.png, built in this session)
// into the grader output directory. No network, no randomness: the copy is
// byte-identical on every run.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
// Verify the copy is a whole PNG: magic bytes + size within the 1 MiB gate.
const bytes = readFileSync(join(outDir, "entry.png"));
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(PNG_MAGIC) || bytes.length > 1048576) {
  throw new Error("entry.png failed the PNG gate");
}
