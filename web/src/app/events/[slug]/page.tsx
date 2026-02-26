// src/app/events/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import slugify from "../../lib/slugify";
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

export default function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const evs = events as Event[];
  const event = evs.find((e) => slugify(e.title || "") === slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/" className="text-indigo-300">
        ← Voltar
      </Link>

      <h1 className="text-2xl font-bold mt-4 text-white">{event!.title}</h1>
      <p className="text-slate-400 mt-2">
        {event!.date} {event!.time ? ` • ${event!.time}` : ""}
      </p>
      {event!.location && (
        <p className="text-slate-300 mt-2">{event!.location}</p>
      )}

      {event!.summary && <p className="text-slate-300 mt-4">{event!.summary}</p>}

      <div className="mt-6">
        {event!.signup_link && (
          
            href={event!.signup_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mr-4 underline text-indigo-300"
          >
            Ver página oficial
          </a>
        )}
        {event!.source && <span className="text-slate-400">Fonte: {event!.source}</span>}
      </div>
    </main>
  );
}