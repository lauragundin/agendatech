"use client";

export default function Header() {
  return (
    <header style={{ position: "relative", overflow: "hidden" }}>
      {/* Decorative glowing orbs */}
      <div style={{
        position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)",
        width: "600px", height: "300px",
        background: "radial-gradient(ellipse, rgba(108, 99, 255, 0.2) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: 0, right: "-100px",
        width: "400px", height: "200px",
        background: "radial-gradient(ellipse, rgba(67, 233, 123, 0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "3rem 1.5rem 3.5rem",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          {/* Top bar — só badge SP */}
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: "var(--accent3)",
                boxShadow: "0 0 8px rgba(67, 233, 123, 0.6)",
                display: "inline-block",
                animation: "pulse 2s ease-in-out infinite",
              }} />
              <span style={{ fontSize: "0.78rem", color: "var(--muted)", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                São Paulo • Gratuito
              </span>
            </div>
          </div>

          {/* Hero content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "680px" }}>
            {/* Logo + Título */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
              <img
                src="/logo.png"
                alt="AgendaTech logo"
                style={{
                  height: "72px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 16px rgba(108, 99, 255, 0.35))",
                }}
              />
              <div>
                <h1 style={{
                  fontFamily: "var(--font-display, 'Syne', sans-serif)",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}>
                  <span className="shimmer-text">AgendaTech</span>
                </h1>
                <p style={{
                  fontFamily: "var(--font-display, 'Syne', sans-serif)",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: 600,
                  color: "rgba(240, 240, 248, 0.6)",
                  marginTop: "0.25rem",
                  letterSpacing: "-0.01em",
                }}>
                  Conectando você a eventos tech
                </p>
              </div>
            </div>

            <p style={{
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: 0,
            }}>
              Seu hub de meetups, workshops e networking — tudo gratuito, tudo em São Paulo. Para quem está entrando na tech ou levando a carreira para o próximo nível.
            </p>
            <div>
              <a href="#events" className="btn-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Ver eventos
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </header>
  );
}
