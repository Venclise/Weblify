import type { Metadata } from "next";

import "./globals.css";


import { Toaster } from "sonner";


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export const metadata: Metadata = {
   title: `Web Development Services | Weblify`,
    description: `Professional web development services. Build fast, modern, and SEO-optimized websites for your business.`,
      icons: {
    icon: "/favicon-bg.png"
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning >
         <head>
         <meta
          name="google-site-verification"
          content="EYKCfCVVjO8KyLlbY2BFXSL4qsuOWcYC-dd2eqoftHI"
        />
      
      </head>
      <body  className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      
 <Header /> 
        {children}
            <Toaster />
        <Footer />
      
      </body>
    </html>
  );
}
