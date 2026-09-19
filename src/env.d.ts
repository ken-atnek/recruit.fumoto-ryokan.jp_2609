/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_ENV: 'demo' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
