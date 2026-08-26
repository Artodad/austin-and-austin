# Austin & Austin

Owned static site for Austin & Austin, Attorneys at Law (El Cajon / Ramona).

- Live Squarespace (reference only): https://www.lawaustinandaustin.com/
- GitHub Pages: https://artodad.github.io/austin-and-austin/

Astro static site. Project Pages base is `/austin-and-austin/`.

```bash
npm install
npm run dev
npm run build
```

## Engine login

The homepage Login door and the inner-page footer Login go to the estate engine's Clerk sign-in. Set `ENGINE_URL` or `PUBLIC_ENGINE_URL` at build time to the deployed engine origin, with no trailing slash.

```bash
ENGINE_URL=https://example.com
```

That makes Login point to `https://example.com/sign-in`. GitHub Pages can take the same value as a repository variable named `ENGINE_URL` or `PUBLIC_ENGINE_URL`. The deploy workflow passes those through and does not supply a default.

If the variable is unset or empty, Login still renders on the homepage and in the footer, but it is not a link. The build does not fall back to localhost, GitHub Pages, or any other host.

Copy is from the live site, with the year line kept as established 1983, Carmel Mountain Ranch corrected, and criminal-law leftovers dropped. No office photograph is used; the Claydelle Plaza / “215” shot is not the current Douglas Avenue office.
