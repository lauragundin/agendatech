"use client";

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-slate-900 to-black border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/logo.png"
            alt="AgendaTech"
            className="h-32 md:h-44 lg:h-56 w-auto max-w-[520px] rounded-xl"
          />

          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              AgendaTech
            </h1>

            <p className="mt-3 text-slate-300 max-w-xl">
              Conectando você às oportunidades tech — eventos gratuitos de
              tecnologia, carreira e networking (SP).
            </p>

            <div className="mt-6 flex gap-3 justify-center md:justify-start">
              <a
                href="#events"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded"
              >
                Ver eventos
              </a>

              <a
                href="https://github.com/lauragundin/agendatech"
                target="_blank"
                rel="noreferrer"
                className="border border-slate-700 text-slate-200 px-4 py-2 rounded hover:bg-slate-800"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
