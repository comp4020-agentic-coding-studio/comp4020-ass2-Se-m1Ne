// Shared `transition:animate` config for the sequential Previous/Next
// page-turn (see SequentialNavigation.astro and the three `[slug].astro`
// detail pages). Horizontal-only by design: this wraps the full content
// surface, so any rotation around an edge would swing the far side
// vertically by a large amount on tall pages — see CLAUDE.md and
// site.css's at-page-turn-* keyframes.
const easing = "cubic-bezier(0.4, 0, 0.2, 1)";

export const pageTurn = {
  forwards: {
    old: { name: "at-page-turn-out-fwd", duration: "320ms", easing, fillMode: "both" },
    new: { name: "at-page-turn-in-fwd", duration: "320ms", easing, fillMode: "both" },
  },
  backwards: {
    old: { name: "at-page-turn-out-bwd", duration: "320ms", easing, fillMode: "both" },
    new: { name: "at-page-turn-in-bwd", duration: "320ms", easing, fillMode: "both" },
  },
};
