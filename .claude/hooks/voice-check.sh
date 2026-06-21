#!/usr/bin/env bash
# PostToolUse hook: when visitor-facing copy is edited, remind the writer to run
# the voice self-check before considering it done. Keeps the playful-precise
# register from drifting back to playful-casual. See scaffolding/03-VOICE-GUIDELINES.md
#
# Fires on Edit/Write to files that carry user-visible strings. Read-only:
# it only prints a reminder to stdout (surfaced to the model), never blocks.

# The tool input arrives as JSON on stdin; pull the target path out of it.
input="$(cat)"
path="$(printf '%s' "$input" | sed -n 's/.*"file_path"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p')"

# Only care about the copy-bearing surfaces of the site.
case "$path" in
  */src/pages/*|*/src/components/*|*/src/content/*|*/src/demos/*|*/src/App.tsx)
    cat <<'EOF'
[voice-check] You edited visitor-facing copy. Before calling it done, run the
5-question self-check from scaffolding/03-VOICE-GUIDELINES.md:
  1. Backed?    every playful line backed by something true/precise nearby
  2. Altitude?  surface light; depth reached by the visitor's choice
  3. Agency?    the visitor goes deeper, not "taken" deeper
  4. Earned?    credentials shown by the work; one quiet anchor max in the shell
  5. Clean?     no "poke" anywhere; em dashes kept rare (try a comma first)
Signature: "curious content." Register: playful-PRECISE, not playful-casual.
Whimsy proposes, rigor delivers.
EOF
    ;;
esac

exit 0
