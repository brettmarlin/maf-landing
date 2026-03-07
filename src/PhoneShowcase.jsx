import { useState, useEffect, useRef } from 'react';

const phones = [
  { src: '/screenshot-game.png', alt: 'Gamification view', rotate: '-3deg', from: 'translateX(-500px) rotate(-30deg)', delay: '0ms' },
  { src: '/screenshot-chart.png', alt: 'Chart view', rotate: '0deg', scale: true, from: 'translateY(380px)', delay: '150ms' },
  { src: '/screenshot-data.png', alt: 'Data view', rotate: '3deg', from: 'translateX(500px) rotate(10deg)', delay: '300ms' },
];

export function PhoneShowcase() {
  const sectionRef = useRef(null);
  const phonesContainerRef = useRef(null);
  const carouselRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll-triggered entrance
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Scroll-based tilt + gloss shift — direct DOM writes, rAF-throttled (desktop only)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const section = sectionRef.current;
        const container = phonesContainerRef.current;
        if (!section || !container) { ticking = false; return; }

        const rect = section.getBoundingClientRect();
        const viewH = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (viewH - rect.top) / (viewH + rect.height)));
        const tiltX = (progress - 0.5) * 5;
        const glossPos = progress * 600;

        const children = container.children;
        for (let i = 0; i < children.length; i++) {
          const phone = phones[i];
          const el = children[i];
          el.style.transform = `rotate(${phone.rotate}) ${phone.scale ? 'scale(1.35)' : ''} rotateX(${tiltX}deg)`;
          const gloss = el.querySelector('.phone-gloss');
          if (gloss) gloss.style.backgroundPosition = `${glossPos}% 0%`;
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active dot from carousel scroll position
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const handleCarouselScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const width = carousel.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(Math.min(index, phones.length - 1));
    };
    carousel.addEventListener('scroll', handleCarouselScroll, { passive: true });
    return () => carousel.removeEventListener('scroll', handleCarouselScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative px-6 py-24 md:py-32 overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-purple-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-28">
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-4 pb-1">
            Your Progress. Visualized.
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Every run analyzed. Every trend tracked. Every win celebrated.
          </p>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide -mx-6"
          >
            {phones.map((phone, i) => (
              <div
                key={phone.src}
                className="snap-center shrink-0 w-[85vw] max-w-[320px] px-3"
                style={{ marginLeft: i === 0 ? 'auto' : undefined, marginRight: i === phones.length - 1 ? 'auto' : undefined }}
              >
                <div className="relative bg-[#1C1C1E] p-2 rounded-[40px] shadow-2xl shadow-black/50 overflow-hidden">
                  <img
                    src={phone.src}
                    alt={phone.alt}
                    className="w-full max-h-[600px] h-[70vh] rounded-[32px] object-cover object-top"
                  />
                  <div className="absolute inset-2 rounded-[32px] pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%, rgba(255,255,255,0.04) 100%)' }} />
                </div>
              </div>
            ))}
          </div>
          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {phones.map((_, i) => (
              <button
                key={i}
                className="w-2 h-2 rounded-full transition-colors"
                style={{ backgroundColor: i === activeIndex ? '#FC4C02' : 'rgba(255,255,255,0.2)' }}
                onClick={() => {
                  const carousel = carouselRef.current;
                  if (carousel) carousel.scrollTo({ left: i * carousel.offsetWidth, behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </div>

        {/* Desktop fan layout */}
        <div
          ref={phonesContainerRef}
          className="hidden md:flex items-center justify-center gap-8"
          style={{ perspective: '1000px' }}
        >
          {phones.map((phone) => (
            <div
              key={phone.src}
              className="relative"
              style={{
                transform: isVisible
                  ? `rotate(${phone.rotate}) ${phone.scale ? 'scale(1.35)' : ''}`
                  : `${phone.from} scale(0.95)`,
                opacity: isVisible ? 1 : 0,
                transition: `transform 0.8s ease-out ${phone.delay}, opacity 0.8s ease-out ${phone.delay}`,
                zIndex: phone.scale ? 10 : 1,
                marginTop: phone.scale ? '-12px' : '0',
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
            >
              <div className="relative bg-[#1C1C1E] p-2 rounded-[40px] shadow-2xl shadow-black/50 overflow-hidden">
                <img
                  src={phone.src}
                  alt={phone.alt}
                  className="w-[260px] h-auto rounded-[32px] object-cover"
                />
                <div className="phone-gloss" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
