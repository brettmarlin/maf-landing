# MAF Machine — Design System Quick Reference

## Setup

### 1. Install the preset

Copy `maf-tailwind-preset.js` and `design-tokens.ts` into your project root (or `src/design/`).

### 2. Wire into Tailwind

```js
// tailwind.config.js
const mafPreset = require('./maf-tailwind-preset');

module.exports = {
  presets: [mafPreset],
  content: ['./src/**/*.{ts,tsx}'],
  // your existing config merges on top
};
```

### 3. Add font import

In your `index.css` (already present on landing page):
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
```

---

## Tailwind Classes

### Backgrounds
| Class | Use |
|---|---|
| `bg-maf-dark` | Page background |
| `bg-maf-glass` | Card / elevated surface |
| `bg-maf-glass-hover` | Hover state on cards |
| `bg-maf-input` | Form inputs |

### Brand Colors
| Class | Hex | Use |
|---|---|---|
| `bg-maf-strava` / `text-maf-strava` | #FC4C02 | Primary CTA |
| `bg-maf-orange` / `text-maf-orange` | #FF6B4A | Warm accent |
| `bg-maf-pink` / `text-maf-pink` | #E040A0 | Secondary accent |
| `bg-maf-purple` / `text-maf-purple` | #7B61FF | Tertiary accent |
| `bg-maf-blue` / `text-maf-blue` | #38BDF8 | Info / cool accent |
| `bg-maf-green` / `text-maf-green` | #34D399 | Success / below ceiling |
| `bg-maf-yellow` / `text-maf-yellow` | #FBBF24 | Celebration |
| `bg-maf-red` / `text-maf-red` | #EF4444 | Error / over ceiling |

### Semantic Colors
| Class | Use |
|---|---|
| `text-maf-below-ceiling` | HR below ceiling (green) |
| `text-maf-over-ceiling` | HR above ceiling (red) |
| `text-maf-improving` | Positive trend |
| `text-maf-declining` | Negative trend |

### Borders
| Class | Use |
|---|---|
| `border-maf-subtle` | Default card border |
| `border-maf-medium` | Emphasized border |
| `border-maf-strong` | High contrast border |

### Glows
| Class | Use |
|---|---|
| `shadow-maf-glow-orange` | Orange glow on hover/focus |
| `shadow-maf-glow-purple` | Purple glow |
| `shadow-maf-glow-pink` | Pink glow |
| `shadow-maf-glow-blue` | Blue glow |
| `shadow-maf-glow-green` | Green glow |

### Component Utilities
| Class | What it does |
|---|---|
| `gradient-text` | Coral → pink → purple gradient text |
| `gradient-text-warm` | Strava orange → coral → pink gradient text |
| `glass-card` | Frosted glass panel (bg + border + blur) |
| `glass-card-hover` | Brighter glass panel for hover states |
| `glow-orb` | Decorative background blur blob |
| `pill-badge` | Rounded pill with blur (add colors separately) |

---

## Usage Examples

### Glass card
```tsx
<div className="glass-card rounded-2xl p-8">
  <h3 className="text-xl font-bold mb-3">Card Title</h3>
  <p className="text-gray-400 text-sm">Card content</p>
</div>
```

### Gradient headline
```tsx
<h1 className="text-5xl font-black gradient-text">
  Slow is smooth. Smooth is fast.
</h1>
```

### CTA button
```tsx
<button className="bg-maf-strava hover:bg-maf-strava-hover text-white font-semibold px-8 py-4 rounded-full">
  Connect with Strava
</button>
```

### Metric with semantic color
```tsx
<span className={trend > 0 ? 'text-maf-improving' : 'text-maf-declining'}>
  {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
</span>
```

### Glow orb background
```tsx
<div className="relative">
  <div className="glow-orb w-[500px] h-[500px] bg-maf-purple top-0 left-0" />
  <div className="relative z-10">Content above the glow</div>
</div>
```

### Badge pill
```tsx
<div className="pill-badge bg-maf-orange/10 border border-maf-orange/20">
  <FlameIcon className="w-4 h-4 text-maf-orange" />
  <span className="text-maf-orange">7-Week Streak</span>
</div>
```

---

## Color Palette (Visual Reference)

```
Brand:
  ██ #FC4C02  Strava Orange (CTA)
  ██ #FF6B4A  Warm Orange
  ██ #E040A0  Pink
  ██ #7B61FF  Purple
  ██ #38BDF8  Blue
  ██ #34D399  Green
  ██ #FBBF24  Yellow
  ██ #EF4444  Red

Backgrounds:
  ██ #0F0F13  Primary (near-black)
  ░░ rgba(255,255,255,0.04)  Elevated
  ░░ rgba(255,255,255,0.08)  Hover

Text:
  ██ #FFFFFF  Primary
  ██ #E0E0E0  Secondary
  ██ #9CA3AF  Muted
  ██ #6B7280  Faint
```
