import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const instagramFeed = readFileSync(
  resolve(process.cwd(), "client/src/components/InstagramFeed.tsx"),
  "utf8",
);
const footer = readFileSync(
  resolve(process.cwd(), "client/src/components/Footer.tsx"),
  "utf8",
);

describe("Melt In Joy social content", () => {
  it("removes the Instagram API placeholder copy", () => {
    expect(instagramFeed).not.toContain("Placeholder gallery");
    expect(instagramFeed).not.toContain("connect the Instagram Graph API");
  });

  it("keeps TikTok next to the existing Instagram footer link", () => {
    expect(footer).toContain(
      'const TIKTOK_URL = "https://www.tiktok.com/@meltinjoy?is_from_webapp=1&sender_device=pc";',
    );
    expect(footer).toContain("href={TIKTOK_URL}");
    expect(footer).toContain("TikTok");
  });
});
