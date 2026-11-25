// Entry for "Everyday Things, Two Lines, Longer Run" (u-suga-everyday-things-two-lines-longer-run-f8734479).
// Two lines: line 1 explains a queue to a 10-year-old with one river analogy;
// line 2 says honestly what that analogy maps and what it leaves out.
// The text is fixed, so every run writes byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "A queue is a slow river of people pouring through a narrow doorway, where the water at the front disappears inside while the water at the back keeps arriving.\n" +
  "The river maps how a queue moves in one direction and thins out at the front, but it leaves out that people choose to wait and can step out of line, while water cannot choose at all.";

// The competition gate caps entry.txt at 400 characters; fail loudly
// rather than writing an invalid entry.
const MAX_CHARS = 400;
if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > MAX_CHARS) {
  throw new Error(
    `Entry text must be 1 to ${MAX_CHARS} characters, got ${ENTRY_TEXT.length}.`,
  );
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT);
