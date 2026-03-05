import { useState, useEffect, useRef } from 'react';
import { FlameIcon, ZapIcon, HeartIcon, TrophyIcon, StarIcon, ShieldIcon, SunIcon, MountainIcon } from 'lucide-react';

const badgeData = [
  { id: 'streak7', icon: <FlameIcon className="w-6 h-6" />, label: '7-Week Streak', color: '#FC4C02', bgColor: 'rgba(252,76,2,0.15)', scale: 1.1, delay: 0 },
  { id: 'zone', icon: <HeartIcon className="w-5 h-5" />, label: 'Zone Master', color: '#E040A0', bgColor: 'rgba(224,64,160,0.15)', scale: 0.9, delay: 0.3 },
  { id: 'drift', icon: <ZapIcon className="w-6 h-6" />, label: 'Drift Crusher', color: '#7B61FF', bgColor: 'rgba(123,97,255,0.15)', scale: 1, delay: 0.6 },
  { id: 'summit', icon: <MountainIcon className="w-5 h-5" />, label: 'Summit', color: '#38BDF8', bgColor: 'rgba(56,189,248,0.15)', scale: 0.85, delay: 0.15 },
  { id: 'perfect', icon: <StarIcon className="w-6 h-6" />, label: 'Perfect Week', color: '#FBBF24', bgColor: 'rgba(251,191,36,0.15)', scale: 1.05, delay: 0.45 },
  { id: 'iron', icon: <ShieldIcon className="w-5 h-5" />, label: 'Iron Base', color: '#34D399', bgColor: 'rgba(52,211,153,0.15)', scale: 0.95, delay: 0.75 },
  { id: 'sunrise', icon: <SunIcon className="w-5 h-5" />, label: 'Early Bird', color: '#FB923C', bgColor: 'rgba(251,146,60,0.15)', scale: 0.88, delay: 0.9 },
  { id: 'champ', icon: <TrophyIcon className="w-6 h-6" />, label: 'MAF Champ', color: '#A78BFA', bgColor: 'rgba(167,139,250,0.15)', scale: 1.15, delay: 0.2 },
];

// Fixed positions spread around a region (percentage-based)
const positions = [
  { x: 8, y: 15 },
  { x: 75, y: 8 },
  { x: 5, y: 60 },
  { x: 80, y: 55 },
  { x: 35, y: 5 },
  { x: 60, y: 75 },
  { x: 15, y: 82 },
  { x: 85, y: 85 },
];

export function FloatingBadges() {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const [offsets, setOffsets] = useState(badgeData.map(() => ({ x: 0, y: 0 })));
  const animRef = useRef(0);

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
      const mx = mouseRef.current.x - 0.5;
      const my = mouseRef.current.y - 0.5;
      setOffsets(
        badgeData.map((b) => {
          const strength = 25 + b.scale * 15;
          const phaseX = Math.sin(Date.now() / 2000 + b.delay * 10) * 5;
          const phaseY = Math.cos(Date.now() / 2500 + b.delay * 10) * 4;
          return {
            x: mx * strength + phaseX,
            y: my * strength + phaseY,
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
      {badgeData.map((badge, i) => (
        <div
          key={badge.id}
          className="absolute transition-transform duration-700 ease-out"
          style={{
            left: `${positions[i].x}%`,
            top: `${positions[i].y}%`,
            transform: `translate(${offsets[i]?.x ?? 0}px, ${offsets[i]?.y ?? 0}px) scale(${badge.scale})`,
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
      ))}
    </div>
  );
}
