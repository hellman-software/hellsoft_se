# Hellsoft

A static, English-language website for Erik Hellman’s fractional CTO, AI adoption, mentoring, and workshop work. There is no framework, backend, dependency installation, or advertising. Website usage statistics are provided by Plausible Analytics without analytics cookies.

## Local preview

With Python 3 installed, run this from the project directory:

```sh
npm run dev
```

Open <http://127.0.0.1:4173/>. Refresh the page after editing files. You can also start the server directly without Node:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Press Control-C in the server terminal to stop it.

## Check and package

Node 18 or newer is required for these optional commands. No `npm install` is needed.

```sh
npm run check
npm run build
npm run preview
```

The build copies only public website files into `dist/`. The preview serves that directory at <http://127.0.0.1:4173/>; stop any existing development server on that port first. The build is portable to ordinary static hosting and does not publish anything.

The canonical URLs, sitemap, and social metadata target `https://hellsoft.se/`.

## Production deployment

The production repository is [hellman-software/hellsoft_se](https://github.com/hellman-software/hellsoft_se). Pushes to its `main` branch run `.github/workflows/pages.yml`, which checks the JavaScript, builds `dist/`, and deploys that artifact to GitHub Pages. The workflow can also be started manually from GitHub Actions.

The existing Pages custom domain and HTTPS configuration are retained. `CNAME` declares `hellsoft.se`; `ads.txt` preserves the publisher declaration used by the wider Hellsoft sites. The main website itself loads no advertising. The original public portrait URL, `/images/erik.png`, is kept for existing links.

Only the allowlisted files in `scripts/build.mjs` enter the public artifact. Source files, editor configuration, and local logs are not published. The previous Hugo site remains available in the repository’s Git history.

## Maintenance

- Edit homepage content, contact links, social metadata, and structured data in `index.html`.
- Edit the palette, typography, layout, and responsive rules in `styles.css`. All fonts are system fonts, with no external font requests.
- `script.js` only enhances mobile navigation. Without JavaScript, the navigation and all content remain available.
- Both HTML pages include the Plausible integration snippet supplied for hellsoft.se. Keep the script URL and initialisation in sync if the integration changes; no additional event instrumentation is included.
- Edit the policy in `privacy/index.html`. Its existing wording is retained, with the font disclosure scoped to sites that use external fonts and the revision date updated. The policy also covers other Hellsoft subdomains.
- Public assets are under `assets/`. The original portrait is retained as `assets/images/erik.png`; the page uses the smaller JPEG encoding of the same picture. Project illustrations are decorative HTML/CSS/SVG artwork, not product screenshots.
- If the domain or routes change, update the canonical URLs, social URLs, JSON-LD, `sitemap.xml`, and `robots.txt` together.

After changes, review the homepage and privacy page at narrow mobile, tablet, and desktop widths. Check the mobile menu with mouse, keyboard, and Escape; all contact and external links; and reduced-motion behaviour.

## Content sources

- Existing portrait, career examples, company details, and privacy policy: <https://hellsoft.se/> and <https://hellsoft.se/privacy/>.
- Leadership positioning, book authorship, and Årets Frilansare 2023: the publicly indexed profile at <https://www.linkedin.com/in/erik-hellman/>.
- Product descriptions: <https://games.hellsoft.se/>, <https://kunveno.io/>, <https://coe.kunveno.io/>, and <https://stund.nu/>.

No client outcomes, testimonials, availability promises, or current engagement dates have been invented.
