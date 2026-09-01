export interface LearningOutcome {
  number: string;
  slug: string;
  title: string;
  description: string;
  weeks: number[];
  /** Compact range for the Home card, e.g. "Weeks 1–3, 8". */
  weekRangeLabel: string;
  /** Fuller phrasing for the Learning Outcome page's supporting line. */
  developedLabel: string;
}

export const learningOutcomes: LearningOutcome[] = [
  {
    number: "01",
    slug: "read-the-rules",
    title: "Read the rules",
    description: "Identify visual, textual, spatial and narrative conventions in picture books.",
    weeks: [1, 2, 3, 8],
    weekRangeLabel: "Weeks 1–3, 8",
    developedLabel: "Developed across Weeks 1–3 and 8",
  },
  {
    number: "02",
    slug: "break-with-purpose",
    title: "Break with purpose",
    description: "Deliberately break a convention to create a specific narrative or reader effect.",
    weeks: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    weekRangeLabel: "Weeks 2–11",
    developedLabel: "Developed across Weeks 2–11",
  },
  {
    number: "03",
    slug: "design-across-words-pictures-pages",
    title: "Design across words, pictures and pages",
    description: "Work with the relationships between words, images, sequence, page turns and the physical page.",
    weeks: [3, 4, 5, 6, 7, 8, 9, 10, 11],
    weekRangeLabel: "Weeks 3–11",
    developedLabel: "Developed across Weeks 3–11",
  },
  {
    number: "04",
    slug: "design-for-the-reader",
    title: "Design for the reader",
    description: "Predict and test how readers notice, interpret, navigate and respond.",
    weeks: [4, 5, 7, 8, 9, 11, 12],
    weekRangeLabel: "Weeks 4–5, 7–9, 11–12",
    developedLabel: "Developed across Weeks 4–5, 7–9 and 11–12",
  },
  {
    number: "05",
    slug: "coherent-misbehaving-book",
    title: "Make a coherent misbehaving book",
    description: "Create original work where rule-breaking supports the story rather than existing only as novelty.",
    weeks: [11, 12],
    weekRangeLabel: "Weeks 11–12",
    developedLabel: "Developed across Weeks 11–12",
  },
];
