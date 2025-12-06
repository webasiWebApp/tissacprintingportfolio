"use client";

import Image from "next/image";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen  relative overflow-hidden flex flex-col items-center justify-center text-center px-4 pt-20 pb-20">



      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto mt-12">
        {/* Logo Image */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6">
          <Image
            src="/logo.gif"
            alt="Tissac's Terrific Printing"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Headline */}
        <h1 className="font-heading text-4xl md:text-6xl font-black text-black mb-4 tracking-tight">
          Think It. Print It. Wow
        </h1>

        {/* Subtext */}
        <p className="font-sans text-gray-800 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed font-medium">
          Custom designs & printed products made by 10-year-old entrepreneur
          Tissac Anderson — for real businesses, families & creative projects.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
          <Link href="/contact" className="w-full md:w-auto">
            <Button
              text="Get in Touch"
              color="#F3D576" // Yellow
              className="px-8 py-3 text-xl w-full min-w-[180px]"
            />
          </Link>
          <Link href="/my-work" className="w-full md:w-auto">
            <Button
              text="See My Works"
              color="#A8C8C6" // Matching the background teal roughly, or slightly lighter
              className="px-8 py-3 text-xl w-full min-w-[180px]"
            />
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section className="w-full max-w-6xl mx-auto mt-24 py-6 md:py-20 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
        {/* Left: Image */}
        <div className="relative w-full aspect-[4/5] md:aspect-square">
          <Image
            src="/secondsec.png"
            alt="Tissac - The Kid Behind the Prints"
            fill
            className="object-contain md:object-cover rounded-2xl"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-6">
          <div className="space-y-4 font-sans text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              Hi! I&apos;m <span className="font-bold text-black">Tissac</span>, I&apos;m 10 years old, and I run my own 3D printing business. I love design, color, and helping people turn ideas into real things you can hold. From business displays to custom gifts, I work with professional print partners and designers to make your ideas WOW-worthy.
            </p>
            <p>
              From my first early-morning Zoom with a designer in India at 6:45 a.m. before school, to presenting options to a real General Manager, I&apos;m learning how to be an entrepreneur one project at a time.
            </p>
          </div>

          <h2 className="font-heading text-5xl md:text-7xl leading-tight text-black mt-2">
            The Kid <br />
            Behind the <span className="text-[#F3D576]">Prints</span>
          </h2>

          <div className="mt-4">
            <Link href="/about">
              <Button
                text="More About Tissac"
                color="#F3D576"
                className="px-8 py-3 text-lg font-medium"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="w-full relative mt-32 pb-24">
        {/* Background Curve (Teal inverted or similar) */}
        <div className="absolute top-0 right-0 w-full h-[120%] z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] right-[-10%] w-[80%] h-[100%]  z-0"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center px-4">
          <h2 className="font-heading text-5xl md:text-7xl mb-4">
            What We Can <span className="text-[#F3D576]">Help</span> You Print
          </h2>
          <p className="font-sans text-gray-700 max-w-2xl mx-auto ">
            Custom 3D-Printed Creations for Businesses, Gifts, and Special Projects — Designed with Precision, Creativity, and Kid-Entrepreneur Passion
          </p>

          <Carousel />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Video Placeholder */}
          {/* Left: Video Player */}
          <div className="relative w-full aspect-video bg-black/10 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
            <video
              src="/my.mp4"
              className="w-full h-full object-cover"
              controls
              playsInline
            >
              Your browser does not support the video tag.
            </video>


            <p className="text-[10px] text-gray-600 uppercase ">
              Parents are involved in every step to help with payments, timelines and communication.
            </p>


          </div>

          {/* Right: Content */}
          <div className="text-left">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-12 text-black leading-tight">
              How Working With Tissac&apos;s <br />
              Terrific <span className="text-[#F3D576]">Printing</span> Works
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F3D576] rounded-full flex items-center justify-center font-heading text-2xl border border-black">1</div>
                <div>
                  <h3 className="font-heading text-2xl mb-2">Share Your Idea</h3>
                  <p className="font-sans text-gray-800 text-sm">Tell us what you need printed, how many, and your deadline.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F3D576] rounded-full flex items-center justify-center font-heading text-2xl border border-black">2</div>
                <div>
                  <h3 className="font-heading text-2xl mb-2">Design & Samples</h3>
                  <p className="font-sans text-gray-800 text-sm">We create artwork and get professional sample prints made so you can see and feel the options.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F3D576] rounded-full flex items-center justify-center font-heading text-2xl border border-black">3</div>
                <div>
                  <h3 className="font-heading text-2xl mb-2">Final Order & Delivery</h3>
                  <p className="font-sans text-gray-800 text-sm">You pick your favorite, we confirm pricing and timing, and then the full order is printed and delivered.</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Link href="/contact">
                <Button text="Contact me Now" color="#F3D576" className="px-8 py-3 text-lg" />
              </Link>
            </div>
          </div>
        </div>
        {/* Caption below video roughly positioned or part of grid? Design image showed it below video. */}

      </section>

      {/* Why People Love Working With Tissac Section */}
      <section className="w-full py-24 px-6 relative  overflow-hidden">


        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-left order-2 md:order-1">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-12 text-black leading-tight">
              Why People Love Working <br />
              With <span className="text-[#F3D576]">Tissac</span>
            </h2>

            <div className="space-y-8">
              {/* Item 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F3D576] rounded-full flex items-center justify-center font-heading text-2xl border border-black shadow-sm">1</div>
                <div>
                  <h3 className="font-heading text-2xl mb-2">Fresh ideas</h3>
                  <p className="font-sans text-gray-700 text-sm leading-relaxed">
                    Children have a natural sense of curiosity and creativity that adults often overlook. When a project is powered by a young mind, you get truly original ideas.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F3D576] rounded-full flex items-center justify-center font-heading text-2xl border border-black shadow-sm">2</div>
                <div>
                  <h3 className="font-heading text-2xl mb-2">Real follow-through</h3>
                  <p className="font-sans text-gray-700 text-sm leading-relaxed">
                    While the creativity comes from the child, the structure and reliability come from the parent. Every project is monitored, guided, and reviewed to ensure the work meets a high standard.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F3D576] rounded-full flex items-center justify-center font-heading text-2xl border border-black shadow-sm">3</div>
                <div>
                  <h3 className="font-heading text-2xl mb-2">Teachable moments</h3>
                  <p className="font-sans text-gray-700 text-sm leading-relaxed">
                    Each order becomes a learning experience. Kids develop valuable skills—responsibility, discipline, time management, client communication, and problem-solving.
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F3D576] rounded-full flex items-center justify-center font-heading text-2xl border border-black shadow-sm">4</div>
                <div>
                  <h3 className="font-heading text-2xl mb-2">Feel-good factor</h3>
                  <p className="font-sans text-gray-700 text-sm leading-relaxed">
                    When you order from a kid-led startup, you&apos;re getting more than just a product—you&apos;re making a positive impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image/Video */}
          <div className="relative w-full aspect-square md:aspect-[4/5] bg-black/5 rounded-2xl overflow-hidden shadow-2xl border-[6px] border-[#A8C8C6] group order-1 md:order-2">
            <Image
              src="/whytissac.png"
              alt="Printer"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-4  flex justify-center items-center">
        <div className="w-full max-w-5xl bg-white rounded-[3rem] border-2 border-black p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 relative shadow-2xl overflow-hidden">
          {/* Left: Logo */}
          <div className="relative w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72 border border-black p-2">
              <div className="w-full h-full relative border border-black flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Tissac's Terrific Printing"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 text-center font-serif">
            <h2 className="text-4xl md:text-6xl font-heading mb-6 leading-tight">
              Ready to Think, Print, <br />
              <span className="italic">Wow?</span>
            </h2>

            <p className="font-sans text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
              Tell us a little about your project and we&apos;ll get back to you with ideas, pricing and timing. All projects are managed with parent supervision for safety, payment and scheduling.
            </p>

            <Link href="/contact">
              <Button
                text="Contact me Now"
                color="#C6E2DE"
                className="px-8 py-3 text-xl border-[1.5px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              />
            </Link>
          </div>
        </div>
      </section>
    </main >
  );
}
