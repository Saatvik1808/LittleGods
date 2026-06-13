# Painted scene art — drop images here

Each diorama can show a hand-made / AI-generated painting instead of the
procedural look. Generate images with ChatGPT/Midjourney/etc., drop the file
here, and add one line to `ART_MANIFEST` in `index.html`.

## How to wire one in
1. Generate an image (prompts below). Save it here, e.g. `maya_crisis.jpg`.
2. In `index.html`, find `const ART_MANIFEST = {` and add:
   ```
   "maya_crisis": "maya_crisis.jpg",
   ```
   Key format: `"<who>_<band>"` where who = maya | theo | sol, band =
   calm | tense | crisis | recovering | analog. Or `"maya"` to use one
   image for ALL of Maya's moments.
3. Reload. Missing keys fall back to the procedural diorama — no errors.

## Format
- **Aspect:** portrait, ~3:4 (the frame is tall). 900×1200 or 1024×1365 is ideal.
- **JPG** (smaller) preferred. Keep each under ~300KB so the build stays light.
- **Dark, painterly, lots of negative space at the bottom** — the scene text
  and the overheard line sit over the lower third, so keep that area quiet.

## House style (paste into every prompt)
> Painterly chiaroscuro, "Vermeer through a security camera." Deep near-black
> background, a single warm amber light source, soft volumetric haze, faint
> film grain, slight CCTV lens vignette. Domestic, intimate, a little ominous.
> NOT cyberpunk, no neon, no chrome, no text. Portrait 3:4. Keep the bottom
> third dark and simple for overlaid text.

## Prompts by scene (12 core images)

### MAYA — the marriage (5A)
- **maya_calm** — "A woman and her wife share morning coffee in a dim kitchen, hands almost touching on the counter, warm amber light from one window, tender and quiet." + house style
- **maya_tense** — "A woman leaves an apartment at dawn without breakfast; her wife watches from the kitchen shadow and does not call out. Cold blue dawn through blinds, one warm lamp." + house style
- **maya_crisis** — "A woman stands frozen in a doorway at night holding a packed bag; her wife's back is turned in the lit kitchen beyond. Heavy shadow, single warm light, heartbreak." + house style
- **maya_recovering** — "A woman pours two cups of coffee at a kitchen counter, soft warm morning light, a fragile peace, two mugs." + house style

### THEO — the debt (3B)
- **theo_calm** — "A tired night-shift nurse at a pharmacy counter counting cash, relieved it's enough, warm overhead light, late night." + house style
- **theo_tense** — "A man alone in a dark apartment at 2am, lit only by his phone, texting about money, anxious blue glow on his face." + house style
- **theo_crisis** — "A man sitting alone on a dim stairwell, head in his hands, a single bare bulb above, despair, deep shadow." + house style
- **theo_recovering** — "A freshly-shaven man waiting at a clinic door at dawn, a small fragile hope, soft warm light." + house style

### SOL — the isolation (6D)
- **sol_calm** — "A teenager rides an elevator alone, looking up at the camera, waving small, fisheye CCTV framing, lonely warm light." + house style
- **sol_tense** — "A teenager sits alone on a rooftop at night, knees up, writing in a journal, city dark behind, single distant streetlight." + house style
- **sol_crisis** — "A teenager standing too close to a rooftop edge at night, not writing, wind, deep blue-black, one far warm window glowing." + house style
- **sol_recovering** — "A teenager holding a handwritten note up to an elevator camera that reads 'thank you', fisheye framing, soft warm light, relief." + house style

## Priority order (do these 3 first — biggest impact)
1. `maya_crisis` (the doorway / packed bag — your most dramatic scene)
2. `theo_crisis` (the stairwell despair)
3. `sol_crisis` (the rooftop edge)

Those three are the climactic beats most players will see and screenshot.
