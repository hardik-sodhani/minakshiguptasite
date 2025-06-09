import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavWrapper from "@/components/layout/NavWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minakshi Gupta",
  description: "Wedding & Event Consultancy",
  icons: {
    icon: '/icons/mglogocropped.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/mglogocropped.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <NavWrapper />
        {children}
      </body>
    </html>
  );
}
