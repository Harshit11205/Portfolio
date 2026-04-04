"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1 (0% to 20%)
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);

  // Section 2 (25% to 55%)
  const y2 = useTransform(scrollYProgress, [0.25, 0.35, 0.55], [100, 0, -100]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);

  // Section 3 (60% to 95%)
  const y3 = useTransform(scrollYProgress, [0.6, 0.75, 0.95], [100, 0, -100]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="h-[500vh] w-full absolute top-0 left-0 z-10 pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-8 md:px-24 text-white">

        {/* Section 1: Center */}
        <motion.div
          style={{ y: y1, opacity: opacity1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Harshit Wadhawan
          </h1>
          <p className="mt-4 text-xl md:text-3xl text-white/80 font-light tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Data/Business Analyst
          </p>
        </motion.div>

        {/* Section 2: Left */}
        <motion.div
          style={{ y: y2, opacity: opacity2 }}
          className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              I turn data into  <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 drop-shadow-none">smart business decisions.</span>
            </h2>
          </div>
        </motion.div>

        {/* Section 3: Right */}
        <motion.div
          style={{ y: y3, opacity: opacity3 }}
          className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-24 text-right"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              Bridging<br /> <span className="font-light italic text-white/90">data</span> with <br /> <span className="font-black text-purple-400">business decisions.</span>
            </h2>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
