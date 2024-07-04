import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProviderWrapper from "@/SessionProviderWrapper";
import ClientLayout from "@/components/section/ClientLayout";

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
        <main>
          <SessionProviderWrapper>
            <ClientLayout>{children}</ClientLayout>
          </SessionProviderWrapper>
        </main>
      </body>
    </html>
  );
}
