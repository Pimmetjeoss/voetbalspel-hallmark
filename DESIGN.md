---
version: alpha
name: Voetbalspel Caldera
source: "Refero Styles / Caldera — https://styles.refero.design/style/fe8cdcf9-c850-4d52-be07-5ad269bf9ebf"
description: "Mobielvriendelijke website voor een voetbalvoorspelspel; Caldera DNA vertaald naar een vriendelijke sport/game interface."
colors:
  primary: "#070607"
  secondary: "#e2e2df"
  tertiary: "#fc5000"
  accent: "#524ae9"
  highlight: "#f5f28e"
  surface: "#f7f6f2"
  white: "#ffffff"
  pitch: "#196f3d"
typography:
  display:
    fontFamily: "PP Neue Corp Compact Ultrabold, Bebas Neue, Impact, sans-serif"
    fontSize: 96px
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "0.02em"
    fontFeature: "ss06, ss10"
  h1:
    fontFamily: "PP Neue Corp Compact Ultrabold, Bebas Neue, Impact, sans-serif"
    fontSize: 80px
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.02em"
  h2:
    fontFamily: "PP Neue Corp Compact Ultrabold, Bebas Neue, Impact, sans-serif"
    fontSize: 56px
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "0.02em"
  body:
    fontFamily: "DM Sans, Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.55
  body-sm:
    fontFamily: "DM Sans, Inter, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.25
rounded:
  card: 40px
  default: 40px
  input: 100px
  button: 800px
spacing:
  element: 10px
  card: 40px
  section: 40px
  page: 80px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    rounded: "{rounded.button}"
    padding: 12px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.button}"
    padding: 12px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.card}"
    padding: 40px
  card-accent:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    rounded: "{rounded.card}"
    padding: 40px
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary}"
    rounded: "{rounded.input}"
    padding: 12px

  trophy-card:
    backgroundColor: "{colors.highlight}"
    textColor: "{colors.primary}"
    rounded: "{rounded.card}"
    padding: 40px
  violet-panel:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: 40px
  pitch-badge:
    backgroundColor: "{colors.pitch}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: 12px
  page-shell:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary}"
    rounded: "{rounded.default}"
    padding: 40px
---

## Overview

Gebruik het Caldera design-DNA — **Pixelated Cyber-Playground** — maar vertaal het naar een vriendelijk voetbalvoorspelspel. Het moet speels en competitiegericht voelen, niet crypto/tech-only. De site moet eenvoudig genoeg blijven voor een vriendelijk tarief: heldere pagina's, weinig overbodige animatie, sterke visuele identiteit via kleur, typografie, cards en ranglijstcomponenten.

Doel van de website:
- Gebruikers registreren en laten inloggen.
- Beheerder voert wedstrijduitslagen in.
- Automatische puntentelling.
- Ranglijsten per week, maand en algemeen.
- Eenvoudig adminpaneel.
- Artikelen/updates pagina.
- Visuele prijzenkast.
- Mobielvriendelijk.

## Colors

- **Abyssal Ink `#070607`** — hoofdkleur voor tekst, borders, iconen en ranglijstnummers.
- **Basalt Canvas `#e2e2df`** — primaire pagina-achtergrond; voelt als een muted digitaal speelveld.
- **Ash White `#f7f6f2`** — cards, formulieren, ranglijstpanelen, artikelkaarten.
- **Digital Orange `#fc5000`** — primaire CTA's, actieve tabs, winnaar/highlight-states, belangrijke scorebadges. Gebruik bij oranje fills bij voorkeur Abyssal Ink als tekstkleur voor WCAG-contrast.
- **Cyber Violet `#524ae9`** — decoratieve wedstrijd-/toernooi-accenten, grafische vlakken, niet als tekstkleur.
- **Pixel Glare `#f5f28e`** — subtiele highlight, trophy shine, kleine tags.
- **Pitch Green `#196f3d`** — beperkt gebruiken voor voetbalcontext: veldlijnen, iconen, positieve status.

