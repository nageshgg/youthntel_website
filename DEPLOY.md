# Custom domain for YouthIntel

The existing repository remote is [nageshgg/youthntel_website](https://github.com/nageshgg/youthntel_website) and the configured domain in `CNAME` is `www.youthintel.co.uk`. For branch setup and publishing, see [README.md](README.md).

## Registrar DNS

After verifying the domain in the owning GitHub account and adding `www.youthintel.co.uk` in the repository’s Pages settings, check the records at the registrar. The `www` record serves the custom domain. Point the apex to GitHub Pages as well if you want requests to `youthintel.co.uk` to redirect to the configured `www` hostname.

| Type | Name | Target |
| --- | --- | --- |
| CNAME | `www` | `nageshgg.github.io` |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Use the registrar’s default TTL. Update conflicting web records if needed and preserve records for email and other services. Check DNS from a terminal with `dig +short www.youthintel.co.uk CNAME` and `dig +short youthintel.co.uk A`. After GitHub validates DNS and provisions the certificate, enable **Enforce HTTPS**. [GitHub’s custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
