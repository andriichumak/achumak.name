# Personal website

This is the source code for my personal website / CV.

The site is a static page generated from Markdown. All the actual content lives
in [`content/home.md`](content/home.md) — edit that file to update the CV.

## How it works

- `content/home.md` — the CV content. Front matter holds contact details
  (name, location, phone, email, social links), the Markdown body is the
  page content (bio, work experience, education, etc.).
- `templates/layout.html` — the HTML shell the content is rendered into.
- `styles.css` — the stylesheet.
- `scripts/build.js` — renders the Markdown + template into `dist/index.html`
  and copies static assets into `dist/`.

## Local development

```bash
npm install
npm run build   # generates ./dist
npm start       # builds and serves ./dist on http://localhost:8080
```

## Deployment

Pushing to `master` builds the site and deploys `dist/` to the web server
over FTPS via GitHub Actions (see `.github/workflows/deploy.yml`). It expects
the following repository secrets:

- `FTP_SERVER` — FTP host
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_PORT` — optional, defaults to `21`
- `FTP_SERVER_DIR` — optional, remote directory to deploy into, defaults to `/`
