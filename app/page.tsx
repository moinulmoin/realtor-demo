'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Page() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const testimonials = [
    {
      text: "Alicia made our first home purchase stress-free and enjoyable. Her knowledge of the Jacksonville market is unmatched.",
      author: "Sarah & James Miller",
      role: "First-Time Homebuyers"
    },
    {
      text: "Professional, responsive, and always had our best interests at heart. We couldn't have asked for a better realtor.",
      author: "Michael Rodriguez",
      role: "Home Seller"
    },
    {
      text: "Alicia's expertise and dedication helped us find our dream home. She went above and beyond throughout the entire process.",
      author: "Jennifer & David Chen",
      role: "Home Buyers"
    }
  ]

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''} id="navbar">
        <a href="#" className="nav-brand">Alicia <span>Espinal</span></a>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks">
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#areas" onClick={() => setMenuOpen(false)}>Areas</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a></li>
          <li><a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Let&apos;s Talk</a></li>
        </ul>
        <button 
          className="menu-toggle" 
          id="menuToggle" 
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">Northeast Florida — REALTOR®</p>
          <h1 className="hero-title">Buying <em>or</em><br/>Selling<br/>a Home?</h1>
          <p className="hero-desc">Clear guidance, honest advice, and smooth closings. I help buyers and sellers across Jacksonville move with confidence — every step of the way.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Schedule a Call
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </a>
            <a href="#services" className="btn-secondary">View Services</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Homes Closed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5.0</div>
              <div className="stat-label">Client Rating</div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <Image 
            src="/hero-home.jpg" 
            alt="Luxury home exterior" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-image reveal">
          <Image 
            src="/about-interior.jpg" 
            alt="Beautiful home interior" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="about-text reveal">
          <p className="section-tag">About Alicia</p>
          <h2 className="section-title">Guiding You<br/><em>Home</em></h2>
          <p>With over 15 years of experience in real estate and a deep understanding of the Northeast Florida market, I bring a unique combination of expertise and genuine care to every transaction.</p>
          <p>Whether you&apos;re a first-time homebuyer navigating the process for the first time, or a seasoned investor looking for the right opportunity — I&apos;m here to provide the clear guidance and honest advice you deserve.</p>
          <p>My approach is simple: listen carefully, communicate transparently, and work tirelessly to get you the best possible result.</p>
          <div className="about-signature">— Alicia Espinal</div>
        </div>
      </section>

      <section className="services" id="services">
        <p className="section-tag">What I Do</p>
        <h2 className="section-title">Comprehensive Real Estate<br/><em>Services</em></h2>
        <div className="services-grid">
          <div className="service-card reveal">
            <div className="service-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
            </div>
            <h3>Home Buying</h3>
            <p>From your first showing to the closing table, I&apos;ll guide you through every step with expertise and patience. Find the perfect home that fits your lifestyle and budget.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>Home Selling</h3>
            <p>Strategic pricing, professional staging advice, and targeted marketing to ensure your home sells quickly and for top dollar. Maximum exposure, maximum results.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3>Market Analysis</h3>
            <p>In-depth local market insights and data-driven analysis to help you make informed decisions. Know exactly what your property is worth in today&apos;s market.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">
              <svg viewBox="0 0 24 24">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <h3>Investment Properties</h3>
            <p>Smart investment strategies for rental properties and fix-and-flip opportunities. Build wealth through real estate with expert guidance.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">
              <svg viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                <path d="M16 3.13a4 4 0 010 7.75"/>
              </svg>
            </div>
            <h3>First-Time Buyers</h3>
            <p>Patient guidance through the entire home buying process. I specialize in helping first-time buyers navigate financing, inspections, and negotiations with confidence.</p>
          </div>
          <div className="service-card reveal">
            <div className="service-icon">
              <svg viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
            </div>
            <h3>Relocation Services</h3>
            <p>Moving to Jacksonville? I provide comprehensive relocation support including neighborhood tours, school information, and local market expertise.</p>
          </div>
        </div>
      </section>

      <section className="areas" id="areas">
        <div className="areas-header">
          <div>
            <p className="section-tag">Service Areas</p>
            <h2 className="section-title">Serving Northeast<br/><em>Florida</em></h2>
          </div>
          <p>From historic neighborhoods to beachfront communities, I have in-depth knowledge of the greater Jacksonville area and surrounding regions.</p>
        </div>
        <div className="areas-grid">
          <div className="area-card reveal">
            <Image 
              src="/area-riverside.jpg" 
              alt="Riverside neighborhood" 
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
            <div className="area-info">
              <h3>Riverside</h3>
              <span>Historic District</span>
            </div>
          </div>
          <div className="area-card reveal">
            <Image 
              src="/area-ponte-vedra.jpg" 
              alt="Ponte Vedra Beach" 
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
            <div className="area-info">
              <h3>Ponte Vedra</h3>
              <span>Beach Community</span>
            </div>
          </div>
          <div className="area-card reveal">
            <Image 
              src="/area-mandarin.jpg" 
              alt="Mandarin neighborhood" 
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
            <div className="area-info">
              <h3>Mandarin</h3>
              <span>Family Neighborhoods</span>
            </div>
          </div>
          <div className="area-card reveal">
            <Image 
              src="/area-san-marco.jpg" 
              alt="San Marco neighborhood" 
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
            <div className="area-info">
              <h3>San Marco</h3>
              <span>Urban Living</span>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <p className="section-tag">Client Reviews</p>
        <h2 className="section-title">What My Clients<br/><em>Say</em></h2>
        <div className="testimonial-content">
          <div className="testimonial-quote">&ldquo;</div>
          <p className="testimonial-text">{testimonials[currentTestimonial].text}</p>
          <div className="testimonial-author">
            <strong>{testimonials[currentTestimonial].author}</strong>
            {testimonials[currentTestimonial].role}
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={index === currentTestimonial ? 'active' : ''}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <p className="section-tag">Get In Touch</p>
        <h2 className="section-title">Ready to Make<br/><em>Your Move?</em></h2>
        <p>Whether you&apos;re buying, selling, or just have questions about the market, I&apos;m here to help. Let&apos;s start a conversation about your real estate goals.</p>
        <a href="mailto:alicia@example.com" className="btn-primary">
          Schedule a Consultation
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </a>
        <div className="cta-divider">
          <span>Or Reach Out Directly</span>
        </div>
        <div className="cta-contact">
          <a href="tel:+19045551234">(904) 555-1234</a>
          <a href="mailto:alicia@example.com">alicia@example.com</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">Alicia Espinal</div>
        <p>© 2024 Alicia Espinal. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </footer>
    </>
  )
}
