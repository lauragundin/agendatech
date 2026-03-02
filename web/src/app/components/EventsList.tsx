// web/src/app/components/EventsList.tsx
import React from "react";
import EventCard from "./EventCard";

const sampleEvents = [
  {
    id: "1",
    title: "Meetup Dev SP",
    date: "20 de mar. de 2026 • 19:00",
    description: "Meetup gratuito para devs iniciantes",
    link: "#",
    status: "Em breve",
  },
];

export default function EventsList() {
  return (
    <div className="mt-4">
      <div className="mb-6 max-w-lg">
        <input className="input-field" placeholder="Buscar por título ou resumo..." />
      </div>

      <div className="space-y-6">
        {sampleEvents.map((ev) => (
          <EventCard key={ev.id} event={ev} />
        ))}
      </div>
    </div>
  );
}
