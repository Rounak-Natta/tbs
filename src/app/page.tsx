"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Infrastructure from "@/components/sections/infrastructure";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/GallerySection";
import Admission from "@/components/sections/Admission";
import Form from "@/components/sections/Form";
import Footer from "@/components/layout/Footer";

import Reveal from "@/components/layout/Reveal";

export default function Home() {
  return (
    <main>

      <Reveal>
              <Hero />

      </Reveal>
      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Infrastructure />
      </Reveal>

      <Reveal>
        <WhyChooseUs />
      </Reveal>

      <Reveal>
        <Gallery />
      </Reveal>

      <Reveal>
        <Admission />
      </Reveal>


        <Form />


      <Footer />
    </main>
  );
}