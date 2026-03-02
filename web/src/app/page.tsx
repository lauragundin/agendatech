// web/src/app/page.tsx
import React from "react";
import Header from "./components/Header";
import EventsList from "./components/EventsList";

export default function Page() {
  return (
    <main className="min-h-screen text-white">
      <Header />

      {/* HERO */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            AgendaTech
          </h1>

          {/* slogan abaixo do título */}
          <p className="mt-2 text-lg md:text-xl text-gray-300 max-w-2xl">
            Conectando você a eventos tech
          </p>

          <p className="mt-6 text-sm text-gray-400 max-w-xl">
            Seu hub de meetups, workshops e networking — tudo gratuito, tudo em
            São Paulo. Para quem está entrando na tech ou levando a carreira para
            o próximo nível.
          </p>

          <div className="mt-6">
            <a
              href="#events"
              className="btn-primary"
              aria-label="Ver eventos"
            >
              Ver eventos
            </a>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL + LISTA */}
      <section id="events" className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-purple-400">+50</h3>
            <p className="text-sm text-gray-400">Eventos mapeados</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-purple-400">100% gratuitos</h3>
            <p className="text-sm text-gray-400">Foco em acessibilidade</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-purple-400">Curadoria manual</h3>
            <p className="text-sm text-gray-400">Sem spam, só qualidade</p>
          </div>
        </div>

        <div className="mt-10">
          <EventsList />
        </div>
      </section>
    </main>
  );
}
