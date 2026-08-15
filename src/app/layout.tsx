import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CFPC Dream Real-ICT | Centre de Formation Professionnelle Numérique à Yaoundé",
  description:
    "Votre tremplin vers le succès professionnel numérique à Yaoundé, Alpha Manguier. Formations diplômantes DQP/CQP, continues et à la carte. Insertion rapide et compétences concrètes.",
  keywords: [
    "CFPC Dream Real-ICT",
    "Formation professionnelle Yaoundé",
    "DQP Cameroun",
    "CQP Cameroun",
    "Formation informatique Yaoundé",
    "Bureautique",
    "Développement Web",
    "Comptabilité numérique",
    "Graphisme",
    "Centre de formation Alpha Manguier",
  ],
  authors: [{ name: "CFPC Dream Real-ICT" }],
  openGraph: {
    title: "CFPC Dream Real-ICT | Tremplin Numérique à Yaoundé",
    description:
      "Formations professionnelles reconnues par l'État. Des savoir-faire pratiques et adaptés au marché du travail.",
    type: "website",
    locale: "fr_FR",
    siteName: "CFPC Dream Real-ICT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${plusJakartaSans.variable} ${inter.variable} dark`}>
      <body className="bg-[#0f1417] text-[#dee3e7] font-sans min-h-screen flex flex-col antialiased selection:bg-[#56b94c] selection:text-[#002201]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
