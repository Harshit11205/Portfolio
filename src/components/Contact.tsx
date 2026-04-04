import { SiGithub } from "react-icons/si";
import { TbMail } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
        <div className="text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-3">Let's Connect.</h3>
          <p className="text-white/50 text-lg">Open to new data opportunities and collaborations.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a
            href="https://github.com/Harshit11205"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors"
          >
            <SiGithub className="text-xl group-hover:scale-110 transition-transform" />
            <span className="font-mono tracking-widest text-sm">[ GITHUB ]</span>
          </a>
          <a
            href="https://www.linkedin.com/in/harshit-wadhawan-bb5743217/"
            className="group flex items-center gap-2 text-white/50 hover:text-[#0077b5] transition-colors"
          >
            <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
            <span className="font-mono tracking-widest text-sm">[ LINKEDIN ]</span>
          </a>
          <a
            href="mailto:harshit.wadhawan541@gmail.com"
            className="group flex items-center gap-2 text-emerald-400/70 hover:text-emerald-400 transition-colors"
          >
            <TbMail className="text-xl group-hover:scale-110 transition-transform" />
            <span className="font-mono tracking-widest text-sm text-emerald-400">[ EMAIL ]</span>
          </a>
        </div>
        
      </div>
    </footer>
  );
}
