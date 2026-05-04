"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ToolsSection from "@/components/ToolsSection";
import Curriculum from "@/components/Curriculum";

import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Navbar onEnrollClick={openModal} />

      <main>
        <Hero onEnrollClick={openModal} />
        <WhyChooseUs />
        <ToolsSection />
        <Curriculum />

        <Pricing onEnrollClick={openModal} />
        <FAQ />
        <FinalCTA onEnrollClick={openModal} />
      </main>

      <Footer />

      <ContactModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
