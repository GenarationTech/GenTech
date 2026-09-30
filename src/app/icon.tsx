import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0e12",
          borderRadius: 16,
          color: "#f6f5f1",
          fontSize: 38,
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        G<span style={{ color: "#ea4c1d" }}>.</span>
      </div>
    ),
    size,
  );
}
