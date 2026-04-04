"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Junior Associate",
    company: "Coforge",
    date: "2024 - Present",
    description: [
      "Developed and maintained Power BI dashboards aligned with business KPIs to support decision-making.",
      "Validated data using SQL and Excel, improving reporting accuracy and consistency across systems.",
      "Performed trend and variance analysis, contributing to 15–25% improvement in SLA compliance.",
      "Automated recurring reports, reducing manual effort by 30% and improving efficiency.",
      "Delivered ad-hoc reporting under tight deadlines with high accuracy.",
      "Collaborated with stakeholders to translate requirements into actionable insights.",
      "Identified anomalies in large datasets to proactively address operational risks."


    ]
  }
];

export default function Experience() {
  return (
    <section className="bg-[#121212] py-32 px-8 md:px-24 relative z-20">
      <div className="max-w-4xl mx-auto">

        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl md:text-5xl font-black text-white/90 tracking-tight">PROFESSIONAL EXPERIENCE</h3>
            <div className="w-20 h-1 bg-emerald-400/50 mt-6" />
          </motion.div>
        </header>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="mb-16 pl-8 md:pl-12 relative"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-[#121212] border-2 border-emerald-400 rounded-full left-[-8.5px] top-1.5" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-white tracking-wide">{exp.role}</h4>
                  <p className="text-lg text-emerald-400/90 font-medium mt-1">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 font-mono text-sm text-white/40 bg-white/5 px-3 py-1 rounded-full whitespace-nowrap self-start">
                  {exp.date}
                </div>
              </div>

              <ul className="space-y-3 text-white/60 font-light mt-6">
                {exp.description.map((item, j) => (
                  <li key={j} className="flex relative pl-5">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-white/20 rounded-full" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
