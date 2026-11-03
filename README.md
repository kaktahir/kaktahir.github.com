# KurdTV – webbversion för GitHub Pages

En personlig, responsiv webbspelare för kurdiska TV-kanaler.

## Publicera på GitHub Pages
1. Skapa ett nytt offentligt repository på GitHub, exempelvis `kurdtv`.
2. Välj **Add file → Upload files** och ladda upp `index.html`, `manifest.webmanifest`, `.nojekyll` samt mappen `assets` med alla dess filer. Behåll mappstrukturen.
3. Öppna **Settings → Pages**.
4. Under **Build and deployment**, välj **Deploy from a branch**. Välj `main` och `/(root)` och spara.
5. Besök webbadressen som visas där, vanligtvis `https://ANVÄNDARNAMN.github.io/kurdtv/`.

Tips: Det går också att packa upp ZIP-filen på datorn, och ladda upp via GitHub Desktop eller git. Githubs webuppladdning kan ibland kräva att man väljer filerna i `assets` separat med rätt mappväg. Var uppmärksam på att katalogstrukturen blir exakt rätt.

## Så fungerar det
- Webbsidan och kanallistan ligger hos GitHub Pages. Videoströmmarna hämtas direkt från respektive TV-leverantör.
- 49 kanaler ingår i grundlistan. Tre externa kurdiska listor uppdateras när sidan öppnas, om CORS-reglerna tillåter detta.
- Dolda kanaler, favoriter och kanaler som fungerat sparas lokalt i webbläsaren (`localStorage`).
- Din mobil och dator har alltså separata inställningar. Favoriter synkroniseras inte automatiskt.
- `Hls.js` hämtas från jsDelivr i webbläsare som saknar egen HLS-uppspelning. Safari kan spela HLS direkt.

## Fungerande kanaler?
En lista som klarat en serverbaserad hälsokontroll betyder inte att strömmen automatiskt fungerar i Safari/Chrome. Kanalen kan blockera externa webbsidor, kräva särskilda HTTP-headers eller ha rättighetsbegränsningar. GitHub Pages tillhandahåller inte en proxyserver.

## Rättigheter
Offentligt tillgänglig TV-ström är inte automatiskt fri för återpublicering i en tredjepartsapp. Kontrollera villkoren innan du marknadsför webbplatsen eller delar den publikt.

## Filer
- `index.html`: själva webbplatsen
- `assets/styles.css`: layout och mobilanpassning
- `assets/app.js`: kanalregister och spelare
- `assets/icon-192.png`, `assets/icon-512.png`: appikoner
- `manifest.webmanifest`: metadata för hemskärmsikon
- `.nojekyll`: förenklar GitHub Pages-publicering
