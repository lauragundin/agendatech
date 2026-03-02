// web/src/app/components/Header.tsx
"use client";

import React from "react";

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      {/* fundos decorativos (mantidos se quiser) */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(108,99,255,0.18),_transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        {/* HERO: usar grid para evitar que imagem "quebre" o layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Ícone / imagem no canto esquerdo, com largura máxima fixa */}
          <div className="col-span-3 flex justify-start lg:justify-start">
            <img
              src="/logo.png"
              alt="Ícone agenda"
              className="hero-logo object-contain w-36 h-36 lg:w-20 lg:h-20"
            />
          </div>

          {/* Conteúdo textual: ocupa o resto das colunas */}
          <div className="col-span-9">
            <div className="text-sm text-green-300">SÃO PAULO • GRATUITO</div>

            <h1 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              AgendaTech
            </h1>

            <div className="mt-2 text-lg text-gray-300 max-w-3xl">
              Eventos tech gratuitos em SP
            </div>

            <p className="mt-6 text-sm text-gray-400 max-w-2xl">
              Seu hub de meetups, workshops e networking — tudo gratuito, tudo em
              São Paulo. Para quem está entrando na tech ou levando a carreira
              para o próximo nível.
            </p>

            <div className="mt-6">
              <a href="#events" className="btn-primary" aria-label="Ver eventos">
                Ver eventos
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
