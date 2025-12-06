import type { Metadata } from "next";
import Image from "next/image";
import { Instrument_Serif, Raleway } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tissac Terrif Printing",
  description: "Tissac Terrif Printing is a 10-year-old entrepreneur with a passion for turning imagination into reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${raleway.variable} antialiased relative`}
      >
        <div className="absolute inset-0 -z-10 w-full h-full">
          <Image
            src="/bg.webp"
            alt="Background"
            fill
            quality={100}
            priority
            className="object-cover"
          />
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
