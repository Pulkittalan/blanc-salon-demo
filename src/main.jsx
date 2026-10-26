import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDownRight, ArrowRight, Menu, X, Instagram, MapPin, Clock, Phone, Sparkles, Scissors, Heart, Star } from 'lucide-react'
import './styles.css'

const services = [
  { no: '01', name: 'The signature cut', detail: 'A cut shaped around you, finished with a soft, effortless blow-dry.', time: '45–60 min', price: 'From ₹900' },
  { no: '02', name: 'Colour & dimension', detail: 'Thoughtful colour, lived-in highlights and glossy, healthy-looking tones.', time: '90–180 min', price: 'From ₹2,500' },
  { no: '03', name: 'Rituals & repair', detail: 'Restorative treatments that bring softness, shine and movement back.', time: '30–45 min', price: 'From ₹1,200' },
  { no: '04', name: 'Event styling', detail: 'Polished, romantic or undone. Styling that feels unmistakably you.', time: '45–75 min', price: 'From ₹1,500' },
]
const looks = [
  { title: 'Soft layers', category: 'CUT & STYLE', image: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=85' },
  { title: 'Warm dimension', category: 'COLOUR', image: 'https://images.unsplash.com/photo-1519696329106-8b7e6f7f7f0d?auto=format&fit=crop&w=900&q=85' },
  { title: 'The glossy finish', category: 'CARE', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(0)
  const closeMenu = () => setMenuOpen(false)
  const reveal = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: .65, ease: [0.22, 1, 0.36, 1] } } }
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); closeMenu() }

  return <div className="site-shell">
    <div className="topline"><span>GOOD HAIR DAYS START HERE</span><span className="topline-right"><MapPin size={12}/> New Delhi, India <span className="topline-dot">•</span> By appointment</span></div>
    <header className="header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Blanc Salon home"><span className="brand-mark">L<span>.</span></span><span className="brand-name">blanc <small>STUDIO</small></span></a>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        <a href="#about" onClick={closeMenu}>Our story</a><a href="#services" onClick={closeMenu}>Services</a><a href="#looks" onClick={closeMenu}>The lookbook</a><a href="#visit" onClick={closeMenu}>Find us</a>
        <button className="mobile-book" onClick={() => scrollTo('visit')}>Book a visit <ArrowRight size={15}/></button>
      </nav>
      <button className="header-cta" onClick={() => scrollTo('visit')}>Book an appointment <ArrowDownRight size={16}/></button>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}><span className="eyebrow-line"/> YOUR HAIR, YOUR KIND OF BEAUTIFUL</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .2 }}>A little time<br/>for <em>yourself.</em></motion.h1>
          <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>Considered cuts, beautiful colour, and the kind of care that lets you feel like you.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 }}>
            <button className="button-dark" onClick={() => scrollTo('services')}>Explore our services <ArrowRight size={16}/></button>
            <span className="hero-note"><span className="note-star">✳</span> A slower kind of salon</span>
          </motion.div>
          <div className="hero-bottom"><div className="rating-stars"><Star/><Star/><Star/><Star/><Star/></div><span>Personal care, never one-size-fits-all.</span></div>
        </div>
        <div className="hero-visual">
          <motion.div className="hero-image" initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0 0 0% 0)' }} transition={{ duration: 1.1, delay: .25, ease: 'easeInOut' }}>
            <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=90" alt="Editorial portrait with natural, effortless styling"/>
          </motion.div>
          <div className="image-label"><span>01 / 03</span><span>EFFORTLESS, ALWAYS</span></div>
          <div className="floating-note"><Sparkles size={17}/><span>Feel good<br/><em>in your own skin.</em></span></div>
          <div className="vertical-caption">THE BLANC EXPERIENCE — EST. WITH CARE</div>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO DISCOVER</span><ArrowDownRight size={16}/></a>
      </section>

      <section className="intro-section section-pad" id="about">
        <motion.div className="section-kicker" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}><span>01</span> A DIFFERENT KIND OF SALON</motion.div>
        <div className="intro-grid">
          <motion.h2 variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>Beauty that feels<br/><em>like you.</em></motion.h2>
          <motion.div className="intro-text" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p>We believe your best look is the one that feels like you on your very best day. No pressure, no trends for the sake of it — just good conversations, considered craft and hair that works for real life.</p>
            <a className="text-link" href="#visit">Come as you are <ArrowRight size={15}/></a>
          </motion.div>
        </div>
        <div className="values-row">
          <div className="value"><span className="value-icon"><Scissors size={20}/></span><div><h3>Thoughtful craft</h3><p>Every detail, considered.</p></div></div>
          <div className="value"><span className="value-icon"><Heart size={20}/></span><div><h3>Personal by nature</h3><p>Your hair, your rhythm.</p></div></div>
          <div className="value"><span className="value-icon"><Sparkles size={20}/></span><div><h3>Care that lasts</h3><p>Healthy hair comes first.</p></div></div>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="services-head">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}><div className="section-kicker light"><span>02</span> THE MENU</div><h2>Good hair.<br/><em>Good energy.</em></h2></motion.div>
          <motion.p variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>A little refresh or a whole new chapter. We’ll find the right service for where you are right now.</motion.p>
        </div>
        <div className="service-list">{services.map((service, i) => <motion.div className="service-row" key={service.no} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * .07 }}>
          <span className="service-no">{service.no}</span><div className="service-main"><h3>{service.name}</h3><p>{service.detail}</p></div><span className="service-time">{service.time}</span><span className="service-price">{service.price}</span><button className="service-arrow" onClick={() => scrollTo('visit')} aria-label={`Enquire about ${service.name}`}><ArrowUpRightIcon/></button>
        </motion.div>)}</div>
        <div className="services-foot"><span>Not sure what you need? That’s what the consultation is for.</span><button className="button-outline" onClick={() => scrollTo('visit')}>Let’s talk <ArrowRight size={15}/></button></div>
      </section>

      <section className="lookbook section-pad" id="looks">
        <div className="lookbook-head"><div><div className="section-kicker"><span>03</span> A LITTLE INSPIRATION</div><h2>The lookbook<span>.</span></h2></div><p>Real-life hair, with room for your own twist.</p></div>
        <div className="look-grid">{looks.map((look, i) => <motion.article className={`look-card look-card-${i + 1}`} key={look.title} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * .12 }}>
          <div className="look-image"><img src={look.image} alt={`${look.title} salon inspiration`} loading="lazy"/><span className="look-number">0{i + 1}</span><button className="look-open" onClick={() => scrollTo('visit')} aria-label={`Ask us about ${look.title}`}><ArrowDownRight size={19}/></button></div>
          <div className="look-caption"><div><span>{look.category}</span><h3>{look.title}</h3></div><span className="look-caption-arrow">↗</span></div>
        </motion.article>)}</div>
      </section>

      <section className="quote-section">
        <div className="quote-ornament">“</div><motion.blockquote variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>The best hair doesn’t just look good.<br/>It <em>feels like you.</em></motion.blockquote><span className="quote-byline">THE BLANC PHILOSOPHY</span>
      </section>

      <section className="visit-section section-pad" id="visit">
        <div className="visit-copy"><div className="section-kicker"><span>04</span> YOUR CHAIR IS WAITING</div><h2>Let’s make time<br/>for <em>you.</em></h2><p>Have a question, an idea, or just need a change? Tell us what you have in mind. We’d love to hear from you.</p>
          <div className="visit-details"><div><MapPin size={17}/><span><strong>Find our studio</strong><br/>New Delhi, India</span></div><div><Clock size={17}/><span><strong>Studio hours</strong><br/>Tue – Sun · 10 AM – 7 PM</span></div><div><Phone size={17}/><span><strong>Get in touch</strong><br/>+91 98765 43210</span></div></div>
        </div>
        <div className="booking-card"><div className="booking-card-top"><span>LET’S GET YOU BOOKED</span><Sparkles size={18}/></div><h3>Start with a hello.</h3><p>Appointments are best made ahead. Send us a message and we’ll help you find a time that works.</p>
          <a className="button-dark booking-button" href="https://wa.me/919876543210?text=Hi%20Lumi%C3%A8re%20Studio!%20I%27d%20like%20to%20enquire%20about%20an%20appointment." target="_blank" rel="noreferrer">Book via WhatsApp <ArrowRight size={16}/></a>
          <a className="booking-instagram" href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram size={16}/> Or find us on Instagram</a>
          <div className="booking-foot"><span>NO RUSH, NO PRESSURE.</span><span>JUST GOOD HAIR.</span></div>
        </div>
      </section>
    </main>

    <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">L<span>.</span></span><span className="brand-name">blanc <small>STUDIO</small></span></a><span className="footer-motto">A softer kind of self-care.</span><div className="footer-right"><span>© 2026 Blanc Salon</span><a href="#home">Back to top ↑</a></div></footer>
    <AnimatePresence>{menuOpen && <motion.button className="menu-backdrop" aria-label="Close menu" initial={{ opacity: 0 }} animate={{ opacity: .2 }} exit={{ opacity: 0 }} onClick={closeMenu}/>}</AnimatePresence>
  </div>
}

function ArrowUpRightIcon() { return <ArrowRight size={17} className="arrow-diagonal"/> }

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
