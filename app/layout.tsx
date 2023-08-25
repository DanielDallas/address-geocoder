import "@/styles/globals.css";
import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Address Geocoder Application",
  description: "Built by Daniel Dallas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/globe.ico" />
        {/* Other meta tags, stylesheets, etc. */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
