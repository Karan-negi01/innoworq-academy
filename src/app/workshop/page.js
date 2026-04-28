"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import WorkshopHero from "@/components/WorkshopHero";
import WorkshopTopics from "@/components/WorkshopTopics";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function WorkshopPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(100);

  // Mock seat update - in a real app, this would fetch from /api/seats
  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const res = await fetch("/api/seats");
        const data = await res.json();
        if (data.workshop !== undefined) setSeatsLeft(data.workshop);
      } catch (err) {
        console.error("Failed to fetch seats:", err);
      }
    };
    fetchSeats();
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <main style={{ background: "#000" }}>
      <Navbar onEnrollClick={openModal} />
      
      <WorkshopHero onEnrollClick={openModal} seatsLeft={seatsLeft} />
      
      <WorkshopTopics />
      
      <div style={{ background: "#0a0a0a", padding: "100px 24px" }}>
        <FAQ />
      </div>

      <Footer />

      <ContactModal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        type="workshop" 
        onSuccess={() => {
          const newSeats = Math.max(0, seatsLeft - 1);
          setSeatsLeft(newSeats);
          localStorage.setItem("workshop_seats", newSeats.toString());
        }}
      />
    </main>
  );
}
