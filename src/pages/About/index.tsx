import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Link } from "react-router-dom";
import TeamGrid from "../../components/about/TeamGrid";
import SecureHandshakeCTA from "../../components/about/SecureHandshakeCTA";
import BrandDecoration from "../../components/common/BrandDecoration";
import InteractiveGrid from "../../components/common/InteractiveGrid";
import ClientLogos from "../../components/common/ClientLogos";
import TechMarquee from "../../components/common/TechMarquee";
import { CLIENTS, TECHNOLOGIES } from "../../data/content-marquee";

// TypeScript interfaces
interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface StatItem {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  decimals?: number;
}

// Animated Counter Component
const AnimatedCounter: React.FC<{
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}> = ({ end, duration = 2000, suffix = "", prefix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = easeOutQuart * end;

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

// Skill Progress Bar Component
const SkillBar: React.FC<{ skill: Skill; index: number }> = ({
  skill,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-8"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
          {skill.name}
        </span>
        <span className="text-xs font-mono text-primary">{skill.level}%</span>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
        />
      </div>
      <div className="text-[10px] text-slate-500 dark:text-gray-500 mt-1 uppercase tracking-widest">
        {skill.category}
      </div>
    </motion.div>
  );
};

// Timeline Item Component
const TimelineItem: React.FC<{
  milestone: Milestone;
  index: number;
  isLast: boolean;
}> = ({ milestone, index, isLast }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex gap-8 group"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[23px] top-16 bottom-0 w-[2px] bg-slate-200 dark:bg-white/10 group-hover:bg-gradient-to-b group-hover:from-primary group-hover:to-secondary transition-all duration-500" />
      )}

      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-dark border-2 border-slate-200 dark:border-white/20 flex items-center justify-center text-primary group-hover:border-secondary group-hover:text-secondary transition-all duration-300 shadow-lg group-hover:shadow-primary/20 z-10">
        {milestone.icon}
      </div>

      {/* Content */}
      <div className="flex-grow pb-16">
        <div className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-2">
          {milestone.year}
        </div>
        <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
          {milestone.title}
        </h4>
        <p className="text-slate-500 dark:text-gray-400 font-light leading-relaxed max-w-xl">
          {milestone.description}
        </p>
      </div>
    </motion.div>
  );
};

