"use client";

import { motion } from "framer-motion";
import { 
  SiPython, 
  SiMysql, 
  SiPandas, 
  SiNumpy, 
  SiScikitlearn,
  SiJupyter,
  SiTensorflow,
  SiJira,
  SiConfluence
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { 
  TbFileExcel, 
  TbChartBar, 
  TbChartArcs,
  TbTicket
} from "react-icons/tb";

const skills = [
  { name: "Python", icon: SiPython, color: "hover:text-[#3776AB] hover:border-[#3776AB]/50" },
  { name: "MySQL", icon: SiMysql, color: "hover:text-[#4479A1] hover:border-[#4479A1]/50" },
  { name: "Tableau", icon: TbChartBar, color: "hover:text-[#E97627] hover:border-[#E97627]/50" },
  { name: "Power BI", icon: TbChartArcs, color: "hover:text-[#F2C811] hover:border-[#F2C811]/50" },
  { name: "Excel", icon: TbFileExcel, color: "hover:text-[#217346] hover:border-[#217346]/50" },
  { name: "Pandas", icon: SiPandas, color: "hover:text-[#150458] hover:border-[#150458]/50" },
  { name: "NumPy", icon: SiNumpy, color: "hover:text-[#013243] hover:border-[#013243]/50" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "hover:text-[#F7931E] hover:border-[#F7931E]/50" },
  { name: "TensorFlow", icon: SiTensorflow, color: "hover:text-[#FF6F00] hover:border-[#FF6F00]/50" },
  { name: "AWS", icon: FaAws, color: "hover:text-[#FF9900] hover:border-[#FF9900]/50" },
  { name: "Jupyter", icon: SiJupyter, color: "hover:text-[#F37626] hover:border-[#F37626]/50" },
  { name: "Jira", icon: SiJira, color: "hover:text-[#0052CC] hover:border-[#0052CC]/50" },
  { name: "Confluence", icon: SiConfluence, color: "hover:text-[#172B4D] hover:border-[#172B4D]/50" },
  { name: "ServiceNow", icon: TbTicket, color: "hover:text-[#81B5A1] hover:border-[#81B5A1]/50" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: import("framer-motion").Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Skills() {
  return (
    <section className="bg-[#0a0a0a] border-t border-white/5 py-32 px-8 md:px-24 relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[400px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl md:text-5xl font-black text-white/90 tracking-tight">TECHNICAL ARSENAL</h3>
            <div className="w-20 h-1 bg-emerald-400/50 mt-6 mx-auto md:mx-0" />
            <p className="mt-6 text-white/40 max-w-2xl font-light text-lg">
              A curated stack of tools and technologies I use to extract insights, build models, and drive business intelligence.
            </p>
          </motion.div>
        </header>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-300 shadow-lg overflow-hidden ${skill.color}`}
              >
                {/* Dynamic hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <Icon className="text-5xl text-white/40 group-hover:text-inherit transition-colors duration-300 mb-4 drop-shadow-md" />
                
                <span className="text-white/60 font-medium tracking-wider group-hover:text-white transition-colors duration-300 text-sm">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
