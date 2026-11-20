# YouthIntel website

YouthIntel is an early-stage HealthTech and EdTech concept exploring how school wellbeing information could support earlier safeguarding review and better-informed mental health referrals. This repository holds the public informational site and its draft website privacy notice.

## Preview locally

Open `index.html` in a browser. To preview over HTTP, run the following from the repository root.

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Visit <http://127.0.0.1:8000>. The site uses HTML, CSS and vanilla JavaScript and can be published directly.

## Publish on GitHub Pages

1. Commit and push the site files to the `main` branch of the existing repository, or upload them to the repository root using GitHub’s **Add file** menu. Include `assets/`, `.nojekyll` and `CNAME`. Keep private source material outside the repository.
2. In **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, then select **main** and **/ (root)**. Save. [GitHub’s publishing source guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
3. Check the custom domain in **Settings → Pages**. The existing `CNAME`, canonical URLs and sitemap use `www.youthintel.co.uk`. Verify the domain in the owning GitHub account and save it in Pages settings before changing DNS.
4. At the registrar, check the existing records against [the DNS settings in DEPLOY.md](DEPLOY.md). If they already point to GitHub Pages, reuse them.
5. When GitHub reports a valid domain and certificate, enable **Enforce HTTPS** in Pages settings. [GitHub’s custom domain and HTTPS guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## Edit the content

- Edit `index.html` for sections, founder biographies and contact links. When updating the public email address, change both the link text and its `mailto:` destination.
- Review `privacy.html` with the website operator before publication. Resolve the visible draft note and the `PRIVACY_REVIEW` comment once the operator, host, privacy contact and handling of any correspondence are confirmed.
- Edit `style.css` for colours and layout and `script.js` for menu behaviour. The site assets are in `assets/`.
- If the domain changes, update `CNAME`, both pages’ canonical and Open Graph URLs, `robots.txt` and `sitemap.xml`.
- Preview changes locally, then push them to the configured publishing branch. GitHub Pages redeploys after a push to that branch.
