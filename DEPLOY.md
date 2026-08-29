# Deploying YouthIntel — full walkthrough

Workflow: **local files → GitHub → Cloudflare Pages → your 123reg domain.**
Once set up, updating the live site is 3 commands.

Your project folder is already a git repository with the first commit made.

---

## STEP 1 — Add your images (do this first)

Put these in this folder (next to `index.html`):

- `logo.png` — the brand image you designed
- `favicon.png` — optional small square icon for the browser tab

Then save them into git:

```
cd "/Users/nageshgupta/Desktop/youthintel website"
git add -A
git commit -m "Add logo and favicon"
```

---

## STEP 2 — Create a GitHub account

Skip if you already have one.

1. Go to https://github.com/signup
2. Use your email, pick a username (e.g. `nageshgupta`), verify the email.
3. The free plan is all you need.

---

## STEP 3 — Connect this Mac to GitHub

In Terminal:

```
gh auth login
```

Answer the prompts:

- **What account?** → `GitHub.com`
- **Protocol?** → `HTTPS`
- **Authenticate Git with your GitHub credentials?** → `Yes`
- **How to authenticate?** → `Login with a web browser`
- It shows a **one-time code** (like `A1B2-C3D4`). Copy it, press Enter, the browser opens, paste the code, click Authorize.

You only do this once on this computer.

---

## STEP 4 — Create the repo and push

```
cd "/Users/nageshgupta/Desktop/youthintel website"
gh repo create youthintel-website --private --source=. --push
```

This creates a private repo on your GitHub and uploads the files.
Check it worked: `gh repo view --web`

---

## STEP 5 — Cloudflare Pages

1. Sign up / log in at https://dash.cloudflare.com
2. Left menu → **Workers & Pages** → **Create** → **Pages** tab → **Connect to Git**
3. Authorize Cloudflare to see your GitHub, pick `youthintel-website`
4. Build settings:
   - **Framework preset:** `None`
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`
5. **Save and Deploy**

After ~30 seconds you get a live URL: `youthintel-website.pages.dev`. Open it and check the page looks right.

---

## STEP 6 — Point your 123reg domain at it

### 6a. Add the domain in Cloudflare

In the Pages project → **Custom domains** → **Set up a custom domain** → type your domain (e.g. `youthintel.co.uk`) → **Continue**.

Cloudflare will tell you one of two things:

**Option A — "Add these DNS records"** (keep 123reg as your DNS host):
It gives you a CNAME record. Note the name and target.

**Option B — "Change your nameservers"** (move DNS to Cloudflare — recommended, more reliable):
It gives you 2 nameservers like `dana.ns.cloudflare.com` and `rob.ns.cloudflare.com`.

### 6b. Make the change at 123reg

1. Log in at https://www.123-reg.co.uk → **Control panel** → your domain → **Manage**

**If you were given nameservers (Option B):**
- Find **Nameservers** (sometimes under "Advanced domain settings")
- Choose "Use custom nameservers" / "Use other nameservers"
- Delete the 123reg ones, enter the 2 Cloudflare nameservers
- Save

**If you were given DNS records (Option A):**
- Find **Manage DNS** / **Advanced DNS**
- Add the CNAME record exactly as Cloudflare showed (name + target)
- If there's an existing blank/parking A record on `@` or `www`, remove it
- Save

### 6c. Wait

DNS changes take anywhere from 10 minutes to a few hours (occasionally up to 24h).
Cloudflare's Custom Domains page shows a green **Active** when it's live.
HTTPS certificate is automatic.

---

## MAKING CHANGES IN FUTURE

1. Edit `index.html` (or swap `logo.png`) in this folder.
2. Preview locally: open `index.html` in a browser, or run
   `python3 -m http.server 8000` and visit http://localhost:8000
3. Publish:

```
cd "/Users/nageshgupta/Desktop/youthintel website"
git add -A
git commit -m "describe what you changed"
git push
```

Cloudflare sees the push and redeploys automatically in ~30 seconds. Your domain updates itself.

### Undo a change
- See history: `git log --oneline`
- Roll the live site back: in Cloudflare Pages → **Deployments** → find an earlier one → **Rollback to this deployment**.

---

## Quick reference

| Task                | Command / place                                    |
|---------------------|----------------------------------------------------|
| Preview locally     | open `index.html`                                  |
| Publish changes     | `git add -A && git commit -m "..." && git push`    |
| See the repo        | `gh repo view --web`                               |
| See live deploys    | Cloudflare dashboard → Workers & Pages → youthintel-website |
| Roll back           | Cloudflare → Deployments → Rollback                 |
