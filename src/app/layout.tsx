import type { Metadata } from "next";
import { Outfit, Archivo_Black } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://parigill.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "pari gill | portfolio, product designer",
    template: "%s",
  },
  description:
    "Portfolio of Pari Gill, a product designer working at the intersection of strategy, research, and craft.",
  openGraph: {
    type: "website",
    siteName: "Pari Gill — Product Designer",
    title: "Pari Gill — Product Designer",
    description:
      "Portfolio of Pari Gill, a product designer working at the intersection of strategy, research, and craft.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pari Gill — Product Designer",
    description:
      "Portfolio of Pari Gill, a product designer working at the intersection of strategy, research, and craft.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${archivoBlack.variable} h-full`}
    >
      <body className="min-h-full bg-cream text-espresso">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-cream focus:text-espresso focus:px-4 focus:py-2 focus:border focus:border-espresso"
        >
          Skip to main content
        </a>
        <LenisProvider>
          <Navigation />
          <div className="flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
