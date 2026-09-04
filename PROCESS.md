# Process overview

This file maps the main decisions that shaped the finished course site. The
commits are included as evidence of changes that affected the direction of the
work, rather than as a list of everything that was built.

## What I built

I built **SLOP2261: Picture Books That Misbehave**, a 12-week course about
breaking the visual, textual, narrative and physical conventions of picture
books.

The course follows the path **Notice -> Break -> Construct -> Test -> Integrate**.
Students begin by identifying rules that normally make picture books easy to
read, then experiment with framing, words and pictures, unreliable stories,
page space, reading order and reader participation. The final weeks bring these
ideas together through character resistance, metafiction and revision.

A rule that guided the website itself was: **the content may misbehave, but the
website must not**. The teaching material can challenge normal reading, while
the interface stays clear and predictable.

## The moments that mattered

### Finding a visual identity for the course

The first important change was moving away from the generic starter appearance.
I reshaped the public structure around a Cover, Home, Weeks, Lectures and
Assessments
([`44c27bd`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Se-m1Ne/commit/44c27bd)),
then tested several visual directions.

[`e420d7b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Se-m1Ne/commit/e420d7b)

[`17f2ad6...fd2a1fa`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Se-m1Ne/compare/17f2ad6...fd2a1fa)

The design gradually became simpler. I removed visual ideas that felt too
decorative and settled on cool neutral surfaces with teal and coral accents.
The result still refers to pages and editorial layouts without making the site
look like a children's book.

### Turning 12 weeks into one course

I did not treat the weekly content as 12 unrelated topics. I built the course
forward from early experiments with basic picture-book conventions
([`12d90a9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Se-m1Ne/commit/12d90a9))
towards increasingly active forms of rule-breaking.

By Weeks 8-11, the reader can change order, participate in the story, meet a
character who refuses the text, and encounter a book that knows it is a book
([`7ba3f9c...be7f4b2`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Se-m1Ne/compare/7ba3f9c...be7f4b2)).

I deliberately made Week 12 about removing a trick rather than adding another
one
([`03e86f7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Se-m1Ne/commit/03e86f7)).
This made restraint part of the course progression: breaking more rules is not
automatically better.

### When the website misbehaved too much

After the content was complete, I experimented with a page-turn transition for
the Previous/Next navigation
([`f01c719`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Se-m1Ne/commit/f01c719)).

The first effect was not clear enough, so I repeatedly strengthened and changed
it
([`81199a7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Se-m1Ne/commit/81199a7),
[`8925d83...a8ce071`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Se-m1Ne/compare/8925d83...a8ce071)).

This made the page-turn idea more visible, but not better. The transition became
something the user had to notice every time they changed pages. It was
expressing the course theme at the expense of navigation.

I removed the animation completely but kept the useful Previous/Next structure
([`8ce2db7`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Se-m1Ne/commit/8ce2db7)).
That experiment clarified the difference between designing a course about
misbehaviour and designing an interface that misbehaves.

### Rethinking the Cover

A similar problem appeared when I experimented with replacing the Cover with a
large course-specific hero
([`64431cb`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Se-m1Ne/commit/64431cb)).
Although it made the Cover more visual, the hero became too dominant and the
abstract page composition felt more like decoration than part of the course.

Instead of continuing to add visual elements, I removed the hero and rebuilt
the Cover around typography and whitespace
([`f7ea178`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Se-m1Ne/commit/f7ea178)).
I then made smaller hierarchy and alignment refinements to the Home page
([`1bfe7af`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Se-m1Ne/commit/1bfe7af)).
This repeated the lesson from the page-turn experiment: removing an idea can be
more useful than continuing to make it more elaborate.

### Finishing through refinement

The last stage focused on consistency rather than adding more teaching content.
I corrected naming and week-marker layout problems
([`ffd3148`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Se-m1Ne/commit/ffd3148),
[`f32c814`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Se-m1Ne/commit/f32c814))
and added dark mode as a counterpart to the existing teal/coral design
([`d150087`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-Se-m1Ne/commit/d150087)).

The main lesson from the process was that the course became stronger when I
stopped treating "misbehaviour" as something that had to appear everywhere.
The final site is deliberately restrained so that the unusual ideas belong to
the teaching, activities and student work instead of getting lost in the
interface.