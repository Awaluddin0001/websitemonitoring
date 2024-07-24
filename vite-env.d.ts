/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_CAPTCHA: string;
  readonly VITE_API_USER: string;
  readonly VITE_API_MONITORING: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
