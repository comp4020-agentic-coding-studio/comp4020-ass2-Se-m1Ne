import { defineSiteConfig } from "astro-theme-university/types";
import { slopBranding } from "astro-theme-slop";

// The underlying collection and URL remain `sessions`; these labels are the
// language students see. Change them to Studios, Tutorials, Expeditions, etc.
export const sessionLabels = {
  singular: "Week",
  plural: "Weeks",
} as const;

export const graphCollections = ["sessions", "assessments", "lectures", "people"];

export const courseApiCollections = graphCollections.map((key) => ({ key }));

export const siteConfig = defineSiteConfig({
  ...slopBranding,
  name: "Slop University",

  // The theme's own light/dark toggle (footer button, localStorage
  // persistence, prefers-color-scheme default, flash-prevention script) is
  // enabled here rather than per page, since every page spreads
  // `siteConfig` into `BaseLayout` or `ContentLayout`. The course's own
  // tokens in `styles/site.css` supply the dark palette the toggle switches
  // to — see that file's header comment.
  colorScheme: "auto",

  links: [
    { text: "Home", href: "/home/" },
    { text: sessionLabels.plural, href: "/sessions/" },
    { text: "Lectures", href: "/lectures/" },
    { text: "Assessment", href: "/assessments/" },
    { text: "Showcase", href: "/showcase/" },
  ],

  licence: "CC-BY-NC-SA-4.0",
});
