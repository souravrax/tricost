"use client";
import { motion } from "motion/react";
import { CogIcon, TicketsPlaneIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Jersey_10 } from "next/font/google";
import { usePathname } from "next/navigation";

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
    const MotionLink = motion.create(Link);
    const activeTab = usePathname();
    // const [activeTab, setActiveTab] = useState("/");

    return (
        <div className="h-[100svh] flex flex-col w-full px-6 py-8 items-center gap-4 max-w-md mx-auto">
            <header
                className={cn(
                    "text-left w-full text-5xl font-extrabold",
                    logoFont.className
                )}
            >
                TriCost
            </header>
            <main className="w-full h-full flex-1">{children}</main>
            <div className="rounded-full border w-fit">
                <motion.div className="flex gap-4 p-2 items-center justify-between">
                    {tabs.map((tab) => (
                        <MotionLink
                            href={tab.href}
                            key={`${tab.name}-${tab.href}-tab-home-page`}
                            className={cn(
                                "rounded-full py-2 px-8 flex items-center flex-col gap-1 relative text-primary"
                            )}
                            style={{
                                scale: activeTab === tab.href ? 1 : 0.8,
                                opacity: activeTab === tab.href ? 1 : 0.6,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                            // onClick={() => setActiveTab(tab.href)}
                        >
                            {activeTab === tab.href && (
                                <motion.div
                                    className="absolute left-0 h-full w-full right-0 top-0 bottom-0 border rounded-full"
                                    layoutId="home-page-tab"
                                />
                            )}
                            <tab.icon size={32} />
                            {/* <span className="text-sm">{tab.name}</span> */}
                        </MotionLink>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
