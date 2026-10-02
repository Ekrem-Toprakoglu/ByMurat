'use client'

import { useEffect, useState } from 'react'

const services = {
  Herren: [
    ['Haarschnitt', 'ab 35 €'],
    ['Bart', 'ab 25 €'],
    ['Komplett', 'ab 55 €'],
  ],
  Damen: [
    ['Schnitt', 'ab 45 €'],
    ['Waschen & Föhnen', 'ab 30 €'],
    ['Färben', 'ab 75 €'],
    ['Strähnen', 'ab 95 €'],
  ],
  Extras: [
    ['Kinder', 'ab 20 €'],
    ['Styling', 'ab 35 €'],
  ],
}

const gallery = [
  { src: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=1200&q=85', alt: 'Barber working on a haircut', className: 'gallery-tall' },
  { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=85', alt: 'Classic barber tools', className: 'gallery-wide' },
  { src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=85', alt: 'Close-up of a styled haircut', className: '' },
  { src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85', alt: 'Salon interior with styling chairs', className: 'gallery-wide' },
  { src: 'https://images.unsplash.com/photo-1592647420148-bfcc2a3e5e45?auto=format&fit=crop&w=1000&q=85', alt: 'Hair stylist at work', className: '' },
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85', alt: 'Minimal salon interior', className: 'gallery-tall' },
]

function Logo() {
  return <div className="logo-mark" aria-label="BY MURAT home"><span className="logo-crown">♛</span><span>BY<br /><strong>MURAT</strong></span><small>DAMEN & HERREN</small></div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const reveal = () => document.querySelectorAll('.reveal').forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.88) el.classList.add('is-visible')
    })
    window.addEventListener('scroll', reveal, { passive: true }); reveal()
    return () => window.removeEventListener('scroll', reveal)
  }, [])

  return (
    <main>
      <header className="site-header">
        <a href="#top"><Logo /></a>
        <nav className="desktop-nav"><a href="#philosophie">Philosophie</a><a href="#leistungen">Leistungen</a><a href="#kontakt">Kontakt</a></nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Menü öffnen"><span /><span /></button>
      </header>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-menu" onClick={() => setMenuOpen(false)} aria-label="Menü schließen">×</button>
        <div className="mobile-links"><a href="#philosophie" onClick={() => setMenuOpen(false)}>Philosophie</a><a href="#leistungen" onClick={() => setMenuOpen(false)}>Leistungen</a><a href="#galerie" onClick={() => setMenuOpen(false)}>Galerie</a><a href="#kontakt" onClick={() => setMenuOpen(false)}>Termin</a></div>
      </div>

      <section className="hero" id="top">
        <div className="hero-center"><p className="eyebrow">Damen & Herren Friseursalon <span>·</span> Berlin</p><h1>Haarschnitt<br /><em>ist Handwerk.</em></h1><a className="text-cta" href="#kontakt">Termin buchen <span>↗</span></a></div>
        <div className="hero-side">EST. BY MURAT<br />BERLIN · 2024</div><div className="hero-index">SCROLL TO EXPLORE <span>↓</span></div>
      </section>
      <div className="ticker"><div> DAMEN <span>•</span> HERREN <span>•</span> STYLING <span>•</span> COLOR <span>•</span> BY MURAT <span>•</span> DAMEN <span>•</span> HERREN <span>•</span> STYLING <span>•</span> COLOR <span>•</span> BY MURAT <span>•</span></div></div>

      <section className="section philosophy" id="philosophie"><div className="section-label"><b>01</b><span>PHILOSOPHIE</span></div><div className="philosophy-grid"><h2 className="reveal">Präzision.<br />Stil.<br /><em>Persönlichkeit.</em></h2><div className="philosophy-copy reveal"><p className="large-copy">Wir glauben, dass ein guter Haarschnitt mehr ist als nur ein Service.</p><p>Er ist Ausdruck. Haltung. Ein Moment, in dem du dich neu begegnest. Bei BY MURAT verbinden wir klassisches Handwerk mit zeitgemäßem Stil — präzise, persönlich und ohne Kompromisse.</p><a className="line-link" href="#kontakt">Mehr über uns <span>↗</span></a></div></div></section>

      <section className="section services" id="leistungen"><div className="section-label"><b>02</b><span>LEISTUNGEN & PREISE</span></div><div className="services-grid"><div className="service-intro reveal"><p className="eyebrow">Our craft</p><h2>Für deinen<br /><em>Signature Look.</em></h2></div><div className="price-list">{Object.entries(services).map(([category, items]) => <div className="price-category reveal" key={category}><h3>{category}</h3>{items.map(([name, price]) => <div className="price-row" key={name}><span>{name}</span><i /><strong>{price}</strong></div>)}</div>)}</div></div></section>

      <section className="section gallery-section" id="galerie"><div className="section-label"><b>03</b><span>GALERIE</span></div><div className="gallery-grid">{gallery.map((image, i) => <div className={`gallery-item reveal ${image.className}`} key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /><span>0{i + 1}</span></div>)}</div></section>

      <section className="section location"><div className="section-label"><b>04</b><span>WO DU UNS FINDEST</span></div><div className="location-grid"><div className="map"><div className="map-grid" /><div className="map-pin">✦</div><span className="map-label">BY MURAT<br /><small>BERLIN · KREUZBERG</small></span></div><div className="contact-info reveal"><p className="eyebrow">Visit us</p><h2>Dein Platz<br /><em>bei uns.</em></h2><p className="address">Warschauer Straße 24<br />10243 Berlin</p><a className="line-link" href="tel:+493012345678">+49 30 123 45 678</a><div className="hours"><div><span>Mo – Fr</span><strong>09:00 — 19:00</strong></div><div><span>Samstag</span><strong>10:00 — 16:00</strong></div><div><span>Sonntag</span><strong>Geschlossen</strong></div></div><a className="line-link" href="#instagram">Instagram <span>↗</span></a></div></div></section>

      <section className="section booking" id="kontakt"><div className="section-label"><b>05</b><span>TERMIN ANFRAGEN</span></div><div className="booking-grid"><div className="booking-heading reveal"><p className="eyebrow">Let&apos;s make a statement</p><h2>Bereit für<br /><em>etwas Neues?</em></h2><p>Schreib uns. Wir melden uns schnellstmöglich mit deinem Wunschtermin.</p></div><form className="booking-form reveal" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>{[['name','Name'],['phone','Telefon'],['date','Wunschtermin']].map(([id,label]) => <label key={id}>{label}<input id={id} name={id} type={id === 'date' ? 'date' : 'text'} required /></label>)}<label>Nachricht<textarea name="message" rows={2} /></label><button className="submit-button" type="submit">{sent ? 'Anfrage gesendet ✓' : 'Anfrage senden'} <span>↗</span></button></form></div></section>

      <footer><div className="footer-top"><Logo /><div className="socials"><a href="#instagram">Instagram</a><a href="#whatsapp">WhatsApp</a></div><p>© BY MURAT — Alle Rechte vorbehalten</p></div><div className="footer-giant">BY MURAT</div></footer>
    </main>
  )
}
