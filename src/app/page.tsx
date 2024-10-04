"use client";

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div>
      <div className="h-screen">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
      </div>
    </div>
  );
}
