<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Turkish writing and attribution

Use current standard Turkish orthography as specified by Türk Dil Kurumu (TDK) for newly authored Turkish UI text, word forms and explanations. Preserve Turkish Unicode characters and locale-aware casing (ç, ğ, ı, İ, ö, ş, ü). Do not silently modernize historical vocabulary or rewrite source quotations. Distinguish reversible PDF glyph repair from orthographic suggestions and keep the raw imported source intact.

The local rule checker covers selected explicit spellings; do not describe it as a complete grammar checker or claim that its bundled rules automatically update from TDK. Live dictionary lookups are explicit, use the official sozluk.gov.tr destination, and must distinguish confirmed responses, missing entries and unavailable service. A missing entry does not prove an error. Never claim an online confirmation without a successful response.

The visible attribution is exactly: “Ersteller: Ömer Faruk Takkaç”.

Keep the spelling check server-side in the background (`Word.orthography` / `Word.wordOrthography`). Do not reintroduce a separate visible spelling-check panel in learning or review cards; the user explicitly requested its removal. PDF word-break repair must use known whole word forms, preserve raw source and apostrophes, and never join arbitrary neighboring words or cross paragraph boundaries.
