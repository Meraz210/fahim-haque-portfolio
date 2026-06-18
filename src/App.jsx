import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MapPin,
  Moon,
  Phone,
  Send,
  ShieldCheck,
  Sun,
  Terminal,
} from 'lucide-react';

const profile = {
  name: 'Fahim Haque',
  title: 'Machine Learning Engineer / Data Analyst',
  tagline:
    'I build practical ML workflows, data dashboards, and research-backed analytics systems that turn complex data into clear decisions.',
  email: 'fahim.haque36@gmail.com',
  phone: '(+880) 1771641505',
  location: 'Saidpur, Bangladesh',
  linkedin: 'https://www.linkedin.com/in/fahimhqmim',
  github: 'https://github.com/Meraz210',
};

const navItems = ['About', 'Education', 'Skills', 'Experience', 'Projects', 'Certificates', 'Contact'];

const snippets = [
  { className: 'left-[5%] top-[20%]', text: ['import numpy as np', 'import pandas as pd'] },
  { className: 'right-[5%] top-[36%]', text: ['SELECT * FROM insights', 'WHERE performance > 90;'] },
  { className: 'left-[9%] bottom-[28%]', text: ['git commit -m', '"feat: optimization"'] },
  { className: 'right-[8%] bottom-[18%]', text: ['async def process_data(x, y):', '  await model.fit(x, y)'] },
];

const skillRailOne = [
  ['Machine Learning', '90%'],
  ['Problem Solving', '88%'],
  ['Python', '90%'],
  ['SQL / MySQL', '88%'],
  ['Leadership', '100%'],
  ['Communication', '90%'],
];

const skillRailTwo = [
  ['NumPy', '100%'],
  ['Pandas', '100%'],
  ['Matplotlib & Seaborn', '100%'],
  ['Power BI', '100%'],
  ['Deep Learning', '90%'],
  ['Data Validation', '95%'],
];

const education = [
  {
    degree: 'B.Sc. in Computer Science and Engineering',
    institution: 'Daffodil International University',
    year: '01/2020 - 02/2024',
    result: 'CGPA 3.86 / 4.00',
    details: 'Thesis: Mango Leaf Disease Detection Using Deep Learning',
  },
];

const skills = [
  ['Python', 90],
  ['SQL', 88],
  ['Machine Learning', 85],
  ['Deep Learning', 85],
  ['Power BI', 86],
  ['Data Visualization', 84],
  ['Database Systems', 86],
  ['Research Writing', 82],
];

const tools = [
  ['Python', Code2],
  ['SQL', Database],
  ['Excel', BarChart3],
  ['Power BI', BarChart3],
  ['HTML', Code2],
  ['CSS', Code2],
  ['JavaScript', Code2],
  ['React', Code2],
  ['GitHub', Github],
  ['Jupyter', Terminal],
];

const experiences = [
  {
    position: 'Associate',
    company: 'Quantanite',
    duration: '05/2025 - 08/2025',
    responsibilities: [
      'Processed and validated 10,000+ records weekly with 95%+ data accuracy.',
      'Built rule-based validation workflows for large-scale operational data.',
      'Identified recurring inconsistencies and improved verification efficiency.',
    ],
  },
  {
    position: 'Python Programming Trainer',
    company: 'Digicon Technologies',
    duration: '08/2023 - 04/2025',
    responsibilities: [
      'Designed and delivered Python curriculum for 270+ students.',
      'Taught algorithms, programming workflows, and analytical problem solving.',
      'Mentored students through practical coding and debugging sessions.',
    ],
  },
  {
    position: 'Database & Algorithm Lab Assistant',
    company: 'Daffodil International University',
    duration: '09/2021 - 12/2022',
    responsibilities: [
      'Guided students in relational database design and SQL optimization.',
      'Supported algorithm implementation with complexity analysis.',
      'Reinforced structured problem solving through lab instruction.',
    ],
  },
];

const projects = [
  {
    title: 'Enterprise Sales Analytics Dashboard',
    description:
      'Interactive Power BI dashboard with DAX-based KPIs for revenue, profit, return rate, and category performance.',
    tech: ['Power BI', 'DAX', 'Star Schema', 'Analytics'],
    metrics: ['DAX KPI layer', 'Automated reporting', 'Region/category insights'],
    link: `mailto:${profile.email}?subject=Enterprise Sales Analytics Dashboard case study`,
  },
  {
    title: 'Mango Leaf Disease Diagnostic System',
    description:
      'Deep learning pipeline for agricultural leaf disease detection using CNN transfer learning and optimized inference.',
    tech: ['PyTorch', 'CNN', 'Python', 'Deep Learning'],
    metrics: ['CNN transfer learning', '65% model-size reduction', 'Real-time diagnosis flow'],
    link: `mailto:${profile.email}?subject=Mango Leaf Disease Diagnostic System case study`,
  },
];

