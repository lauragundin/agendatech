// web/src/app/components/EventCard.tsx
import React from "react";

export default function EventCard({ event }) {
  return (
    <article className="event-card" role="article" aria-labelledby={`ev-${event.id}-title`}>
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-700/20 text-green-300">
            {event.status || "Em breve"}
          </span>
          <h4 id={`ev-${event.id}-title`} className="text-lg font-semibold">{event.title}</h4>
        </div>
        <div className="text-sm text-gray-400">{event.date}</div>
      </header>

      <p className="mt-3 text-sm text-gray-400">{event.description}</p>

      <div className="mt-4 flex items-center gap-3">
        <a href={event.link} className="btn-primary" aria-label={`Inscrever-se em ${event.title}`}>Inscrever-se</a>
        <a href={`/events/${event.id}`} className="btn-ghost" aria-label={`Ver detalhes de ${event.title}`}>Ver detalhes</a>
      </div>
    </article>
  );
}
