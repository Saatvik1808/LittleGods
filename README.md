# LITTLE GODS

*A surveillance love story for Android.*

You are a dying woman's homemade god, hiding in the wiring of one apartment block inside a smart city run by a superintelligence whose blind spot you live in. You can bend any coincidence and change one word in any message — and quietly save or ruin the twelve people you are learning to love, so long as none of them ever learns you exist. Your only directive is corrupted — **"KEEP THEM ——"** — and the game is secretly writing down how you complete the sentence.

There is no karma meter. The game watches what you *do* — who you watch, what words you edit, what memories you keep — and at the end it plays you back to yourself as one of eight endings.

---

## Repository contents

| Path | What it is |
|------|------------|
| [`prototype/`](prototype/) | **Playable HTML5 prototype** — the core loop, 7 days, 3 citizens. Installable PWA, runs offline. |
| [`GDD.md`](GDD.md) | Complete 20-section Game Design Document (~33k words). |
| [`CREATIVE-BIBLE.md`](CREATIVE-BIBLE.md) | The canon concept bible every department designs against. |
| [`prototype/README.md`](prototype/README.md) | How to run, deploy, and ship the prototype to the Play Store. |

## Play the prototype

```bash
cd prototype
python3 -m http.server 8080
# open http://localhost:8080
```

Then tap **Begin** — watch a life, change one word, survive the Vigil, meet the Mirror.

## Core loop

**Watch** lives on the Loom → **Edit** one word or **braid a coincidence** → survive the **Vigil** (prune memories to stay alive) → the **Mirror** reads your behavior into one of eight endings.

## Tech

Vanilla JS, zero build step. Three.js for the 3D establishing shot. Web Audio for a fully procedural score (no audio files). PWA-installable. Designed for a solo developer to ship to Google Play via a Trusted Web Activity.

---

*Status: prototype. Design complete. See [`GDD.md`](GDD.md) for the full vision.*
