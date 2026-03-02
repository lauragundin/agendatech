"use client";

import Link from "next/link";
import { slugify } from "../lib/slugify";

type EventItem = {
  title: string;
  date: string;
  time?: string;
  location?: string;
  category?: string;
  summary?: string;
  signup_link?: string;
};

const CATEGORY_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  TI:         { bg: "rgba(108, 99, 255, 0.12)", text: "#a78bfa", dot: "#7c6fe0" },
  Carreira:   { bg: "rgba(255, 101, 132, 0.12)", text: "#fb7185", dot: "#e05585" },
  Design:     { bg: "rgba(234, 179, 8, 0.12)", text: "#fbbf24", dot: "#d97706" },
  Data:       { bg: "rgba(67, 233, 123, 0.12)", text: "#4ade80", dot: "#22c55e" },
  Startup:    { bg: "rgba(14, 165, 233, 0.12)", text: "#38bdf8", dot: "#0ea5e9" },
  default:    { bg: "rgba(255,255,255,0.05)", text: "var(--muted)", dot: "#666" },
};

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
  } catch {
    return dateStr;
  }
}

function isUpcoming(dateStr: string) {
  try {
    const d = new Date(dateStr + "T23:59:59");
    return d >= new Date();
  } catch { return false; }
}

export default function EventCard({ event, index = 0 }: { event: EventItem; index?: number }) {
  const slug = slugify(event.title);
  const cat = CATEGORY_COLORS[event.category || ""] || CATEGORY_COLORS.default;
  const upcoming = isUpcoming(event.date);

  return (
    <article
      className="event-card animate-fade-up"
      style={{ animationDelay: `${index * 60}ms`, animationFillMode: "backwards" }}
    >
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "0.75rem" }}>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {event.category && (
            <span style={{
              background: cat.bg, color: cat.text,
              padding: "0.2rem 0.6rem", borderRadius: "999px",
              fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
            }}>
              {event.category}
            </span>
          )}
          {upcoming && (
            <span style={{
              background: "rgba(67, 233, 123, 0.1)", color: "#4ade80",
              padding: "0.2rem 0.6rem", borderRadius: "999px",
              fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase",
              display: "flex", alignItems: "center", gap: "0.25rem",
            }}>
              <span style={{ width: "5px", height: "5px", background: "#4ade80", borderRadius: "50%", display: "inline-block" }} />
              Em breve
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "var(--font-display, 'Syne', sans-serif)",
        fontSize: "1.05rem",
        fontWeight: 700,
        color: "var(--text)",
        margin: "0 0 0.5rem",
        lineHeight: 1.3,
        letterSpacing: "-0.01em",
      }}>
        {event.title}
      </h3>

      {/* Meta info */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "0.75rem" }}>
        <span style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "var(--muted)", fontSize: "0.82rem" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          {formatDate(event.date)}{event.time && ` • ${event.time}`}
        </span>
        {event.location && (
          <span style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "var(--muted)", fontSize: "0.82rem" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {event.location}
          </span>
        )}
      </div>

      {/* Summary */}
      {event.summary && (
        <p style={{
          color: "rgba(240, 240, 248, 0.55)",
          fontSize: "0.875rem",
          lineHeight: 1.6,
          margin: "0 0 1rem",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>
          {event.summary}
        </p>
      )}

      {/* Divider */}
      <div style={{ height: "1px", background: "var(--border)", margin: "0.75rem 0" }} />

      {/* Actions */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {event.signup_link && (
          <a
            href={event.signup_link}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ padding: "0.45rem 1rem", fontSize: "0.82rem" }}
          >
            Inscrever-se
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        )}
        <Link
          href={`/events/${slug}`}
          style={{
            color: "var(--muted)", fontSize: "0.82rem", fontWeight: 500,
            textDecoration: "none", transition: "color 0.2s",
            display: "inline-flex", alignItems: "center", gap: "0.25rem",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          Ver detalhes →
        </Link>
      </div>
    </article>
  );
}
