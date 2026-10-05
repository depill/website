# Depill / Supergut visual identity

Depill is the public-facing brand of Supergut ehf. Keep the site personal,
readable and focused on writing, while sharing Supergut’s software identity.

## Colour tokens

The implementation lives in `src/styles/global.css`.

| Token              | Hex     | Use                                                                    |
| ------------------ | ------- | ---------------------------------------------------------------------- |
| Mint / Primary     | #78EBC2 | Primary actions, selected navigation, app icon background              |
| Ink / Primary Text | #10201B | Main text, icons, logo, dark surfaces                                  |
| Sand / Background  | #F7F7F2 | Main page background                                                   |
| White              | #FFFFFF | Cards, panels, modals                                                  |
| Purple / Accent    | #49356B | Text links, occasional highlights, charts                              |
| Muted text         | #6F7B77 | Secondary colour token; use accessible derivative below for small text |
| Border             | #E4E8E5 | Card borders and dividers                                              |
| Mint hover         | #63DDB3 | Hover/pressed primary state                                            |
| Mint soft          | #E4FAF2 | Selected rows, badges, subtle backgrounds                              |
| Dark surface       | #0C1915 | Optional dark navigation/sidebar                                       |

Use ink text on mint. Do not use mint for body text on light backgrounds.
Small secondary text uses `--text-secondary: #59645F` for stronger contrast on
sand and mint-soft surfaces; the supplied muted token remains available.
Purple is the link and focus-ring colour. A dark sidebar is optional, not
required for this editorial site.

## Icons

Source: the supplied `supergut-pos-icons` pack from
`/Users/david.gunnarson/projects/gull/pos-platform/supergut-pos-icons/`.
Only the SVGs used by the site are copied into `public/icons/`.

- Supergut mint rounded app mark: header and `public/favicon.svg`.
- Edit: Writing navigation.
- Notes: Documentation navigation.
- Info: About navigation.

Preserve the original SVG geometry, viewBox and proportions. Use ink icons on
light surfaces; mint/light variants belong on dark surfaces. External image
SVGs need fixed colours; `currentColor` only inherits when embedded inline.
Navigation icons are decorative (`alt=""`) because visible labels name links.
Do not replace the Depill name or the Supergut legal ownership information.
