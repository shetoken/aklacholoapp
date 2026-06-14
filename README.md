# AklaCholo — _Bengal, Everywhere._

A global Bengali creative lifestyle brand, as a native iOS + Android app.

This repository is **Phase 1: the Discovery App** — a visual, immersive, calm,
premium space that introduces people to Bengal-inspired design through **kolka**
(the traditional Bengali paisley motif). Think _Pinterest-meets-Airbnb for
Bengali craft_: heritage craft meets modern minimalism.

> The Bengali soul lives in the brand name and the content. **All navigation
> labels are plain English** — no pronunciation friction for a global audience.

📖 **New here? Start with [docs/Brand.md](docs/Brand.md)** — the full "What is
AklaCholo?" (vision, values, what the app is / isn't). Then see
[docs/ROADMAP.md](docs/ROADMAP.md) for the phase-by-phase build plan.

---

## Tech stack

| Concern        | Choice                                            |
| -------------- | ------------------------------------------------- |
| Framework      | React Native via **Expo** (managed workflow) + TS |
| Navigation     | **Expo Router** (file-based)                       |
| Styling        | **NativeWind** (Tailwind for RN) + theme tokens   |
| Imagery        | **expo-image**                                     |
| Fonts          | **expo-font** via `@expo-google-fonts` (Fraunces + Inter) |
| Motifs / icons | **react-native-svg**                              |
| Animation      | **Reanimated** + **Moti**                         |
| Local storage  | **AsyncStorage** (wishlist) — _not_ localStorage  |
| Data           | Typed mock files behind a **service layer**       |

There is **no backend yet**. All data is typed mock data, but every screen
reads it through a clean service layer so a real API drops in later with zero
screen changes.

---

## Running the app

```bash
npm install
npm start            # then press i (iOS), a (Android), or scan with Expo Go
# or
npm run ios
npm run android
```

Quality checks:

```bash
npm run typecheck    # tsc --noEmit
npm run lint
```

Runs on iOS & Android via simulators or **Expo Go**.

---

## Architecture at a glance

```
app/                      # Expo Router — ROUTES ONLY (thin screens)
  _layout.tsx             # fonts, splash, providers, root stack
  (tabs)/                 # bottom tab bar: Home · Discover · Creators · Saved
  collection/[id].tsx     # ─┐
  article/[id].tsx        #  │ stack detail screens
  creator/[id].tsx        #  │
  product/[id].tsx        # ─┘
  motifs.tsx              # Kolka Studio (interactive motif + palette picker)

src/
  theme/                  # brand tokens (single source of truth in tokens.js)
  types/                  # domain models (API-shaped)
  data/                   # typed mock data — consumed ONLY by services
  services/               # ⭐ the swappable data-access seam (mock → API)
  context/                # WishlistProvider (in-memory + AsyncStorage)
  hooks/                  # useAsync, useBrandFonts
  components/             # ui primitives · brand · domain cards
  constants/              # placeholder image helper, app strings
```

### The golden rule: screens never touch `src/data`

```
Screen  →  src/services/*  →  (Phase 1) src/data mock   ← you are here
                           ↘  (Phase 2) real HTTP API
```

Everything flows through `src/services`. Services return **Promises with
simulated latency** today, so screens already have real loading/error states.
When the real backend lands, you implement `httpGet` in
[`src/services/api.client.ts`](src/services/api.client.ts), flip `USE_MOCK`, and
**no screen changes**.

### Design system

- **Tokens** live once in [`src/theme/tokens.js`](src/theme/tokens.js) (plain
  JS) and are consumed by **both** `tailwind.config.js` (for NativeWind
  classes like `bg-brand-primary`) **and** the typed theme in
  [`src/theme/index.ts`](src/theme/index.ts) (for SVG/Reanimated style objects).
  Change a brand color in one place.
- **Palette:** terracotta · indigo · marigold · cream · deep green.
- **Type:** Fraunces (elegant serif, headings) + Inter (clean sans, body),
  enforced via the [`<AppText variant>`](src/components/ui/Text.tsx) primitive.
- **Kolka motifs** are SVG components rendered subtly as accents (dividers,
  hero, empty states) and explored fully in the Kolka Studio.

---

## Phase 1 features (what's built)

1. **Home** — hero `AklaCholo` + serif tagline _"Bengal, Everywhere,"_ curated
   collection rail, a featured story, creator rail, and a Kolka Studio CTA.
