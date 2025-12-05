"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
// Import css for the gallery
import "react-image-gallery/styles/css/image-gallery.css";

// Skills Data
const skills = [
    { name: "Web Design", level: 90 },
    { name: "3D Printing", level: 85 },
    { name: "Creative Art", level: 95 },
    { name: "Entrepreneurship", level: 80 },
];

// Gallery Images (Placeholders)
const images = [
    {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
        original: "https://picsum.photos/id/1016/1000/600/",
        thumbnail: "https://picsum.photos/id/1016/250/150/",
    },
    {
        original: "https://picsum.photos/id/1013/1000/600/",
        thumbnail: "https://picsum.photos/id/1013/250/150/",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24 pb-20">
            {/* Section 1: Who I Am */}
            <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                {/* Left: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
                >
                    <Image
                        src="/secondsec.png" // Reusing existing image as placeholder
                        alt="Who I Am"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Right: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col justify-center"
                >
                    <h2 className="font-heading text-5xl md:text-7xl mb-6">Who I <span className="text-[#F3D576]">Am</span></h2>
                    <div className="font-sans text-gray-700 text-lg leading-relaxed space-y-4">
                        <p>
                            Hi, I&apos;m Tissac! I&apos;m a 10-year-old entrepreneur with a passion for turning imagination into reality.
                            My journey started with a curiosity for how things are made, which led me to the exciting world of 3D printing.
                        </p>
                        <p>
                            Whether it&apos;s a custom toy, a business display, or a unique gift, I put my heart into every project.
                            I&apos;m learning every day—about design, business, and how to make people smile with my creations.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Section 2: My Skills */}
            <section className="max-w-4xl mx-auto px-6 mb-24">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-5xl md:text-6xl">My <span className="text-[#A8C8C6]">Skills</span></h2>
                </div>

                <div className="space-y-8">
                    {skills.map((skill, index) => (
                        <div key={skill.name} className="relative">
                            <div className="flex justify-between mb-2 font-sans font-bold text-lg">
                                <span>{skill.name}</span>
                                <span>{skill.level}%</span>
                            </div>
                            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                                    className="h-full bg-[#F3D576] rounded-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 3: Gallery */}
            <section className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-5xl md:text-6xl">Gallery</h2>
                    <p className="font-sans text-gray-600 mt-4">A glimpse into my creative world</p>
                </div>

                <div className="gallery-wrapper rounded-xl overflow-hidden shadow-lg border-4 border-white">
                    <ImageGallery
                        items={images}
                        showPlayButton={false}
                        showFullscreenButton={true}
                        autoPlay={true}
                        slideInterval={4000}
                        additionalClass="custom-gallery"
                    />
                </div>
            </section>
        </main>
    );
}
