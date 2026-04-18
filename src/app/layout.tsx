import type { Metadata } from "next";
import { Outfit, Archivo_Black } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/layout/LenisProvider";

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

export const metadata: Metadata = {
  title: "Pari Gill — Product Designer",
  description: "Portfolio of Pari Gill, a product designer.",
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
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
