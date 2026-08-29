# YouthIntel — coming soon page

A single static page: `index.html`. No build step.

## 1. Add your images

Put these two files in this folder (same folder as `index.html`):

| File          | What it is                                              |
|---------------|--------------------------------------------------------|
| `logo.png`    | The brand image you sent (wordmark + shield + tagline). |
| `favicon.png` | Small icon for the browser tab (e.g. just the shield). 64×64 or larger is fine. |

Until `logo.png` is added, the page shows a plain text fallback of the name and tagline.

## 2. Preview locally

Open `index.html` in a browser, or run:

```
cd "youthintel website"
python3 -m http.server 8000
```

Then visit http://localhost:8000

## 3. Deploy (free) — Cloudflare Pages

1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Name the project `youthintel`, drag this whole folder in, click **Deploy**.
   You'll get a live URL like `youthintel.pages.dev`.
3. In the project → **Custom domains** → add your 123reg domain.
4. Cloudflare shows you DNS records (or asks you to change nameservers).

## 4. Point the 123reg domain

Log in to 123reg → **Manage domain** → **DNS / Nameservers**.

- **Easiest:** change the nameservers to the two Cloudflare gives you. Wait up to a few hours.
- **Or** keep 123reg DNS and add the CNAME / A records Cloudflare lists.

Done — the domain will show this page.
