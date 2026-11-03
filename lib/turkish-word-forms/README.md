# Offline word-form validation for PDF reconstruction

This is a **repair inventory**, separate from the B1/B2/C1 learning dictionary.
It supplies no definitions, learning levels, sentence translations or TDK claims.
No network request is made when the app uses it.

Source: [Turkish Hunspell dictionary](https://github.com/wooorm/dictionaries/tree/main/dictionaries/tr),
Copyright (c) 2014 Harun Reşit Zafer, [MIT license](./LICENSE).
The downloaded files are pinned by SHA-256 in `source.json`.
This bundled snapshot is not automatically updated and does not constitute a
current official Turkish spelling check. Historical source spelling stays intact.

The source contains 371,056 dictionary rows and 6,627 explicit suffix rules.
The compiler merges equivalent case/apostrophe/circumflex lookup keys into
367,801 stems, preserving their assigned endings. These normalizations are used
only for lookup; reconstruction copies the source letters and apostrophes.
The compiler rejects unsupported affix features rather than guessing.

`data.ts` contains deterministic gzip/base64 data (about 2.25 MB compressed).
On first use the server decompresses it once. The implementation searches the
sorted UTF-8 rows directly, avoiding hundreds of thousands of JavaScript objects.
Recent lookup results are bounded to 8,192 entries. The browser never imports this
module; the existing book-analysis cache avoids repeated analysis on state reads.

To reproduce the bundled data, download `index.dic`, `index.aff`, and `license`
from the source into one directory, then run:

```sh
python scripts/build-turkish-word-forms.py /path/to/downloaded/tr
```

Checksums must match. `data.ts` is generated and must not be edited manually.
Retain `LICENSE` with redistributed copies.
