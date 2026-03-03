import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://agendatech-six.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "AgendaTech — Eventos Tech gratuitos em São Paulo",
  description: "Meetups, workshops e networking para quem está construindo uma carreira na tech. Eventos gratuitos em São Paulo, sempre atualizados.",
  keywords: ["eventos tech", "meetup sp", "tecnologia são paulo", "eventos gratuitos", "networking tech", "carreira tech"],
  authors: [{ name: "AgendaTech" }],

  // OG — WhatsApp, LinkedIn, Facebook
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "AgendaTech",
    title: "AgendaTech — Eventos Tech gratuitos em São Paulo",
    description: "Meetups, workshops e networking para quem está construindo uma carreira na tech.",
    images: [
      {
        url: "/og-image.png",
        width: 1536,
        height: 1024,
        alt: "AgendaTech — Conectando você às oportunidades tech",
      },
    ],
    locale: "pt_BR",
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "AgendaTech — Eventos Tech gratuitos em SP",
    description: "Meetups, workshops e networking para quem está construindo uma carreira na tech.",
    images: ["/og-image.png"],
  },

  // extras
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body style={{ position: "relative", zIndex: 1 }}>{children}</body>
    </html>
  );
}
