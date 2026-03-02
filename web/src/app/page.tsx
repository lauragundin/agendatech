// src/app/page.tsx
import Header from "./components/Header";
import EventsList from "./components/EventsList";

export default function Home() {
  return (
    <>
      <Header />
      <main id="events" className="max-w-6xl mx-auto px-6 py-12">
        <EventsList />
      </main>
    </>
  );
}
