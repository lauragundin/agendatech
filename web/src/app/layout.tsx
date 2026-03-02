import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgendaTech — Eventos Tech em SP",
  description: "Conectando você às oportunidades tech — eventos gratuitos de tecnologia, carreira e networking em São Paulo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body style={{ position: "relative", zIndex: 1 }}>{children}</body>
    </html>
  );
}
