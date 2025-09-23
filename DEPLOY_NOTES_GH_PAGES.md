# GitHub Pages Deploy Notes (Nuxt 2)

- Configured `nuxt.config.js` with:
  - `router.base = '/test_apisful/'`
  - `generate.fallback = '404.html'`
- Added GitHub Actions workflow `.github/workflows/deploy.yml` to build with `yarn generate` and deploy `dist/` to GitHub Pages.
- After pushing to `main`, go to **Settings → Pages** and set **Source: GitHub Actions**.

Local commands to run before push (optional):
```bash
yarn install
yarn generate
```
