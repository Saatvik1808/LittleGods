# LITTLE GODS — First Watch (prototype)

Playable HTML5 prototype of the core loop. 7 in-game days, 3 citizens (Maya, Theo, Sol), one-word edit + coincidence braiding + Vigil prune + Mirror-driven ending. Installable PWA — adds to Android home screen, runs offline.

## Files
- `index.html` — entire game (vanilla JS, no deps)
- `manifest.json` — PWA install metadata
- `sw.js` — service worker, offline cache
- `icon-192.svg` / `icon-512.svg` — app icons

## Test locally
```bash
cd /Users/user/Documents/game/prototype
python3 -m http.server 8080
# open http://localhost:8080 on desktop
# or http://<your-mac-ip>:8080 on phone (same Wi-Fi)
```
Service worker only registers over `http://localhost` or `https://`, never `file://` — must use server.

## Deploy live (pick one, all free)

### Cloudflare Pages — recommended (fastest, custom domain free)
1. Push folder to a public GitHub repo
2. https://pages.cloudflare.com → Connect to Git → pick repo → Deploy
3. Live URL in ~60 seconds: `https://your-project.pages.dev`

### Netlify Drop — zero-account option
1. Open https://app.netlify.com/drop
2. Drag the `prototype/` folder onto the page
3. Live URL instant: `https://random-name.netlify.app`

### GitHub Pages
```bash
cd prototype
git init && git add . && git commit -m "first watch"
gh repo create little-gods-prototype --public --source=. --push
# Settings → Pages → Source: main / root → Save
```
URL: `https://<you>.github.io/little-gods-prototype/`

## Install as Android app (no Play Store)
After deploy, open the URL on Android Chrome → menu → **Add to Home screen**. Launches fullscreen, offline-capable, indistinguishable from a native app until you ship to Play Store.

## What to watch for in playtest (M10 kill-gate proxies, scaled down)
1. **Voluntary watch time** — do testers open Maya/Theo/Sol moments without intervening? Target: ≥5 min unprompted across the 7 days.
2. **Motive attribution** — ask after Day 3: "why is Theo doing what he's doing?" Want unprompted speech naming his mother, his shame, the debt.
3. **Name recall** — Day 7: "name the three." Most should hit all three first names.
4. **Affect signal** — does the prune choice feel painful? If players prune without hesitation, the attachment design failed.

If 3 of 4 hit → core loop works at this fidelity → Unity port green-lit.
If miss → before scaling, fix attachment density (more daily moments, deeper Reply Grammar, longer dioramas).

## Next steps (solo path to Play Store)
1. Ship this PWA — collect 10–20 playtester reports.
2. Iterate content (more days, more citizens, deeper edits) at zero-engine cost.
3. Once core proven, Unity 6 port:
   - WebView wrapper for fastest Play Store path (Trusted Web Activity / Bubblewrap) — your PWA becomes an Android app in one day
   - Or native port — 6–9 months solo, true 60fps shaders, haptics, lock-screen Night Watch notifications
4. Play Console: $25 one-time dev fee, internal testing track first (up to 100 testers), closed beta (1k), open beta, then production.

## Save system (no account, no server — Play-ready)
- **Continue** — autosaves after every action to `localStorage`; the cover shows `Continue · Day N` to resume exactly where you left off (survives app kill / phone restart).
- **Checkpoints** — every Vigil (night) writes a restore point. `Return to a night…` lets you step back into any past night and rewrite it.
- **Undo / Redo** — `↶ ↷` in the Loom header step back/forward through your actions (watch, edit, braid, abstain). Cleared when you sleep — a finished night is locked, matching the bible's "watching has a cost."
- **History (the Ledger)** — `☰` opens a log of every intervention: day, citizen, what you did. This is the bible's Ledger made literal — the trail the detective reads.
- **No Google sign-in required.** Single-player, offline, on-device. Google Play Games cloud-save is an optional later add — local save is enough to ship.

## Visual / audio tech (added in polish pass)
- **3D establishing shot** — Three.js (r128, CDN, service-worker cached). Procedural Greywater Block tower: window-grid canvas texture (warm-lit / cold-TV / dark windows + one pulsing "AI window"), roof water tank, fogged neighbor blocks, wet-ground reflection, falling rain (point cloud with gravity + wind slant), slow crane camera. Plays on every day transition, tap-to-skip. Falls back to text-only if WebGL/Three unavailable.
- **Cinematic diorama** — ken-burns slow zoom, parallax silhouette layer, canvas ember/dust particle field tinted per citizen, scanlines, film grain, vignette, drop-cap typography, typewriter reveal.
- **Procedural score** — Web Audio: mains-hum drone + a slow Am–F–C–G chord pad with feedback reverb (turns drone into actual music) + per-citizen timbres (Maya warm brass, Theo detuned cello, Sol FM glass bell) + splice/fray/receipt/rain SFX + haptics. Zero audio files.
- **Offline note:** Three.js loads from CDN on first run, then the service worker caches it (`little-gods-v2`). First launch needs network; afterwards fully offline. To bundle Three.js into the APK with zero network dependency, download `three.min.js` locally and change the `<script src>` to `./three.min.js` before Bubblewrap.

## Known prototype limits (deliberately cut for solo scope)
- No audio yet (CC0 ambient pack coming next)
- 3 citizens, not 12 (Maya, Theo, Sol — the bible's three named "showcase" lives)
- 7-day spine, not 11-week (full game)
- No Confessor interrogations (bible's mid-game boss fight)
- No Reach / city-scale lever (Act Three system)
- No NG+ Echoes / Bequest (post-ending system)
- 8 ending families collapsed to 7 (Successor cut — needs Reach)
