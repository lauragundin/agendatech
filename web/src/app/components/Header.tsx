"use client";

export default function Header() {
  return (
    <header style={{ position: "relative", overflow: "hidden" }}>
      {/* Decorative glowing orbs */}
      <div style={{
        position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)",
        width: "600px", height: "300px",
        background: "radial-gradient(ellipse, rgba(108, 99, 255, 0.2) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: 0, right: "-100px",
        width: "400px", height: "200px",
        background: "radial-gradient(ellipse, rgba(67, 233, 123, 0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-start gap-6">
          <img src="/logo.png" alt="Ícone agenda" className="w-12 h-12" />
          <div>
            <div className="text-sm text-green-300">SÃO PAULO • GRATUITO</div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              AgendaTech
            </h1>
            <div className="mt-2 text-lg text-gray-300 max-w-2xl">
              Eventos tech gratuitos em SP
            </div>

            <p className="mt-6 text-sm text-gray-400 max-w-xl">
              Seu hub de meetups, workshops e networking — tudo gratuito, tudo em
              São Paulo. Para quem está entrando na tech ou levando a carreira para
              o próximo nível.
            </p>

            <div className="mt-6">
              <a href="#events" className="btn-primary">Ver eventos</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
