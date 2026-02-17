import type { Metadata } from "next";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";





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
    <html lang="en" suppressHydrationWarning className="font-Boska ">
      <body className="font-Boska ">
      
 <Header /> 
        {children}
            <Toaster />
        <Footer />
      
      </body>
    </html>
  );
}
