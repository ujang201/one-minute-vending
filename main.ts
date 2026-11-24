// One Line, One Minute: The Vending Machine Pickup Line Contest
// Entry program: writes a single pickup line, spoken by a vending
// machine to a passing human, to $OUTPUT_DIR/entry.txt (or /output).
// The line is a fixed, hand-written string — no randomness, no network,
// no input — so every run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Hey — I've been keeping your favourite snack at eye level all day, " +
  "just hoping you'd notice me. Press B4: exact change only, and I " +
  "promise I'll drop something sweet.";

function main(): void {
  if ([...LINE].length > 200) {
    throw new Error(`entry is ${[...LINE].length} characters, over the 200 limit`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
