import { useState, useEffect, useRef } from 'react';
import { FlameIcon, ZapIcon, HeartIcon, TrophyIcon, StarIcon, ShieldIcon, SunIcon, MountainIcon } from 'lucide-react';

// depth: 'front' | 'mid' | 'back'
const badgeData = [
  { id: 'streak7', icon: <FlameIcon className="w-6 h-6" />, label: '7-Week Streak', color: '#FC4C02', bgColor: 'rgba(252,76,2,0.15)', depth: 'front', scale: 1.4, opacity: 1, blur: 0, parallax: 45, zIndex: 30, delay: 0 },
  { id: 'champ', icon: <TrophyIcon className="w-6 h-6" />, label: 'MAF Champ', color: '#A78BFA', bgColor: 'rgba(167,139,250,0.15)', depth: 'front', scale: 1.3, opacity: 1, blur: 0, parallax: 50, zIndex: 30, delay: 0.2 },
  { id: 'perfect', icon: <StarIcon className="w-6 h-6" />, label: 'Perfect Week', color: '#FBBF24', bgColor: 'rgba(251,191,36,0.15)', depth: 'front', scale: 1.35, opacity: 1, blur: 0, parallax: 42, zIndex: 30, delay: 0.45 },
  { id: 'drift', icon: <ZapIcon className="w-5 h-5" />, label: 'Drift Crusher', color: '#7B61FF', bgColor: 'rgba(123,97,255,0.15)', depth: 'mid', scale: 1.0, opacity: 0.8, blur: 0, parallax: 25, zIndex: 20, delay: 0.6 },
  { id: 'zone', icon: <HeartIcon className="w-5 h-5" />, label: 'Zone Master', color: '#E040A0', bgColor: 'rgba(224,64,160,0.15)', depth: 'mid', scale: 0.9, opacity: 0.8, blur: 0, parallax: 22, zIndex: 20, delay: 0.3 },
  { id: 'iron', icon: <ShieldIcon className="w-5 h-5" />, label: 'Iron Base', color: '#34D399', bgColor: 'rgba(52,211,153,0.15)', depth: 'mid', scale: 0.95, opacity: 0.8, blur: 0, parallax: 28, zIndex: 20, delay: 0.75 },
  { id: 'summit', icon: <MountainIcon className="w-4 h-4" />, label: 'Summit', color: '#38BDF8', bgColor: 'rgba(56,189,248,0.15)', depth: 'back', scale: 0.6, opacity: 0.5, blur: 1.5, parallax: 10, zIndex: 10, delay: 0.15 },
  { id: 'sunrise', icon: <SunIcon className="w-4 h-4" />, label: 'Early Bird', color: '#FB923C', bgColor: 'rgba(251,146,60,0.15)', depth: 'back', scale: 0.65, opacity: 0.55, blur: 1.5, parallax: 8, zIndex: 10, delay: 0.9 },
];

// Position front badges centrally, back badges at edges
const positions = [
  { x: 25, y: 30 },  // streak7 — front
  { x: 60, y: 55 },  // champ — front
  { x: 45, y: 10 },  // perfect — front
  { x: 5, y: 55 },   // drift — mid
  { x: 75, y: 15 },  // zone — mid
  { x: 70, y: 78 },  // iron — mid
  { x: 8, y: 12 },   // summit — back
  { x: 85, y: 85 },  // sunrise — back
];

// Stagger: index * 200ms
const POP_STAGGER = 200;
const POP_DURATION = 500;

export function FloatingBadges() {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const [offsets, setOffsets] = useState(badgeData.map(() => ({ x: 0, y: 0 })));
  const [isVisible, setIsVisible] = useState(false);
  const visibleAtRef = useRef(null);
  const animRef = useRef(0);

  // IntersectionObserver for scroll-triggered entrance
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          visibleAtRef.current = Date.now();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Parallax + ambient float — only applies after each badge's pop completes
  useEffect(() => {
    const handleMouse = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };

    const animate = () => {
      const now = Date.now();
      const mx = mouseRef.current.x - 0.5;
      const my = mouseRef.current.y - 0.5;
      setOffsets(
        badgeData.map((b, i) => {
          // Only apply parallax after this badge's pop animation has finished
          if (!visibleAtRef.current) return { x: 0, y: 0 };
          const popDone = visibleAtRef.current + (i * POP_STAGGER) + POP_DURATION;
          if (now < popDone) return { x: 0, y: 0 };

          const bobScale = b.depth === 'front' ? 6 : b.depth === 'mid' ? 4 : 2;
          const phaseX = Math.sin(now / 2000 + b.delay * 10) * bobScale;
          const phaseY = Math.cos(now / 2500 + b.delay * 10) * (bobScale * 0.8);
          return {
            x: mx * b.parallax + phaseX,
            y: my * b.parallax + phaseY,
          };
        })
      );
      animRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouse);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[400px] md:min-h-[500px]">
      {badgeData.map((badge, i) => {
        const staggerDelay = i * POP_STAGGER;
        // Pop animation lands at scale(1.0), then we layer depth scale + parallax on top
        const hasPopped = isVisible;
        const ox = offsets[i]?.x ?? 0;
        const oy = offsets[i]?.y ?? 0;

        return (
          <div
            key={badge.id}
            className="absolute"
            style={{
              left: `${positions[i].x}%`,
              top: `${positions[i].y}%`,
              zIndex: badge.zIndex,
              filter: badge.blur > 0 ? `blur(${badge.blur}px)` : undefined,
              // Before pop: hidden. After pop: depth scale + parallax via wrapper transform
              opacity: hasPopped ? undefined : 0,
              transform: `translate(${ox}px, ${oy}px) scale(${badge.scale})`,
              // Smooth parallax transitions after pop
              transition: 'transform 0.3s ease-out',
            }}
          >
            {/* Inner div handles the pop keyframe animation */}
            <div
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border backdrop-blur-md shadow-lg"
              style={{
                backgroundColor: badge.bgColor,
                borderColor: `${badge.color}33`,
                boxShadow: `0 0 30px ${badge.color}20`,
                opacity: hasPopped ? badge.opacity : 0,
                animation: hasPopped
                  ? `badgePop 0.5s ease-out ${staggerDelay}ms forwards`
                  : 'none',
              }}
            >
              <span style={{ color: badge.color }}>{badge.icon}</span>
              <span className="text-xs font-semibold text-white whitespace-nowrap">{badge.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
