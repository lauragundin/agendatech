"use client";

import { useEffect, useMemo, useState } from "react";
import EventCard from "./EventCard";

type EventItem = {
  title: string;
  date: string;
  time?: string;
  location?: string;
  category?: string;
  summary?: string;
  signup_link?: string;
};

export default function EventsList() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");
  const [onlyFuture, setOnlyFuture] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => { setEvents(data || []); setLoading(false); })
      .catch(() => { setEvents([]); setLoading(false); });
  }, []);

  const categories = useMemo(() => {
    const set = new Set<string>();
    events.forEach((e) => e.category && set.add(e.category));
    return ["Todas", ...Array.from(set)];
  }, [events]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    const now = new Date();
    return events.filter((e) => {
      if (category !== "Todas" && e.category !== category) return false;
      if (onlyFuture) {
        const d = new Date(e.date);
        if (!isNaN(d.getTime()) && d < now) return false;
      }
      if (!q) return true;
      return (
        e.title.toLowerCase().includes(q) ||
        (e.summary && e.summary.toLowerCase().includes(q))
      );
    });
  }, [events, query, category, onlyFuture]);

  return (
    <section id="events">
      {/* Section header */}
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{
          fontFamily: "var(--font-display, 'Syne', sans-serif)",
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "var(--text)",
          letterSpacing: "-0.01em",
          margin: "0 0 0.25rem",
        }}>
          Próximos eventos
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "0.875rem", margin: 0 }}>
          {loading ? "Carregando…" : `${filtered.length} evento${filtered.length !== 1 ? "s" : ""} encontrado${filtered.length !== 1 ? "s" : ""}`}
        </p>
      </div>

      {/* Filters */}
      <div style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "1.25rem",
        marginBottom: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}>
        {/* Search */}
        <div style={{ position: "relative" }}>
          <svg
            width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            style={{ position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)", color: "var(--muted)", pointerEvents: "none" }}
          >
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="search"
            placeholder="Buscar por título ou resumo…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input-field"
            style={{ paddingLeft: "2.5rem" }}
          />
        </div>

        {/* Category + toggle row */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", flex: 1 }}>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                style={{
                  padding: "0.35rem 0.85rem",
                  borderRadius: "999px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "1px solid",
                  transition: "all 0.15s",
                  fontFamily: "inherit",
                  ...(category === c
                    ? { background: "var(--accent)", borderColor: "var(--accent)", color: "white" }
                    : { background: "transparent", borderColor: "var(--border)", color: "var(--muted)" }),
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <label style={{
            display: "flex", alignItems: "center", gap: "0.5rem",
            cursor: "pointer", userSelect: "none",
            color: onlyFuture ? "var(--text)" : "var(--muted)",
            fontSize: "0.82rem", fontWeight: 500,
            whiteSpace: "nowrap",
          }}>
            <div
              onClick={() => setOnlyFuture(!onlyFuture)}
              style={{
                width: "34px", height: "20px", borderRadius: "999px",
                background: onlyFuture ? "var(--accent)" : "var(--border)",
                position: "relative", cursor: "pointer",
                transition: "background 0.2s",
                border: "1px solid",
                borderColor: onlyFuture ? "var(--accent)" : "rgba(255,255,255,0.1)",
              }}
            >
              <div style={{
                position: "absolute",
                top: "2px",
                left: onlyFuture ? "16px" : "2px",
                width: "14px", height: "14px",
                borderRadius: "50%",
                background: "white",
                transition: "left 0.2s",
                boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
              }} />
            </div>
            Só futuros
          </label>
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <div style={{ display: "grid", gap: "1rem" }}>
          {[1,2,3].map(i => (
            <div key={i} style={{
              height: "160px", borderRadius: "16px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              animation: "pulse 1.5s ease-in-out infinite",
            }} />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div style={{
          textAlign: "center", padding: "4rem 2rem",
          color: "var(--muted)",
        }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🔍</div>
          <p style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.5rem" }}>
            Nenhum evento encontrado
          </p>
          <p style={{ fontSize: "0.875rem" }}>
            Tente ajustar os filtros ou a busca
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gap: "1rem" }}>
          {filtered.map((e, i) => (
            <EventCard key={e.title} event={e} index={i} />
          ))}
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
