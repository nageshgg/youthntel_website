# YouthIntel — deployment

**Host:** GitHub Pages · **Repo:** https://github.com/nageshgg/youthntel_website
**Live domain:** https://www.youthintel.co.uk (apex youthintel.co.uk redirects to www)

Workflow once live:

```
edit files locally  →  git push  →  GitHub Pages redeploys (~1 min)  →  site updates
```

---

## STATUS

- [x] Site built (`index.html`)
- [x] Git repo + pushed to GitHub
- [x] GitHub Pages enabled (source: `main` branch, root)
- [x] `CNAME` file added → `www.youthintel.co.uk`
- [ ] **DNS set at 123reg**  ← YOU ARE HERE
- [ ] HTTPS enforced (automatic once DNS resolves)
- [ ] `logo.png` added (optional — text fallback shows until then)

---

## STEP — Set DNS at 123reg

Log in at https://www.123-reg.co.uk → **Control panel** → **Domain names** → click
`youthintel.co.uk` → **Manage** → **Advanced DNS** (or **Manage DNS**).

### 1. Delete the existing parking records

Remove these if present:

| Type  | Name / Host | Current value                        |
|-------|-------------|--------------------------------------|
| A     | `@`         | `13.248.213.45`                      |
| A     | `@`         | `76.223.67.189`                      |
| CNAME | `www`       | `youthintel.co.uk` (or similar)      |

### 2. Add these records

| Type  | Name / Host | Value                | TTL     |
|-------|-------------|----------------------|---------|
| A     | `@`         | `185.199.108.153`    | default |
| A     | `@`         | `185.199.109.153`    | default |
| A     | `@`         | `185.199.110.153`    | default |
| A     | `@`         | `185.199.111.153`    | default |
| CNAME | `www`       | `nageshgg.github.io` | default |

(If 123reg won't accept `@`, use a blank host or `youthintel.co.uk`.)
(CNAME value may need a trailing dot: `nageshgg.github.io.`)

### 3. Save. Then wait.

Propagation: usually 15–60 min, occasionally up to 24h.

Check progress from Terminal:
```
dig +short youthintel.co.uk A          # want the four 185.199.x.x
dig +short www.youthintel.co.uk        # want nageshgg.github.io
```

### 4. Turn on HTTPS

Once the domain resolves, go to
https://github.com/nageshgg/youthntel_website/settings/pages
- The "Custom domain" box should show `www.youthintel.co.uk` with a green check.
- Tick **Enforce HTTPS** (may be greyed out for a few hours while GitHub issues the certificate — check back).

Done. https://www.youthintel.co.uk shows the page.

---

## ADD THE LOGO

1. Save your brand image as `logo.png` in this folder.
2. `git add -A && git commit -m "Add logo" && git push`
3. ~1 min later the image replaces the text fallback on the live site.

---

## MAKING CHANGES LATER

1. Edit `index.html` (or replace `logo.png`).
2. Preview: open `index.html` in a browser, or `python3 -m http.server 8000`.
3. Publish:
   ```
   git add -A
   git commit -m "what changed"
   git push
   ```
4. GitHub Pages redeploys automatically.

**Undo:** `git log --oneline` to see history; `git revert <commit>` then push to roll back a change.

---

## Quick reference

| Task            | Command / link                                                    |
|-----------------|------------------------------------------------------------------|
| Preview locally | open `index.html`                                                 |
| Publish         | `git add -A && git commit -m "..." && git push`                   |
| Repo            | https://github.com/nageshgg/youthntel_website                     |
| Pages settings  | https://github.com/nageshgg/youthntel_website/settings/pages      |
| Check DNS       | `dig +short www.youthintel.co.uk`                                 |
