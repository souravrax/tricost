import React from "react";

export default function PageTemplate({
    children,
    title,
}: Readonly<{
    children: React.ReactNode;
    title: string;
}>) {
    return (
        <main className="w-full h-full flex flex-col gap-4">
            <h1 className="text-5xl font-semibold">{title}</h1>
            <div className="w-full py-4 flex-1 overflow-scroll">
                {children}
                <div className="h-[200px]"></div>
            </div>
        </main>
    );
}