## Typography

Display en headings gebruiken een ultrabold condensed font: `PP Neue Corp Compact Ultrabold`, fallback `Bebas Neue` of `Impact`. Body gebruikt `DM Sans`, fallback `Inter`.

Gebruik grote koppen voor sport/game-energie:
- Hero: "VOORSPEL. SCOOR. WIN."
- Ranglijstnummers zeer groot en compact.
- Labels en microcopy in DM Sans voor leesbaarheid.

## Layout

Aanbevolen macrostructuur volgens Hallmark-flow: **Workbench + Scoreboard Grid**.

Homepage sections:
1. **Hero scoreboard** — grote display headline, korte uitleg, primaire CTA "Meedoen" en secundair "Bekijk ranglijst".
2. **Deze week** — card met komende wedstrijden en voorspelling-status.
3. **Ranglijsten preview** — drie tabs/cards: Week, Maand, Algemeen.
4. **Zo werkt het** — 3 stappen: voorspel, uitslag verwerkt, punten + ranglijst.
5. **Prijzenkast** — trophy grid met maandwinnaar, weekwinnaar, algemeen kampioen.
6. **Updates/artikelen** — laatste 3 nieuwsberichten.
7. **Admin teaser** — alleen voor beheerder: uitslagen invoeren, wedstrijden beheren.

Dashboard na login:
- Bovenaan huidige positie + punten.
- Wedstrijdvoorspellingen als mobiele cards.
- Ranglijst compact boven de vouw.
- Updates onderaan.

Adminpaneel:
- Wedstrijdlijst met invoervelden voor thuis-/uit-score.
- Knop "Uitslag opslaan".
- Overzicht automatische puntenberekening/status.

## Elevation & Depth

Geen zware shadows of glassmorphism. Caldera gebruikt flat blocks. Gebruik visuele hiërarchie via:
- kleurvlakken,
- 1px donkere borders,
- 40px radius,
- dot/pixel texture,
- grote typografie.

## Shapes

- Cards: `40px` radius.
- Buttons: volledig pill, `800px` radius.
- Inputs: `100px` radius.
- Badges: pill.
- Trophy cards: 40px radius met Pixel Glare highlight.

## Components

### ScoreboardHero
Grote display headline, links tekst/CTA, rechts mini-scoreboard met voorbeeldwedstrijden. Achtergrond: Basalt Canvas met pixel-dot texture.

### MatchPredictionCard
Ash White card met teams, datum, twee score-inputs, statusbadge. Op mobiel full-width; inputs groot genoeg voor touch.

### LeaderboardTable
Desktop als tabel, mobiel als stacked ranking cards. Top 3 krijgen visuele prijzenkastbehandeling: oranje, glare en trophy icon.

### AdminResultForm
Functioneel en rustig. Geen speelse overload; beheerder moet snel uitslagen kunnen invoeren.

### TrophyCabinet
Grid van grote rounded trophy cards. Gebruik Pixel Glare voor glans, Digital Orange voor actieve winnaar, Cyber Violet als decoratieve achtergrondvorm.

### ArticleCard
Ash White card, grote titel, datum, korte intro, pill CTA.

## Do's and Don'ts

Do:
- Maak het speels, sportief en competitief.
- Gebruik Digital Orange alleen voor acties/highlights.
- Gebruik grote condensed koppen en duidelijke scorecards.
- Houd adminpaneel simpel en efficiënt.
- Ontwerp mobile-first voor voorspellen en ranglijsten.

Don't:
- Geen generieke SaaS hero met vage gradients.
- Geen fake statistieken of verzonnen testimonials.
- Geen violet als tekstkleur.
- Geen standaard blauwe links.
- Geen kleine score-inputs op mobiel.
- Geen complex CMS/admin als eenvoudige oplossing volstaat.
