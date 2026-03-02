"use client";

import Link from "next/link";
import { slugify } from "../lib/slugify";

type EventItem = {
  title: string;
  date: string;
  time?: string;
  location?: string;
  category?: string;
  modality?: string;
  summary?: string;
  signup_link?: string;
};

const CAT_COLORS: Record<string, { bg: string; color: string }> = {
  TI:        { bg: "rgba(108,99,255,0.12)",  color: "#a78bfa" },
  Carreira:  { bg: "rgba(251,113,133,0.12)", color: "#fb7185" },
  Design:    { bg: "rgba(251,191,36,0.12)",  color: "#fbbf24" },
  Data:      { bg: "rgba(74,222,128,0.12)",  color: "#4ade80" },
  Startup:   { bg: "rgba(56,189,248,0.12)",  color: "#38bdf8" },
  default:   { bg: "rgba(255,255,255,0.06)", color: "#7a7f9a" },
};

const MODALITY_ICON: Record<string, string> = {
  Presencial: "📍", Online: "💻", Híbrido: "🔀",
};

function formatDate(d: string) {
  try {
    return new Date(d + "T00:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
  } catch { return d; }
}

function isUpcoming(d: string) {
  try { return new Date(d + "T23:59:59") >= new Date(); } catch { return false; }
}

export default function EventCard({ event, index = 0 }: { event: EventItem; index?: number }) {
  const slug = slugify(event.title);
  const cat = CAT_COLORS[event.category ?? ""] ?? CAT_COLORS.default;
  const upcoming = isUpcoming(event.date);

  return (
    <article className="event-card animate-fade-up" style={{ animationDelay: `${index * 55}ms`, animationFillMode: "backwards" }}>
      <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>

        {/* Date block */}
        <div style={{ flexShrink: 0, width: "52px", textAlign: "center", background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: "10px", padding: "0.5rem 0.25rem" }}>
          <div style={{ fontSize: "0.62rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted2)" }}>
            {(() => { try { return new Date(event.date + "T00:00:00").toLocaleDateString("pt-BR", { month: "short" }); } catch { return ""; } })()}
          </div>
          <div style={{ fontSize: "1.4rem", fontFamily: "Syne, sans-serif", fontWeight: 800, color: upcoming ? "var(--text)" : "var(--muted)", lineHeight: 1 }}>
            {(() => { try { return new Date(event.date + "T00:00:00").getDate(); } catch { return "--"; } })()}
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* badges */}
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
            {event.category && (
              <span style={{ background: cat.bg, color: cat.color, padding: "0.15rem 0.55rem", borderRadius: "999px", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                {event.category}
              </span>
            )}
            {event.modality && (
              <span style={{ background: "rgba(255,255,255,0.05)", color: "var(--muted)", padding: "0.15rem 0.55rem", borderRadius: "999px", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.04em" }}>
                {MODALITY_ICON[event.modality]} {event.modality}
              </span>
            )}
            {upcoming && (
              <span style={{ background: "rgba(67,233,123,0.1)", color: "#43e97b", padding: "0.15rem 0.55rem", borderRadius: "999px", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "0.2rem" }}>
                <span style={{ width: "4px", height: "4px", background: "#43e97b", borderRadius: "50%", display: "inline-block" }} />Em breve
              </span>
            )}
          </div>

          {/* title */}
          <h3 style={{ fontFamily: "Syne, sans-serif", fontSize: "1rem", fontWeight: 700, color: "var(--text)", margin: "0 0 0.4rem", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
            {event.title}
          </h3>

          {/* meta */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", marginBottom: event.summary ? "0.6rem" : "0" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "var(--muted)", fontSize: "0.78rem" }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
              </svg>
              {formatDate(event.date)}{event.time && ` · ${event.time}`}
            </span>
            {event.location && (
              <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "var(--muted)", fontSize: "0.78rem" }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {event.location}
              </span>
            )}
          </div>

          {/* summary */}
          {event.summary && (
            <p style={{ color: "rgba(238,238,245,0.48)", fontSize: "0.82rem", lineHeight: 1.6, margin: "0 0 0.75rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
              {event.summary}
            </p>
          )}

          {/* divider + actions */}
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "0.75rem", display: "flex", gap: "0.85rem", alignItems: "center" }}>
            {event.signup_link && (
              <a href={event.signup_link} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: "0.38rem 0.9rem", fontSize: "0.78rem" }}>
                Inscrever-se
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            )}
            <Link href={`/events/${slug}`} style={{ color: "var(--muted)", fontSize: "0.78rem", fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.2rem", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
              Ver detalhes →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
