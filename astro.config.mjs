import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno({
    port: Number(Deno.env.get("PORT") || 8085),
    hostname: "0.0.0.0",
  }),
  integrations: [tailwind()],
});
