import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets : ["latin"],
  weight : ["400", "600"],
  variable : "--font-poppins"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NovaShop – Your favorite digital store",
  description:
    "Discover unique products, modern tech, and creative designs at NovaShop. Shop smart, shop Nova.",
  icons: {
    icon: "/NovashopSVG.svg",  
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
      > 
        <div className="w-full flex flex-col items-center">
        <Navbar/>
        </div>
        {children}
        <footer className="bg-black flex items-center justify-center">
        <div className="max-w-[1400px]"><Footer/></div>
      </footer>
      </body>
    </html>
  );
}