2. **Discover** — the core exploration space. Category filter (Kitchen, Living,
   Stationery, Wearables, Wall Art), a balanced **masonry** product grid, with
   **"The Magic of Bengal" stories woven in contextually** (not a separate tab).
3. **The Magic of Bengal** — three fully-written, richly formatted articles:
   _What is Kolka?_, _The Story of Kantha_, _Terracotta of Bishnupur_ — surfaced
   inside Discover and from related-content links across the app.
4. **Kolka Studio** — interactive motif + palette picker (SVG motifs, brand
   palettes), animated with Moti.
5. **Collections** — story-driven collection detail screens.
6. **Creators** — listing (filter by Artisans / Digital / Teachers) + profile
   screens (bio, story, portfolio grid, available pieces). `discipline` is
   free-text so it covers artisans, animators, designers, and teachers alike.
7. **Product / design detail** — image carousel, the story, the maker, related
   stories & pieces.
8. **Save / Wishlist** — heart any product, collection, or creator; persisted
   with AsyncStorage and surfaced on the **Saved** tab.

---

## Phase 1.5 — Grounded chat for "The Magic of Bengal" (NOT built)

The article content layer is already **retrieval-ready**:

- Each [`Article`](src/types/index.ts) carries a one-paragraph `summary` and an
  array of `sections`, and **every section has a stable `id`**.
- [`articles.service.ts`](src/services/articles.service.ts) already exposes
  `getArticleChunks()` (flattens articles into citable chunks keyed
  `articleId#sectionId`) and a placeholder `searchArticleChunks(query)`.

To add the chat later:

1. Replace the naïve keyword `searchArticleChunks` with real retrieval
   (embeddings / vector search) — **service layer only**.
2. Add a chat route + UI that calls retrieval, then prompts an LLM **grounded
   strictly in the returned chunks**, citing `articleId#sectionId`.

No article data needs to change — the shape was designed for this.

---

## How future phases plug in

Everything below is intentionally **not** built in Phase 1. The scaffold is
structured so each is an additive module, not a rewrite. For **concrete,
file-level steps** per phase, see [docs/ROADMAP.md](docs/ROADMAP.md).

| Future phase                | Where it plugs in                                                                 |
| --------------------------- | --------------------------------------------------------------------------------- |
| **Shop** (commerce)         | New `app/shop/` routes + `services/shop.service.ts`. `Product.priceLabel` becomes real pricing; add cart/checkout services. |
| **Marketplace / Gigs**      | New entity types in `src/types`, new services, new tab/stack routes. Creators already model `disciplineType`. |
| **Classes**                 | New `Class`/`Lesson` types + service; teachers already exist as `disciplineType: 'teacher'`. |
| **Bengal-in-a-Box**         | New curated-bundle entity + service; reuses `Collection`-style detail UI.          |
| **AI Stylist**              | New service calling an LLM; reuses the typed product/motif/palette data as tools.  |
| **Phase 1.5 Grounded Chat** | See above — content layer is already retrieval-ready.                              |
| **Real backend**            | Implement `httpGet` + set `USE_MOCK=false` in `services/api.client.ts`. Done.      |

> "Shop" is noted as a **future phase** and is intentionally not built now.

---

## Data model summary

Defined in [`src/types/index.ts`](src/types/index.ts). Entities cross-reference
by `ID`, which makes every "related X" link data-driven and lets the future
chat/AI traverse the content graph:

- `Creator` — artisans/digital/teachers (`discipline` free-text + `disciplineType`).
- `Product` — design/object with images, story, and related IDs (commerce-free).
- `Collection` — story-driven grouping.
- `Motif` + `Palette` — kolka catalogue for the Kolka Studio.
- `Article` + `ArticleSection` — retrieval-ready "Magic of Bengal" content.
- `WishlistItem` — `{ id, kind, addedAt }` reference persisted to AsyncStorage.

---

## Notes & placeholders

- **Images** are deterministic placeholders from `picsum.photos` via
  [`src/constants/images.ts`](src/constants/images.ts). Swap that one helper (or
  point `ImageRef.uri` at a CDN in the service layer) for real art.
- **Prices** (`priceLabel`) are display-only strings — there is no commerce.
- **Fonts** load at startup; the splash screen is held until they resolve.
```
