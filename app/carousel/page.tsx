"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Adjust path if needed
import Link from "next/link";

export default function CarouselPage() {
  const slides = [
    { id: 1, content: "Slide 1", style: "New York" },
    { id: 2, content: "Slide 2", style: "London" },
    { id: 3, content: "Slide 3", style: "Tokyo" },
  ];

  return (
    <div className="container mx-auto p-4 bg-gray-950 text-white min-h-screen grid grid-cols-[3fr_1fr] gap-5">
 <div>
 
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold">Carousel</h1>
          <p className="text-gray-400">A carousel with motion and swipe built using Embla.</p>
        </div>
        <div className="flex space-x-2">
          <Link href="/docs" className="text-gray-400 hover:text-white">Docs</Link>
          <Link href="/api-reference" className="text-gray-400 hover:text-white">API Reference</Link>
        </div>
      </div>

      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="bg-black rounded-lg h-[400px] w-full flex items-center justify-center text-white border border-gray-700">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold">{slide.content}</h2>
                    <p className="text-gray-400">Style: {slide.style}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center" />
          <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center" />
        </Carousel>

        <div className="mt-4 flex space-x-4">
          <select
            className="bg-gray-800 text-white p-2 rounded border border-gray-700 w-[180px] appearance-none"
            defaultValue="new-york"
          >
            <option value="new-york">Style: New York</option>
            <option value="london">Style: London</option>
            <option value="tokyo">Style: Tokyo</option>
          </select>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded flex items-center">
            Open in UI
            <span className="ml-2">↗</span>
          </button>
        </div>
      </div>
 
      </div>
      <div>

    
      <div className="mt-6">
        <div></div> {/* Placeholder for symmetry */}
        <div className="mt-6 text-gray-400">
          <h3 className="text-lg font-semibold mb-2">On This Page</h3>
          <ul className="space-y-1">
            <li><Link href="#about" className="hover:text-white">About</Link></li>
            <li><Link href="#installation" className="hover:text-white">Installation</Link></li>
            <li><Link href="#usage" className="hover:text-white">Usage</Link></li>
            <li><Link href="#examples" className="hover:text-white">Examples</Link></li>
            <li><Link href="#sizes" className="hover:text-white">Sizes</Link></li>
            <li><Link href="#spacing" className="hover:text-white">Spacing</Link></li>
            <li><Link href="#orientation" className="hover:text-white">Orientation</Link></li>
            <li><Link href="#options" className="hover:text-white">Options</Link></li>
            <li><Link href="#api" className="hover:text-white">API</Link></li>
            <li><Link href="#events" className="hover:text-white">Events</Link></li>
            <li><Link href="#plugins" className="hover:text-white">Plugins</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-800 rounded-lg text-gray-400 md:col-span-2">
        <h3 className="text-lg font-semibold mb-2">Deploy your shadcn/ui app on Vercel</h3>
        <p className="mb-2">Trusted by OpenAI, Sonos, Chick-fil-A, and more.</p>
        <p>Vercel provides tools and infrastructure to deploy apps and features at scale.</p>
        <button className="mt-2 bg-white text-black px-4 py-2 rounded">Deploy Now</button>
      </div>
      </div>
    </div>
  );
}