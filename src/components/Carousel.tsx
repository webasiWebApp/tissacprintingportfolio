"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "./Button";
import Image from "next/image";

// Placeholder images
const ITEMS = [
    {
        id: 0,
        title: "Gifts & Fun Stuff",
        description: "Personalized artwork and printed pieces that make awesome gifts for friends, family and teachers.",
    },
    {
        id: 1,
        title: "Business Projects",
        description: "Logos, display artwork, simple signage and branded pieces to help your business stand out.",
    },
    {
        id: 2,
        title: "Special Projects",
        description: "Need something unique for a presentation/event? We can help you design and print with our professional print partners.",
    },
];

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % ITEMS.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + ITEMS.length) % ITEMS.length);
    };

    const getCardStyle = (index: number) => {
        // Logic to ensure activeIndex represents the Center card (Position 1)
        // 0 = Left, 1 = Center, 2 = Right
        const position = (index - activeIndex + 1 + ITEMS.length) % ITEMS.length;

        // Common transition
        const transition = "all 0.36s ease-in-out";

        if (position === 0) {
            // Left card
            return {
                transform: 'scale(0.75) translateX(-80%)',
                zIndex: 10,
                opacity: 1,
                transition
            };
        } else if (position === 1) {
            // Center card
            return {
                transform: 'scale(1) translateX(0)',
                zIndex: 30,
                opacity: 1,
                transition
            };
        } else {
            // Right card
            return {
                transform: 'scale(0.75) translateX(80%)',
                zIndex: 10,
                opacity: 1,
                transition
            };
        }
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto py-12 px-4 flex flex-col items-center">
            {/* Container need height for Absolute items */}
            <div className="relative w-full h-[600px] flex justify-center items-center overflow-visible">

                {/* Navigation Arrows */}
                <div className="absolute top-1/2 left-4 md:left-20 z-40 -translate-y-1/2">
                    <button onClick={handlePrev} className="bg-[#F3D576] p-3 rounded-full border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-transform active:scale-90">
                        <ArrowLeft size={24} color="black" />
                    </button>
                </div>
                <div className="absolute top-1/2 right-4 md:right-20 z-40 -translate-y-1/2">
                    <button onClick={handleNext} className="bg-[#F3D576] p-3 rounded-full border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-transform active:scale-90">
                        <ArrowRight size={24} color="black" />
                    </button>
                </div>

                {ITEMS.map((item, index) => {
                    const position = (index - activeIndex + 1 + ITEMS.length) % ITEMS.length;
                    const isCenter = position === 1;

                    return (
                        <div
                            key={item.id}
                            className={`absolute w-[300px] md:w-[450px] min-h-[450px] md:min-h-[500px] 
                         flex flex-col items-center text-center p-6 rounded-xl border-2 border-black
                         shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                         ${isCenter ? "bg-[#A8C8C6]" : "bg-[#F3D576]"}`}
                            style={getCardStyle(index)}
                        >
                            {/* Image Area */}
                            <div className="w-full h-48 bg-white/40 rounded-lg mb-6 flex items-center justify-center text-5xl">
                                {index === 0 ? "🎁" : index === 1 ? "💼" : "✨"}
                            </div>

                            <h3 className="font-heading text-3xl mb-4 text-black">{item.title}</h3>
                            <p className="font-sans text-sm leading-relaxed mb-auto px-4 text-black">
                                {item.description}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8">
                <Button text="See My Works" color="#F3D576" className="px-8 py-3 text-xl" />
            </div>
        </div>
    );
}
