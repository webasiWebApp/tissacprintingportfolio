"use client";

import { Gallery } from "react-grid-gallery";

const images = [
    {
        src: "https://picsum.photos/id/1018/1000/600/",
        width: 320,
        height: 174,
        caption: "3D Printed Vase",
    },
    {
        src: "https://picsum.photos/id/1015/1000/600/",
        width: 320,
        height: 174,
        caption: "Custom Keychains",
    },
    {
        src: "https://picsum.photos/id/1019/1000/600/",
        width: 320,
        height: 174,
        caption: "Business Display",
    },
    {
        src: "https://picsum.photos/id/1016/1000/600/",
        width: 320,
        height: 174,
        caption: "Artistic Sculpture",
    },
    {
        src: "https://picsum.photos/id/1013/1000/600/",
        width: 320,
        height: 174,
        caption: "Prototype Model",
    },
    {
        src: "https://picsum.photos/id/1012/1000/600/",
        width: 320,
        height: 174,
        caption: "School Project",
    },
    {
        src: "https://picsum.photos/id/1011/1000/600/",
        width: 320,
        height: 174,
        caption: "Gift Item",
    },
    {
        src: "https://picsum.photos/id/1010/1000/600/",
        width: 320,
        height: 174,
        caption: "Custom Toy",
    },
];

export default function MyWorkPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="font-heading text-5xl md:text-7xl mb-6">
                        My <span className="text-[#F3D576]">Works</span>
                    </h1>
                    <p className="font-sans text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
                        Explore a collection of my 3D printed projects, from custom designs for businesses to unique gifts and school projects.
                    </p>
                </div>

                {/* Gallery Section */}
                <div className="w-full">
                    <Gallery images={images} enableImageSelection={false} />
                </div>
            </div>
        </main>
    );
}
