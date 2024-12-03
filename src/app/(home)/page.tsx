"use client";
import PageTemplate from "@/components/home/page-template";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const trips = [
    {
        name: "Trip 1",
        date: "2023-01-01",
        price: 100,
        currency: "USD",
        image: "https://picsum.photos/id/100/200/300",
    },
    {
        name: "Trip 2",
        date: "2023-01-02",
        price: 200,
        currency: "USD",
        image: "https://picsum.photos/id/101/200/300",
    },
    {
        name: "Trip 3",
        date: "2023-01-03",
        price: 300,
        currency: "USD",
        image: "https://picsum.photos/id/102/200/300",
    },
    {
        name: "Trip 4",
        date: "2023-01-04",
        price: 250,
        currency: "USD",
        image: "https://picsum.photos/id/103/200/300",
    },
    {
        name: "Trip 5",
        date: "2023-01-05",
        price: 175,
        currency: "USD",
        image: "https://picsum.photos/id/104/200/300",
    },
    {
        name: "Trip 6",
        date: "2023-01-06",
        price: 400,
        currency: "USD",
        image: "https://picsum.photos/id/105/200/300",
    },
    {
        name: "Trip 7",
        date: "2023-01-07",
        price: 225,
        currency: "USD",
        image: "https://picsum.photos/id/106/200/300",
    },
    {
        name: "Trip 8",
        date: "2023-01-08",
        price: 350,
        currency: "USD",
        image: "https://picsum.photos/id/107/200/300",
    },
    {
        name: "Trip 9",
        date: "2023-01-09",
        price: 275,
        currency: "USD",
        image: "https://picsum.photos/id/108/200/300",
    },
    {
        name: "Trip 10",
        date: "2023-01-10",
        price: 450,
        currency: "USD",
        image: "https://picsum.photos/id/109/200/300",
    },
    {
        name: "Trip 11",
        date: "2023-01-11",
        price: 325,
        currency: "USD",
        image: "https://picsum.photos/id/110/200/300",
    },
    {
        name: "Trip 12",
        date: "2023-01-12",
        price: 500,
        currency: "USD",
        image: "https://picsum.photos/id/111/200/300",
    },
    {
        name: "Trip 13",
        date: "2023-01-13",
        price: 375,
        currency: "USD",
        image: "https://picsum.photos/id/112/200/300",
    },
    {
        name: "Trip 14",
        date: "2023-01-14",
        price: 425,
        currency: "USD",
        image: "https://picsum.photos/id/113/200/300",
    },
    {
        name: "Trip 15",
        date: "2023-01-15",
        price: 550,
        currency: "USD",
        image: "https://picsum.photos/id/114/200/300",
    },
    {
        name: "Trip 16",
        date: "2023-01-16",
        price: 475,
        currency: "USD",
        image: "https://picsum.photos/id/115/200/300",
    },
    {
        name: "Trip 17",
        date: "2023-01-17",
        price: 600,
        currency: "USD",
        image: "https://picsum.photos/id/116/200/300",
    },
    {
        name: "Trip 18",
        date: "2023-01-18",
        price: 525,
        currency: "USD",
        image: "https://picsum.photos/id/117/200/300",
    },
    {
        name: "Trip 19",
        date: "2023-01-19",
        price: 650,
        currency: "USD",
        image: "https://picsum.photos/id/118/200/300",
    },
    {
        name: "Trip 20",
        date: "2023-01-20",
        price: 575,
        currency: "USD",
        image: "https://picsum.photos/id/119/200/300",
    },
    {
        name: "Trip 21",
        date: "2023-01-21",
        price: 700,
        currency: "USD",
        image: "https://picsum.photos/id/120/200/300",
    },
    {
        name: "Trip 22",
        date: "2023-01-22",
        price: 625,
        currency: "USD",
        image: "https://picsum.photos/id/121/200/300",
    },
];

const MotionLink = motion.create(Link);

export default function Trips() {
    return (
        <PageTemplate title="Trips">
            <motion.ul className="flex flex-col w-full gap-4">
                {trips.map((trip) => (
                    <MotionLink
                        key={trip.name}
                        className="w-full"
                        href="/trip/1"
                    >
                        <motion.li className="flex items-center gap-5 p-2 border rounded-xl w-full">
                            <div className="h-12 w-12 relative rounded-lg overflow-hidden">
                                <Image src={trip.image} alt={trip.name} fill />
                            </div>
                            <div className="flex items-center justify-between flex-1">
                                <div className="flex flex-col">
                                    <h2 className="font-bold text-xl">
                                        {trip.name}
                                    </h2>
                                    <p className="text-secondary-foreground text-xs opacity-70">
                                        {trip.date}
                                    </p>
                                </div>
                                <p>
                                    {trip.price} {trip.currency}
                                </p>
                            </div>
                        </motion.li>
                    </MotionLink>
                ))}
            </motion.ul>
        </PageTemplate>
    );
}
