import type { Metadata } from "next";

import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  applicationName: "Portifólio de Bruno Noatto Iserhardt",
  creator: "Bruno Noatto Iserhardt",
  category: "Portifólio",
  keywords: [
    "Bruno Noatto",
    "Bruno Iserhardt",
    "Portifólio",
    "Desenvolvedor Frontend",
    "Desenvolvedor Front-End",
    "Desenvolvedor web",
    "HTML",
    "HTML5",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "ReactJS",
    "Next.js",
    "Nextjs",
    "Jest",
    "Playwright",
    "Redux",
    "Zustand",
    "React Router",
    "React Query",
    "Storybook",
    "Tailwind",
  ],
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`h-dvh px-4 md:px-10 ${roboto.className}`}>
        <Header />
        <main className="w-full space-y-10 m-auto px-4 py-12">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
