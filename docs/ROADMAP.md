# AklaCholo — Roadmap & plug-in guide

This document turns the README's "future phases" into **concrete, file-level
specs** so any session (Cursor AI or human) can pick up a phase and execute it
without re-deriving the architecture.

The one rule that makes all of this additive rather than a rewrite:

> **Screens (`app/**`) never import `src/data`. All data access goes through
> `src/services/*`, which return Promises.** Today services resolve mock data
> with simulated latency; the real backend drops in behind the same signatures.

---

## Current state — Phase 1 (done)

Discovery App: Home, Discover (with "Magic of Bengal" stories woven in),
Creators, Saved (AsyncStorage), detail screens (collection / article / creator /
product), and the Kolka Studio. Typed mock data behind a service layer. Runs on
iOS + Android (Expo Go, SDK 54) and web. Verified on-device.

Key files to know:
- `src/types/index.ts` — all domain models.
- `src/data/*` — typed mock data (consumed only by services).
- `src/services/*` — the data-access seam; `api.client.ts` holds `USE_MOCK`,
  `mockResponse()`, `httpGet()`, `NotFoundError`.
- `src/theme/tokens.js` — brand tokens (single source of truth).
- `app/*` — Expo Router routes (thin screens).

---

## Phase 1.5 — Grounded chat for "The Magic of Bengal"

**Goal:** a chat assistant that answers ONLY from the three articles, with
citations. The content layer is already retrieval-ready.

**Already in place:**
- `Article` / `ArticleSection` with a `summary` and **stable section ids**
  (`src/types/index.ts`).
- `getArticleChunks()` → flattens articles into `{ citation, articleId,
  sectionId, heading, text }` chunks keyed `articleId#sectionId`.
- `searchArticleChunks(query, limit)` → naïve keyword retrieval placeholder.
  (both in `src/services/articles.service.ts`)

**Steps:**
1. **Retrieval (service layer only).** Replace the keyword `searchArticleChunks`
   with real retrieval. Two options:
   - *Lightweight:* keep keyword/TF-IDF in-app (no backend) — fine for 3
     articles.
   - *Proper:* precompute embeddings for each chunk, store as a JSON asset, do
     cosine similarity in `articles.service.ts`. Add an `embedChunks` build step.
   Keep the function signature identical so callers don't change.
2. **Chat service.** Add `src/services/chat.service.ts`:
   `askMagicOfBengal(question, history): Promise<{ answer, citations[] }>`.
   It calls `searchArticleChunks`, builds a prompt that instructs the model to
   answer **only** from the supplied chunks and cite `articleId#sectionId`, and
   calls the LLM. Route the LLM key/endpoint through `api.client.ts` config
   (never hardcode keys; use `expo-constants` / env).
3. **Types.** Add `ChatMessage` and `Citation` to `src/types/index.ts`.
4. **UI.** Add `app/chat.tsx` (a modal/stack screen). Entry points: a button on
   each article (`app/article/[id].tsx`) — "Ask about this" — and optionally a
   header action in Discover. Render messages with tappable citations that deep-
   link to `article/[id]` scrolled to the cited section.
5. **Guardrail.** If retrieval returns nothing relevant, the assistant says it
   can only discuss the Magic of Bengal articles — no open-ended answers.

**Done when:** asking "What is kantha?" returns an answer sourced from
`art_kantha` with a citation that opens the article.

---

## Phase 2 — Shop (commerce)

**Goal:** turn display-only products into purchasable items.

1. **Types:** extend `Product` (or add `ShopProduct`) with real `price`,
   `currency`, `variants`, `stock`; add `CartItem`, `Order`.
2. **Services:** `src/services/shop.service.ts` (catalog, availability),
   `cart.service.ts` (AsyncStorage-backed, mirror `wishlist.service.ts`),
   `checkout.service.ts`.
3. **State:** `src/context/CartProvider.tsx` (mirror `WishlistProvider.tsx`).
4. **Routes:** `app/shop/index.tsx`, `app/cart.tsx`, `app/checkout/*`.
   `Product.priceLabel` is already displayed — swap it for real pricing UI.
5. **Payments:** integrate a provider (e.g. Stripe via their RN SDK) behind
   `checkout.service.ts`. Keep all secrets server-side.

---

## Phase 3 — Marketplace / Gigs

Creators already model `disciplineType` (`physical | digital | teacher`).

1. **Types:** `Gig`, `Service`, `Booking`, `Review`.
2. **Services:** `gigs.service.ts`, `bookings.service.ts`.
3. **Routes:** `app/gigs/*`, a "Hire / Commission" action on
   `app/creator/[id].tsx`.
4. Reuse `CreatorCard` and the creator profile shell.

---

## Phase 4 — Classes

1. **Types:** `Course`, `Lesson`, `Enrollment`.
2. **Services:** `classes.service.ts`.
3. **Routes:** `app/classes/*`, surfaced from teacher profiles
   (`disciplineType: 'teacher'`).
4. Reuse the article/section reader pattern for lesson content.

---

## Phase 5 — Bengal-in-a-Box (curated bundles)

1. **Types:** `Box` (a curated bundle of products + a story).
2. **Services:** `boxes.service.ts`.
3. **Routes:** reuse the `Collection` detail UI shell for box detail.

---

## Phase 6 — AI Stylist

1. **Service:** `stylist.service.ts` — an LLM agent whose tools are the existing
   typed catalog (products, motifs, palettes via the services).
2. **Routes:** `app/stylist.tsx`. Output: curated product/motif recommendations
   that link into existing detail screens.

---

## Cross-cutting — swap mock data for a real backend

When a backend exists, this is the ONLY data-layer change:
1. Implement `httpGet()` (and add `httpPost`, etc.) in
   `src/services/api.client.ts` against `API_BASE_URL`.
2. In each service, branch on `USE_MOCK` (or delete the mock branch) so it calls
   `httpGet` instead of `mockResponse`. Signatures and return types stay the
   same → **zero screen changes.**
3. Move secrets/config to env (`app.config.ts` + `expo-constants`).

---

## Conventions every phase must follow
- Add native deps with `npx expo install <pkg>` (keeps SDK 54 compatibility).
- New screens go in `app/`; keep them thin — logic lives in services/hooks.
- New colors/spacing go in `src/theme/tokens.js`; style with NativeWind classes.
- Cross-reference entities by `id` (as existing models do) so "related X" links
  and future AI traversal keep working.
- Verify with `npx tsc --noEmit` + `npx expo export --platform ios|android`
  before declaring done (CI runs these on every push).
- See `.cursor/rules/aklacholo.mdc` for the full rule set and gotchas.
