# Hallmark output brief — Voetbalspel website

## Aanbevolen scope voor eerste versie

Bouw een MVP met deze pagina's:

1. `/` — publieke homepage
2. `/login` en `/register` — auth schermen
3. `/dashboard` — voorspellingen invullen + eigen score
4. `/ranglijst` — week/maand/algemeen tabs
5. `/admin` — uitslagen invoeren en wedstrijden beheren
6. `/updates` — artikelen/updates overzicht
7. `/prijzenkast` — visuele winnaars/trofeeën

## Datamodel minimum

- User: id, naam, email, rol
- Match: id, competitie, thuisTeam, uitTeam, startTijd, thuisScore, uitScore, status
- Prediction: userId, matchId, thuisVoorspelling, uitVoorspelling, punten
- Article: titel, slug, datum, content
- Trophy: periode, winnaar, type, punten

## Puntentelling voorstel

- Exacte uitslag: 5 punten
- Juiste winnaar/gelijkspel: 3 punten
- Juiste doelsaldo: 2 punten
- Deelnamebonus bij ingevulde voorspelling: 1 punt

## Visuele vertaling

Homepage moet voelen als een digitaal scorebord/speelveld:
- Grote display headline: "VOORSPEL. SCOOR. WIN."
- Mini-scoreboard als hero visual
- Orange CTA "Doe mee"
- Secondary CTA "Bekijk ranglijst"
- Rounded cards voor wedstrijden en prijzenkast
- Pixel-dot background als subtiele voetbal-game textuur