const certificates = [
  ['Machine Learning Specialization', 'Stanford Online & DeepLearning.AI', '2026'],
  ['Google Data Analytics Professional Certificate', 'Google Career Certificates', '2026'],
  ['Microsoft Certified: Power BI Data Analyst Associate', 'Microsoft', '2025'],
];

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function Section({ id, eyebrow, title, children }) {
  return (
    <motion.section
      id={id}
      className="section-shell"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10">
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
        </div>
        {children}
      </div>
    </motion.section>
  );
}

function CodeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.055)_1px,transparent_1px)] bg-[size:58px_58px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-cyan-400/10" />
      <div className="absolute left-[18%] top-[18%] h-12 w-12 rotate-12 rounded-lg border border-violet-400/10" />
      <div className="absolute right-[11%] top-[24%] h-24 w-24 rotate-12 rounded-[28px] border border-cyan-400/20" />
      <div className="absolute left-[30%] top-[32%] h-3 w-3 rounded-full bg-pink-400 shadow-[0_0_22px_rgba(244,114,182,0.9)]" />
      {snippets.map((snippet) => (
        <motion.div
          key={snippet.className}
          className={`code-snippet hidden lg:block ${snippet.className}`}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          {snippet.text.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

function HologramScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let cleanupScene = () => {};
    let isDisposed = false;

    import('three').then((THREE) => {
      if (isDisposed || !canvasRef.current) return;

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.set(0, 0.4, 7);

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

      const group = new THREE.Group();
      scene.add(group);

      const coreGeometry = new THREE.IcosahedronGeometry(1.42, 3);
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: 0x22d3ee,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      group.add(core);

      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.28,
      });

      const rings = [2.25, 2.8, 3.28].map((radius, index) => {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.01, 12, 160), ringMaterial.clone());
        ring.rotation.x = Math.PI / 2 + index * 0.42;
        ring.rotation.y = index * 0.52;
        group.add(ring);
        return ring;
      });

      const particleCount = 580;
      const positions = new Float32Array(particleCount * 3);
      for (let index = 0; index < particleCount; index += 1) {
        const radius = 2.2 + Math.random() * 2.2;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.68;
        positions[index * 3 + 2] = radius * Math.cos(phi);
      }

      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particles = new THREE.Points(
        particleGeometry,
        new THREE.PointsMaterial({
          color: 0x67e8f9,
          size: 0.018,
          transparent: true,
          opacity: 0.58,
        }),
      );
      group.add(particles);

      const pointer = { x: 0, y: 0 };

      function resize() {
        const { clientWidth, clientHeight } = canvas.parentElement;
        renderer.setSize(clientWidth, clientHeight, false);
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
      }

      function onPointerMove(event) {
        pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.35;
        pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.28;
      }

      let frameId = 0;
      const clock = new THREE.Clock();

      function animate() {
        const elapsed = clock.getElapsedTime();
        group.rotation.y = (reduceMotion ? 0.18 : elapsed * 0.13) + pointer.x;
        group.rotation.x = -0.18 + (reduceMotion ? 0 : Math.sin(elapsed * 0.35) * 0.08) + pointer.y;
        core.rotation.y = reduceMotion ? 0.4 : elapsed * 0.32;
        core.rotation.z = reduceMotion ? 0.1 : elapsed * 0.18;
        particles.rotation.y = reduceMotion ? 0 : -elapsed * 0.06;
        rings.forEach((ring, index) => {
          ring.rotation.z = reduceMotion ? index * 0.2 : elapsed * (0.16 + index * 0.04);
        });
        renderer.render(scene, camera);
        frameId = window.requestAnimationFrame(animate);
      }

      resize();
      animate();
      window.addEventListener('resize', resize);
      window.addEventListener('pointermove', onPointerMove);

      cleanupScene = () => {
        window.cancelAnimationFrame(frameId);
        window.removeEventListener('resize', resize);
        window.removeEventListener('pointermove', onPointerMove);
        coreGeometry.dispose();
        coreMaterial.dispose();
        rings.forEach((ring) => {
          ring.geometry.dispose();
          ring.material.dispose();
        });
        particleGeometry.dispose();
        particles.material.dispose();
        renderer.dispose();
      };
    });

    return () => {
      isDisposed = true;
      cleanupScene();
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[58vh] min-h-[460px] overflow-hidden opacity-55">
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/25 to-ink" />
    </div>
  );
}

