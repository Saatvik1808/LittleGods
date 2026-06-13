# Put LITTLE GODS on itch.io (pay-what-you-want) — 10 minutes, $0

The build is ready: **`little-gods-itch.zip`** (in the repo root). itch.io hosts
HTML5 games directly — players play in the browser, no install.

## Upload steps

1. Make a free account at **https://itch.io** → top-right **Register**.
2. Go to **https://itch.io/game/new** (or Dashboard → **Create new project**).
3. Fill the project form:
   - **Title:** `LITTLE GODS`
   - **Project URL:** `little-gods` (→ `https://YOURNAME.itch.io/little-gods`)
   - **Short description / tagline:** `A surveillance love story. You watch three lives. You change one word. Keep them.`
   - **Classification:** Game
   - **Kind of project:** **HTML** (this is the important one — "play in browser")
   - **Pricing:** select **"$ — Paid"** → set **Minimum price $0** and a **Suggested donation $3** (this is "pay what you want" — free to play, donations on). Or "No payments" first if you just want feedback.
4. **Upload** → drag **`little-gods-itch.zip`** → tick **"This file will be played in the browser."**
5. **Embed options** (below the file):
   - **Viewport dimensions:** Width `420`, Height `820`
   - Tick **Mobile friendly** → **Orientation: portrait**
   - Tick **Fullscreen button** and **Enable scrollbars** (off is fine)
   - **Frame:** Color the background `#0a0a0c` if asked.
6. **Cover image (required):** upload `prototype/icon-512.png` (or a 630×500 crop of `prototype/feature-graphic-1024x500.png`).
7. **Screenshots:** add 3–5 (the cover, the building hub, a chat, the Vigil, an ending). See the screenshot list in `store-listing.md`.
8. **Description:** paste the body from `marketing/itch-page.md`.
9. **Tags:** narrative, story-rich, interactive-fiction, choices-matter, surveillance, atmospheric, singleplayer, short, dark.
10. **Visibility:** set to **Draft** first → preview it → then **Public**.

## Important notes
- The game loads **Three.js from a CDN**, so itch's "play in browser" works (it has
  internet). The service worker is harmless if it doesn't register in itch's iframe —
  the game runs fine without it.
- When you update the game later: re-export the zip (`make-itch-build` below) and
  re-upload it to the same project — players always get the latest.
- itch fee: itch lets **you choose their cut** (default 10%, can set to 0%). You keep
  the rest. Payouts via PayPal/Stripe.

## Re-export the build after changes
```bash
cd prototype
rm -rf /tmp/lg && mkdir /tmp/lg
cp index.html manifest.json sw.js icon-192.png icon-512.png icon-maskable-512.png /tmp/lg/
( cd /tmp/lg && zip -q -r ../little-gods-itch.zip . )
mv /tmp/little-gods-itch.zip ../little-gods-itch.zip
```
Then re-upload `little-gods-itch.zip` to your itch project.
