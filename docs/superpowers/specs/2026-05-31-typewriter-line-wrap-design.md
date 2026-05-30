# Typewriter Line Wrap Design

## Goal
Keep the typewriter line in the hero section from creating a third line or leaving a dangling single character on a new line.

## Non-Goals
- No new animations or behavior changes to the typewriter logic.
- No changes to the overall hero layout structure.

## Approach (Approved: B)
Allow wrapping only at safe break points and cap the typewriter line width so it settles into at most two lines. Avoid mid-word breaks.

### Key Decisions
- Keep the typewriter line as a normal inline element that can wrap.
- Permit wrapping only at safe separators (spaces, punctuation, and bullet separators).
- Add soft break opportunities in the text strings around bullet separators and after sentences.
- Set a max width for the typewriter line on wider screens to prevent a third line.

## UI/UX Behavior
- Typewriter text appears on the second line under the greeting.
- If the text wraps, it wraps into exactly two lines with clean breaks.
- No single-character line at the end.

## Implementation Plan
1. Update the typewriter line CSS to avoid mid-word breaks and apply a max width for the text span.
2. Adjust `heroPhrases` strings to include safe break opportunities around bullets or punctuation.
3. Verify on desktop and mobile widths that the typewriter line never creates a third line.

## Files
- [src/components/Hero.css](src/components/Hero.css)
- [src/components/Hero.jsx](src/components/Hero.jsx)

## Testing
- Manual check at common breakpoints (desktop, tablet, mobile) while phrases cycle.

## Risks
- If a phrase is too long without separators, it may still force a third line on very narrow screens. This is mitigated by adding soft breaks in the strings.
