import Header from "./components/Header";
import EventsList from "./components/EventsList";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />

      {/* EVENTOS — aparece primeiro na rolagem, antes de "Sobre" */}
      <main id="events" style={{ maxWidth: "1200px", margin: "0 auto", padding: "3.5rem 2rem 5rem" }}>
        <EventsList />
      </main>

      {/* SOBRE — seção "Por que usar", aparece depois dos eventos */}
      <section id="sobre" style={{ borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4.5rem 2rem" }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: "0.75rem" }}>
            Por que usar
          </p>
          <h2 style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "2.5rem", color: "var(--text)" }}>
            A agenda certa para quem trabalha com tech
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {[
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>,
                title: "Curado com critério",
                desc: "Só eventos relevantes, gratuitos e verificados. Sem spam, sem paywall.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><polyline points="23,4 23,10 17,10"/><polyline points="1,20 1,14 7,14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>,
                title: "Sempre atualizado",
                desc: "A agenda é atualizada frequentemente para você não perder nada importante.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                title: "Networking real",
                desc: "Meetups presenciais em SP para você conhecer pessoas da área de verdade.",
              },
              {
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>,
                title: "Todos os níveis",
                desc: "Do iniciante ao sênior — eventos para cada momento da sua carreira tech.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "14px", padding: "1.5rem", transition: "border-color 0.2s, transform 0.2s" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "var(--accent-soft)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  {icon}
                </div>
                <h3 style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", marginBottom: "0.4rem" }}>{title}</h3>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER — sem ícone/link do GitHub */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "1.75rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <img src="/logo.png" alt="" style={{ height: "22px", objectFit: "contain" }} />
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "var(--muted)" }}>AgendaTech</span>
          </div>
          <p style={{ fontSize: "0.78rem", color: "var(--muted2)" }}>
            Feito para a comunidade tech de SP
          </p>
        </div>
      </footer>
    </div>
  );
}
