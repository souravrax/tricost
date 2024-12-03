import { ChevronLeftIcon, CircleEllipsisIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function TripTemplate({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="h-[100svh] flex flex-col w-full px-6 py-8 items-center gap-4 max-w-md mx-auto relative">
            <header className="flex items-center gap-4 justify-between w-full">
                <Link href="/" className="flex items-center gap-0.5">
                    <ChevronLeftIcon size={24} />
                    <span className="text-lg">back</span>
                </Link>
                <div className="flex gap-4 items-center justify-center">
                    <SearchIcon size={24} />
                    <CircleEllipsisIcon size={24} />
                </div>
            </header>
            <main className="w-full">{children}</main>
        </div>
    );
}
