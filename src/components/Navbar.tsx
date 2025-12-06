"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Me", href: "/about" },
        { name: "Contact Me", href: "/contact" },
        { name: "My Work", href: "/my-work" },
    ];

    return (
        <nav className="w-full bg-white border-b border-teal-500 py-4 px-6 md:px-12 flex items-center justify-between relative z-50">
            {/* Left: Logo */}
            <div className="flex-shrink-0  p-1">
                {/* Placeholder for the logo image based on reference */}
                <div className="w-[80px] h-[80px] relative  flex items-center justify-center overflow-hidden bg-white">
                    <Image src="/logo.png" alt="Tissac's Terrific Printing" fill className="object-cover" />
                </div>
            </div>

            {/* Center: Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-black font-heading text-xl hover:opacity-70 transition-opacity"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Right: Desktop Button & Mobile Hamburger */}
            <div className="flex items-center gap-4">
                {/* Desktop CTA Button */}
                <Link href="/contact">
                    <Button
                        text="Get a Quote"
                        className="hidden md:block text-lg px-6 py-2"
                    />
                </Link>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden p-2 text-black hover:bg-gray-100 rounded-md"
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* Mobile Off-Canvas Menu */}
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-lg ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-8">
                        {/* Mobile Logo in Drawer */}
                        <div className="border-2 border-[#4A90E2] p-1 scale-75 origin-left">
                            <div className="w-[80px] h-[80px] border border-black flex items-center justify-center bg-white relative">
                                <Image src="/logo.png" alt="Tissac's Terrific Printing" fill className="object-cover" />
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-black hover:bg-gray-100 rounded-md"
                        >
                            <X size={28} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-black font-heading text-2xl"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/contact">
                            <Button
                                text="Get a Quote"
                                className="text-xl px-6 py-3 w-full mt-4"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
