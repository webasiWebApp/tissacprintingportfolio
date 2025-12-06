"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
    original: string;
    thumbnail: string;
    description?: string;
}

interface GalleryProps {
    items: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    return (
        <div className="w-full flex flex-col gap-4">
            {/* Main Image View */}
            <div className="relative w-full aspect-video bg-gray-100 rounded-xl overflow-hidden group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={items[currentIndex].original}
                            alt={`Gallery Image ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-transform hover:scale-110 z-10"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-6 h-6 text-black" />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-transform hover:scale-110 z-10"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-6 h-6 text-black" />
                </button>
            </div>

            {/* Thumbnails Strip */}
            <div className="w-full overflow-x-auto pb-2 flex gap-2 snap-x px-1">
                {items.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all snap-start ${index === currentIndex
                                ? "border-[#F3D576] shadow-md scale-105"
                                : "border-transparent opacity-70 hover:opacity-100"
                            }`}
                    >
                        <Image
                            src={item.thumbnail}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
