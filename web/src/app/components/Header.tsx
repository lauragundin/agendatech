// web/src/app/components/Header.tsx
import React from "react";

export default function Header() {
  return (
    <header className="px-6 py-6 bg-transparent">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/icons/calendar.svg" alt="Ícone agenda" className="w-8 h-8" />
          <div>
            <div className="text-sm text-green-300">SÃO PAULO • GRATUITO</div>
            <div className="text-sm font-semibold text-gray-300">AgendaTech</div>
          </div>
        </div>

        <nav>
          <a href="#events" className="btn-ghost" aria-label="Ir para eventos">Ver eventos</a>
        </nav>
      </div>
    </header>
  );
}
