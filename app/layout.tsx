import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Address Geocoder",
  description: "Built by Daniel Dallas",
  themeColor: "rgb(163 230 53);",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <div className="bg-lime-100">{children}</div>
      </body>
    </html>
  );
}
