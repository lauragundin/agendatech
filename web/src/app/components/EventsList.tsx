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

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data || []))
      .catch(() => setEvents([]));
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
    <section>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="search"
          placeholder="Buscar por título ou resumo..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-slate-900 border border-slate-800 px-4 py-3 rounded text-slate-200"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-slate-900 border border-slate-800 px-3 py-2 rounded text-slate-200"
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <label className="flex items-center gap-2 text-slate-300 text-sm">
          <input
            type="checkbox"
            checked={onlyFuture}
            onChange={(e) => setOnlyFuture(e.target.checked)}
          />
          Só futuros
        </label>
      </div>

      <div className="grid gap-6">
        {filtered.length === 0 ? (
          <p className="text-slate-400">Nenhum evento encontrado.</p>
        ) : (
          filtered.map((e) => <EventCard key={e.title} event={e} />)
        )}
      </div>
    </section>
  );
}
