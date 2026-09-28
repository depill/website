# depill.is

A small Markdown-first site for David Fannar Gunnarsson / Supergut ehf, kennitala 430524-2160. Built with Astro and deployed as static assets on Cloudflare Workers. No runtime database or server application is required.

## Run locally

Use Node.js 22.12+ (Node 24 recommended).

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro, normally http://localhost:4321.

## Add a post, article, or documentation page

```sh
npm run new -- post my-first-post "My first post"
npm run new -- article mapping-order-to-cash "Mapping order to cash"
npm run new -- doc business-central/api-notes "Business Central API notes"
```

The commands create **drafts** and never overwrite an existing file. Edit the new Markdown file, then change `draft: true` to `draft: false` to preview or publish it. Alternatively, copy a file from `templates/` into the matching content folder.

- Posts and articles: `src/content/writing/`; URLs begin `/writing/`.
- Documentation: `src/content/docs/`; URLs begin `/docs/`.
- Subfolders become part of the URL, for example `docs/business-central/api-notes.md` becomes `/docs/business-central/api-notes/`.
- `title`, `description`, and `date` are required. Dates use `YYYY-MM-DD` and UTC.
- `kind: post` shows as “Field note”; `kind: article` shows as “Article”. Both appear in Writing.
- `section` groups documentation in its index and sidebar; `order` sorts pages within a section.
- `updated` is an optional date. Use it when revising a page.
- `tags` appear on writing listings. `comments: false` disables comments on a particular page.
- Drafts and future-dated content are excluded everywhere, including direct page routes, the RSS feed, and sitemap. Future content needs a new build after its date; there is no scheduled publishing service.
- Drafts are also hidden in development. Temporarily set `draft: false` to preview one locally; restore it before deploying if it is unfinished.

Use `##` and `###` headings for the automatic table of contents. Markdown supports lists, links, tables, quotes, images, and syntax-highlighted fenced code blocks. The title is already the page’s H1.

Put images in `public/images/` and reference them as `![Useful description](/images/example.png)`. Use absolute site paths when linking between Markdown pages: `[API notes](/docs/business-central/api-notes/)`.

The welcome post and process-mapping template are starter copy for you to edit or remove. `example-article.md` is a hidden draft. If you remove the template, also remove its link from the welcome post.

## Comments (optional)

The Giscus integration is implemented but disabled until configured. No empty comments box or setup prompt is shown to readers.

1. Choose a **public** GitHub repository for comments. It can be a separate repository; the site source does not have to be public.
2. Enable Discussions and install the [Giscus GitHub app](https://github.com/apps/giscus) on that repository.
3. Configure the repository and a discussion category at [giscus.app](https://giscus.app/). An Announcements category is recommended by Giscus.
4. Copy the generated `data-repo`, `data-repo-id`, `data-category`, and `data-category-id` values into `comments` in `src/site.ts`.
5. Rebuild and deploy.

Readers sign in with GitHub to comment. Discussions are public and moderated in GitHub. Comments are matched to the page pathname, so keep published paths stable. The four configuration values are public identifiers, not secrets. Without JavaScript, readers get a link to GitHub discussions.

## Deploy to Cloudflare Workers

The project follows Cloudflare’s [static Astro deployment guidance](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/). It uses Workers Static Assets, not Cloudflare Pages, and does not need the Astro Cloudflare adapter.

### From your computer

Your Cloudflare account must manage the `depill.is` zone for the configured custom domain.

```sh
npx wrangler login
npm run deploy
```

`npm run deploy` checks the project, builds it, and uploads `dist/`. The custom domain in `wrangler.jsonc` connects the Worker to `depill.is`. If Cloudflare reports an existing conflicting DNS record, review the existing record in your account before changing it. This project does not configure `www.depill.is`; add a separate domain or redirect if you want that address too.

To deploy to a `workers.dev` address first, remove the `routes` array from `wrangler.jsonc` and add `"workers_dev": true`. Restore the route when you are ready to connect `depill.is`.

### Deploy automatically with GitHub Actions

The included workflow in `.github/workflows/deploy.yml` checks pull requests and deploys every successful push to `main`, including Markdown changes. You can also run **Actions → Check and deploy → Run workflow** on `main` to publish manually.

1. Create a GitHub repository with **the contents of this `website` folder at the repository root**. Include `.github/`, `package.json`, `package-lock.json`, and `wrangler.jsonc`. The workflow assumes this layout.
2. In Cloudflare, create an API token using the **Edit Cloudflare Workers** template. Scope it to the account that owns the Worker and the `depill.is` zone, retaining the template’s Workers and route permissions for custom-domain deployment. Copy your **Account ID** from the Cloudflare dashboard (not the Zone ID).
3. In your GitHub repository, open **Settings → Secrets and variables → Actions → New repository secret** and add:

   | Secret                  | Value                                          |
   | ----------------------- | ---------------------------------------------- |
   | `CLOUDFLARE_API_TOKEN`  | The Cloudflare API token                       |
   | `CLOUDFLARE_ACCOUNT_ID` | The account ID that owns the Worker and domain |

4. Push to `main`, or rerun the workflow if your first push happened before you added the secrets. The workflow installs locked dependencies, checks the content and types, builds the site, validates the Wrangler configuration, and deploys the built files to the `depill-is` Worker and `depill.is` custom domain.

Cloudflare’s [GitHub Actions guide](https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/) explains the API token and account setup. No Cloudflare Workers Builds connection is needed when using this workflow; avoid enabling a second deployment pipeline for the same repository.

The workflow only gives Cloudflare secrets to the deployment step on `main`. Pull requests, including public fork PRs, run checks without deployment credentials. The GitHub token has read-only repository access, action versions are pinned to commit SHAs, and production runs finish before another deployment starts.

For a public repository, **draft Markdown is still visible in the repository**, even though it is excluded from the website. Keep credentials in GitHub secrets and unpublished confidential material outside the repository.

If you instead keep the site in a `website/` subfolder of a larger repository, move `.github/workflows/deploy.yml` to that repository’s root `.github/workflows/`, set `jobs.website.defaults.run.working-directory: website`, and add `cache-dependency-path: website/package-lock.json` to the Node setup step.

## Verify before publishing

```sh
npm run deploy:check
```

This runs the type/content check, generates the static site, and performs a Wrangler deployment dry run without uploading it. To exercise Cloudflare’s local asset routing and 404 page:

```sh
npm run preview:worker
```

This project has not been deployed by its initial setup. Real domain routing and GitHub comments require your account configuration and a live check after deployment.

## Change the site

- Identity and comment settings: `src/site.ts`
- Home page: `src/pages/index.astro`
- About page: `src/pages/about.astro`
- Header, footer, and page metadata: `src/layouts/Base.astro`
- Colours, typography, and responsive layouts: `src/styles/global.css`
- Canonical domain: `astro.config.mjs` and `src/site.ts`
- Hosting domain: `wrangler.jsonc`
- Sitemap domain: `public/robots.txt`

The site uses system fonts, has no analytics, and does not load client-side JavaScript until comments are configured. RSS is at `/rss.xml`; the sitemap is at `/sitemap-index.xml`.
