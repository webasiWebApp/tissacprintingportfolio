"use client";

import { motion } from 'framer-motion';
import Script from 'next/script';

export default function ContactPage() {
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
                    className="bg-white p-4 md:p-8 rounded-[2rem] shadow-xl border border-gray-100"
                >
                    <iframe
                        id="JotFormIFrame-253394917425061"
                        title="Contact Us – 3D Printing Inquiry"
                        onLoad={() => window.parent.scrollTo(0, 0)}
                        allowTransparency={true}
                        allow="geolocation; microphone; camera; fullscreen; payment"
                        src="https://form.jotform.com/253394917425061"
                        style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
                        scrolling="no"
                    >
                    </iframe>
                    <Script
                        src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'
                        onLoad={() => {
                            // @ts-ignore
                            window.jotformEmbedHandler("iframe[id='JotFormIFrame-253394917425061']", "https://form.jotform.com/");
                        }}
                    />
                </motion.div>
            </div>
        </main>
    );
}
