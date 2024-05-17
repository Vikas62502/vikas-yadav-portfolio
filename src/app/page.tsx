"use client";

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="h-screen">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}
