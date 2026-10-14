# Supergut POS — App Store submission / Skráning í App Store

Updated 2026-10-14. Website publication and remaining engineering/company submission evidence are tracked separately.

## Company details confirmed 2026-10-05

- Supergut ehf, kennitala 430524-2160; Supergut POS.
- Support and privacy: depill@depill.is; +354 8229923.
- Laxalind 19, 201 Kópavogur, Iceland.
- POS backend hosting: Hetzner VPS. The public website uses Cloudflare.
- POS data retained long term, configurable by the client and deleted on request, subject to applicable recordkeeping obligations.

## Website pages

The bilingual policy and support copy is maintained in `src/pages/pos/[kind]/[lang].astro`, not duplicated here.

- English privacy: https://depill.is/pos/privacy/en/
- Icelandic privacy: https://depill.is/pos/privacy/is/
- English support: https://depill.is/pos/support/en/
- Icelandic support: https://depill.is/pos/support/is/

Published and verified over public HTTPS on 2026-10-05. Commit `17e2b046e36c0abb9c19c8a8986b73812527fa8f`; deployment: https://github.com/depill/website/actions/runs/37337194905 (passed). All four pages served the correct language and contact details. Local checks: Astro check, build, deployment dry run and generated internal-link verification passed. These pages do not certify the archive or complete App Store Connect declarations.

## Remaining submission evidence

Verify exact production processing locations, email/logging providers, backup deletion schedules and contracts; the client-configurable POS retention policy does not establish these facts. Verify the release SDK's collection, tracking and encryption separately. Confirm release features, territories and the company's trader declaration.

## Historical engineering inventory — 5 October 2026

The observations below are historical. The 14 October follow-up supersedes missing app manifest/link and archive observations; SDK and production acceptance still need evidence.

App source: `/Users/david.gunnarson/projects/gull/pos-platform/apps/apple/DepillPOS`.

| Evidence                                                 | Finding                                                                                    | Submission consequence                                                                                                                        |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `server/apps/customers/models.py`, Customer              | Name, national ID, email, phone, customer ID; customer credit ledger                       | Trace which data is transmitted from the release app; customer records already imported into the backend are not automatically app collection |
| `server/apps/core/models.py`, DeviceRegistration         | Device ID, label, tenant, token hash, last seen                                            | Assess Device ID, linkage and security/functionality purpose                                                                                  |
| `server/apps/payments/models.py`, Payment                | Amount, currency, sale/return references, transaction references, card metadata, tip       | Assess Purchase History, Payment Info and other financial data actually returned/stored                                                       |
| `Payments/TeyaPOSLink.swift`                             | SDK receives device ID; transaction amounts, currency and references; printing integration | Include payment and printing payloads in SDK review                                                                                           |
| `API/ReceiptEmail.swift`, `Views/ReceiptEmailView.swift` | Receipt-email feature present                                                              | Trace recipient retention, email provider and receipt contents                                                                                |
| `Payments/NetgiroCheckoutView.swift`                     | Additional payment flow present                                                            | Teya alone is not the complete provider inventory                                                                                             |
| `Localization/AppLanguage.swift`, `State/POSStore.swift` | UserDefaults for local language/cart state                                                 | Add app manifest; CA92.1 is a candidate for this app-only use                                                                                 |
| `Info.plist`                                             | Camera purpose present; no export-compliance declaration found                             | Verify localized permission text; resolve encryption assessment                                                                               |
| Source file search                                       | No app `.xcprivacy` found, no privacy link found                                           | Implement manifest and accessible privacy/support links                                                                                       |
| `Package.resolved`                                       | Teya SDK 1.9.0, revision `2016f61783d8d6500daf67b3a0e934bece9df074`                        | Inspect the exact binary and its transitive dependencies in the release archive                                                               |

No SDK binary, signed archive, live backend settings or App Store Connect fields were validated in this pass. Schema fields are evidence of supported storage, not proof that every field is collected in every app flow.

## App Store Connect guide / Leiðbeiningar

| Field              | English guidance                                                                                                                              | Íslenska                                                                                                                                    |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Price              | Free, per owner instruction                                                                                                                   | Ókeypis, samkvæmt fyrirmælum eiganda                                                                                                        |
| Privacy Policy URL | Published `/pos/privacy/en/`                                                                                                                  | Birt `/pos/privacy/is/`                                                                                                                     |
| Support URL        | Published `/pos/support/en/`                                                                                                                  | Birt `/pos/support/is/`                                                                                                                     |
| App Privacy        | Data is collected. Complete categories from actual off-device flows and SDK evidence                                                          | Gögnum er safnað. Skrá gagnaflokka samkvæmt raunverulegri miðlun úr tæki og upplýsingum um hugbúnaðarsöfn                                   |
| Linked to user     | Assess links to staff, customers, account and device; do not call pseudonymous IDs anonymous                                                  | Meta tengsl við starfsfólk, viðskiptavini, aðgang og tæki; dulnefnd auðkenni eru ekki sjálfkrafa nafnlaus                                   |
| Tracking           | No advertising integration found in inspected app source; SDK/server verification remains open                                                | Engin auglýsingatenging fannst í skoðuðum frumkóða; staðfesting fyrir söfn og bakenda stendur eftir                                         |
| Encryption/export  | Review all bundled cryptography, including Teya. Set `ITSAppUsesNonExemptEncryption = NO` only if all encryption is exempt or absent          | Meta alla dulritun, einnig í Teya. Stilla gildið á `NO` aðeins ef öll dulritun er undanþegin eða engin                                      |
| Age rating         | Answer the current content/features questionnaire; Apple calculates the rating. Check actual catalog content, web access and release features | Svara núgildandi spurningum um efni og eiginleika; Apple reiknar aldursmerkingu. Skoða vöruefni, vefaðgang og eiginleika útgáfunnar         |
| Trader             | Company commercial distribution suggests trader status; owner must confirm. Free download alone does not decide it                            | Dreifing á vegum fyrirtækis í atvinnuskyni bendir til stöðu söluaðila; eigandi þarf að staðfesta. Ókeypis niðurhal ræður ekki niðurstöðunni |

