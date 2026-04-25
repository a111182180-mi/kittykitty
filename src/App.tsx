import { motion, useScroll, useSpring } from 'motion/react';
import React, { ReactNode } from 'react';
import { Mail, Instagram, Anchor, BookOpen, ChevronDown, GraduationCap, Award, Sparkles, Heart, Briefcase, ExternalLink, Calendar } from 'lucide-react';
import { personalInfo, experiences, education, skills, portfolio } from './data';

// --- Shared Kawaii Components ---

const Sticker = ({ emoji, className, delay = 0, rotate = 10, bounce = true }: { emoji: string, className?: string, delay?: number, rotate?: number, bounce?: boolean }) => (
  <motion.div
    initial={{ scale: 0, rotate: rotate - 45, opacity: 0 }}
    whileInView={{ scale: 1, rotate, opacity: 1 }}
    viewport={{ once: true, margin: "50px" }}
    whileHover={{ scale: 1.15, rotate: rotate + 15 }}
    animate={bounce ? { y: [0, -12, 0] } : {}}
    transition={{
      y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 },
      scale: { type: "spring", bounce: 0.6, delay },
      opacity: { duration: 0.2, delay },
      rotate: { type: "spring", bounce: 0.5, delay }
    }}
    className={`absolute text-4xl md:text-5xl bg-white p-3 rounded-full shadow-lg border-[4px] border-pink-200 flex items-center justify-center cursor-pointer select-none z-20 ${className}`}
  >
    {emoji}
  </motion.div>
);

const Block = ({ children, className, delay = 0 }: { children: ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, type: "spring", bounce: 0.4 }}
    className={`bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border-[6px] border-white ring-4 ring-pink-100 relative ${className}`}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ children, icon: Icon, emoji }: { children: ReactNode, icon?: React.ElementType, emoji?: string }) => (
  <div className="flex flex-col items-center justify-center mb-16 relative">
    <motion.div 
      initial={{ scale: 0 }} 
      whileInView={{ scale: 1 }} 
      viewport={{ once: true }}
      transition={{ type: "spring", bounce: 0.6 }}
      className="bg-white p-4 rounded-full shadow-md border-4 border-pink-100 mb-4 z-10"
    >
      {Icon && <Icon size={36} className="text-pink-500" />}
      {emoji && <span className="text-4xl">{emoji}</span>}
    </motion.div>
    <div className="absolute top-1/2 left-0 w-full h-1.5 bg-pink-100 rounded-full -z-10" />
    <h2 className="text-4xl md:text-5xl font-black text-pink-900 tracking-tight bg-pink-50 px-6 py-2 rounded-full border-4 border-white shadow-sm inline-block">
      {children}
    </h2>
  </div>
);

