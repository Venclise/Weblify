import type { Metadata } from "next";
import { Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Weblify",
  description: "Have an idea?let's discuss,how we can turn you dream into a fully functional designed site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.className} ${geistMono.variable} antialiased`} >
        <Providers>
<Header />
        {children}
            <Toaster />
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
