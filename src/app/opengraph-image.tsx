import { ImageResponse } from "next/og";

export const alt = "Trần Nguyên Tâm — Junior Backend Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#020617",
          padding: "70px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          border: "8px solid #0f172a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "#3b82f6",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#60a5fa",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Engineering Portfolio
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#f8fafc",
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Trần Nguyên Tâm
          </h1>
          <div
            style={{
              fontSize: "30px",
              fontWeight: 600,
              color: "#93c5fd",
            }}
          >
            Junior Backend Developer
          </div>
          <p
            style={{
              fontSize: "20px",
              color: "#94a3b8",
              lineHeight: 1.5,
              maxWidth: "950px",
              margin: 0,
            }}
          >
            Commercial Healthcare Backend • .NET 10, Python, Node.js • Relational Transactions & Concurrency Control
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1e293b",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            <span
              style={{
                fontSize: "15px",
                color: "#cbd5e1",
                backgroundColor: "#0f172a",
                padding: "6px 14px",
                borderRadius: "6px",
                border: "1px solid #1e293b",
              }}
            >
              PostgreSQL / SQL Server
            </span>
            <span
              style={{
                fontSize: "15px",
                color: "#cbd5e1",
                backgroundColor: "#0f172a",
                padding: "6px 14px",
                borderRadius: "6px",
                border: "1px solid #1e293b",
              }}
            >
              Clean Architecture
            </span>
            <span
              style={{
                fontSize: "15px",
                color: "#cbd5e1",
                backgroundColor: "#0f172a",
                padding: "6px 14px",
                borderRadius: "6px",
                border: "1px solid #1e293b",
              }}
            >
              Modular Monolith
            </span>
          </div>
          <span
            style={{
              fontSize: "16px",
              color: "#64748b",
            }}
          >
            portfolio-trannguyentam.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
