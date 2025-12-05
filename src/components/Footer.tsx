"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#222222] text-white py-16 px-6 border-t border-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand Column */}
                <div className="md:col-span-1 space-y-6">
                    <Link href="/" className="inline-block relative w-24 h-24 bg-white p-2 border border-black transform transition hover:-translate-y-1">
                        <Image
                            src="/logo.png"
                            alt="Tissac Logo"
                            fill
                            className="object-contain p-2"
                        />
                    </Link>
                    <p className="font-sans text-gray-400 text-sm leading-relaxed">
                        Empowering young minds through creativity and entrepreneurship.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#F3D576] hover:text-black transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#F3D576] hover:text-black transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#F3D576] hover:text-black transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="md:col-span-1">
                    <h4 className="font-heading text-xl mb-6 text-[#F3D576]">Explore</h4>
                    <ul className="space-y-4 font-sans text-gray-300">
                        <li>
                            <Link href="/" className="hover:text-[#A8C8C6] transition-colors">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-[#A8C8C6] transition-colors">About</Link>
                        </li>
                        <li>
                            <Link href="/my-work" className="hover:text-[#A8C8C6] transition-colors">My Work</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-[#A8C8C6] transition-colors">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Legal Links */}
                <div className="md:col-span-1">
                    <h4 className="font-heading text-xl mb-6 text-[#F3D576]">Legal</h4>
                    <ul className="space-y-4 font-sans text-gray-300">
                        <li>
                            <Link href="/privacy-policy" className="hover:text-[#A8C8C6] transition-colors">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/terms-conditions" className="hover:text-[#A8C8C6] transition-colors">Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact/Info Column */}
                <div className="md:col-span-1">
                    <h4 className="font-heading text-xl mb-6 text-[#F3D576]">Get in Touch</h4>
                    <p className="font-sans text-gray-400 text-sm mb-4">
                        Have a question or a project idea? We'd love to hear from you.
                    </p>
                    <button className="text-white hover:text-[#A8C8C6] border-b border-[#A8C8C6] pb-1 transition-colors font-semibold">
                        Contact Support
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-sans">
                <p>&copy; {currentYear} Tissac's Terrific Printing. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Design by <a href="https://webasi.co" target="_blank" rel="noopener noreferrer" className="text-[#F3D576] hover:text-[#A8C8C6] transition-colors">WEBASI</a></p>
            </div>
            <a href="http://beautytint.com/"></a>
        </footer>
    );
}