// --- Sections ---

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
      {/* Scattered Kawaii Stickers */}
      <Sticker emoji="🎀" className="top-[15%] left-[10%] md:left-[20%]" rotate={-15} delay={0.1} />
      <Sticker emoji="🍎" className="top-[30%] right-[5%] md:right-[15%]" rotate={20} delay={0.3} bounce={false} />
      <Sticker emoji="🐱" className="bottom-[25%] left-[5%] md:left-[15%]" rotate={10} delay={0.5} />
      <Sticker emoji="✨" className="bottom-[15%] right-[10%] md:right-[25%]" rotate={-20} delay={0.2} bounce={false} />
      <Sticker emoji="🌸" className="top-[45%] left-[-2%]" rotate={45} delay={0.6} />

      <Block className="max-w-3xl w-full text-center z-10 mt-10" delay={0.2}>
        <motion.div
           initial={{ scale: 0.9, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
           className="inline-block mb-6"
        >
          <span className="px-6 py-2.5 rounded-full bg-pink-50 border-2 border-pink-200 text-pink-600 text-sm font-black tracking-widest shadow-inner uppercase flex items-center gap-2">
            <Heart size={16} className="fill-pink-400 text-pink-400" /> Welcome <Heart size={16} className="fill-pink-400 text-pink-400" />
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-black text-pink-950 mb-6 drop-shadow-sm flex flex-col gap-2">
          <span>你好，我是</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 mt-2">
            {personalInfo.name}
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-pink-500 mb-8 font-black bg-pink-50 inline-block px-6 py-2 rounded-2xl mx-auto border-2 border-dashed border-pink-200">
          {personalInfo.role}
        </p>

        <p className="text-lg md:text-xl text-pink-800 font-bold max-w-2xl mx-auto leading-relaxed mb-10">
          {personalInfo.intro}
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-4">
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 px-8 py-4 bg-rose-400 text-white rounded-full hover:bg-rose-500 transition-all shadow-[0_8px_0_rgb(225,29,72)] hover:shadow-[0_4px_0_rgb(225,29,72)] hover:translate-y-[4px] font-black text-lg border-4 border-white">
            <Mail size={22} />
            聯絡我吧
          </a>
          <a href="#about" className="flex items-center gap-2 px-8 py-4 bg-white text-pink-600 border-4 border-pink-100 rounded-full hover:bg-pink-50 transition-all shadow-[0_8px_0_rgb(252,231,243)] hover:shadow-[0_4px_0_rgb(252,231,243)] hover:translate-y-[4px] font-black text-lg">
            <ChevronDown size={24} />
            認識我更多
          </a>
        </div>
      </Block>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10 text-center md:text-left">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading icon={Anchor}>關於我</SectionHeading>

        <div className="grid md:grid-cols-12 gap-8 relative">
          <Sticker emoji="🥛" className="-top-6 right-[10%] z-30 scale-75" rotate={15} />

          {/* Bio Block */}
          <Block className="md:col-span-8 space-y-6 !p-8 md:!p-12 text-lg text-pink-900 font-bold leading-relaxed">
            <Sticker emoji="🎈" className="-left-8 top-10 scale-75" rotate={-20} bounce={false} />
            {personalInfo.bio.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="bg-pink-50/50 p-4 rounded-3xl border-2 border-dashed border-pink-100">
                {paragraph}
              </p>
            ))}
          </Block>

          {/* Side Info Blocks */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <Block delay={0.2} className="!p-8 bg-gradient-to-br from-pink-100 to-white">
              <h3 className="font-black text-pink-900 text-2xl flex items-center gap-3 mb-6">
                <GraduationCap className="text-pink-500" size={32} /> 學歷
              </h3>
              <div className="bg-white p-5 rounded-2xl border-4 border-pink-50 shadow-sm text-center md:text-left">
                <p className="text-xs text-white bg-pink-400 font-black tracking-widest px-3 py-1 rounded-full inline-block mb-3">{education.period}</p>
                <p className="text-2xl font-black text-pink-950 mb-1">{education.school}</p>
                <p className="text-pink-600 font-bold text-lg">{education.department}</p>
              </div>
            </Block>

            <Block delay={0.4} className="!p-8 flex-1">
              <h3 className="font-black text-pink-900 text-2xl flex items-center gap-3 mb-6">
                <Award className="text-pink-500" size={32} /> 專業證照
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.certificates.map((cert) => (
                  <span key={cert} className="px-4 py-2 bg-pink-50 text-pink-700 rounded-xl font-bold border-2 border-pink-200">
                    {cert}
                  </span>
                ))}
              </div>
            </Block>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading icon={Briefcase}>工作經歷</SectionHeading>

        <div className="grid md:grid-cols-2 gap-8 relative mt-16">
          <Sticker emoji="🚀" className="-top-12 left-[45%] z-30" rotate={10} />
          
          {experiences.map((exp, idx) => (
            <Block key={idx} delay={idx * 0.2} className="flex flex-col h-full transform transition-transform hover:-translate-y-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl font-black text-pink-950">{exp.company}</h3>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1.5 bg-rose-400 text-white rounded-full text-sm font-black tracking-wider shadow-sm shrink-0 flex items-center gap-2">
                  <Calendar size={14} /> {exp.period}
                </span>
                <span className="text-xl text-pink-500 font-black">{exp.role}</span>
              </div>
              
              <ul className="space-y-4 text-pink-800 font-bold flex-1 bg-pink-50 p-6 rounded-3xl border-2 border-pink-100">
                {exp.tasks.map((task, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Heart size={20} className="fill-pink-300 text-pink-300 shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </Block>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="py-16 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading icon={Sparkles}>專長與興趣</SectionHeading>
        
        <div className="grid md:grid-cols-3 gap-8 relative mt-12">
          <Sticker emoji="🎨" className="-top-8 -right-4 z-30 scale-75" rotate={20} bounce={false} />
          
          {skills.interests.map((group, idx) => (
            <Block key={idx} delay={idx * 0.15} className="!p-8 group hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-pink-100 text-pink-500 rounded-3xl flex items-center justify-center mb-6 shadow-inner border-[4px] border-white transform group-hover:rotate-12 transition-transform">
                <StarIcon className="w-8 h-8 fill-pink-400 text-pink-500" />
              </div>
              <h3 className="text-2xl font-black text-pink-900 mb-6">{group.category}</h3>
              <ul className="space-y-3">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-pink-800 font-bold text-lg p-2 rounded-xl hover:bg-pink-50 transition-colors">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-300 shadow-sm" />
                    {item}
                  </li>
                ))}
              </ul>
            </Block>
          ))}
        </div>
      </div>
    </section>
  );
}

// Temporary icon helper for skills
function StarIcon(props: any) {
  return <Award {...props} />;
}


function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading icon={BookOpen}>作品特輯</SectionHeading>
        
        <div className="space-y-16 mt-16 relative">
          <Sticker emoji="📸" className="top-10 -left-6 z-30 scale-75" rotate={-15} />

          {portfolio.map((item, idx) => (
            <Block key={item.id} delay={0} className="overflow-visible">
               {/* Decorative pin/tape */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-pink-200/50 backdrop-blur-md rotate-[-2deg] rounded-md z-30 shadow-sm" />
              
              <div className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>
                
                <motion.div 
                  className="w-full md:w-1/2 aspect-[4/3] rounded-[2.5rem] overflow-hidden relative group cursor-pointer border-[8px] border-pink-50 shadow-inner"
                  whileHover={{ scale: 1.03, rotate: idx % 2 === 0 ? 2 : -2 }}
                  transition={{ duration: 0.4, type: 'spring', bounce: 0.5 }}
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <span className="flex items-center gap-2 text-pink-600 font-black bg-white px-8 py-4 rounded-full shadow-[0_6px_0_rgb(252,165,165)] hover:shadow-[0_2px_0_rgb(252,165,165)] hover:translate-y-[4px] transition-all">
                      探索專案 <ExternalLink size={20} />
                    </span>
                  </div>
                </motion.div>
                
                <div className="w-full md:w-1/2 space-y-6 pt-4 md:pt-0">
                  <div className="inline-flex items-center gap-2 px-5 py-2 bg-rose-100 text-rose-600 font-black text-sm rounded-full tracking-wider border-2 border-rose-200">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                    </span>
                    {item.category}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-pink-950 leading-tight">{item.title}</h3>
                  <p className="text-lg text-pink-800 font-bold leading-relaxed bg-pink-50/50 p-6 rounded-3xl border border-pink-100">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-white text-pink-600 rounded-xl text-sm font-bold border-2 border-pink-200 shadow-sm hover:bg-pink-50 transition-colors">
                        # {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Block>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t-[8px] border-pink-100 mt-20 py-16 relative overflow-hidden z-10 text-center">
       <Sticker emoji="🍓" className="top-8 left-[20%] scale-75" rotate={12} bounce={false} />
       <Sticker emoji="💖" className="top-12 right-[20%] scale-75" rotate={-10} bounce={false} />
       
      <div className="container px-6 mx-auto flex flex-col items-center justify-center gap-8 relative z-10">
        <div>
          <h2 className="text-4xl font-black text-pink-900 tracking-tight mb-3">{personalInfo.name}</h2>
          <p className="text-pink-500 font-bold text-xl bg-pink-50 px-6 py-2 rounded-full border-2 border-pink-100 inline-block">航海專業 ⚓️ x 創意實踐 🎀</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href={`mailto:${personalInfo.email}`} className="text-white bg-pink-400 hover:bg-pink-500 transition-all p-4 rounded-full shadow-[0_6px_0_rgb(244,114,182)] hover:shadow-[0_2px_0_rgb(244,114,182)] hover:translate-y-[4px]">
            <Mail size={32} />
          </a>
          <a href="#" className="text-white bg-pink-400 hover:bg-pink-500 transition-all p-4 rounded-full shadow-[0_6px_0_rgb(244,114,182)] hover:shadow-[0_2px_0_rgb(244,114,182)] hover:translate-y-[4px]">
            <Instagram size={32} />
          </a>
        </div>
        
        <div className="mt-8 text-pink-400 font-black tracking-wide border-t-4 border-dashed border-pink-100 pt-8 w-full max-w-2xl">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved & crafted with 💖.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen relative font-sans selection:bg-pink-300 selection:text-white pb-0">
      
      {/* Background with Kawaii Polka Dots */}
      <div 
        className="fixed inset-0 pointer-events-none -z-20 bg-pink-50"
        style={{ 
          backgroundImage: 'radial-gradient(#f9a8d4 4px, transparent 4px)', 
          backgroundSize: '40px 40px',
          opacity: 0.3
        }} 
      />
      
      {/* Soft gradient overlay so text is readable */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-gradient-to-b from-white/90 via-white/40 to-pink-50/90 backdrop-blur-[1px]" />

      {/* Progress Bar (Pink Ribbon style) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-3 bg-gradient-to-r from-rose-300 via-pink-400 to-rose-400 origin-left z-50 border-b-2 border-white/50"
        style={{ scaleX }}
      />
      
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}
