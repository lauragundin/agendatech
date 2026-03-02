// web/src/app/components/EventsList.tsx
import React from "react";
import EventCard from "./EventCard";

type Event = {
  id: string;
  title: string;
  date: string; // ISO string
  description: string;
  link: string;
  status?: string;
};

// exemplo com date em ISO — evita "Invalid Date"
const sampleEvents: Event[] = [
  {
    id: "1",
    title: "Meetup Dev SP",
    date: "2026-03-20T19:00:00", // ISO (recomendo manter assim quando vier do backend)
    description: "Meetup gratuito para devs iniciantes",
    link: "#",
    status: "Em breve",
  },
];

export default function EventsList() {
  return (
    <div className="mt-4">
      <div className="mb-6 max-w-lg">
        <input
          className="input-field"
          placeholder="Buscar por título ou resumo..."
          aria-label="Buscar eventos"
        />
      </div>

      <div className="space-y-6">
        {sampleEvents.map((ev) => (
          <EventCard key={ev.id} event={ev} />
        ))}
      </div>
    </div>
  );
}
