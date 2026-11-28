# H3E Motor — academic website

Seven static pages for Dr Anh Thanh Huynh, hosted on GitHub Pages.

## Update the site

| Content | File |
| --- | --- |
| Homepage introduction and three pillars | `index.html` |
| Profile, biography, experience and education | `about.html` |
| Research themes, technical detail and supporting figures | `research.html` |
| Selected publications and DOI links | `publications.html` |
| Recognition and academic service | `achievements.html` |
| Publication and research highlights | `news.html` |
| Professional profiles and collaboration | `contact.html` |
| Shared visual system and responsive layouts | `refined.css` |
| Mobile menu | `navigation.js` |
| Image provenance | `ASSET_SOURCES.md` |
| Revision notes and outstanding personal details | `SITE_REVIEW.md` |

Commit changes to `main`; GitHub Pages republishes automatically. All internal links use relative paths. No build command, paid theme or external font service is required.

## Design

The approved copper-and-steel badge appears in the header and footer. The supplied blue-and-charcoal background is most visible in the homepage hero, with the same aligned image across every page and transparent content sections. The two-line homepage headline and three research pillars are retained. Research figures link to their unchanged full-resolution files.

Only `refined.css` is loaded by the seven pages. Earlier `style.css` and `design.css` remain as historical source assets.

## Publication records

`publication-records.json` records selected citation metadata and topic tags. `publications.js` filters the pre-rendered HTML records without hiding content from visitors who disable JavaScript. `PUBLICATION_SOURCES.md` records the CV and primary sources used in the update.

## Content to complete when available

A professional portrait and a public-facing downloadable CV can be added later. The supplied CV has informed the website text, career dates and university email; the original file and private contact details are not hosted. The website currently uses a monogram and the owner-provided professional profile links. Publications are a selected list, with Google Scholar linked for the wider record.
