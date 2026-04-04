"use client";

import { motion } from "framer-motion";
import { TbCertificate } from "react-icons/tb";

const certifications = [
  {
    name: "Microsoft Office Specialist Excel 2019",
    issuer: "Microsoft",
    date: "2022",
    link: "#"
  },
  {
    name: "Google Data Analytics",
    issuer: "Google / Coursera",
    date: "2023",
    link: "#"
  },
  {
    name: "Generative AI",
    issuer: "LinkedIn",
    date: "2023",
    link: "#"
  },
  {
    name: "Machine Learning & Data Analytics",
    issuer: "SkillSoft",
    date: "2024",
    link: "#"
  },
  {
    name: "Data Science",
    issuer: "Udemy",
    date: "2023",
    link: "#"
  },
  {
    name: "Data Science Virtual Experience Program",
    issuer: "BCG",
    date: "2023",
    link: "#"
  },
  {
    name: "PowerBI Virtual Case Experience Program",
    issuer: "PwC",
    date: "2023",
    link: "#"
  }
];

export default function Certifications() {
  return (
    <section className="bg-[#0a0a0a] py-32 px-8 md:px-24 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto">

        <header className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl md:text-5xl font-black text-white/90 tracking-tight">CERTIFICATIONS</h3>
            <div className="w-20 h-1 bg-emerald-400/50 mt-6 mx-auto md:mx-0" />
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.a
              href={cert.link}
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col p-8 rounded-2xl bg-[#151515] border border-white/5 hover:border-emerald-400/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  <TbCertificate className="text-2xl" />
                </div>
                <span className="font-mono text-xs text-white/30 tracking-widest">{cert.date}</span>
              </div>

              <h4 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-emerald-400/90 transition-colors duration-300">
                {cert.name}
              </h4>
              <p className="text-sm font-medium text-white/50 tracking-wide uppercase mt-auto">
                {cert.issuer}
              </p>

              {/* Subtle hover glow ring */}
              <div className="absolute inset-0 bg-emerald-400/0 rounded-2xl ring-1 ring-inset ring-emerald-400/0 group-hover:ring-emerald-400/20 group-hover:bg-emerald-400/[0.02] transition-all duration-500 pointer-events-none" />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
