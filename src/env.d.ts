/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly API_URL: string;
  readonly AUTH_TOKEN: string;
  readonly PUBLIC_GTM: string;
}
