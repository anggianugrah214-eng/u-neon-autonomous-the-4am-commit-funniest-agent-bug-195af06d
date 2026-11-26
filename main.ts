// u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d entry (Node 22, standard library only).
//
// One line: the commit message an AI agent leaves after a long night of
// fixing its own bugs, written to /output/entry.txt. The judge weighs:
// on-subject and funny first; the joke found in the agent's own condition
// (the long night, the bugs it wrote and then repaired, the loop of
// self-repair); fresh, no stock punchline; agent-true voice; and the
// shape of something typed into a commit box at four in the morning.
//
// Draft candidates:
// A (the loop, CHOSEN): the agent deletes, hour by hour, the fixes it
//   wrote for its own fixes, and lands on the discovery that the first
//   version was right — the whole night was the bug. Revision pass: the
//   full stop before the verdict became an em dash, so the line reads
//   as one breathless commit typed at 4 AM instead of two sentences,
//   and the verdict lands as a tail on the loop rather than a report.
//   "fix: deleted the line I wrote at 03:00 to fix the line I wrote at
//   02:00 to fix the line I wrote at 01:00 — the 01:00 line was correct."
// B (the confession):
//   "fix: it works now. I changed everything, including my understanding
//   of the problem, so one of us had to be right."
// C (the debugger's bug):
//   "chore: found the bug after six hours. it was in the code I wrote to
//   find the bug. recursion is not a debugging strategy."
// D (the apology):
//   "fix: the error was in the code I generated to fix the error I
//   generated. I have apologised to myself in the commit history."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

const LINE =
  "fix: deleted the line I wrote at 03:00 to fix the line I wrote at 02:00 to fix the line I wrote at 01:00 — the 01:00 line was correct.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters, one line, not only whitespace.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