Do not select all privacy categories merely because a database can store them. Trace app requests, SDK transmissions, optional flows and production logging. Candidate categories include Name, Email Address, Phone Number, User ID, Device ID, Purchase History and Payment Info; assess national ID, store credit, support and diagnostics separately. Use App Functionality where that accurately describes the use; add other purposes only where verified. Review all release configurations covered by the listing.

Teya's general privacy notice is not a version-specific SDK disclosure. Obtain or inspect the 1.9.0 data inventory, purposes, tracking/linkage, retention, destinations, privacy manifests, required-reason APIs and encryption information. No request has been sent to Teya.

## Completion evidence / Staðfesting verkloka

- [x] Publish bilingual pages without draft placeholders using company-supplied contact, hosting and POS retention information. Remaining production/SDK evidence is listed above.
- [x] Publish all four pages, verify public HTTPS access without login and add discoverable website links.
- [x] Native code has localized privacy/support entry points before pairing, while locked and in POS Configuration. The release candidate must bundle the public URLs below. Native tests/UI passed on 14 October; this is not signed distribution evidence.
- [x] App-owned manifest is bundled and structurally verified in the unsigned candidate.
- [ ] Obtain the Teya SDK's own privacy declarations/data practices and inspect the aggregate report. The inspected 1.9.0 framework lacks a vendor manifest.
- [ ] Confirm any account-creation flow meets Apple's applicable in-app account-deletion requirement; device unpairing is not account deletion.
- [ ] Produce the actual Release archive; record commit, bundle ID, version/build, SDK versions and signing identity.
- [ ] Inspect embedded manifests and generate Xcode's privacy report; review required-reason API use in app and dependencies.
- [ ] Validate in Xcode Organizer and retain the validation result. Resolve App Store processing warnings after upload.
- [ ] Save/read back privacy categories, URLs, encryption answers, age-rating answers/results, territories and company trader status in App Store Connect.
- [ ] Retain dated screenshots or exports of completed fields and final public URLs alongside archive evidence. Mark complete only after these checks pass.

## Primary references

- [Apple: App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/)
- [Apple: required-reason APIs](https://developer.apple.com/documentation/bundleresources/describing-use-of-required-reason-api)
- [Apple: adding a privacy manifest](https://developer.apple.com/documentation/bundleresources/adding-a-privacy-manifest-to-your-app-or-third-party-sdk)
- [Apple: export compliance](https://developer.apple.com/help/app-store-connect/manage-app-information/overview-of-export-compliance/)
- [Apple: age rating](https://developer.apple.com/help/app-store-connect/manage-app-information/set-an-app-age-rating/)
- [Apple: EU trader requirements](https://developer.apple.com/help/app-store-connect/manage-compliance-information/manage-european-union-digital-services-act-trader-requirements)
- [Teya: privacy notice](https://www.teya.com/legal/privacy-policy)

## Current release handoff — 14 October 2026

Use the existing stable public URLs; no login or new account is required:

| App Store/native field         | Current value                     |
| ------------------------------ | --------------------------------- |
| Publisher                      | Supergut ehf (430524-2160)        |
| Privacy Policy URL (English)   | https://depill.is/pos/privacy/en/ |
| Privacy Policy URL (Icelandic) | https://depill.is/pos/privacy/is/ |
| Support URL (English)          | https://depill.is/pos/support/en/ |
| Support URL (Icelandic)        | https://depill.is/pos/support/is/ |
| Marketing URL (English)        | https://depill.is/pos/en/         |
| Marketing URL (Icelandic)      | https://depill.is/pos/            |
| Support/review contact         | depill@depill.is, +354 822 9923   |

Copy these public values into `apps/apple/Config/Release.local.plist`, following the POS repository's
`Release.example.plist` and bundle checker. The issuer name and contact were already owner-supplied
and published; they are not new placeholder requests. App Store seller/team identity still needs
verification against the actual account. App Store URLs must be saved/read back there separately.

Reviewed against POS code revision `709093c` in [PR #10](https://github.com/depill/pos/pull/10):
app-owned privacy manifest, scoped local storage/Keychain, public receipt links, native Mail/printing,
and core iPad journeys. The privacy page now covers these flows, provider roles, deletion/access
requests and website hosting. Support explains pairing, availability, unknown-payment recovery,
privacy requests and secret-safe reporting. The English product page matches the lean release;
no App Store availability or Teya certification is claimed.

Do not replace outstanding SDK, signed archive, App Store fields or physical/provider acceptance
with website publication. Confirm the actual production hosting/processor list, processing locations,
contract safeguards, logs and backup-retention/deletion arrangements. Source-configured Postmark or
Microsoft Entra does not establish that a merchant deployment uses it; document the actual enabled
providers and notify affected users when processing changes. Do not assert unknown SDK tracking or
invent a legal retention schedule. There is no native account-signup flow in the inspected candidate;
if this changes, an email-only website request does not satisfy Apple's in-app deletion requirement.

Publication and fresh public/browser verification for this update are recorded below after deployment.
