// src/app/events/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { slugify } from "../../lib/slugify";
import events from "../../data/events.json";

type Event = {
  title: string;
  date?: string;
  time?: string;
  location?: string;
  summary?: string;
  signup_link?: string;
  source?: string;
  category?: string;
};

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long", year: "numeric" });
  } catch { return dateStr; }
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const evs = events as Event[];
  const event = evs.find((e) => slugify(e.title || "") === slug);
  if (!event) notFound();

  return (
    <main style={{ maxWidth: "680px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Back link */}
      <Link
        href="/"
        style={{
          display: "inline-flex", alignItems: "center", gap: "0.4rem",
          color: "var(--muted)", textDecoration: "none", fontSize: "0.875rem",
          fontWeight: 500, marginBottom: "2rem",
          transition: "color 0.2s",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15,18 9,12 15,6"/>
        </svg>
        Voltar
      </Link>

      {/* Category badge */}
      {event!.category && (
        <span style={{
          display: "inline-block",
          background: "rgba(108, 99, 255, 0.12)", color: "#a78bfa",
          padding: "0.2rem 0.7rem", borderRadius: "999px",
          fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em",
          textTransform: "uppercase", marginBottom: "1rem",
        }}>
          {event!.category}
        </span>
      )}

      {/* Title */}
      <h1 style={{
        fontFamily: "var(--font-display, 'Syne', sans-serif)",
        fontSize: "clamp(1.6rem, 4vw, 2.25rem)",
        fontWeight: 800,
        color: "var(--text)",
        lineHeight: 1.15,
        letterSpacing: "-0.02em",
        margin: "0 0 1.5rem",
      }}>
        {event!.title}
      </h1>

      {/* Info card */}
      <div style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "1.25rem 1.5rem",
        marginBottom: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}>
        {event!.date && (
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <div style={{
              width: "32px", height: "32px", borderRadius: "8px",
              background: "rgba(108, 99, 255, 0.1)", display: "flex",
              alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.1rem" }}>Data</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--text)", textTransform: "capitalize" }}>
                {formatDate(event!.date)}{event!.time ? ` • ${event!.time}` : ""}
              </div>
            </div>
          </div>
        )}
        {event!.location && (
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <div style={{
              width: "32px", height: "32px", borderRadius: "8px",
              background: "rgba(67, 233, 123, 0.1)", display: "flex",
              alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "0.72rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.1rem" }}>Local</div>
              <div style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--text)" }}>{event!.location}</div>
            </div>
          </div>
        )}
      </div>

      {/* Summary */}
      {event!.summary && (
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{
            fontFamily: "var(--font-display, 'Syne', sans-serif)",
            fontSize: "1rem", fontWeight: 700,
            color: "var(--muted)", textTransform: "uppercase",
            letterSpacing: "0.06em", marginBottom: "0.75rem",
          }}>
            Sobre o evento
          </h2>
          <p style={{
            color: "rgba(240, 240, 248, 0.7)", lineHeight: 1.75,
            fontSize: "0.95rem", margin: 0,
          }}>
            {event!.summary}
          </p>
        </div>
      )}

      {/* Divider */}
      <div style={{ height: "1px", background: "var(--border)", marginBottom: "1.5rem" }} />

      {/* CTA */}
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
        {event!.signup_link && (
          <a
            href={event!.signup_link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Inscrever-se agora
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        )}
        {event!.source && (
          <span style={{ color: "var(--muted)", fontSize: "0.8rem" }}>
            Fonte: {event!.source}
          </span>
        )}
      </div>
    </main>
  );
}
