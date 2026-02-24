import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";





export const metadata: Metadata = {
   title: `Web Development Services | Weblify`,
    description: `Professional web development services. Build fast, modern, and SEO-optimized websites for your business.`,
      icons: {
    icon: "/favicon.ico"
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="font-Boska ">
         <head>
         <meta
          name="google-site-verification"
          content="EYKCfCVVjO8KyLlbY2BFXSL4qsuOWcYC-dd2eqoftHI"
        />
      
      </head>
      <body className="font-Boska ">
      
 <Header /> 
        {children}
            <Toaster />
        <Footer />
      
      </body>
    </html>
  );
}
