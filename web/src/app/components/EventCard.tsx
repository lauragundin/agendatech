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

export default function EventCard({ event }: { event: EventItem }) {
  const slug = slugify(event.title);

  return (
    <article className="border border-slate-700 rounded-lg p-6 bg-slate-900 max-w-3xl">
      <h3 className="text-lg font-bold text-white">{event.title}</h3>

      <p className="text-slate-400 text-sm mt-2">
        {event.date} {event.time && `• ${event.time}`}
      </p>

      {event.location && (
        <p className="text-slate-300 mt-2">{event.location}</p>
      )}

      {event.summary && (
        <p className="text-slate-300 mt-3">{event.summary}</p>
      )}

      <div className="mt-4 flex gap-4">
        {event.signup_link && (
          <a
            href={event.signup_link}
            target="_blank"
            rel="noreferrer"
            className="text-indigo-400 hover:underline"
          >
            Inscrição
          </a>
        )}

        <Link
          href={`/events/${slug}`}
          className="text-indigo-400 hover:underline"
        >
          Ver detalhes →
        </Link>
      </div>
    </article>
  );
}
