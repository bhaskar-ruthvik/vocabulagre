import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "VocabulaGRE",
  description: "A GREat Utility to practice words!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
         <html lang="en" className="dark">
      <body className={rubik.className}>{children}</body>
    </html>
    </ClerkProvider>
 
  );
}
