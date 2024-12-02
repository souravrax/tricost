import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
import ServiceWorker from "@/providers/ServiceWorker";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

const mainFont = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`antialiased ${mainFont.className} overflow-hidden`}
            >
                <ThemeProvider>{children}</ThemeProvider>
            </body>
            <ServiceWorker />
        </html>
    );
}
