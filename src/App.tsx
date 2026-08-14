import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import Manufacturing from '@/pages/Manufacturing';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-charcoal-950 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="relative bg-charcoal-950 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-brick-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brick-700/10 blur-[120px] rounded-full" />
      <div className="relative container-max px-6 md:px-12 lg:px-20 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-lg bg-brick-700 flex items-center justify-center font-heading font-black text-white text-xl">S</div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-white text-lg">Safat Bricks</span>
                <span className="font-body text-[10px] text-white/50 tracking-[0.15em] uppercase">Safat Industries Pvt. Ltd.</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed font-body">{COMPANY.tagline}. Premium red clay bricks manufactured in Assam with year-round production and covered shed drying.</p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (<li key={link.path}><Link to={link.path} className="text-white/60 hover:text-brick-400 transition-colors text-sm font-body">{link.label}</Link></li>))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-3">
              <li className="text-white/60 text-sm font-body">No.1 Grade Premium</li>
              <li className="text-white/60 text-sm font-body">No.2 Grade Standard</li>
              <li className="text-white/60 text-sm font-body">No.3 Grade Economy</li>
              <li className="text-white/60 text-sm font-body">Size: 9 × 5 × 3.5 inches</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li><a href={`tel:${COMPANY.phone}`} className="flex items-start gap-3 text-white/60 hover:text-brick-400 transition-colors text-sm"><Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />{COMPANY.phone}</a></li>
              <li><a href={`https://wa.me/91${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/60 hover:text-brick-400 transition-colors text-sm"><MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />{COMPANY.whatsapp}</a></li>
              <li><a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 text-white/60 hover:text-brick-400 transition-colors text-sm break-all"><Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />{COMPANY.email}</a></li>
              <li className="flex items-start gap-3 text-white/60 text-sm"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />{COMPANY.address}</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-body text-center md:text-left">© {new Date().getFullYear()} Safat Industries Private Limited. All rights reserved.</p>
          <p className="text-white/40 text-xs font-body">Directors: {COMPANY.directors.join(' & ')}</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 text-white/60 hover:text-brick-400 transition-colors text-xs font-body">Back to top<ArrowUp className="w-3 h-3" /></button>
        </div>
      </div>
    </footer>
  );
}
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/91${COMPANY.whatsapp}?text=Hello%20Safat%20Bricks%2C%20I%20would%20like%20to%20get%20a%20quote.`}
      target="_blank" rel="noopener noreferrer"
      initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 group" aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/40 group-hover:shadow-[#25D366]/60 transition-shadow duration-300">
        <MessageCircle className="w-7 h-7 text-white" />
      </div>
      <motion.div initial={{ opacity: 0, x: 10 }} whileHover={{ opacity: 1, x: 0 }} className="absolute right-16 top-1/2 -translate-y-1/2 glass-dark px-4 py-2 rounded-lg whitespace-nowrap pointer-events-none">
        <span className="text-white text-sm font-body font-medium">Chat with us</span>
      </motion.div>
    </motion.a>
  );
}
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  eyebrow?: string;
}

