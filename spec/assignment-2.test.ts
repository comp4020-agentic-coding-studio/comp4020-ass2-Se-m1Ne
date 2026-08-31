import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

// The three digits this repo was provisioned with (SLOP1261) --- the spec
// says these stay fixed no matter what level digit or content changes.
const PROVISIONED_DIGITS = "261";

describe("assignment 2 spec", () => {
  it("keeps a SLOPxxxx code with the provisioned three digits", () => {
    expect(api.course.code).toMatch(/^SLOP[123468]\d{3}$/);
    expect(api.course.code.endsWith(PROVISIONED_DIGITS)).toBe(true);
  });

  it("runs across twelve dated teaching weeks", () => {
    const sessions = api.nodes.filter((node) => node.type === "sessions");
    const weeks = sessions.map((node) => Number(node.meta?.week)).sort((a, b) => a - b);
    expect(weeks).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
    for (const node of sessions) {
      expect(node.meta?.date, `${node.id} has no date`).toBeTruthy();
    }
  });

  it("weights every assessment to add up to 100%", () => {
    const assessments = api.nodes.filter((node) => node.type === "assessments");
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });

  it("carries at least one real deck, linked from its lecture", () => {
    const lectures = api.nodes.filter((node) => node.type === "lectures");
    const withSlides = lectures.filter(
      (node) => typeof node.meta?.slides === "string" && node.meta.slides.length > 0,
    );
    expect(withSlides.length, "no lecture links a deck").toBeGreaterThan(0);

    const realDecks = withSlides.filter((node) => {
      const slug = String(node.meta?.slides).replace(/^\/decks\/|\/$/g, "");
      const deckPath = resolve(`src/decks/${slug}.deck.mdx`);
      if (!existsSync(deckPath)) return false;
      const source = readFileSync(deckPath, "utf8");
      return !source.includes("STARTER_CONTENT");
    });
    expect(realDecks.length, "every linked deck is still the placeholder").toBeGreaterThan(0);
  });
});
