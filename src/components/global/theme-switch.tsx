"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useRef } from "react";

export default function ThemeSwitch(
    props: React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
) {
    const { theme, setTheme } = useTheme();
    const mounted = useRef(false);
    useEffect(() => {
        mounted.current = true;
    }, []);
    if (!mounted.current) {
        return null;
    }

    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else if (theme === "system") {
            setTheme("light");
        } else {
            setTheme("light");
        }
    };

    return <button {...props} onClick={() => changeTheme()} />;
}
