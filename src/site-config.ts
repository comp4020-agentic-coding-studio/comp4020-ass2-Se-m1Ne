import { defineSiteConfig } from "astro-theme-university/types";
import { slopBranding } from "astro-theme-slop";
import { courseMeta } from "./course-config";

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

  // The course uses one fixed visual theme; the theme's own light/dark
  // toggle (and its system-preference auto-detection) is switched off here
  // rather than per page, since every page spreads `siteConfig` into
  // `BaseLayout` or `ContentLayout`.
  colorScheme: "light",

  links: [
    { text: "Home", href: "/" },
    { text: sessionLabels.plural, href: "/sessions/" },
    { text: "Lectures", href: "/lectures/" },
    { text: "Assessment", href: "/assessments/" },
    { text: "Showcase", href: "/showcase/" },
  ],

  licence: "CC-BY-NC-SA-4.0",
  socialImage: "/src/assets/images/card.png",
  socialImageAlt: `A preview card for ${courseMeta.code}: ${courseMeta.title}`,
});
