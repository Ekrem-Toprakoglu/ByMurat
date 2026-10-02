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
  return <img src="/logo.png" alt="BY MURAT Damen & Herren Friseursalon" className="logo-img" />
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

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
        <nav className="desktop-nav"><a href="#leistungen">Leistungen</a><a href="#galerie">Galerie</a><a href="#kontakt">Kontakt</a></nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Menü öffnen"><span /><span /></button>
      </header>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-menu" onClick={() => setMenuOpen(false)} aria-label="Menü schließen">×</button>
        <div className="mobile-links"><a href="#leistungen" onClick={() => setMenuOpen(false)}>Leistungen</a><a href="#galerie" onClick={() => setMenuOpen(false)}>Galerie</a><a href="#kontakt" onClick={() => setMenuOpen(false)}>Kontakt</a><div className="mobile-socials"><a href="https://www.instagram.com/bymuratfriseur/" target="_blank" rel="noopener noreferrer">Instagram</a><a href="https://www.facebook.com/ByMuratFrisuersalon/?locale2=de_DE" target="_blank" rel="noopener noreferrer">Facebook</a></div></div>
      </div>

      <section className="hero" id="top">
        <div className="hero-center"><p className="eyebrow">Damen · Herren · Kids <span>·</span> Haarfarben · Balayage · Styling</p><h1>Dein Haar.<br /><em>Unser Handwerk.</em></h1><a className="text-cta" href="tel:+4970421 3505">Jetzt anrufen — 07042 / 13505 <span>↗</span></a></div>
        <div className="hero-side">BY MURAT<br />FRISEURSALON</div><div className="hero-index">SCROLL TO EXPLORE <span>↓</span></div>
      </section>
      <div className="ticker"><div> DAMEN <span>•</span> HERREN <span>•</span> KIDS <span>•</span> BALAYAGE <span>•</span> HAARFARBEN <span>•</span> STYLING <span>•</span> BY MURAT <span>•</span> DAMEN <span>•</span> HERREN <span>•</span> KIDS <span>•</span> BALAYAGE <span>•</span> HAARFARBEN <span>•</span> STYLING <span>•</span> BY MURAT <span>•</span></div></div>

      <section className="section services" id="leistungen"><div className="section-label"><b>01</b><span>LEISTUNGEN & PREISE</span></div><div className="services-grid"><div className="service-intro reveal"><p className="eyebrow">Our craft</p><h2>Für deinen<br /><em>Signature Look.</em></h2></div><div className="price-list">{Object.entries(services).map(([category, items]) => <div className="price-category reveal" key={category}><h3>{category}</h3>{items.map(([name, price]) => <div className="price-row" key={name}><span>{name}</span><i /><strong>{price}</strong></div>)}</div>)}</div></div></section>

      <section className="section gallery-section" id="galerie"><div className="section-label"><b>02</b><span>GALERIE</span></div><div className="gallery-grid">{gallery.map((image, i) => <div className={`gallery-item reveal ${image.className}`} key={image.src}><img src={image.src} alt={image.alt} loading="lazy" /><span>0{i + 1}</span></div>)}</div></section>

      <section className="section location"><div className="section-label"><b>03</b><span>WO DU UNS FINDEST</span></div><div className="location-grid"><a className="map" href="https://www.google.com/maps/place/By+Murat+Damen+%26+Herren+Friseursalon/@48.9323361,8.9578748,477m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47977c26bf08a707:0x406afb85585f025b!8m2!3d48.9323361!4d8.9578748!16s%2Fg%2F11h5rkgg8r" target="_blank" rel="noopener noreferrer" aria-label="Route auf Google Maps öffnen"><div className="map-grid" /><div className="map-pin">✦</div><span className="map-label">BY MURAT<br /><small>VAIHINGEN · ENZ</small></span></a><div className="contact-info reveal"><p className="eyebrow">Visit us</p><h2>Dein Platz<br /><em>bei uns.</em></h2><p className="address">Radbrunnengasse 1<br />71665 Vaihingen an der Enz</p><a className="line-link" href="tel:+4970421 3505">07042 / 13505</a><div className="hours"><div><span>Di – Fr</span><strong>09:00 — 18:00</strong></div><div><span>Samstag</span><strong>09:00 — 18:00</strong></div><div><span>So & Mo</span><strong>Geschlossen</strong></div></div><a className="line-link" href="https://www.google.com/maps/place/By+Murat+Damen+%26+Herren+Friseursalon/@48.9323361,8.9578748,477m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47977c26bf08a707:0x406afb85585f025b!8m2!3d48.9323361!4d8.9578748!16s%2Fg%2F11h5rkgg8r" target="_blank" rel="noopener noreferrer">Route planen <span>↗</span></a></div></div></section>

      <section className="section booking" id="kontakt"><div className="section-label"><b>04</b><span>TERMIN VEREINBAREN</span></div><div className="booking-grid"><div className="booking-heading reveal"><p className="eyebrow">Let&apos;s make a statement</p><h2>Bereit für<br /><em>etwas Neues?</em></h2><p>Termine vereinbaren wir persönlich — ruf uns einfach an oder schreib uns über Instagram, Facebook oder WhatsApp. Wir freuen uns auf dich.</p></div><div className="contact-cta reveal"><a className="contact-cta-primary" href="tel:+4970421 3505"><span className="contact-cta-label">Anrufen</span><span className="contact-cta-value">07042 / 13505</span><span className="contact-cta-arrow">↗</span></a><div className="contact-cta-row"><a className="contact-cta-secondary" href="https://www.instagram.com/bymuratfriseur/" target="_blank" rel="noopener noreferrer"><span>Instagram</span><small>@bymuratfriseur</small></a><a className="contact-cta-secondary" href="https://www.facebook.com/ByMuratFrisuersalon/?locale2=de_DE" target="_blank" rel="noopener noreferrer"><span>Facebook</span><small>ByMuratFrisuersalon</small></a></div><p className="contact-cta-hours">Öffnungszeiten: Di – Sa, 09:00 — 18:00</p></div></div></section>

      <footer><div className="footer-top"><Logo /><div className="socials"><a href="https://www.instagram.com/bymuratfriseur/" target="_blank" rel="noopener noreferrer">Instagram</a><a href="https://www.facebook.com/ByMuratFrisuersalon/?locale2=de_DE" target="_blank" rel="noopener noreferrer">Facebook</a><a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a></div><p>© BY MURAT Friseursalon — Sükrü Murat Ayan — Alle Rechte vorbehalten</p></div><div className="footer-giant">BY MURAT</div></footer>
    </main>
  )
}
