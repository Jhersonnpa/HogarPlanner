import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import auth from "auth-astro";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), auth(), react({
    experimentalReactChildren: true
  }), db()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});