export default function PageHero({ title, subtitle, image, eyebrow }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-900/70 to-charcoal-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/60 to-transparent" />
      </div>
      <div className="relative container-max px-6 md:px-12 lg:px-20 text-center pt-24 pb-12">
        {eyebrow && (
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="heading-eyebrow justify-center">
            <span className="w-8 h-px bg-brick-700" />{eyebrow}<span className="w-8 h-px bg-brick-700" />
          </motion.span>
        )}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-white text-balance leading-tight mb-6">{title}</motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-body text-lg text-white/70 max-w-2xl mx-auto text-balance">{subtitle}</motion.p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-charcoal-950 to-transparent" />
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, description, center }: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      {eyebrow && <span className={`heading-eyebrow ${center ? 'justify-center' : ''}`}><span className="w-8 h-px bg-brick-700" />{eyebrow}</span>}
      <h2 className="font-heading font-black text-3xl md:text-5xl text-white text-balance leading-tight mb-4">{title}</h2>
      {description && <p className={`font-body text-white/60 text-lg ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>{description}</p>}
    </div>
  );
}
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDays, Warehouse, Ruler, ShieldCheck, Truck, BadgeCheck, ArrowRight, Phone, MessageCircle, Flame, Layers, Factory } from 'lucide-react';
import { COMPANY, WHY_CHOOSE, PROCESS_STEPS, HERO_IMAGE } from '@/lib/constants';
import { SectionHeading } from '@/components/PageHero';

const iconMap: Record<string, typeof CalendarDays> = { CalendarDays, Warehouse, Ruler, ShieldCheck, Truck, BadgeCheck };
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }) };

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Brick manufacturing facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/85 to-charcoal-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/60" />
        </div>
        <div className="relative container-max px-6 md:px-12 lg:px-20 py-32">
          <div className="max-w-3xl">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="heading-eyebrow">
              <span className="w-8 h-px bg-brick-700" />Safat Industries Pvt. Ltd. · Assam, India
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-white text-balance leading-[1.05] mb-6">
              Premium Red Clay Bricks for <span className="text-gradient-brick">Stronger Foundations</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-heading text-xl md:text-2xl text-white/90 font-semibold mb-4">{COMPANY.tagline}</motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="font-body text-base md:text-lg text-white/60 max-w-2xl mb-10 leading-relaxed">{COMPANY.subheadline}</motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">Get Quote<ArrowRight className="w-5 h-5" /></Link>
              <a href={`https://wa.me/91${COMPANY.whatsapp}?text=Hello%20Safat%20Bricks%2C%20I%20would%20like%20to%20get%20a%20quote.`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><MessageCircle className="w-5 h-5" />WhatsApp Us</a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10">
              {[{ icon: Factory, label: 'Year-Round Production' }, { icon: Warehouse, label: 'Covered Shed Drying' }, { icon: ShieldCheck, label: 'Quality Controlled' }].map((item) => (
                <div key={item.label} className="flex items-center gap-2"><item.icon className="w-5 h-5 text-brick-700" /><span className="font-body text-sm text-white/70">{item.label}</span></div>
              ))}
            </motion.div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 h-1.5 rounded-full bg-white/60" />
          </div>
        </motion.div>
      </section>

      <section className="relative bg-charcoal-900 border-y border-white/10">
        <div className="container-max px-6 md:px-12 lg:px-20 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{ value: '365', label: 'Days of Production', suffix: '/yr' }, { value: '3', label: 'Brick Grades', suffix: '' }, { value: '9×5×3.5', label: 'Standard Size (in)', suffix: '' }, { value: '100%', label: 'Quality Inspected', suffix: '' }].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
                <div className="font-heading font-black text-3xl md:text-4xl text-gradient-brick mb-1">{stat.value}<span className="text-lg">{stat.suffix}</span></div>
                <div className="font-body text-xs md:text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative section-padding bg-charcoal-950">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brick-700/5 blur-[150px] rounded-full" />
        <div className="relative container-max">
          <SectionHeading center eyebrow="Why Choose Us" title={<>The Safat Bricks <span className="text-gradient-brick">Advantage</span></>} description="Every brick we produce carries the weight of our commitment to strength, consistency, and reliability." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="card-glass group">
                  <div className="w-14 h-14 rounded-xl bg-brick-700/15 flex items-center justify-center mb-5 group-hover:bg-brick-700/25 transition-colors duration-300"><Icon className="w-7 h-7 text-brick-700" /></div>
                  <h3 className="font-heading font-bold text-xl text-white mb-3">{item.title}</h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative section-padding bg-charcoal-900">
        <div className="container-max">
          <SectionHeading center eyebrow="Our Products" title={<>Premium Red Clay Bricks</>} description="Three grades engineered for every construction need — from load-bearing walls to economical filling." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{ name: 'No.1 Grade', tier: 'Premium', icon: Flame, highlight: true }, { name: 'No.2 Grade', tier: 'Standard', icon: Layers, highlight: false }, { name: 'No.3 Grade', tier: 'Economy', icon: Layers, highlight: false }].map((p, i) => (
              <motion.div key={p.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={`relative rounded-2xl p-8 border transition-all duration-500 ${p.highlight ? 'bg-gradient-to-br from-brick-700/20 to-charcoal-900 border-brick-700/40' : 'glass border-white/10 hover:border-brick-700/30'}`}>
                {p.highlight && <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brick-700 text-white text-xs font-heading font-semibold">Best Seller</span>}
                <p.icon className="w-10 h-10 text-brick-700 mb-4" />
                <h3 className="font-heading font-bold text-2xl text-white mb-1">{p.name}</h3>
                <p className="font-body text-sm text-white/50 uppercase tracking-wider mb-4">{p.tier} Grade</p>
                <p className="font-body text-white/60 text-sm mb-6">Size: 9 × 5 × 3.5 inches — Kiln fired for maximum strength and durability.</p>
                <Link to="/products" className="inline-flex items-center gap-2 text-brick-400 hover:text-brick-300 font-body text-sm font-semibold transition-colors">View Details<ArrowRight className="w-4 h-4" /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative section-padding bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0 bg-brick-pattern opacity-20" />
        <div className="relative container-max">
          <SectionHeading center eyebrow="Manufacturing Process" title={<>From Clay to <span className="text-gradient-brick">Construction</span></>} description="Seven precision-controlled stages that transform raw clay into bricks built for generations." />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div key={step.number} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="glass rounded-xl p-4 text-center group hover:border-brick-700/40 transition-all duration-300">
                <div className="font-heading font-black text-2xl text-brick-700/40 mb-2 group-hover:text-brick-700 transition-colors">{step.number}</div>
                <h4 className="font-heading font-semibold text-sm text-white leading-tight">{step.title}</h4>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10"><Link to="/manufacturing" className="btn-outline">Explore the Process<ArrowRight className="w-5 h-5" /></Link></div>
        </div>
      </section>

      <section className="relative section-padding bg-charcoal-900">
        <div className="container-max">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brick-800 to-brick-700" />
            <div className="absolute inset-0 bg-brick-pattern opacity-20" />
            <div className="relative px-8 md:px-16 py-16 md:py-20 text-center">
              <h2 className="font-heading font-black text-3xl md:text-5xl text-white text-balance mb-4">Ready to Build with Safat Bricks?</h2>
              <p className="font-body text-white/80 text-lg max-w-2xl mx-auto mb-8">Get a quote today and experience the difference of quality-controlled, year-round brick supply.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brick-800 font-heading font-semibold rounded-lg transition-all duration-300 hover:bg-white/90 hover:-translate-y-0.5">Get a Quote<ArrowRight className="w-5 h-5" /></Link>
                <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-heading font-semibold rounded-lg transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"><Phone className="w-5 h-5" />Call {COMPANY.phone}</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, Users, Factory, ShieldCheck, ArrowRight } from 'lucide-react';
import PageHero, { SectionHeading } from '@/components/PageHero';
import { COMPANY, ABOUT_HERO_IMAGE, ABOUT_IMAGE } from '@/lib/constants';

const VALUES = [
  { icon: Award, title: 'Uncompromising Quality', description: 'Every brick is inspected at multiple stages — we never compromise on strength or consistency.' },
  { icon: Factory, title: 'Modern Manufacturing', description: 'Year-round production with covered shed drying ensures supply regardless of weather.' },
  { icon: ShieldCheck, title: 'Built to Last', description: 'Our bricks are engineered for durability — strong foundations that stand for generations.' },
  { icon: Users, title: 'Customer First', description: 'Reliable bulk supply, transparent communication, and on-time delivery, every time.' },
];
const STATS = [{ value: '365', label: 'Days of Production', suffix: '/yr' }, { value: '3', label: 'Quality Grades', suffix: '' }, { value: '7', label: 'Process Stages', suffix: '' }, { value: '100%', label: 'Inspected', suffix: '' }];

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Building Assam's Foundation" subtitle="Safat Bricks — a unit of Safat Industries Private Limited — is committed to producing premium red clay bricks with precision, passion, and pride." image={ABOUT_HERO_IMAGE} />
      <section className="section-padding bg-charcoal-950">
        <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img src={ABOUT_IMAGE} alt="Safat Bricks manufacturing facility" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-dark rounded-2xl p-6 max-w-[200px]">
              <div className="font-heading font-black text-3xl text-gradient-brick mb-1">Est. Assam</div>
              <p className="font-body text-sm text-white/60">Proudly manufactured in Chaygaon, Assam</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="heading-eyebrow"><span className="w-8 h-px bg-brick-700" />Our Story</span>
            <h2 className="font-heading font-black text-3xl md:text-5xl text-white text-balance leading-tight mb-6">Crafting Bricks That <span className="text-gradient-brick">Endure</span></h2>
            <div className="space-y-4 font-body text-white/60 text-base leading-relaxed">
              <p>Safat Bricks is a unit of Safat Industries Private Limited, based in Chaygaon, Assam. We were founded on a simple belief: that the bricks holding up a home, a school, or a factory should be strong enough to outlast generations — not just seasons.</p>
              <p>Our facility combines time-honored brick-making traditions with modern, quality-controlled manufacturing. Year-round production and our covered shed drying system mean we deliver consistent, high-strength bricks regardless of weather — a critical advantage in Assam's climate.</p>
              <p>Under the leadership of our directors, <span className="text-white font-semibold">{COMPANY.directors.join(' and ')}</span>, Safat Bricks has grown into a trusted supplier for builders across the region, known for reliability, uniformity, and integrity.</p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-charcoal-900">
        <div className="container-max grid md:grid-cols-2 gap-6">
          {[{ icon: Target, title: 'Our Mission', text: 'To manufacture premium red clay bricks that set the regional standard for strength, uniformity, and reliability — supporting stronger, safer construction across Assam and beyond.' },
            { icon: Eye, title: 'Our Vision', text: "To be Northeast India's most trusted brick manufacturer, recognized for quality-controlled production, sustainable practices, and unwavering commitment to customer satisfaction." }
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="card-glass">
              <div className="w-14 h-14 rounded-xl bg-brick-700/15 flex items-center justify-center mb-5"><item.icon className="w-7 h-7 text-brick-700" /></div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">{item.title}</h3>
              <p className="font-body text-white/60 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="relative bg-charcoal-950 border-y border-white/10">
        <div className="container-max px-6 md:px-12 lg:px-20 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
                <div className="font-heading font-black text-4xl md:text-5xl text-gradient-brick mb-2">{stat.value}<span className="text-xl">{stat.suffix}</span></div>
                <div className="font-body text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-charcoal-950">
        <div className="container-max">
          <SectionHeading center eyebrow="Our Values" title={<>What Drives Us Forward</>} description="The principles behind every brick we manufacture." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-glass flex gap-5 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-brick-700/15 flex items-center justify-center"><value.icon className="w-7 h-7 text-brick-700" /></div>
                <div><h3 className="font-heading font-bold text-xl text-white mb-2">{value.title}</h3><p className="font-body text-white/60 text-sm leading-relaxed">{value.description}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-charcoal-900">
        <div className="container-max">
          <SectionHeading center eyebrow="Leadership" title={<>Meet Our Directors</>} description="The vision and integrity behind Safat Bricks." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {COMPANY.directors.map((director, i) => (
              <motion.div key={director} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-glass text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brick-700 to-brick-800 flex items-center justify-center font-heading font-black text-3xl text-white mx-auto mb-5">{director.charAt(0)}</div>
                <h3 className="font-heading font-bold text-2xl text-white mb-1">{director}</h3>
                <p className="font-body text-sm text-white/50 uppercase tracking-wider">Director</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-charcoal-950">
        <div className="container-max text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-heading font-black text-3xl md:text-5xl text-white text-balance mb-4">Partner with a Manufacturer You Can Trust</h2>
            <p className="font-body text-white/60 text-lg max-w-2xl mx-auto mb-8">Discover why builders across Assam choose Safat Bricks for their construction needs.</p>
            <Link to="/products" className="btn-primary">Explore Our Products<ArrowRight className="w-5 h-5" /></Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, Users, Factory, ShieldCheck, ArrowRight } from 'lucide-react';
import PageHero, { SectionHeading } from '@/components/PageHero';
import { COMPANY, ABOUT_HERO_IMAGE, ABOUT_IMAGE } from '@/lib/constants';

const VALUES = [
  { icon: Award, title: 'Uncompromising Quality', description: 'Every brick is inspected at multiple stages — we never compromise on strength or consistency.' },
  { icon: Factory, title: 'Modern Manufacturing', description: 'Year-round production with covered shed drying ensures supply regardless of weather.' },
  { icon: ShieldCheck, title: 'Built to Last', description: 'Our bricks are engineered for durability — strong foundations that stand for generations.' },
  { icon: Users, title: 'Customer First', description: 'Reliable bulk supply, transparent communication, and on-time delivery, every time.' },
];
const STATS = [{ value: '365', label: 'Days of Production', suffix: '/yr' }, { value: '3', label: 'Quality Grades', suffix: '' }, { value: '7', label: 'Process Stages', suffix: '' }, { value: '100%', label: 'Inspected', suffix: '' }];

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Building Assam's Foundation" subtitle="Safat Bricks — a unit of Safat Industries Private Limited — is committed to producing premium red clay bricks with precision, passion, and pride." image={ABOUT_HERO_IMAGE} />
      <section className="section-padding bg-charcoal-950">
        <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img src={ABOUT_IMAGE} alt="Safat Bricks manufacturing facility" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-dark rounded-2xl p-6 max-w-[200px]">
              <div className="font-heading font-black text-3xl text-gradient-brick mb-1">Est. Assam</div>
              <p className="font-body text-sm text-white/60">Proudly manufactured in Chaygaon, Assam</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="heading-eyebrow"><span className="w-8 h-px bg-brick-700" />Our Story</span>
            <h2 className="font-heading font-black text-3xl md:text-5xl text-white text-balance leading-tight mb-6">Crafting Bricks That <span className="text-gradient-brick">Endure</span></h2>
            <div className="space-y-4 font-body text-white/60 text-base leading-relaxed">
              <p>Safat Bricks is a unit of Safat Industries Private Limited, based in Chaygaon, Assam. We were founded on a simple belief: that the bricks holding up a home, a school, or a factory should be strong enough to outlast generations — not just seasons.</p>
              <p>Our facility combines time-honored brick-making traditions with modern, quality-controlled manufacturing. Year-round production and our covered shed drying system mean we deliver consistent, high-strength bricks regardless of weather — a critical advantage in Assam's climate.</p>
              <p>Under the leadership of our directors, <span className="text-white font-semibold">{COMPANY.directors.join(' and ')}</span>, Safat Bricks has grown into a trusted supplier for builders across the region, known for reliability, uniformity, and integrity.</p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-charcoal-900">
        <div className="container-max grid md:grid-cols-2 gap-6">
          {[{ icon: Target, title: 'Our Mission', text: 'To manufacture premium red clay bricks that set the regional standard for strength, uniformity, and reliability — supporting stronger, safer construction across Assam and beyond.' },
            { icon: Eye, title: 'Our Vision', text: "To be Northeast India's most trusted brick manufacturer, recognized for quality-controlled production, sustainable practices, and unwavering commitment to customer satisfaction." }
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="card-glass">
              <div className="w-14 h-14 rounded-xl bg-brick-700/15 flex items-center justify-center mb-5"><item.icon className="w-7 h-7 text-brick-700" /></div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">{item.title}</h3>
              <p className="font-body text-white/60 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="relative bg-charcoal-950 border-y border-white/10">
        <div className="container-max px-6 md:px-12 lg:px-20 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
                <div className="font-heading font-black text-4xl md:text-5xl text-gradient-brick mb-2">{stat.value}<span className="text-xl">{stat.suffix}</span></div>
                <div className="font-body text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-charcoal-950">
        <div className="container-max">
          <SectionHeading center eyebrow="Our Values" title={<>What Drives Us Forward</>} description="The principles behind every brick we manufacture." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-glass flex gap-5 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-brick-700/15 flex items-center justify-center"><value.icon className="w-7 h-7 text-brick-700" /></div>
                <div><h3 className="font-heading font-bold text-xl text-white mb-2">{value.title}</h3><p className="font-body text-white/60 text-sm leading-relaxed">{value.description}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-charcoal-900">
        <div className="container-max">
          <SectionHeading center eyebrow="Leadership" title={<>Meet Our Directors</>} description="The vision and integrity behind Safat Bricks." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {COMPANY.directors.map((director, i) => (
              <motion.div key={director} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-glass text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brick-700 to-brick-800 flex items-center justify-center font-heading font-black text-3xl text-white mx-auto mb-5">{director.charAt(0)}</div>
                <h3 className="font-heading font-bold text-2xl text-white mb-1">{director}</h3>
                <p className="font-body text-sm text-white/50 uppercase tracking-wider">Director</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-charcoal-950">
        <div className="container-max text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-heading font-black text-3xl md:text-5xl text-white text-balance mb-4">Partner with a Manufacturer You Can Trust</h2>
            <p className="font-body text-white/60 text-lg max-w-2xl mx-auto mb-8">Discover why builders across Assam choose Safat Bricks for their construction needs.</p>
            <Link to="/products" className="btn-primary">Explore Our Products<ArrowRight className="w-5 h-5" /></Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Ruler, Flame, Droplets, Palette, Shield, ArrowRight, MessageCircle } from 'lucide-react';
import PageHero, { SectionHeading } from '@/components/PageHero';
import { PRODUCTS, COMPANY, PRODUCTS_HERO_IMAGE } from '@/lib/constants';

const specIcon: Record<string, typeof Ruler> = { Size: Ruler, Grade: Shield, Colour: Palette, 'Compressive Strength': Flame, 'Water Absorption': Droplets, Firing: Flame };

export default function Products() {
  return (
    <>
      <PageHero eyebrow="Our Products" title="Premium Red Clay Bricks" subtitle="Three grades of kiln-fired red clay bricks — engineered for strength, uniformity, and durability. Available in bulk supply year-round." image={PRODUCTS_HERO_IMAGE} />
      <section className="section-padding bg-charcoal-950">
        <div className="container-max">
          <SectionHeading center eyebrow="Brick Grades" title={<>Choose the Right <span className="text-gradient-brick">Grade</span></>} description="Every brick is 9 × 5 × 3.5 inches and kiln-fired. Choose the grade that fits your construction needs." />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product, i) => (
              <motion.div key={product.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className={`relative rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-1 ${product.tier === 'Premium' ? 'bg-gradient-to-b from-brick-700/15 to-charcoal-900 border-brick-700/40 shadow-lg shadow-brick-700/10' : 'glass border-white/10 hover:border-brick-700/30'}`}>
                {product.badge && <div className="absolute top-0 right-0 bg-brick-700 text-white text-xs font-heading font-bold px-4 py-2 rounded-bl-lg">{product.badge}</div>}
                <div className="p-8">
                  <p className="font-body text-xs text-brick-400 uppercase tracking-[0.2em] mb-2">{product.tier} Grade</p>
                  <h3 className="font-heading font-black text-3xl text-white mb-4">{product.name}</h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed mb-6">{product.description}</p>
                  <div className="space-y-3 mb-6">
                    {product.specs.map((spec) => {
                      const Icon = specIcon[spec.label] || Ruler;
                      return (
                        <div key={spec.label} className="flex items-center justify-between py-2 border-b border-white/5">
                          <span className="flex items-center gap-2 font-body text-sm text-white/50"><Icon className="w-4 h-4 text-brick-700/70" />{spec.label}</span>
                          <span className="font-heading font-semibold text-sm text-white">{spec.value}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.features.map((feature) => (
                      <span key={feature} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-body text-white/70"><Check className="w-3 h-3 text-brick-400" />{feature}</span>
                    ))}
                  </div>
                  <Link to="/contact" className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-heading font-semibold text-sm transition-all duration-300 ${product.tier === 'Premium' ? 'bg-brick-700 text-white hover:bg-brick-600' : 'border-2 border-white/20 text-white hover:border-brick-700 hover:bg-brick-700/10'}`}>Request Quote<ArrowRight className="w-4 h-4" /></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-charcoal-900">
        <div className="container-max">
          <SectionHeading center eyebrow="Specifications" title={<>Technical Specifications</>} description="A detailed comparison of our three brick grades." />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-5 font-heading font-bold text-sm text-white/50 uppercase tracking-wider">Property</th>
                    {PRODUCTS.map((p) => (<th key={p.name} className="text-center p-5 font-heading font-bold text-base text-white">{p.name}</th>))}
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS[0].specs.map((spec, rowIdx) => (
                    <tr key={spec.label} className={`border-b border-white/5 ${rowIdx % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                      <td className="p-5 font-body text-sm text-white/60">{spec.label}</td>
                      {PRODUCTS.map((p) => {
                        const val = p.specs.find((s) => s.label === spec.label)?.value || '—';
                        return (<td key={p.name} className="text-center p-5 font-heading font-semibold text-sm text-white">{val}</td>);
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-charcoal-950">
        <div className="container-max">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brick-800 to-brick-700" />
            <div className="absolute inset-0 bg-brick-pattern opacity-20" />
            <div className="relative px-8 md:px-16 py-14 text-center">
              <h2 className="font-heading font-black text-2xl md:text-4xl text-white text-balance mb-4">Need a Custom Bulk Order?</h2>
              <p className="font-body text-white/80 text-base max-w-2xl mx-auto mb-8">Contact us for bulk pricing, delivery options, and grade recommendations for your project.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brick-800 font-heading font-semibold rounded-lg transition-all duration-300 hover:bg-white/90 hover:-translate-y-0.5">Get a Quote<ArrowRight className="w-5 h-5" /></Link>
                <a href={`https://wa.me/91${COMPANY.whatsapp}?text=Hello%20Safat%20Bricks%2C%20I%20would%20like%20to%20get%20a%20quote.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-heading font-semibold rounded-lg transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"><MessageCircle className="w-5 h-5" />WhatsApp Us</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
import { motion } from 'framer-motion';
import { Mountain, Droplets, Box, Warehouse, Flame, Search, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero, { SectionHeading } from '@/components/PageHero';
import { PROCESS_STEPS, MANUFACTURING_HERO_IMAGE } from '@/lib/constants';

const iconMap: Record<string, typeof Mountain> = { Mountain, Droplets, Box, Warehouse, Flame, Search, Truck };

export default function Manufacturing() {
  return (
    <>
      <PageHero eyebrow="Manufacturing Process" title="From Earth to Brick" subtitle="Seven precision-controlled stages transform raw Assam clay into premium red clay bricks — built for strength and consistency." image={MANUFACTURING_HERO_IMAGE} />
      <section className="section-padding bg-charcoal-950">
        <div className="container-max">
          <SectionHeading center eyebrow="The Process" title={<>Seven Stages of <span className="text-gradient-brick">Excellence</span></>} description="Each stage is carefully controlled to produce bricks of consistent quality, strength, and durability." />
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brick-700/60 via-brick-700/20 to-transparent md:-translate-x-px" />
            <div className="space-y-12">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = iconMap[step.icon];
                const isLeft = i % 2 === 0;
                return (
                  <motion.div key={step.number} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6 }} className={`relative flex items-center gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                      <div className="w-16 h-16 rounded-full bg-brick-700 flex items-center justify-center shadow-lg shadow-brick-700/30 ring-4 ring-charcoal-950"><Icon className="w-7 h-7 text-white" /></div>
                    </div>
                    <div className={`w-full md:w-[calc(50%-3rem)] pl-28 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="card-glass">
                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
                          <span className="font-heading font-black text-4xl text-brick-700/30">{step.number}</span>
                          <h3 className="font-heading font-bold text-xl text-white">{step.title}</h3>
                        </div>
                        <p className="font-body text-white/60 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block w-[calc(50%-3rem)]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-charcoal-900">
        <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-2xl overflow-hidden">
            <img src="https://images.pexels.com/photos/29546409/pexels-photo-29546409.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Covered shed drying" className="w-full h-[450px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 to-transparent" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="heading-eyebrow"><span className="w-8 h-px bg-brick-700" />Our Edge</span>
            <h2 className="font-heading font-black text-3xl md:text-5xl text-white text-balance leading-tight mb-6">The <span className="text-gradient-brick">Covered Shed</span> Difference</h2>
            <p className="font-body text-white/60 leading-relaxed mb-6">Traditional brick manufacturing depends on fair weather — rain and harsh sun can crack or weaken green bricks during drying. Our covered shed drying system eliminates this vulnerability.</p>
            <ul className="space-y-4">
              {['Weather-independent drying ensures consistent quality year-round', 'Controlled moisture loss prevents cracking and warping', 'Uniform drying produces bricks with consistent strength', 'Year-round production means reliable supply for your project'].map((point, i) => (
                <motion.li key={point} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brick-700/20 flex items-center justify-center mt-0.5"><div className="w-2 h-2 rounded-full bg-brick-700" /></div>
                  <span className="font-body text-white/70 text-sm">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-charcoal-950">
        <div className="container-max text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-heading font-black text-3xl md:text-5xl text-white text-balance mb-4">See Our Bricks in Action</h2>
            <p className="font-body text-white/60 text-lg max-w-2xl mx-auto mb-8">Explore our gallery to see the Safat Bricks manufacturing facility and products.</p>
            <Link to="/gallery" className="btn-primary">View Gallery<ArrowRight className="w-5 h-5" /></Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import PageHero, { SectionHeading } from '@/components/PageHero';
import { GALLERY_IMAGES, GALLERY_HERO_IMAGE } from '@/lib/constants';

const CATEGORIES = ['All', 'Production', 'Drying', 'Kiln', 'Molding', 'Inventory', 'Facility'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = activeCategory === 'All' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <>
      <PageHero eyebrow="Gallery" title="Inside Our Facility" subtitle="A visual journey through the Safat Bricks manufacturing process — from raw clay to finished, kiln-fired bricks ready for dispatch." image={GALLERY_HERO_IMAGE} />
      <section className="section-padding bg-charcoal-950">
        <div className="container-max">
          <SectionHeading center eyebrow="Photo Gallery" title={<>Our Work in <span className="text-gradient-brick">Focus</span></>} description="Browse through images of our manufacturing facility, drying sheds, kiln, and finished products." />
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 ${activeCategory === cat ? 'bg-brick-700 text-white shadow-lg shadow-brick-700/30' : 'glass text-white/60 hover:text-white hover:border-brick-700/30'}`}>{cat}</button>
            ))}
          </div>
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            <AnimatePresence>
              {filtered.map((image, i) => (
                <motion.div key={image.src} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="relative group rounded-2xl overflow-hidden break-inside-avoid cursor-pointer" onClick={() => setLightbox(image.src)}>
                  <img src={image.src} alt={image.alt} loading="lazy" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-brick-700/80 text-white text-xs font-heading font-semibold mb-2">{image.category}</span>
                    <p className="font-body text-sm text-white/80">{image.alt}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"><ZoomIn className="w-5 h-5 text-white" /></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)} className="fixed inset-0 z-[60] bg-charcoal-950/90 backdrop-blur-md flex items-center justify-center p-6">
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-white hover:bg-brick-700 transition-colors"><X className="w-6 h-6" /></button>
            <motion.img initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3 }} src={lightbox} alt="Gallery enlarged view" className="max-w-full max-h-[85vh] rounded-2xl object-contain" onClick={(e) => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, User, Building, CheckCircle2 } from 'lucide-react';
import PageHero, { SectionHeading } from '@/components/PageHero';
import { COMPANY, CONTACT_HERO_IMAGE } from '@/lib/constants';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote Request from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactCards = [
    { icon: Phone, label: 'Phone', value: COMPANY.phone, href: `tel:${COMPANY.phone}`, color: 'text-brick-400' },
    { icon: MessageCircle, label: 'WhatsApp', value: COMPANY.whatsapp, href: `https://wa.me/91${COMPANY.whatsapp}`, color: 'text-[#25D366]' },
    { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}`, color: 'text-blue-400' },
    { icon: MapPin, label: 'Address', value: COMPANY.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`, color: 'text-amber-400' },
  ];

  return (
    <>
      <PageHero eyebrow="Contact Us" title="Get in Touch" subtitle="Ready to order or need a quote? Reach out via phone, WhatsApp, email, or the form below — we're here to help." image={CONTACT_HERO_IMAGE} />
      <section className="section-padding bg-charcoal-950">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactCards.map((card, i) => (
              <motion.a key={card.label} href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-glass group block">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-brick-700/15 transition-colors duration-300"><card.icon className={`w-7 h-7 ${card.color}`} /></div>
                <p className="font-body text-xs text-white/40 uppercase tracking-wider mb-1">{card.label}</p>
                <p className="font-heading font-semibold text-white text-sm break-words">{card.value}</p>
              </motion.a>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass rounded-2xl p-8">
              <h3 className="font-heading font-bold text-2xl text-white mb-2">Request a Quote</h3>
              <p className="font-body text-sm text-white/50 mb-6">Fill in the form and we'll get back to you with pricing and availability.</p>
              {submitted && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20 mb-6">
                  <CheckCircle2 className="w-5 h-5 text-green-400" /><span className="font-body text-sm text-green-400">Your email client is opening with your message ready to send.</span>
                </motion.div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-body text-sm text-white/60 mb-2">Full Name</label>
                  <div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" /><input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 font-body text-sm focus:outline-none focus:border-brick-700/50 focus:bg-white/[0.07] transition-all" placeholder="Enter your name" /></div>
                </div>
                <div>
                  <label className="block font-body text-sm text-white/60 mb-2">Email Address</label>
                  <div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" /><input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 font-body text-sm focus:outline-none focus:border-brick-700/50 focus:bg-white/[0.07] transition-all" placeholder="you@example.com" /></div>
                </div>
                <div>
                  <label className="block font-body text-sm text-white/60 mb-2">Phone Number</label>
                  <div className="relative"><Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" /><input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 font-body text-sm focus:outline-none focus:border-brick-700/50 focus:bg-white/[0.07] transition-all" placeholder="Your phone number" /></div>
                </div>
                <div>
                  <label className="block font-body text-sm text-white/60 mb-2">Message</label>
                  <div className="relative"><Building className="absolute left-4 top-4 w-5 h-5 text-white/30" /><textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 font-body text-sm focus:outline-none focus:border-brick-700/50 focus:bg-white/[0.07] transition-all resize-none" placeholder="Tell us about your project and brick requirements..." /></div>
                </div>
                <button type="submit" className="btn-primary w-full">Send Request<Send className="w-5 h-5" /></button>
              </form>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-6">
              <div className="glass rounded-2xl overflow-hidden flex-1 min-h-[300px]">
                <iframe title="Safat Bricks Location" src={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY.address)}&output=embed`} width="100%" height="100%" style={{ border: 0, minHeight: '300px' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <div className="glass rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl text-white mb-4">Visit Our Facility</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-brick-400 mt-0.5 flex-shrink-0" /><p className="font-body text-sm text-white/60">{COMPANY.address}</p></div>
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-brick-400 flex-shrink-0" /><a href={`tel:${COMPANY.phone}`} className="font-body text-sm text-white/60 hover:text-white transition-colors">{COMPANY.phone}</a></div>
                  <div className="flex items-center gap-3"><MessageCircle className="w-5 h-5 text-[#25D366] flex-shrink-0" /><a href={`https://wa.me/91${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/60 hover:text-white transition-colors">{COMPANY.whatsapp}</a></div>
                </div>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-brick-400 hover:text-brick-300 font-body text-sm font-semibold transition-colors">Open in Google Maps<MapPin className="w-4 h-4" /></a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, User, Building, CheckCircle2 } from 'lucide-react';
import PageHero, { SectionHeading } from '@/components/PageHero';
import { COMPANY, CONTACT_HERO_IMAGE } from '@/lib/constants';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote Request from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactCards = [
    { icon: Phone, label: 'Phone', value: COMPANY.phone, href: `tel:${COMPANY.phone}`, color: 'text-brick-400' },
    { icon: MessageCircle, label: 'WhatsApp', value: COMPANY.whatsapp, href: `https://wa.me/91${COMPANY.whatsapp}`, color: 'text-[#25D366]' },
    { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}`, color: 'text-blue-400' },
    { icon: MapPin, label: 'Address', value: COMPANY.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`, color: 'text-amber-400' },
  ];

  return (
    <>
      <PageHero eyebrow="Contact Us" title="Get in Touch" subtitle="Ready to order or need a quote? Reach out via phone, WhatsApp, email, or the form below — we're here to help." image={CONTACT_HERO_IMAGE} />
      <section className="section-padding bg-charcoal-950">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactCards.map((card, i) => (
              <motion.a key={card.label} href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-glass group block">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-brick-700/15 transition-colors duration-300"><card.icon className={`w-7 h-7 ${card.color}`} /></div>
                <p className="font-body text-xs text-white/40 uppercase tracking-wider mb-1">{card.label}</p>
                <p className="font-heading font-semibold text-white text-sm break-words">{card.value}</p>
              </motion.a>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass rounded-2xl p-8">
              <h3 className="font-heading font-bold text-2xl text-white mb-2">Request a Quote</h3>
              <p className="font-body text-sm text-white/50 mb-6">Fill in the form and we'll get back to you with pricing and availability.</p>
              {submitted && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20 mb-6">
                  <CheckCircle2 className="w-5 h-5 text-green-400" /><span className="font-body text-sm text-green-400">Your email client is opening with your message ready to send.</span>
                </motion.div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-body text-sm text-white/60 mb-2">Full Name</label>
                  <div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" /><input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 font-body text-sm focus:outline-none focus:border-brick-700/50 focus:bg-white/[0.07] transition-all" placeholder="Enter your name" /></div>
                </div>
                <div>
                  <label className="block font-body text-sm text-white/60 mb-2">Email Address</label>
                  <div className="relative"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" /><input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 font-body text-sm focus:outline-none focus:border-brick-700/50 focus:bg-white/[0.07] transition-all" placeholder="you@example.com" /></div>
                </div>
                <div>
                  <label className="block font-body text-sm text-white/60 mb-2">Phone Number</label>
                  <div className="relative"><Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" /><input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 font-body text-sm focus:outline-none focus:border-brick-700/50 focus:bg-white/[0.07] transition-all" placeholder="Your phone number" /></div>
                </div>
                <div>
                  <label className="block font-body text-sm text-white/60 mb-2">Message</label>
                  <div className="relative"><Building className="absolute left-4 top-4 w-5 h-5 text-white/30" /><textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 font-body text-sm focus:outline-none focus:border-brick-700/50 focus:bg-white/[0.07] transition-all resize-none" placeholder="Tell us about your project and brick requirements..." /></div>
                </div>
                <button type="submit" className="btn-primary w-full">Send Request<Send className="w-5 h-5" /></button>
              </form>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-6">
              <div className="glass rounded-2xl overflow-hidden flex-1 min-h-[300px]">
                <iframe title="Safat Bricks Location" src={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY.address)}&output=embed`} width="100%" height="100%" style={{ border: 0, minHeight: '300px' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <div className="glass rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl text-white mb-4">Visit Our Facility</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-brick-400 mt-0.5 flex-shrink-0" /><p className="font-body text-sm text-white/60">{COMPANY.address}</p></div>
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-brick-400 flex-shrink-0" /><a href={`tel:${COMPANY.phone}`} className="font-body text-sm text-white/60 hover:text-white transition-colors">{COMPANY.phone}</a></div>
                  <div className="flex items-center gap-3"><MessageCircle className="w-5 h-5 text-[#25D366] flex-shrink-0" /><a href={`https://wa.me/91${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/60 hover:text-white transition-colors">{COMPANY.whatsapp}</a></div>
                </div>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-brick-400 hover:text-brick-300 font-body text-sm font-semibold transition-colors">Open in Google Maps<MapPin className="w-4 h-4" /></a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
