"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        background: scrolled ? "rgba(6,7,14,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "background 0.3s, border-color 0.3s",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "0.65rem", textDecoration: "none" }}>
            <img src="/logo.png" alt="AgendaTech" style={{ height: "34px", width: "auto", objectFit: "contain" }} />
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "var(--text)", letterSpacing: "-0.01em" }}>
              AgendaTech
            </span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            {[["Eventos", "#events"], ["Sobre", "#sobre"]].map(([label, href]) => (
              <a key={label} href={href} style={{
                color: "var(--muted)", fontSize: "0.875rem", fontWeight: 500,
                padding: "0.4rem 0.85rem", borderRadius: "7px", textDecoration: "none",
                transition: "color 0.15s, background 0.15s",
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = "var(--text)"; (e.target as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = "var(--muted)"; (e.target as HTMLElement).style.background = "transparent"; }}
              >
                {label}
              </a>
            ))}
            <a href="#events" className="btn-primary" style={{ marginLeft: "0.5rem", padding: "0.45rem 1rem", fontSize: "0.82rem" }}>
              Ver eventos
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header style={{ position: "relative", overflow: "hidden", paddingTop: "64px" }}>
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "900px", height: "500px", background: "radial-gradient(ellipse at 50% 0%, rgba(108,99,255,0.18) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: "500px", height: "300px", background: "radial-gradient(ellipse at 100% 100%, rgba(67,233,123,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 2rem 5.5rem", position: "relative", zIndex: 1 }}>
          {/* badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", background: "rgba(67,233,123,0.08)", border: "1px solid rgba(67,233,123,0.2)", borderRadius: "999px", padding: "0.3rem 0.85rem", marginBottom: "2.25rem" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#43e97b", boxShadow: "0 0 6px rgba(67,233,123,0.8)", animation: "blink 2.4s ease-in-out infinite", display: "inline-block" }} />
            <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", color: "#43e97b" }}>São Paulo · 100% Gratuito</span>
          </div>

          {/* title row — logo sem nenhum filtro CSS, apenas posicionamento */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
            <img
              src="/logo.png"
              alt="AgendaTech"
              style={{ height: "88px", width: "auto", objectFit: "contain", flexShrink: 0 }}
            />
            <div>
              <h1 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2.8rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.03em", margin: 0 }}>
                <span className="shimmer-text">AgendaTech</span>
              </h1>
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", fontWeight: 400, color: "var(--muted)", marginTop: "0.35rem" }}>
                Conectando você a <strong style={{ fontWeight: 600, color: "rgba(238,238,245,0.72)" }}>eventos tech</strong> em São Paulo
              </p>
            </div>
          </div>

          {/* description */}
          <p style={{ fontSize: "1rem", color: "var(--muted)", lineHeight: 1.75, maxWidth: "540px", marginBottom: "2rem" }}>
            Seu hub de <strong style={{ color: "rgba(238,238,245,0.75)", fontWeight: 500 }}>meetups, workshops e networking</strong> — tudo gratuito, tudo em SP.
            Para quem está entrando na tech ou levando a carreira pro próximo nível.
          </p>

          {/* stats — cards com moldura, sem emojis */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "0.75rem", maxWidth: "680px", marginBottom: "2.25rem" }}>
            {[
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/>
                  </svg>
                ),
                label: "Eventos curados",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23,4 23,10 17,10"/><polyline points="1,20 1,14 7,14"/>
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                  </svg>
                ),
                label: "Sempre atualizados",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                ),
                label: "100% gratuitos",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                label: "Foco em SP",
              },
            ].map(({ icon, label }) => (
              <div key={label} style={{
                display: "flex", alignItems: "center", gap: "0.6rem",
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "10px", padding: "0.7rem 0.9rem",
              }}>
                <span style={{ color: "var(--accent)", flexShrink: 0 }}>{icon}</span>
                <span style={{ fontSize: "0.78rem", fontWeight: 500, color: "var(--muted)", lineHeight: 1.3 }}>{label}</span>
              </div>
            ))}
          </div>

          <a href="#events" className="btn-primary" style={{ fontSize: "0.9rem", padding: "0.7rem 1.5rem" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Explorar eventos
          </a>
        </div>

        <div style={{ borderBottom: "1px solid var(--border)" }} />

        {/* ── POR QUE AGENDATECH ── */}
        <div id="sobre" style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem" }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "0.75rem" }}>Por que usar</p>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "2.5rem", color: "var(--text)" }}>
            A agenda certa para quem trabalha com tech
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {[
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>,
                title: "Curado com critério",
                desc: "Só eventos relevantes, gratuitos e verificados. Sem spam, sem paywall.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><polyline points="23,4 23,10 17,10"/><polyline points="1,20 1,14 7,14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>,
                title: "Sempre atualizado",
                desc: "A agenda é atualizada frequentemente para você não perder nada importante.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                title: "Networking real",
                desc: "Meetups presenciais em SP para você conhecer pessoas da área de verdade.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>,
                title: "Todos os níveis",
                desc: "Do iniciante ao sênior — eventos para cada momento da sua carreira tech.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "14px", padding: "1.5rem" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px",
                  background: "var(--accent-soft)", color: "var(--accent)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1rem",
                }}>
                  {icon}
                </div>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", marginBottom: "0.4rem" }}>{title}</h3>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderBottom: "1px solid var(--border)" }} />
      </header>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>
    </>
  );
}
