import { useEffect, useRef } from 'react';
import { FlameIcon, ZapIcon, HeartIcon, TrophyIcon, StarIcon, ShieldIcon, SunIcon, MountainIcon } from 'lucide-react';

const badgeData = [
  { id: 'streak7', icon: <FlameIcon className="w-6 h-6" />, label: '7-Week Streak', color: '#FC4C02', bgColor: 'rgba(252,76,2,0.15)', wave: 0, floatDuration: '6s', floatDelay: '0s', parallax: 45 },
  { id: 'champ', icon: <TrophyIcon className="w-6 h-6" />, label: 'MAF Champ', color: '#A78BFA', bgColor: 'rgba(167,139,250,0.15)', wave: 0, floatDuration: '7s', floatDelay: '-2s', parallax: 50 },
  { id: 'perfect', icon: <StarIcon className="w-6 h-6" />, label: 'Perfect Week', color: '#FBBF24', bgColor: 'rgba(251,191,36,0.15)', wave: 1, floatDuration: '5.5s', floatDelay: '-1s', parallax: 42 },
  { id: 'drift', icon: <ZapIcon className="w-5 h-5" />, label: 'Drift Crusher', color: '#7B61FF', bgColor: 'rgba(123,97,255,0.15)', wave: 1, floatDuration: '8s', floatDelay: '-3s', parallax: 25 },
  { id: 'zone', icon: <HeartIcon className="w-5 h-5" />, label: 'Zone Master', color: '#E040A0', bgColor: 'rgba(224,64,160,0.15)', wave: 2, floatDuration: '6.5s', floatDelay: '-4s', parallax: 22 },
  { id: 'iron', icon: <ShieldIcon className="w-5 h-5" />, label: 'Iron Base', color: '#34D399', bgColor: 'rgba(52,211,153,0.15)', wave: 2, floatDuration: '7.5s', floatDelay: '-1.5s', parallax: 28 },
  { id: 'summit', icon: <MountainIcon className="w-4 h-4" />, label: 'Summit', color: '#38BDF8', bgColor: 'rgba(56,189,248,0.15)', wave: 3, floatDuration: '5s', floatDelay: '-2.5s', parallax: 10 },
  { id: 'sunrise', icon: <SunIcon className="w-4 h-4" />, label: 'Early Bird', color: '#FB923C', bgColor: 'rgba(251,146,60,0.15)', wave: 3, floatDuration: '6s', floatDelay: '-3.5s', parallax: 8 },
];

// Positions as percentages within the container — kept within bounds
const positions = [
  { x: 15, y: 25 },  // streak7
  { x: 55, y: 50 },  // champ
  { x: 35, y: 5 },   // perfect
  { x: 0, y: 65 },   // drift
  { x: 70, y: 10 },  // zone
  { x: 65, y: 80 },  // iron
  { x: 5, y: 0 },    // summit
  { x: 80, y: 90 },  // sunrise
];

// Wave thresholds (scroll progress ratio)
const WAVE_THRESHOLDS = [0.2, 0.35, 0.5, 0.65];

const isTouchDevice = () => typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

export function FloatingBadges() {
  const containerRef = useRef(null);
  const triggeredWavesRef = useRef(new Set());

  // Single IntersectionObserver — computes scroll progress to trigger waves
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Find the parent section element for scroll progress calculation
    const section = container.closest('section');
    if (!section) return;

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const viewH = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (viewH - rect.top) / (viewH + rect.height)));

        WAVE_THRESHOLDS.forEach((threshold, waveIndex) => {
          if (progress >= threshold && !triggeredWavesRef.current.has(waveIndex)) {
            triggeredWavesRef.current.add(waveIndex);
            // Add 'badge-visible' class to badges in this wave
            const badges = container.querySelectorAll(`[data-wave="${waveIndex}"]`);
            badges.forEach((badge, i) => {
              // Stagger within wave: second badge delayed 100ms
              setTimeout(() => badge.classList.add('badge-visible'), i * 100);
            });
          }
        });
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop-only cursor parallax via refs — only moves already-visible badges
  useEffect(() => {
    if (isTouchDevice()) return;
    const container = containerRef.current;
    if (!container) return;

    const handleMouse = (e) => {
      const rect = container.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width - 0.5;
      const my = (e.clientY - rect.top) / rect.height - 0.5;

      const wrappers = container.querySelectorAll('.badge-wrapper');
      wrappers.forEach((el, i) => {
        // Only apply parallax to badges that have already popped in
        const popEl = el.querySelector('.badge-pop');
        if (!popEl || !popEl.classList.contains('badge-visible')) return;
        const p = badgeData[i].parallax;
        el.style.transform = `translate(${mx * p}px, ${my * p}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-[400px] md:min-h-[500px]">
      {badgeData.map((badge, i) => (
        <div
          key={badge.id}
          className="badge-wrapper absolute"
          style={{
            left: `${positions[i].x}%`,
            top: `${positions[i].y}%`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <div
            data-wave={badge.wave}
            className="badge-pop"
          >
            <div
              className="badge-float"
              style={{
                '--float-dur': badge.floatDuration,
                '--float-delay': badge.floatDelay,
              }}
            >
              <div
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border backdrop-blur-md shadow-lg"
                style={{
                  backgroundColor: badge.bgColor,
                  borderColor: `${badge.color}33`,
                  boxShadow: `0 0 30px ${badge.color}20`,
                }}
              >
                <span style={{ color: badge.color }}>{badge.icon}</span>
                <span className="text-xs font-semibold text-white whitespace-nowrap">{badge.label}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
