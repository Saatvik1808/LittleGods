# Shipping LITTLE GODS to the Google Play Store

Your game is a web app (HTML/JS). It becomes an Android app via a **TWA**
(Trusted Web Activity) — a thin native shell around your live site. No Unity,
no Android Studio required. Total cost: **$25 one-time** (Play Console).

The flow has four stages:

```
A. Host the game on HTTPS      →  a public URL
B. Wrap the URL into an .aab   →  an Android App Bundle
C. Prove you own the site      →  assetlinks.json (kills the browser URL bar)
D. Play Console: upload + ship →  testing track → production
```

---

## Stage A — Host the game (free, ~5 min)

The TWA needs the site at a real HTTPS URL with control of the domain **root**
(for Stage C). **Netlify is the easiest** because you control the root.

### Netlify (recommended)
1. Go to https://app.netlify.com/drop
2. Drag the **`prototype/`** folder onto the page.
3. You get a live URL instantly, e.g. `https://little-gods.netlify.app`
4. (Optional) Site settings → change the random subdomain to something clean.

Your game is now live and installable. Test it on your phone's Chrome →
menu → **Add to Home screen**. That's already a real PWA.

> Why not GitHub Pages? Project pages live at `username.github.io/LittleGods/`,
> but the TWA needs `assetlinks.json` at the **domain root**
> (`username.github.io/.well-known/...`) which you don't control on a project
> page. Netlify serves your folder *as* the root, so `.well-known/assetlinks.json`
> works. (The file is already in `prototype/.well-known/`.)

---

## Stage B — Generate the Android App Bundle (.aab)

Two options. **PWABuilder is the no-tooling path — use it first.**

### Option 1 — PWABuilder (GUI, ~10 min, recommended)
1. Go to https://www.pwabuilder.com
2. Paste your Netlify URL → **Start**.
3. It scores your PWA (manifest + service worker are already set up).
4. Click **Package for stores → Android → Google Play**.
5. Set:
   - **Package ID:** `com.saatvik.littlegods` (permanent — choose carefully)
   - **App name:** `Little Gods`
   - **Signing key:** let PWABuilder **generate a new one** and
     **DOWNLOAD THE ZIP** — it contains `signing.keystore` + a
     `assetlinks.json` with your real SHA-256 fingerprint. **Back this up.
     Lose it and you can never update the app.**
6. Download the `.zip`. Inside: `app-release-bundle.aab` (this is what you upload)
   and the signing key + the generated `assetlinks.json`.

### Option 2 — Bubblewrap CLI (power users)
```bash
# prerequisites: Node 18+, JDK 17
npm i -g @bubblewrap/cli
bubblewrap init --manifest https://little-gods.netlify.app/manifest.json
# answers: package com.saatvik.littlegods, app name Little Gods, accept defaults
bubblewrap build
# outputs app-release-bundle.aab + android.keystore (BACK THIS UP)
# print the fingerprint for Stage C:
bubblewrap fingerprint
```

---

## Stage C — Asset links (removes the browser address bar)

Without this, the app shows a Chrome URL bar at the top — looks unfinished.
Fix it by publishing the fingerprint:

1. Open the `assetlinks.json` that PWABuilder/Bubblewrap generated.
   It has your real `sha256_cert_fingerprints`.
2. Replace the placeholder file at `prototype/.well-known/assetlinks.json`
   with that content (package `com.saatvik.littlegods`).
3. Re-deploy to Netlify (drag the folder again).
4. Verify it's live: open
   `https://little-gods.netlify.app/.well-known/assetlinks.json` in a browser —
   you should see your JSON.

> Note: after Play **App Signing** is enabled (Stage D), Google re-signs your
> app with *their* key. Use the **App signing key certificate SHA-256** shown in
> Play Console → **Setup → App signing**, and make sure THAT fingerprint is in
> `assetlinks.json`. Update the file and re-deploy if it differs from the local
> key. (Easiest: finish Stage D once, copy Play's SHA-256, paste it in, redeploy.)

---

## Stage D — Play Console: upload and ship

1. **Create a developer account:** https://play.google.com/console
   → pay the **$25 one-time** fee → verify identity (can take 1–2 days).
2. **Create app:** name `Little Gods`, type **Game**, free, default language EN.
3. **Internal testing first** (fastest path to a working install):
   - Left menu → **Testing → Internal testing → Create new release**
   - Upload `app-release-bundle.aab`
   - Add your own email as a tester → save → **review → start rollout**
   - Copy the opt-in link, open it on your phone, install. You're live (to you).
4. **Fill the store listing** (required before production) → **Grow → Main store listing:**
   - **App icon:** `play-icon-512.png` (512×512, 32-bit)
   - **Feature graphic:** `feature-graphic-1024x500.png` (1024×500)
   - **Phone screenshots:** 2–8 required. Take them on your phone (or in
     Chrome DevTools device mode) of: the cover, the Loom, a diorama, the Vigil,
     the ending. PNG, min 320px, 16:9 or 9:16.
   - **Short description (≤80 chars):**
     `You are a city's secret AI. Watch three lives. Change one word. Keep them.`
   - **Full description:** see `store-listing.md`.
5. **Complete the required forms** (Play won't let you publish without these):
   - **Content rating** questionnaire (this is a narrative game; mild themes)
   - **Data safety** — declare: no data collected, no data shared, all on-device
     (true — this game has no backend). This is your honest, strong story.
   - **Privacy policy URL** — required. Host a one-pager (a Netlify page works).
   - **Target audience** — Teen+ recommended (mature themes: surveillance,
     debt, marital strain).
   - **App access** — "all functionality available without restrictions."
6. **Promote to production:** once internal testing looks good and all forms are
   green → **Production → Create release** → upload the same `.aab` (or promote
   the internal one) → review → roll out.
7. **Review:** Google reviews new apps. First review usually **1–7 days**.

---

## What's already prepared for you in this repo

| File | Use |
|------|-----|
| `prototype/manifest.json` | PWA manifest (name, icons, portrait) — PWABuilder reads this |
| `prototype/sw.js` | Service worker (offline + installability) |
| `prototype/icon-512.png`, `icon-192.png` | App icons (manifest) |
| `prototype/icon-maskable-512.png` | Adaptive (maskable) icon |
| `prototype/play-icon-512.png` | **Play Store listing icon** (32-bit) |
| `prototype/feature-graphic-1024x500.png` | **Play Store feature graphic** |
| `prototype/.well-known/assetlinks.json` | Asset-links scaffold — paste your real SHA-256 |
| `store-listing.md` | Copy-paste store description + metadata |

## Critical reminders
- **Back up your signing keystore** (and its password). It is the ONLY way to
  push updates. Lose it = new app, lost reviews/installs.
- **Package name `com.saatvik.littlegods` is permanent.** Decide now.
- Updating the **game content** later = just re-deploy to Netlify (the TWA loads
  the live site). You only rebuild the `.aab` when you change the icon, name, or
  native wrapper — not for gameplay changes.

## Fast path summary
1. Netlify drop the `prototype/` folder → get URL
2. PWABuilder → paste URL → generate Android package → **save the keystore zip**
3. Paste the generated `assetlinks.json` into `prototype/.well-known/`, redeploy
4. Play Console ($25) → Internal testing → upload `.aab` → install on your phone
5. Fill listing + forms → Production → submit for review
