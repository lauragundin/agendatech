"use client";

import EventCard from "./EventCard";
import data from "../data/events.json";

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
  } catch { return true; }
}

export default function EventsList() {
  const events = data.events || [];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Próximos eventos</h2>
      <p className="text-sm text-gray-400 mb-6">{events.length} evento encontrado</p>

      <div className="mb-6">
        <input className="input-field" placeholder="Buscar por título ou resumo..." />
      </div>

      <div className="space-y-6">
        {events.map((ev) => (
          <EventCard
            key={ev.id}
            event={{
              id: ev.id,
              title: ev.title,
              date: formatDate(ev.date),
              description: ev.description,
              link: ev.link,
              status: isUpcoming(ev.date) ? "Em breve" : "Passado",
            }}
          />
        ))}
      </div>
    </section>
  );
}
