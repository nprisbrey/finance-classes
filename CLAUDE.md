# Finance Classes

A weekly financial literacy class I run for a group of fellow college students. The goal is to build a group that learns financial topics together, gets better at handling money, and is more prepared for the future.

## Class format (1 hour)

- **10 min — Opener (group discussion):** Members share new things they've done with money, something interesting they've learned, or a new investment they like.
- **40 min — Lesson (teacher-led slides):** One person leads the group through slides on the week's topic.
- **10 min — Market moment:** Someone shares a recent, important event in the financial markets that ties into the day's topic.

## Repo layout

- One folder per week, named after that week's topic in lowercase (e.g. `credit/`).
- Each week folder holds a single `content.md` — the markdown notes for that week.
- Notes are drafted in `content.md`, then fed to Claude Design to generate the slides.

## Audience & depth

The group is fairly knowledgeable — assume members already know the basics. Favor depth, nuance, and more advanced strategy over introductory definitions. Skip 101-level padding unless a term is genuinely non-obvious. Use concrete numbers and real examples.

## How to help

When asked to revise or prepare a week's notes:

- Work in that week's `content.md`.
- Keep the structure aligned to the 10/40/10 format (opener prompts → 40-min lesson body → market-moment tie-in).
- Make the lesson section slide-friendly: clear section headers, tight bullets, and key figures/examples called out so Claude Design can turn them into slides cleanly.
- Suggest a relevant recent market event for the closing segment when you can.

### Suggested `content.md` structure

```
# <Topic>

## Opener (10 min)
Prompts / discussion seeds for the group.

## Lesson (40 min)
Main teaching content, organized into slide-sized sections.

## Market moment (10 min)
A recent markets event tied to this topic.
```
