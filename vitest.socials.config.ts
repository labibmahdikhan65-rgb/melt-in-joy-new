import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["server/website.socials.test.ts"],
    environment: "node",
  },
});
