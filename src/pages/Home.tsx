import { useEffect } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { UrduBanner } from "../components/UrduBanner";
import { Pillars } from "../components/Pillars";
import { WardTracker } from "../components/WardTracker";
import { JanataDarbar } from "../components/JanataDarbar";
import { PressRoom } from "../components/PressRoom";
import { Gallery } from "../components/Gallery";
import { Volunteer } from "../components/Volunteer";
import { Footer } from "../components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Mudasir Wali — Joint Secretary, Srinagar | J&K Apni Party";
    // SPA content renders after load, so honour /#section links manually.
    if (window.location.hash) document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
  }, []);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <UrduBanner />
        <Pillars />
        <WardTracker />
        <JanataDarbar />
        <Gallery />
        <PressRoom />
        <Volunteer />
      </main>
      <Footer />
    </>
  );
}
