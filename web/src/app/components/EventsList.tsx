"use client";

import { useEffect, useMemo, useState } from "react";
import EventCard from "./EventCard";

type EventItem = {
  title: string;
  date: string;
  time?: string;
  location?: string;
  category?: string;
  modality?: string;
  level?: string;
  area?: string;
  summary?: string;
  signup_link?: string;
};

const FILTER_BTN = (active: boolean) => ({
  padding: "0.3rem 0.8rem",
  borderRadius: "999px",
  fontSize: "0.78rem",
  fontWeight: 600,
  cursor: "pointer",
  border: "1px solid",
  transition: "all 0.15s",
  fontFamily: "inherit",
  ...(active
    ? { background: "var(--accent)", borderColor: "var(--accent)", color: "white" }
    : { background: "transparent", borderColor: "var(--border)", color: "var(--muted)" }),
} as React.CSSProperties);

export default function EventsList() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");
  const [modality, setModality] = useState("Todas");
  const [onlyFuture, setOnlyFuture] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/events.json")
      .then(r => r.json())
      .then(d => { setEvents(d || []); setLoading(false); })
      .catch(() => { setEvents([]); setLoading(false); });
  }, []);

  const categories = useMemo(() => {
    const s = new Set<string>();
    events.forEach(e => e.category && s.add(e.category));
    return ["Todas", ...Array.from(s)];
  }, [events]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    const now = new Date();
    return events.filter(e => {
      if (category !== "Todas" && e.category !== category) return false;
      if (modality !== "Todas" && e.modality !== modality) return false;
      if (onlyFuture) {
        const d = new Date(e.date);
        if (!isNaN(d.getTime()) && d < now) return false;
      }
      if (!q) return true;
      return e.title.toLowerCase().includes(q) || (e.summary?.toLowerCase().includes(q));
    });
  }, [events, query, category, modality, onlyFuture]);

  const upcoming = useMemo(() => filtered.filter(e => {
    const d = new Date(e.date + "T23:59:59"); return d >= new Date();
  }).length, [filtered]);

  return (
    <section id="events">
      {/* Section header */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1.75rem", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em", margin: "0 0 0.2rem" }}>
            Próximos eventos
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "0.82rem", margin: 0 }}>
            {loading ? "Carregando…" : `${filtered.length} evento${filtered.length !== 1 ? "s" : ""} encontrado${filtered.length !== 1 ? "s" : ""}`}
            {!loading && upcoming > 0 && <span style={{ marginLeft: "0.75rem", color: "#43e97b", fontWeight: 600 }}>· {upcoming} em breve</span>}
          </p>
        </div>

        {/* quick toggle */}
        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", userSelect: "none", color: onlyFuture ? "var(--text)" : "var(--muted)", fontSize: "0.82rem", fontWeight: 500 }}>
          <div onClick={() => setOnlyFuture(!onlyFuture)} style={{ width: "34px", height: "20px", borderRadius: "999px", background: onlyFuture ? "var(--accent)" : "rgba(255,255,255,0.1)", position: "relative", cursor: "pointer", transition: "background 0.2s", border: "1px solid", borderColor: onlyFuture ? "var(--accent)" : "rgba(255,255,255,0.12)" }}>
            <div style={{ position: "absolute", top: "2px", left: onlyFuture ? "15px" : "2px", width: "14px", height: "14px", borderRadius: "50%", background: "white", transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }} />
          </div>
          Só futuros
        </label>
      </div>

      {/* Filter panel */}
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "14px", padding: "1.25rem", marginBottom: "1.75rem" }}>
        {/* Search */}
        <div style={{ position: "relative", marginBottom: "1rem" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)", color: "var(--muted2)", pointerEvents: "none" }}>
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="search" placeholder="Buscar evento por título ou descrição…" value={query} onChange={e => setQuery(e.target.value)} className="input-field" style={{ paddingLeft: "2.4rem" }} />
        </div>

        {/* Filter rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
          {/* Categories */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--muted2)", minWidth: "70px" }}>Área</span>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {categories.map(c => <button key={c} onClick={() => setCategory(c)} style={FILTER_BTN(category === c)}>{c}</button>)}
            </div>
          </div>

          {/* Modality */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--muted2)", minWidth: "70px" }}>Modalidade</span>
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {["Todas", "Presencial", "Online", "Híbrido"].map(m => <button key={m} onClick={() => setModality(m)} style={FILTER_BTN(modality === m)}>{m}</button>)}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <div style={{ display: "grid", gap: "0.85rem" }}>
          {[1,2,3].map(i => <div key={i} style={{ height: "150px", borderRadius: "14px", background: "var(--surface)", border: "1px solid var(--border)", opacity: 1 - i * 0.25, animation: "fadeUp 0.4s ease forwards" }} />)}
        </div>
      ) : filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "4rem 2rem", color: "var(--muted)" }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🔍</div>
          <p style={{ fontWeight: 700, color: "var(--text)", marginBottom: "0.35rem" }}>Nenhum evento encontrado</p>
          <p style={{ fontSize: "0.82rem" }}>Tente ajustar os filtros ou a busca</p>
        </div>
      ) : (
        <div style={{ display: "grid", gap: "0.85rem" }}>
          {filtered.map((e, i) => <EventCard key={e.title} event={e} index={i} />)}
        </div>
      )}
    </section>
  );
}
