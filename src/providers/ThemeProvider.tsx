"use client";
import React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <NextThemeProvider
            enableColorScheme
            attribute="class"
            enableSystem
            defaultTheme="system"
        >
            {children}
        </NextThemeProvider>
    );
}