function Navbar() {
  const [isDayMode, setIsDayMode] = useState(() => localStorage.getItem('portfolio-theme') === 'day');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('theme-day', isDayMode);
    localStorage.setItem('portfolio-theme', isDayMode ? 'day' : 'night');
  }, [isDayMode]);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 md:top-6">
      <div className="relative mx-auto flex min-h-[58px] max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/88 px-4 shadow-2xl shadow-black/20 backdrop-blur-xl md:rounded-full md:px-7">
        <a href="#home" className="text-sm font-black tracking-wide text-white lg:hidden">
          Fahim
        </a>
        <nav className="hidden flex-1 justify-center gap-7 text-sm font-bold text-slate-400 md:flex lg:gap-9 lg:text-[0.96rem]">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={isDayMode ? 'Switch to night view' : 'Switch to day view'}
            aria-pressed={isDayMode}
            onClick={() => setIsDayMode((current) => !current)}
            className="theme-toggle-btn"
          >
            {isDayMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="theme-toggle-btn md:hidden"
          >
            <Menu size={19} />
          </button>
        </div>
        <motion.nav
          initial={false}
          animate={isMenuOpen ? { opacity: 1, y: 0, pointerEvents: 'auto' } : { opacity: 0, y: -8, pointerEvents: 'none' }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 right-0 top-[68px] grid gap-2 rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-black/25 backdrop-blur-xl md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-bold text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item}
            </a>
          ))}
        </motion.nav>
      </div>
    </header>
  );
}

