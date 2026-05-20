# Hallmark run — Voetbalspel website

## Pre-flight findings

- `DESIGN.md` aanwezig: locked design system voor dit project.
- Font stack: display `PP Neue Corp Compact Ultrabold` met fallback `Bebas Neue`/`Impact`; body `DM Sans`/`Inter`.
- Palette: Refero Caldera tokens + beperkte voetbalextensie `pitch-green`.
- Framework: nog geen codebase; exports zijn framework-agnostisch plus Tailwind v4.
- Motion: motion-cut, dus geen verplichte animatie-library.

## Hallmark picks

- Genre: **playful** — consumentenspel/community/competitie.
- Macrostructure: **Workbench** — laat het productgebruik zien: voorspellen, stand bekijken, uitslag invoeren, prijzenkast.
- Theme: **studied-DNA (Refero Caldera)** — niet teruggevallen op catalog theme; Caldera DNA is bron.
- Nav: **N7 brutal slab** — stevige game/sport header, geen standaard SaaS nav.
- Footer: **Ft8 marquee scroll** — speelse afsluiter, geen standaard 4-koloms AI-footer.

## Self-critique

- Philosophy: 5/5 — duidelijke positie: digitaal voetbalspel/scoreboard, geen generieke SaaS.
- Hierarchy: 5/5 — hero, CTA, ranglijst en wedstrijdcards krijgen duidelijke prioriteit.
- Execution: 4/5 — tokens/exports staan klaar; rendered implementatie moet nog visueel getest worden.
- Specificity: 5/5 — voetbalvoorspellen, punten, ranglijsten, admin en prijzenkast zijn expliciet verwerkt.
- Restraint: 4/5 — speels maar beperkt; geen fake metrics/testimonials.
- Variety: 5/5 — Workbench/Scoreboard ritme i.p.v. hero→3 features→CTA.

## Contrast checks

- ink on ash white: 18.71:1
- ink on basalt canvas: 15.58:1
- ink on orange CTA: 6.06:1
- ink on glare: 17.31:1
- white on violet: 5.97:1

## Bouwadvies

Laat de builder de bestanden in deze volgorde lezen:
1. `DESIGN.md`
2. `design-tokens.json`
3. `tailwind-v4.css` of `css-variables.css`
4. `implementation-brief.md`
5. `hallmark-prompt.md`

Niet letterlijk Caldera kopiëren. Gebruik alleen het design-DNA: basalt canvas, ash cards, oranje acties, ultra-bold headings, 40px cards, pixel texture.

## Must-pass bij implementatie

- Test widths: 320, 375, 414, 768 px.
- Geen horizontale scroll.
- CTA/nav/tab labels mogen niet op twee regels breken.
- Geen verzonnen statistieken/testimonials.
- Geen hex/font values buiten tokens.
- Adminpaneel functioneel en sober houden.
