// @ts-check
import { defineConfig } from 'astro/config';

// ENGINE_URL is an alias for PUBLIC_ENGINE_URL. Neither may invent a host.
const publicEngine = (process.env.PUBLIC_ENGINE_URL ?? '').trim();
const engine = (process.env.ENGINE_URL ?? '').trim();
if (!publicEngine && engine) {
  process.env.PUBLIC_ENGINE_URL = engine;
}

// GitHub Pages project site: https://artodad.github.io/austin-and-austin/
export default defineConfig({
  site: 'https://artodad.github.io',
  base: '/austin-and-austin/',
});
