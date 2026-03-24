import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "560px" }}
      aria-label="Hero"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-living-room.dim_1920x900.jpg')",
        }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.38)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 sm:py-32 min-h-[560px]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium tracking-widest uppercase mb-4"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          Home Decor Inspiration
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif font-bold text-shadow-hero max-w-3xl leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", color: "#fff" }}
        >
          Home Decor Ideas &amp; Inspiration
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-shadow-hero"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          Curated home decor ideas, room makeover inspiration, and hand-picked
          affiliate products for every style — from farmhouse charm to boho
          luxe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#boards"
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-transform hover:scale-105 active:scale-95"
            style={{ backgroundColor: "oklch(0.26 0.012 220)", color: "#fff" }}
            data-ocid="hero.primary_button"
          >
            Explore Boards
          </a>
          <a
            href="#products"
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold border transition-transform hover:scale-105 active:scale-95"
            style={{
              backgroundColor: "rgba(243,238,228,0.92)",
              color: "oklch(0.22 0.015 50)",
              borderColor: "rgba(255,255,255,0.3)",
            }}
            data-ocid="hero.secondary_button"
          >
            Shop Picks
          </a>
        </motion.div>
      </div>
    </section>
  );
}
