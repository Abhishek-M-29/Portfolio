# Typewriter Line Wrap Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Prevent the hero typewriter line from creating a third line or a dangling single character line while allowing clean two-line wraps.

**Architecture:** Use CSS to prevent mid-word breaks and cap the typewriter span width, and add soft break opportunities inside the typewriter strings at safe separators.

**Tech Stack:** React (Vite), CSS modules via component stylesheet

---

## File Structure
- Modify: `src/components/Hero.css` — adjust wrapping rules and max width for the typewriter span.
- Modify: `src/components/Hero.jsx` — add soft break opportunities in `heroPhrases` strings.

### Task 1: Update typewriter line CSS

**Files:**
- Modify: `src/components/Hero.css`

- [ ] **Step 1: Write the CSS change**

```css
.hero-title-type {
  display: inline-block;
  font-size: 0.74em;
  line-height: 1.08;
  color: var(--accent);
  overflow-wrap: normal;
  word-break: normal;
  hyphens: none;
  max-width: min(100%, 26ch);
}
```

- [ ] **Step 2: Manual check**

Run the dev server and verify the typewriter line wraps to at most two lines on desktop and mobile widths.

Run: `npm run dev`
Expected: The typewriter line never creates a third line or a lone trailing character line.

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.css
git commit -m "fix: constrain hero typewriter line wrap"
```

### Task 2: Add soft break opportunities in typewriter strings

**Files:**
- Modify: `src/components/Hero.jsx`

- [ ] **Step 1: Update phrases to include safe break points**

```jsx
const heroPhrases = [
  '5x Hackathon Winner.',
  '7x Competitive Event Winner.',
  'Backend & AI Engineer.',
  'Executive Lead @ The Big O.',
  'Python \u200b•\u200b SQL \u200b•\u200b MongoDB.',
  'LLMs \u200b•\u200b System Architecture.',
  'CSE @ VTU.',
]
```

- [ ] **Step 2: Manual check**

Run the dev server and cycle through the phrases at multiple widths.

Run: `npm run dev`
Expected: Bullet-separated phrases wrap cleanly into two lines without pushing a single trailing character to a third line.

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.jsx
git commit -m "fix: add safe wrap points to hero phrases"
```

## Self-Review
- **Spec coverage:** CSS wrapping rules + max width and safe breaks in strings cover the spec requirements.
- **Placeholder scan:** No TODOs or placeholders present.
- **Type consistency:** `heroPhrases` still uses strings; no API changes to `useTypewriter`.

## Execution Handoff
Plan complete and saved to `docs/superpowers/plans/2026-05-31-typewriter-line-wrap.md`. Two execution options:

1. Subagent-Driven (recommended) - I dispatch a fresh subagent per task, review between tasks, fast iteration
2. Inline Execution - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?
