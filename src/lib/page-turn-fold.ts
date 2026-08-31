// Creates the one small decorative paper-corner cue for Previous/Next
// navigation (see SequentialNavigation.astro's astro:before-preparation
// handler). The actual page transition is plain CSS animating clip-path on
// the browser's own ::view-transition-old(root) / ::view-transition-new(root)
// snapshots (see site.css) — nothing here clones or duplicates page content;
// this is a single plain, non-text div.

const DURATION_MS = 380;
const FOLD_SIZE_DESKTOP = 64;
const FOLD_SIZE_MOBILE = 40;
// Safety net only: the fold removes itself on its own `animationend`, which
// fires at DURATION_MS regardless of how long the surrounding navigation
// took. This just catches the rare case that event never fires (e.g. the
// tab was backgrounded and its animation got suspended).
const FALLBACK_REMOVE_MS = DURATION_MS + 60;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function createPageTurnFold(direction: "next" | "prev") {
  if (prefersReducedMotion()) return;

  const surface = document.querySelector<HTMLElement>(".sequential-page-surface");
  if (!surface) return;

  // One-off measurement, taken once at trigger time, to place the fold at the
  // content area's actual bottom corner rather than an arbitrary viewport
  // offset — not repeated during the animation.
  const rect = surface.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return;

  const mobile = window.matchMedia("(width < 640px)").matches;
  const size = mobile ? FOLD_SIZE_MOBILE : FOLD_SIZE_DESKTOP;

  const fold = document.createElement("div");
  fold.className = `page-turn-fold page-turn-fold--${direction}`;
  fold.setAttribute("aria-hidden", "true");
  fold.style.width = `${size}px`;
  fold.style.height = `${size}px`;
  fold.style.top = `${rect.bottom - size}px`;
  fold.style.left = `${(direction === "next" ? rect.right : rect.left) - (direction === "next" ? size : 0)}px`;

  document.documentElement.appendChild(fold);

  let removed = false;
  const remove = () => {
    if (removed) return;
    removed = true;
    fold.remove();
  };

  // Primary cleanup: the fold's own animation ending, so it can never
  // outlive the visible cue itself — it is gone the instant the cue is.
  fold.addEventListener("animationend", remove, { once: true });
  window.setTimeout(remove, FALLBACK_REMOVE_MS);
}
