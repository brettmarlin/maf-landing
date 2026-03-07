import { useState, useEffect, useRef } from 'react';

const phones = [
  { src: '/screenshot-game.png', alt: 'Gamification view', rotate: '-3deg', from: 'translateX(-500px) rotate(-30deg)', delay: '0ms' },
  { src: '/screenshot-chart.png', alt: 'Chart view', rotate: '0deg', scale: true, from: 'translateY(380px)', delay: '150ms' },
  { src: '/screenshot-data.png', alt: 'Data view', rotate: '3deg', from: 'translateX(500px) rotate(10deg)', delay: '300ms' },
];

export function PhoneShowcase() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [tiltX, setTiltX] = useState(0);
  const [glossOffset, setGlossOffset] = useState(0);

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

  // Scroll-based tilt + gloss shift
  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      // 0 when top of section at bottom of viewport, 1 when bottom at top
      const progress = Math.max(0, Math.min(1, (viewH - rect.top) / (viewH + rect.height)));
      // Map to -2.5 … +2.5 deg
      setTiltX((progress - 0.5) * 5);
      // Gloss background-position shift 0-100%
      setGlossOffset(progress * 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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

        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
          style={{
            perspective: '1000px',
          }}
        >
          {phones.map((phone, i) => (
            <div
              key={phone.src}
              className="relative"
              style={{
                transform: isVisible
                  ? `rotate(${phone.rotate}) ${phone.scale ? 'scale(1.35)' : ''} rotateX(${tiltX}deg)`
                  : `${phone.from} scale(0.95)`,
                opacity: isVisible ? 1 : 0,
                transition: `transform 0.8s ease-out ${phone.delay}, opacity 0.8s ease-out ${phone.delay}`,
                zIndex: phone.scale ? 10 : 1,
                marginTop: phone.scale ? '-12px' : '0',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="bg-[#1C1C1E] p-2 rounded-[40px] shadow-2xl shadow-black/50 overflow-hidden">
                <img
                  src={phone.src}
                  alt={phone.alt}
                  className="w-[240px] md:w-[260px] h-auto rounded-[32px] object-cover"
                />
                {/* Glossy overlay */}
                <div
                  className="phone-gloss"
                  style={{ backgroundPosition: `${glossOffset}% 0%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
