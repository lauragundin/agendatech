"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import slugify from "../../lib/slugify";

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

export default function EventPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data: Event[]) => {
        const found = data.find(
          (ev) => slugify(ev.title) === slug
        );
        setEvent(found || null);
      });
  }, [slug]);

  if (!event) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/" className="text-indigo-400">← Voltar</Link>
        <p className="text-slate-400 mt-6">Evento não encontrado.</p>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/" className="text-indigo-400">← Voltar</Link>

      <h1 className="text-3xl font-bold mt-4 text-white">
        {event.title}
      </h1>

      <p className="text-slate-400 mt-2">
        {event.date} {event.time && `• ${event.time}`}
      </p>

      {event.location && (
        <p className="text-slate-300 mt-2">{event.location}</p>
      )}

      {event.summary && (
        <p className="text-slate-300 mt-4">{event.summary}</p>
      )}

      {event.signup_link && (
        <div className="mt-6">
          <a
            href={event.signup_link}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded"
          >
            Ver página oficial
          </a>
        </div>
      )}
    </main>
  );
}
