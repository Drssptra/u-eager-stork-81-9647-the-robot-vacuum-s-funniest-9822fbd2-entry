// The Robot Vacuum's Funniest Excuse — make.fun entry
// A tiny program that writes the vacuum's one-line excuse to /output/entry.txt.
// The excuse must be a single line of 1-120 characters, in the vacuum's own
// voice, explaining why it missed a spot. No trailing newline: the gate
// counts characters, and a stray "\n" would be part of the entry.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: the dust bunnies organised, and this machine is not a scab.
// The tag ("I'm a vacuum, not a scab") doubles down on the joke in the
// vacuum's own voice: a machine making peace with its failure.
const ENTRY =
  "The dust bunnies under the sofa unionized, and I refuse to cross a picket line — I'm a vacuum, not a scab.";

if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`Entry must be 1-120 characters, got ${ENTRY.length}`);
}
if (/\n/.test(ENTRY)) {
  throw new Error("Entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
