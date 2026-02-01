import Link from "next/link";

export default function EventsIndex() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-white">Eventos</h1>
      <p className="text-slate-400 mt-2">
        Lista de eventos disponíveis.
      </p>

      <div className="mt-6">
        <Link href="/" className="text-indigo-400">
          ← Voltar para o início
        </Link>
      </div>
    </main>
  );
}
