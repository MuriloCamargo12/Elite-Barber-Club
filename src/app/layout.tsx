import type { Metadata } from "next";
import "./globals.css";
import { AosInit } from "@/components/aos-init";
import { inter } from "@/lib/fonts"; 

export const metadata: Metadata = {
  title: "Elite Barber Club",
  description: "Barbearia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full scroll-smooth`}
    >
      <body className={`min-h-full flex flex-col ${inter.className}`}>
        <AosInit/>
        {children}
      </body>
    </html>
  );
}
