"use client";

import { motion } from "framer-motion";
import { TbDatabase, TbChartArcs, TbBrain, TbSearch, TbChartBar } from "react-icons/tb";

const services = [
  {
    title: "Data Cleaning & Exploration",
    description: "Structuring and preprocessing raw data utilizing Python and SQL to uncover patterns and ensure high data integrity.",
    icon: TbSearch,
    color: "text-blue-400"
  },
  {
    title: "Dashboarding & Visualization",
    description: "Designing interactive, real-time KPI dashboards in Power BI and Tableau that empower leadership with actionable insights.",
    icon: TbChartBar,
    color: "text-emerald-400"
  },
  {
    title: "Predictive Analytics",
    description: "Leveraging historical data and machine learning to forecast trends, map scenarios, and optimize business operations.",
    icon: TbBrain,
    color: "text-purple-400"
  },
  {
    title: "Data Storytelling",
    description: "Transforming complex analytics into compelling, easy-to-understand visual narratives that drive executive decisions.",
    icon: TbChartArcs,
    color: "text-orange-400"
  }
];

export default function WhatIDo() {
  return (
    <section className="bg-[#0a0a0a] min-h-screen py-32 px-8 md:px-24 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col justify-center h-full">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl md:text-5xl font-black text-white/90 tracking-tight">WHAT I DO</h3>
            <div className="w-20 h-1 bg-white/20 mt-6" />
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="group relative p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <Icon className={`text-5xl mb-6 ${service.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                
                <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-white/50 leading-relaxed font-light">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
