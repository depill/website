# Public POS documentation

The Icelandic introduction is at `/pos/`. Its guides are Markdown files under
`src/content/docs/pos/`, grouped as `Supergut POS`, with `lang: is` and comments
disabled. Shared documentation supports Icelandic metadata and navigation while
existing English content keeps its default language.

## Source review — 2026-10-05

Reviewed against the local `gull/pos-platform` project:

- `README.md`: backend ownership and current implementation/acceptance boundaries.
- `apps/apple/README.md`: native iPad scope and connected workflows.
- `docs/ipad-onboarding.md`: demo, QR pairing, current UI labels and Teya test scope.
- `docs/features/business-central.md`: current inbound/outbound integration and BC 28 target.
- `docs/pos-backend-plan.md`: asynchronous delivery and separate accounting status.

The source documents describe local validation; this website task did not run POS,
BC, payment or hardware acceptance. Older feature notes may lag behind the native
app documentation. Recheck the current source before expanding feature claims.

`public/images/pos/ipad-demo.png` is copied from
`apps/apple/docs/screenshots/12-offline-demo.png`. It was visually inspected and
contains sample-shop data, not real merchant records or pairing credentials.
Retain the caption identifying this as an English-language development preview.

Do not publish development credentials, pairing QR codes, private service URLs,
or imply App Store availability, payment certification or live BC acceptance.

## Product-owner clarification — 2026-10-05

The owner confirmed that Supergut POS is free, is developed for a related
company, and is built with AI assistance. Current supported payment integrations
are Teya and Netgíró. Other card integrations are not planned and are unlikely
to be added. Teya Raðgreiðslur support is coming soon, not available yet.
These statements supersede older repository notes about planned providers;
they do not establish live payment or hardware acceptance.

## First-release follow-up — 2026-10-14

The lean iPad release is documented in POS [PR #10](https://github.com/depill/pos/pull/10), code `709093c`.
Current payment/receipt/recovery boundaries supersede implied acceptance or imminent feature promises.
Teya Raðgreiðslur are outside first-release scope; optional integrations still require merchant-specific
setup/acceptance. `/pos/en/` provides English product information; existing privacy/support URLs stay stable.
The public pages are owned by their Astro routes; `docs/app-store-submission.md` owns the publication and
App Store handoff. Publication does not certify the payment provider or establish App Store availability.
