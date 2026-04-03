import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno(),
  integrations: [tailwind()],
});
