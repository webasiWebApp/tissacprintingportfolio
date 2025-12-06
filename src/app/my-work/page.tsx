"use client";

import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";

const images = [
    {
        src: "/gallary/p29.webp",
        width: 3024,
        height: 4032,
        caption: "3D Printed Vase",
    },
    {
        src: "/gallary/p5.webp",
        width: 3024,
        height: 4032,
        caption: "3D Printed Vase",
    },
    {
        src: "/gallary/p6.webp",
        width: 4284,
        height: 5712,
        caption: "3D Printed Vase",
    },
    {
        src: "/gallary/p7.webp",
        width: 3024,
        height: 4032,
        caption: "3D Printed Vase",
    },
    {
        src: "/gallary/p12.webp",
        width: 4284,
        height: 5712,
        caption: "3D Printed Vase",
    },{
        src: "/gallary/p9.webp",
        width: 4284,
        height: 5712,
        caption: "3D Printed Vase",
    },{
        src: "/gallary/p10.webp",
        width: 4284,
        height: 5712,
        caption: "3D Printed Vase",
    }
    ,{
        src: "/gallary/p12.webp",
        width: 3024,
        height: 4032,
        caption: "3D Printed Vase",
    },{
        src: "/gallary/p13.webp",
        width: 2318,
        height: 3090,
        caption: "3D Printed Vase",
    }
    ,{
        src: "/gallary/p14.webp",
        width: 3024,
        height: 4032,
        caption: "3D Printed Vase",
    },{
        src: "/gallary/p16.webp",
       width: 4284,
        height: 5712,
        caption: "3D Printed Vase",
    }
    ,{
        src: "/gallary/p20.webp",
       width: 4284,
        height: 5712,
        caption: "3D Printed Vase",
    },
    {
        src: "/gallary/p23.webp",
        width: 3024,
        height: 4032,
        caption: "3D Printed Vase",
    },
    {
        src: "/gallary/p24.webp",
         width: 3024,
        height: 4032,
        caption: "3D Printed Vase",
    },
    {
        src: "/gallary/p25.webp",
         width: 3024,
        height: 4032,
        caption: "3D Printed Vase",
    },
    {
        src: "/gallary/p27.webp",
         width: 3024,
        height: 4032,
        caption: "3D Printed Vase",
    },
    {
        src: "/gallary/p28.webp",
         width: 3024,
        height: 4032,
        caption: "3D Printed Vase",
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
                <div className="w-full bg-black p-12 rounded-lg">
                    <PhotoAlbum layout="rows" photos={images} />
                </div>
            </div>
        </main>
    );
}