function SkillRail({ items, reverse = false }) {
  const repeated = [...items, ...items];
  return (
    <div className={`flex w-max gap-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
      {repeated.map(([name, value], index) => (
        <span key={`${name}-${index}`} className="skill-pill">
          <i className={reverse ? 'bg-fuchsia-500 shadow-fuchsia-500/60' : 'bg-blue-500 shadow-blue-500/60'} />
          {name}
          <b>{value}</b>
        </span>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pt-24 md:pt-32">
      <HologramScene />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 text-center sm:px-5 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="mx-auto flex max-w-4xl flex-col items-center"
        >
          <div className="relative z-20">
            <div className="rounded-full bg-[conic-gradient(from_180deg,#22d3ee,#7c3aed,#ec4899,#22d3ee)] p-2 shadow-[0_0_90px_rgba(124,58,237,0.32)]">
              <img
                src="/assets/profile.jpg"
                alt="Fahim Haque"
                className="relative z-10 h-32 w-32 rounded-full border border-white/15 bg-slate-950 object-cover sm:h-44 sm:w-44 md:h-48 md:w-48"
              />
            </div>
          </div>
          <div className="-mt-2 max-w-[92vw] rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-cyan-200 sm:px-4 sm:text-xs">
            Open to ML & Data Opportunities
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">{profile.name}</h1>
          <p className="mt-3 bg-gradient-to-r from-violet-300 via-cyan-200 to-emerald-300 bg-clip-text text-base font-extrabold text-transparent sm:text-xl md:text-2xl lg:text-3xl">
            {profile.title}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-lg md:text-xl md:leading-9">
            {profile.tagline}
          </p>
          <div className="mt-7 grid w-full max-w-sm grid-cols-1 gap-3 sm:max-w-none sm:grid-cols-2 md:flex md:flex-wrap md:justify-center">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>
            <a href="#contact" className="secondary-btn">
              <Mail size={18} />
              Contact Me
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="secondary-btn">
              <Github size={18} />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="secondary-btn">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </motion.div>
        <div className="mt-10 border-y border-white/10 py-5 md:mt-14 md:py-8">
          <SkillRail items={skillRailOne} />
          <div className="mt-5">
            <SkillRail items={skillRailTwo} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="Profile" title="About Me">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="premium-card p-8">
          <h3 className="text-2xl font-black text-white">Bridging Research & Application in AI</h3>
          <p className="mt-5 text-slate-300">
            I am a Computer Science graduate from Daffodil International University with academic, research, and teaching experience in machine learning, data analysis, and programming.
          </p>
          <p className="mt-4 text-slate-300">
            My work focuses on deep learning, predictive analytics, database systems, and business intelligence. I enjoy designing clean ML workflows, validating data, building dashboards, and turning complex datasets into useful insights.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {[
            ['Research Papers', '2'],
            ['Students Trained', '270+'],
            ['CGPA', '3.86 / 4.00'],
          ].map(([label, value]) => (
            <div key={label} className="premium-card p-6">
              <p className="text-3xl font-black text-white">{value}</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-wider text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Academic" title="Education">
      <div className="grid gap-5">
        {education.map((item) => (
          <div key={item.degree} className="premium-card p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-cyan-300">
                  <GraduationCap size={18} />
                  <span className="text-xs font-black uppercase tracking-[0.22em]">Bachelor's Degree</span>
                </div>
                <h3 className="mt-4 text-2xl font-black text-white">{item.degree}</h3>
                <p className="mt-2 text-slate-300">{item.institution}</p>
              </div>
              <span className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-300">{item.year}</span>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Result</p>
                <p className="mt-2 text-lg font-black text-white">{item.result}</p>
              </div>
              <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 p-4">
                <p className="text-sm font-bold uppercase tracking-wider text-cyan-200">Research</p>
                <p className="mt-2 text-lg font-black text-white">{item.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="My Skills">
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map(([name, value]) => (
          <div key={name} className="premium-card p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="font-extrabold text-white">{name}</p>
              <span className="text-sm font-bold text-slate-400">{value}%</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Tools() {
  return (
    <Section id="tools" eyebrow="Technology" title="Tools and Technology">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {tools.map(([name, Icon]) => (
          <div key={name} className="premium-card group p-5 transition hover:-translate-y-1 hover:border-cyan-400/30">
            <Icon className="text-cyan-300 transition group-hover:scale-110" size={24} />
            <p className="mt-4 font-extrabold text-white">{name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <div className="relative space-y-6 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-cyan-400/40 before:to-transparent">
        {experiences.map((item) => (
          <div key={item.position} className="relative pl-12">
            <div className="absolute left-0 top-6 grid h-8 w-8 place-items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
              <BriefcaseBusiness size={16} />
            </div>
            <div className="premium-card p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-black text-white">{item.position}</h3>
                  <p className="mt-1 text-slate-300">{item.company}</p>
                </div>
                <span className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-400">{item.duration}</span>
              </div>
              <ul className="mt-5 space-y-3 text-slate-300">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-3">
                    <ShieldCheck className="mt-0.5 shrink-0 text-cyan-300" size={18} />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="premium-card flex flex-col p-7">
            <div className="grid h-48 place-items-center rounded-lg border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.22),transparent_34%),radial-gradient(circle_at_78%_28%,rgba(6,182,212,0.18),transparent_36%),rgba(255,255,255,0.03)]">
              <Terminal className="text-cyan-200" size={46} />
            </div>
            <h3 className="mt-6 text-2xl font-black text-white">{project.title}</h3>
            <p className="mt-3 flex-1 text-slate-300">{project.description}</p>
            <div className="mt-5 grid gap-3">
              {project.metrics.map((metric) => (
                <div key={metric} className="flex items-center gap-3 rounded-lg border border-cyan-400/15 bg-cyan-400/5 px-4 py-3 text-sm font-bold text-slate-200">
                  <ShieldCheck className="shrink-0 text-cyan-300" size={17} />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/25 px-4 py-2 font-bold text-cyan-200 transition hover:bg-cyan-400/10">
              Request Case Study <ArrowUpRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Certificates() {
  return (
    <Section id="certificates" eyebrow="Credentials" title="Certificates">
      <div className="grid gap-5 md:grid-cols-3">
        {certificates.map(([name, org, year]) => (
          <div key={name} className="premium-card p-6">
            <Award className="text-cyan-300" size={28} />
            <h3 className="mt-5 text-xl font-black text-white">{name}</h3>
            <p className="mt-3 text-slate-300">{org}</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-wider text-slate-500">{year}</p>
            <a href={`mailto:${profile.email}?subject=Certificate verification: ${name}`} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-cyan-200">
              Request verification <ArrowUpRight size={15} />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(formData.get('subject') || 'Portfolio contact');
    const body = encodeURIComponent(`Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Get In Touch">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          {[
            [Mail, 'Email', profile.email],
            [Phone, 'Phone', profile.phone],
            [MapPin, 'Location', profile.location],
            [Linkedin, 'LinkedIn', 'linkedin.com/in/fahimhqmim'],
            [Github, 'GitHub', 'github.com/Meraz210'],
          ].map(([Icon, label, value]) => (
            <div key={label} className="premium-card flex items-center gap-4 p-5">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-400/10 text-cyan-200">
                <Icon size={21} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-slate-500">{label}</p>
                <p className="mt-1 font-bold text-white">{value}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="premium-card p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="field" name="name" placeholder="Your Name" required />
            <input className="field" type="email" name="email" placeholder="Your Email" required />
          </div>
          <input className="field mt-4" name="subject" placeholder="Subject" required />
          <textarea className="field mt-4 min-h-36 resize-y" name="message" placeholder="Message" required />
          <button type="submit" className="primary-btn mt-5 w-full justify-center">
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center text-sm text-slate-500 md:flex-row">
        <p>© 2026 {profile.name}. All rights reserved.</p>
        <div className="flex gap-5">
          <a href={profile.linkedin} className="transition hover:text-white">LinkedIn</a>
          <a href={profile.github} className="transition hover:text-white">GitHub</a>
          <a href={`mailto:${profile.email}`} className="transition hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-slate-100">
      <CodeBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Tools />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
