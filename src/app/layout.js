import React from "react";
import "./globals.css";
import { Roboto } from "next/font/google";

const font = Roboto ({
    variable: "--font",
    subsets: ["latin"],
  });
  

export const metadata = {
    title: "Frontend - Maiko Xikixiki",
    icons: {
    icon: "/icons/favicon.ico",
  },
    description: "Projeto pra mostrar tudo que eu sei",

};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={font.variable}>{children}</body>
        </html>
    );
}

