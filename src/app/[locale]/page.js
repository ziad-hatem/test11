import Hero from "@/components/home/hero";
import Nav from "@/components/home/nav";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      <Nav />
      <Hero />
    </main>
  );
}
