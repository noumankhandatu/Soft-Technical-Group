"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";

export default function SuccessSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      once: true, // Whether animation should happen only once (optional)
    });
  }, []);
  return (
    <section data-aos="fade-right" className="py-16 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        {/* Centered Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in-up">Key to Success</h2>
          <div className="w-24 h-1 bg-stg-orange mx-auto animate-fade-in-up animation-delay-200"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up animation-delay-400">
          <p className="text-xl leading-relaxed text-gray-700">
            At STG, our success is built on <strong className="text-stg-orange">expert talent</strong>,{" "}
            <strong className="text-stg-orange">innovative thinking</strong>, and a deep commitment to{" "}
            <strong className="text-stg-orange">customer satisfaction</strong>. We deliver reliable, high-quality IT solutions through a skilled team,
            transparent communication, and long-term support. Guided by ethical practices and a focus on modern technology, we ensure every project
            adds real value to our clients.
          </p>
        </div>
      </div>
    </section>
  );
}
