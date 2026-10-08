# Resilient Futures Lab

A website for responsible AI, digital safety and financial resilience. Free to use.

**Start locally:** unzip the package and open `index.html` in a browser. Keep the `assets` and `resources` folders beside it. You do not need Node, Python, an API key, an account system or a paid AI service to run the website.

Official GitHub instructions, checked 7 October 2026:

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## What is included

- **Three learning paths:** Responsible AI, Digital safety and Financial resilience.
- **20 working interactive activities**, including all 17 requested flagship activities and three additional money labs.
- **18 complete articles**, six per path, with worked examples, a practice task, an understanding check and primary-source links.
- **47 decision scenarios** across seven scenario-based games.
- **Six printable teaching resources**, provided as HTML and PDF (16 A4 pages in the PDFs).
- **Ukrainian starter pack:** three short lessons with an interactive question for each. This is a starter pack, not a full translation of the website.
- **Learning passport:** completion records saved on the current browser, with a downloadable text record and a clear-progress control.
- Responsive layouts, keyboard controls, reduced-motion support, chart tables, and select-menu alternatives to drag-and-drop.

## The activities

| Responsible AI | Digital safety | Financial resilience |
|---|---|---|
| AI Adviser Challenge | Can You Spot the Scam? | Financial Life Simulator |
| Prompt Laboratory | Fake Financial Influencer | Inflation Time Machine |
| Should You Tell AI This? | | Compound-Interest Playground |
| Hallucination Hunt | | Build Your Budget |
| Train Your Own Tiny AI | | Financial Detective |
| AI or Human? | | Financial Escape Room |
| | | The Resilience Crossword |
| | | Risk Personality Game |
| | | Diversification Sandbox |
| | | Loan Lab |
| | | Subscription Trap |
| | | The €100 Challenge |

Digital safety also has six articles and its printable teaching material. The three paths intentionally connect: financial influencer scams belong in the safety path, while financial arithmetic and decision puzzles belong in the money path.

## Edit or extend the content

The site is modular, but has no dependency installation or integration step.

| File | Purpose |
|---|---|
| `index.html` | Page shell, navigation, metadata and script loading order |
| `assets/styles.css` | Design, layouts, responsive rules, reduced motion and printing |
| `assets/core.js` | Module definitions, activity catalogue, shared progress and financial calculation helpers |
| `assets/articles.js` | All 18 articles as structured content |
| `assets/scenarios.js` | Question and feedback banks for seven games |
| `assets/uk.js` | Ukrainian starter content |
| `assets/activities.js` | Interactive activity engines |
| `assets/app.js` | Home, paths, reading views, educator pages and navigation |
| `assets/webmcp.js` | Optional feature-detected structured controls for compatible browsers |
| `resources/` | Self-contained printable HTML files and corresponding PDFs |
| `resource-manifest.json` | Machine-readable catalogue of materials and learning outcomes |

### Add an article

Add one object to `window.RFL_ARTICLES` in `assets/articles.js`. Copy the structure of an existing article: `id`, `title`, `module`, `minutes`, `summary`, `outcome`, `sections`, `tryIt`, `question`, `sources`. Module must be `ai`, `safety` or `money`. Use a unique, stable ID. The new article appears automatically in its path. If article counts change, update the homepage's displayed count.

### Add more questions to an existing game

Add another object to the corresponding array in `assets/scenarios.js`. For scored games, `correct` is the zero-based index of the best option. `explanation` explains the answer and `lesson` states the transferable point. The risk reflection uses `correct: null` because it does not diagnose a person or prescribe an investment.

### Add an entirely new activity

1. Add its metadata to `RFL.activities` in `assets/core.js`.
2. Add `RFL.engines['your-id'] = function(root) { ... }` inside `assets/activities.js` before the final closing wrapper.
3. Use `RFL.check(...)` for a meaningful understanding check or record completion after the learner finishes the activity using `RFL.complete('your-id')`.
4. Upload the changed files. The activity appears automatically in its learning path; no menu integration is needed.

For a future request, ask for replacement copies of the specific changed files using this structure. Keep existing IDs if you want old learning records to continue matching their materials.

## Deliberate limits

- All calculations and games run in the learner's browser. There is no backend, login, class leaderboard or live classroom synchronisation.
- AI-style answers in the scenario games and Prompt Laboratory are authored teaching examples, not live AI calls. Tiny AI really fits a simple two-feature nearest-centroid classifier locally, it is not a production fraud detector.
- Rates, costs, budgets, asset returns and cases are fictional or illustrative. The source/model-notes page states the assumptions. No live market data or financial product recommendations are used.
- “AI or Human?” teaches source and evidence checks.
- “Risk Personality Game” is an ungraded reflection, not a psychological test or investment-suitability assessment.
- Progress is device/browser local, not collected by the project.
- No analytics is installed. This static package does not measure the proposal's visit/participant targets or collect assessment results. The paper assessment tools can support a separately managed evaluation.

## Content and sources

Primary educational sources are linked at the end of each article and on the site's Sources & model notes page. The explanations, scenarios and worksheets are original educational materials prepared for this project. Linking to an institution does not imply its endorsement. No third-party JavaScript libraries, remote fonts, photos, advertising or analytics scripts are included in the runtime website.
