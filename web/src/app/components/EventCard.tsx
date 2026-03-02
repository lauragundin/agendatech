// web/src/app/components/EventCard.tsx
import React from "react";

type Event = {
  id: string;
  title: string;
  date: string; // ISO string (ex: "2026-03-20T19:00:00")
  description: string;
  link: string;
  status?: string;
};

export default function EventCard({ event }: { event: Event }) {
  // tenta formatar a data; se falhar, exibe a string original
  let formattedDate = event.date;
  try {
    const d = new Date(event.date);
    if (!Number.isNaN(d.getTime())) {
      formattedDate = d.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  } catch {
    // mantém event.date como fallback
  }

  return (
    <article
      className="event-card"
      role="article"
      aria-labelledby={`ev-${event.id}-title`}
    >
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-700/20 text-green-300">
            {event.status ?? "Em breve"}
          </span>
          <h4 id={`ev-${event.id}-title`} className="text-lg font-semibold">
            {event.title}
          </h4>
        </div>

        <div className="text-sm text-gray-400">{formattedDate}</div>
      </header>

      <p className="mt-3 text-sm text-gray-400">{event.description}</p>

      <div className="mt-4 flex items-center gap-3">
        <a
          href={event.link}
          className="btn-primary"
          aria-label={`Inscrever-se em ${event.title}`}
        >
          Inscrever-se
        </a>
        <a
          href={`/events/${event.id}`}
          className="btn-ghost"
          aria-label={`Ver detalhes de ${event.title}`}
        >
          Ver detalhes
        </a>
      </div>
    </article>
  );
}
