import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const Nunito = Nunito_Sans({
  weight: "500",
  subsets: ["latin"],
  style: ['normal']
});

export const metadata: Metadata = {
  title: "Jonathan site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}
      >
        <nav className="flex justify-between">
        <Link
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            href="/"
          >
            Home
          </Link>
          <Link
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            href="/calendar"
          >
            Calendar
          </Link>
        </nav>
        <div className="mt-2">{children}</div>
      </body>
    </html>
  );
}
