import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Header from "./layout/header";
import Footer from "./layout/footer";

import "./globalicon.css";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portifólio | Bruno Noatto Iserhardt",
  description:
    "Explore o portifólio e descubra quem é e quais são as habilidade do desenvolvedor Bruno Noatto Iserhardt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`h-screen px-4 md:px-10 ${roboto.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
