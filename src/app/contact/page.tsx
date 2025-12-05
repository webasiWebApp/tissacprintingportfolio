"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/Button';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error); // Log error for debugging purposes
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="font-heading text-5xl md:text-7xl mb-6">
                        Get in <span className="text-[#F3D576]">Touch</span>
                    </h1>
                    <p className="font-sans text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I&apos;d love to hear from you.
                    </p>
                </div>

                {/* Form Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="font-sans font-bold text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F3D576] transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="font-sans font-bold text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F3D576] transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="font-sans font-bold text-gray-700">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F3D576] transition-all"
                                placeholder="What is this about?"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="font-sans font-bold text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F3D576] transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                disabled={status === "loading" || status === "success"}
                                type="submit"
                                className={`
                        w-full md:w-auto px-8 py-3 text-xl font-heading rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all
                        ${status === "loading" ? "bg-gray-300 cursor-not-allowed" : "bg-[#A8C8C6] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"}
                         ${status === "success" ? "bg-green-400 cursor-default" : ""}
                    `}
                            >
                                {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                            </button>
                        </div>

                        {status === "error" && (
                            <p className="text-red-500 font-bold mt-2">Something went wrong. Please try again.</p>
                        )}
                        {status === "success" && (
                            <p className="text-green-600 font-bold mt-2">Thanks! I&apos;ll get back to you soon.</p>
                        )}
                    </form>
                </motion.div>
            </div>
        </main>
    );
}
