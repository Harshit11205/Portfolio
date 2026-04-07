import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Walmart Sales Analysis",
    category: "Data Analytics",
    description: "Analyzed Walmart sales data to identify revenue trends, top-performing categories, and seasonal demand patterns using Python, SQL and visualization tools.",
    link: "https://github.com/Harshit11205/Walmart-Sales-Analysis"
  },
  {
    title: "Library System Management",
    category: "Data Analytics",
    description: "Designed a data-driven library management system to track book usage, user activity, and optimize inventory decisions.",
    link: "https://github.com/Harshit11205/Library-System-Management"
  },
  {
    title: "Retail Sales Analysis",
    category: "Data Analytics",
    description: "Performed retail data analysis to uncover customer trends, high-demand products, and actionable business insights.",
    link: "https://github.com/Harshit11205/Retail-Sales-Analysis"
  },
  {
    title: "Natural Gas Price Analysis & Forecasting",
    category: "AI/ML",
    description: "Developed a time series forecasting model using ARIMA and SARIMA to predict natural gas prices, including stationarity checks and model evaluation.",
    link: "https://github.com/Harshit11205/Natural-Gas-Price-And-Modelling"
  },
  {
    title: "Google Stock Price Prediction",
    category: "AI/ML",
    description: "Developed a stock price prediction model using machine learning techniques to analyze historical trends and forecast future prices.",
    link: "https://github.com/Harshit11205/BharatIntern"
  },
  {
    title: "Number Prediction Model",
    category: "AI/ML",
    description: "Developed a machine learning model to predict numerical values from input data using regression techniques, achieving an accuracy of 97.63% on test data.",
    link: "https://github.com/Harshit11205/BharatIntern"
  },
  {
    title: "Face Analyzer",
    category: "AI / Machine Learning + Computer Vision",
    description: "Developed a full-stack Face Analyzer application capable of detecting faces and predicting attributes such as age and gender in real time. The system integrates computer vision models with a lightweight web interface to deliver fast and accurate results with 95.67% accuracy.",
    link: "https://face-analyzer-orcin.vercel.app/"
  }
  

];

export default function Projects() {
  return (
    <section className="bg-[#0a0a0a] min-h-screen py-32 px-8 md:px-24 relative z-20">
      <div className="max-w-7xl mx-auto">

        <header className="mb-20">
          <h3 className="text-4xl md:text-5xl font-black text-white/90 tracking-tight">SELECTED WORK</h3>
          <div className="w-20 h-1 bg-white/20 mt-6" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              className="group block relative p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-2xl transition-all duration-500 group-hover:bg-white/[0.05] group-hover:border-white/[0.15]" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-white/5 blur-[100px] rounded-full" />
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
                <div>
                  <p className="text-xs font-mono tracking-widest text-emerald-400/80 mb-4">{project.category}</p>
                  <h4 className="text-2xl font-bold text-white mb-4 transition-colors group-hover:text-white/90">{project.title}</h4>
                  <p className="text-white/50 leading-relaxed font-light">{project.description}</p>
                </div>

                <div className="mt-8 flex items-center text-sm font-medium text-white/40 tracking-wider group-hover:text-white/80 transition-colors">
                  <span>VIEW PROJECT</span>
                  <svg className="w-4 h-4 ml-2 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
