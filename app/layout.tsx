import "@/styles/globals.css";
import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Address Geocoder",
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
        <link rel="icon" href="/grid-globe.png" />
        {/* Other meta tags, stylesheets, etc. */}
      </Head>

      <body className={inter.className}>
        {" "}
        <div className="bg-lime-100">{children}</div>
      </body>
    </html>
  );
}
