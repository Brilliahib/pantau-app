import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProviderWrapper from "@/SessionProviderWrapper";
import Navbar from "@/components/nav/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pantau App",
  description:
    "Pantau adalah aplikasi monitoring kelembapan serta pertumbuhan tanaman secara real time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderWrapper>
          <Navbar />
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
