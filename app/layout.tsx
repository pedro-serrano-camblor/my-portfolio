import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Portfolio Web",
    template: "%s | Portfolio Web",
  },
  description: "Portfolio personal desarrollado con Next.js 14, TypeScript y Tailwind CSS",
  keywords: ["portfolio", "desarrollador", "web", "next.js", "typescript", "react"],
  authors: [{ name: "Tu Nombre" }],
  creator: "Tu Nombre",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://tu-dominio.com",
    siteName: "Portfolio Web",
    title: "Portfolio Web",
    description: "Portfolio personal desarrollado con Next.js 14",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Web",
    description: "Portfolio personal desarrollado con Next.js 14",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

