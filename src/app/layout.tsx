import type { Metadata } from "next";
import {  Rubik} from "next/font/google";
import "./globals.css";
import Header from "~/components/header";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ['latin'],
  display: 'swap',
  fallback:["serif"],
  preload:false,
  weight: ['400', '500'],
});



export const metadata: Metadata = {
  title: "Kaleem Ullah",
  description: "A portfolio website to demo the skills and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={rubik.className}
      >
        <Header />
       <main className="min-h-screen pt-10 bg-white">{children}</main> 
      </body>
    </html>
  );
}


