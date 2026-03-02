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
          {/* Top bar */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: "2.5rem",
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
            }}>
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
            <a
              href="https://github.com/lauragundin/agendatech"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              style={{ fontSize: "0.8rem", padding: "0.4rem 0.9rem" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Hero content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: "680px" }}>
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
                Eventos tech gratuitos em SP
              </p>
            </div>
            <p style={{
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: 0,
            }}>
              Conectando você às melhores oportunidades — meetups, workshops e networking
              para quem está começando ou crescendo na área de tecnologia.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="#events" className="btn-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Ver eventos
              </a>
              <a href="#events" className="btn-ghost">
                Adicionar evento →
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
