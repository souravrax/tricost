"use client";
import { motion } from "motion/react";
import { CogIcon, TicketsPlaneIcon, UserIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Jersey_10 } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";

const tabs = [
    {
        name: "Profile",
        href: "/profile",
        icon: UserIcon,
    },
    {
        name: "Trips",
        href: "/",
        icon: TicketsPlaneIcon,
    },
    {
        name: "Settings",
        href: "/settings",
        icon: CogIcon,
    },
];

const logoFont = Jersey_10({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

export default function HomeLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const activeTab = usePathname();
    const { push } = useRouter();

    return (
        <div className="h-[100svh] flex flex-col w-full px-6 py-8 items-center gap-4 max-w-md mx-auto relative">
            <header
                className={cn(
                    "text-left w-full text-xl font-extrabold",
                    logoFont.className
                )}
            >
                tricost
            </header>
            {children}
            <div className="rounded-full border border-border/30 absolute bottom-4 backdrop-blur-xl">
                <motion.div className="flex gap-4 p-2 items-center justify-between">
                    {tabs.map((tab) => (
                        <motion.div
                            key={`${tab.name}-${tab.href}-tab-home-page`}
                            className={cn(
                                "flex flex-col items-center justify-center gap-1 relative"
                            )}
                            style={{
                                opacity: activeTab === tab.href ? 1 : 0.6,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                        >
                            <motion.button
                                onClick={() => push(tab.href)}
                                className={cn(
                                    "rounded-full py-2 px-8 flex items-center flex-col relative text-primary"
                                )}
                            >
                                {activeTab === tab.href && (
                                    <motion.div
                                        className="absolute left-0 h-full w-full right-0 top-0 bottom-0 border rounded-full"
                                        layoutId="home-page-tab"
                                    />
                                )}
                                <tab.icon size={32} />
                            </motion.button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
