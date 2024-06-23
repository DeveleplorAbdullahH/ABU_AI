import Company from "@/components/Company";
import Hero from "@/components/Hero";
import Img from "@/components/Img";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative dark:bg-black h-full w-full">
      <Navbar />
      <main className="relative w-full h-full">
        <Hero />
        <Img />
        <Company />
      </main>
    </div>
  );
}
