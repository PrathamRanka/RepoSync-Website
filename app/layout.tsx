import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/PrathamRanka/RepoSync-SDK"),
  title: { default: "RepoSync | GitHub repositories, understood", template: "%s | RepoSync" },
  description: "Turn GitHub repositories into structured, portfolio-ready project data with a TypeScript SDK and CLI.",
  openGraph: { title: "RepoSync | GitHub repositories, understood", description: "Discover, extract, customize, and sync project metadata.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}><body>{children}</body></html>;
}
