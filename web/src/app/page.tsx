// web/src/app/page.tsx
import React from "react";
import Header from "./components/Header";
import EventsList from "./components/EventsList";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#07080f] text-white">
      <Header />

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold tracking-tight">
            AgendaTech
          </h1>

          <p className="mt-4 text-xl text-gray-300">
            Encontre eventos gratuitos de tecnologia em São Paulo e acelere sua
            carreira com networking, aprendizado e oportunidades reais.
          </p>

          <p className="mt-4 text-gray-400 max-w-xl">
            Curadoria de meetups, workshops e comunidades tech para quem quer
            entrar ou crescer na área.
          </p>
        </div>

        {/* prova social */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-purple-400">+50</h3>
            <p className="text-gray-400">Eventos mapeados</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-purple-400">100% gratuitos</h3>
            <p className="text-gray-400">Foco em acessibilidade</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-purple-400">Curadoria manual</h3>
            <p className="text-gray-400">Sem spam, só qualidade</p>
          </div>
        </section>

        {/* lista de eventos (componente existente) */}
        <div className="mt-12">
          <EventsList />
        </div>
      </section>
    </main>
  );
}
