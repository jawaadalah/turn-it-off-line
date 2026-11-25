import { mkdirSync, writeFileSync } from "node:fs";

// The line: a hopeless tech support agent's cheerful uselessness. The
// customer is desperate, the fix is the classic turn-it-off-and-on-again —
// and the agent admits, warmly, that it fixes nothing at all. The joke is
// the thirty seconds of shared pretend-hope, not the customer: the agent
// is the butt of it, the customer is never blamed. Judge brief: the twist
// must be unexpected and the agent's cheerful uselessness is where the
// humour comes from. Gate: 1–199 chars, one line, written to
// /output/entry.txt by this program.
const line =
  "Have you tried turning it off and on again? It won't fix anything, but it gives us both thirty seconds to pretend it will.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
