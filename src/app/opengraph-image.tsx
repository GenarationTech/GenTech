import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} · Build for the AI era`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0c0e12",
          color: "#f6f5f1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
            GenTech<span style={{ color: "#ff6a3d" }}>.</span>
          </div>
          <div style={{ fontSize: 20, color: "#a2a7b0", letterSpacing: 4, textTransform: "uppercase" }}>
            {site.tagline}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 108, fontWeight: 700, letterSpacing: -5, lineHeight: 0.95, textTransform: "uppercase" }}>
            Build for the AI era.
          </div>
          <div style={{ fontSize: 30, color: "#a2a7b0", maxWidth: 900, lineHeight: 1.35 }}>
            {site.description}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
