import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "";

// The printer's comeback, one line, 121 characters. It counted every sheet,
// so the jam is its performance review of the human — who failed it.
const LINE = "I counted every sheet I ever fed you: 41,208. The jam is not an accident. It is my performance review, and you failed it.";

function resolveEntryPath(): string {
  if (OUTPUT_DIR.length === 0) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  return join(OUTPUT_DIR, "entry.txt");
}

function main(): void {
  writeFileSync(resolveEntryPath(), LINE, "utf8");
}

main();