// Stats Section with Animated Counters
const StatsSection: React.FC = () => {
  const stats: StatItem[] = [
    {
      value: 10,
      suffix: "+",
      prefix: "",
      label: "yearsExperience",
      decimals: 0,
    },
    {
      value: 150,
      suffix: "+",
      prefix: "",
      label: "projectsDelivered",
      decimals: 0,
    },
    { value: 50, suffix: "+", prefix: "", label: "happyClients", decimals: 0 },
    {
      value: 15,
      suffix: "+",
      prefix: "",
      label: "industriesServed",
      decimals: 0,
    },
  ];

  return (
    <section className="py-40 border-b border-slate-200 dark:border-white/5 transition-colors relative overflow-hidden">
      {/* 3D Grid Decoration */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 opacity-30 pointer-events-none z-0 hidden lg:block">
        <InteractiveGrid />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter transition-colors">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals || 0}
                />
              </div>
              <div className="text-[9px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-[0.4em] transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills/Expertise Section
const SkillsSection: React.FC = () => {
  const { t } = useTranslation(["about"]);

  const skills: Skill[] = [
    { name: "React / Next.js", level: 98, category: "Frontend" },
    { name: "Node.js / Express", level: 95, category: "Backend" },
    { name: "TypeScript", level: 92, category: "Languages" },
    { name: "MongoDB / PostgreSQL", level: 90, category: "Database" },
    { name: "Tailwind CSS", level: 95, category: "Styling" },
    { name: "Docker / DevOps", level: 85, category: "Infrastructure" },
  ];

  return (
    <section className="py-40 bg-slate-50 dark:bg-dark relative overflow-hidden transition-colors">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-[1px] bg-secondary"></div>
              <span className="text-[10px] font-black text-secondary uppercase tracking-[0.6em]">
                {t("about:skills.tag")}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-tight mb-8 transition-colors">
              {t("about:skills.title")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {t("about:skills.titleHighlight")}
              </span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-gray-400 font-light leading-relaxed mb-8 transition-colors">
              {t("about:skills.description")}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "99.9%", label: "Uptime" },
                { value: "< 50ms", label: "Response" },
                { value: "24/7", label: "Support" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-4 bg-white dark:bg-dark/50 border border-slate-200 dark:border-white/10"
                >
                  <div className="text-2xl font-black text-primary">
                    {item.value}
                  </div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Progress */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-dark/50 p-10 border border-slate-200 dark:border-white/10"
          >
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Timeline Section
const TimelineSection: React.FC = () => {
  const { t } = useTranslation(["about"]);

  const milestones: Milestone[] = [
    {
      year: "2015",
      title: t("about:timeline.2015.title"),
      description: t("about:timeline.2015.description"),
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
    },
    {
      year: "2018",
      title: t("about:timeline.2018.title"),
      description: t("about:timeline.2018.description"),
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      year: "2021",
      title: t("about:timeline.2021.title"),
      description: t("about:timeline.2021.description"),
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      year: "2024",
      title: t("about:timeline.2024.title"),
      description: t("about:timeline.2024.description"),
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-40 bg-white dark:bg-dark transition-colors relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-[1px] bg-secondary"></div>
            <span className="text-[10px] font-black text-secondary uppercase tracking-[0.6em]">
              {t("about:timeline.tag")}
            </span>
            <div className="w-12 h-[1px] bg-secondary"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
            {t("about:timeline.title")}
          </h2>
        </motion.div>

        <div className="relative">
          {milestones.map((milestone, index) => (
            <TimelineItem
              key={index}
              milestone={milestone}
              index={index}
              isLast={index === milestones.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Main About Component
const About: React.FC = () => {
  const { t } = useTranslation(["about", "common"]);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="pt-32 bg-white dark:bg-dark transition-colors">
      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        className="py-40 bg-slate-50 dark:bg-dark relative overflow-hidden transition-colors"
      >
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <BrandDecoration />

        {/* Floating Elements */}
        <motion.div style={{ y, opacity }} className="relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-12">
                <div className="w-12 h-[1px] bg-secondary"></div>
                <span className="text-[10px] font-black text-secondary uppercase tracking-[0.6em]">
                  {t("about:page.tag")}
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-9xl font-black text-slate-900 dark:text-white tracking-tighter mb-12 leading-tight uppercase transition-colors"
            >
              {t("about:page.title")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {t("about:page.titleHighlight")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl text-slate-600 dark:text-gray-400 max-w-4xl font-light leading-snug transition-colors"
            >
              {t("about:page.subtitle")}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Grid-based Content Section */}
      <section className="py-40 bg-slate-50 dark:bg-surface/30 border-y border-slate-200 dark:border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-20 -left-20 w-full h-full bg-grid-slate-200 dark:bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,white,transparent)]"></div>
              <img
                src="/about.png"
                alt="Optima Philosophy"
                className="relative z-10 rounded-sm shadow-2xl shadow-primary/10 mb-12 grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />

              <h2 className="text-[10px] uppercase tracking-[0.5em] font-black text-primary mb-10">
                {t("about:page.corePhilosophy.tag")}
              </h2>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-tight mb-10 transition-colors">
                {t("about:page.corePhilosophy.title")}
              </h3>
              <p className="text-lg text-slate-500 dark:text-gray-500 font-light leading-relaxed mb-10 italic transition-colors">
                {t("about:page.corePhilosophy.description")}
              </p>
            </div>
            <div className="lg:col-span-7 space-y-24">
              <ValueBlock
                title={t("about:page.values.quality.title")}
                desc={t("about:page.values.quality.description")}
                delay={0}
              />
              <ValueBlock
                title={t("about:page.values.partnership.title")}
                desc={t("about:page.values.partnership.description")}
                delay={1}
              />
              <ValueBlock
                title={t("about:page.values.growth.title")}
                desc={t("about:page.values.growth.description")}
                delay={2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <StatsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* Client Logos Carousel */}
      <ClientLogos
        clients={CLIENTS}
        title={t("about:clients.title")}
        showTitle={true}
      />

      {/* Tech Stack Marquee */}
      <TechMarquee
        technologies={TECHNOLOGIES}
        title={t("about:techStack.title")}
        showTitle={true}
        speed="normal"
      />

      {/* Team Grid */}
      <TeamGrid />

      {/* Final Call - Creative */}
      <SecureHandshakeCTA />
    </div>
  );
};

// Value Block Component with Animation
const ValueBlock: React.FC<{ title: string; desc: string; delay: number }> = ({
  title,
  desc,
  delay,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="border-l-2 border-primary/20 pl-10 group hover:border-secondary transition-colors duration-500"
    >
      <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight group-hover:text-secondary transition-colors">
        {title}
      </h4>
      <p className="text-slate-500 dark:text-gray-400 text-lg font-light leading-relaxed max-w-2xl transition-colors">
        {desc}
      </p>
    </motion.div>
  );
};

export default About;
