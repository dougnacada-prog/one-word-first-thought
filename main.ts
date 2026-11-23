// One Word, First Thought — make.fun entry.
// The program writes exactly one word to /output/entry.txt:
// the first word that comes to mind.
//
// Petrichor: the smell of rain on dry earth after a long dry spell.
// It is the first word that springs to mind — vivid (a whole summer
// storm in nine letters), surprising (nobody guesses it), and with a
// soft, rain-like sound that rewards a second look.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "Petrichor";

// Gate guard: the sealed scorer requires /output/entry.txt to be UTF-8
// text of 1–24 characters, not only white space, and exactly one word.
if (!/^[^\s]{1,24}$/.test(WORD)) throw new Error("entry must be one word of 1-24 chars");

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, WORD);
