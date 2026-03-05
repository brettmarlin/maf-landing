import { FlameIcon, ArrowRightIcon, TrendingDownIcon, TargetIcon, ZapIcon, StarIcon, TrophyIcon, AwardIcon } from 'lucide-react';
import { MockDashboard } from './MockDashboard';
import { FloatingBadges } from './FloatingBadges';

export function App() {
  return (
    <div className="min-h-screen bg-[#0F0F13] text-white overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="glow-orb w-[600px] h-[600px] bg-purple-600 top-1/4 left-1/2 -translate-x-1/2" />
        <div className="glow-orb w-[400px] h-[400px] bg-orange-500 top-1/3 left-1/3" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight gradient-text mb-6">
              Slow is smooth.<br />Smooth is fast.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-10">
              The easiest way to actually stick with MAF training long enough for it to work.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#FC4C02] hover:bg-[#e04400] text-white font-semibold text-lg px-8 py-4 rounded-full transition-colors"
            >
              Connect with Strava
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
          {/* Hero dashboard mock */}
          <div className="mt-8 relative">
            <div className="glow-orb w-[400px] h-[400px] bg-purple-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.2 }} />
            <MockDashboard />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            MAF works. You already know that.
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            The problem isn't the method — it's the 3 months of running slow before you see proof. Most people quit at week 6. MAF Machine makes sure you don't.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="glow-orb w-[500px] h-[500px] bg-blue-600 bottom-0 right-0" />
        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
              <TrendingDownIcon className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">See What You Can't Feel</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Your aerobic engine is improving every run. Cardiac drift dropping. Efficiency climbing. Pace bending. MAF Machine shows you the progress your legs can't feel yet.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6">
              <TargetIcon className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">One Number That Matters</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Your MAF ceiling. Stay under it. That's the whole game. We track every second of every run and show you exactly how well you played it.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6">
              <FlameIcon className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">The Streak Is the Point</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Consistency beats intensity. Every week you hit your target, your streak grows. Miss a week but still ran? Streak pauses, doesn't break. We reward showing up.
            </p>
          </div>
        </div>
      </section>

      {/* Gamification / Badges Section */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="glow-orb w-[500px] h-[500px] bg-orange-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.15 }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black gradient-text mb-6">
                Every mile is XP.
              </h2>
              <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
                <p>
                  MAF training is a long game. So we made it a <span className="text-white font-medium">literal game</span>. Earn XP for every run. Level up as your aerobic base grows. Unlock badges for streaks, perfect weeks, and breakthroughs.
                </p>
                <p>
                  The dopamine hit you used to get from PRs? Now you get it from <span className="text-white font-medium">consistency</span>.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
                  <FlameIcon className="w-4 h-4 text-orange-400" />
                  <span className="text-sm font-medium text-orange-300">Streaks</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                  <StarIcon className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium text-purple-300">Levels & XP</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                  <TrophyIcon className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium text-yellow-300">Badges</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <AwardIcon className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">Quests</span>
                </div>
              </div>
            </div>
            <div>
              <FloatingBadges />
            </div>
          </div>
        </div>
      </section>

      {/* Personality */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="glow-orb w-[500px] h-[500px] bg-pink-600 top-0 left-0" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black gradient-text-warm mb-8">
            Running slow is a flex.
          </h2>
          <div className="text-gray-400 text-lg leading-relaxed space-y-4">
            <p>
              You're going to get passed by grandmas. People will ask if you're okay. Your Strava followers will think you've lost it.
            </p>
            <p className="text-white font-semibold text-xl">Good.</p>
            <p>
              While they're burning out on intervals and nursing shin splints, you're building an aerobic engine that'll carry you for decades. Every painfully slow mile is a deposit in a bank that compounds.
            </p>
            <p className="text-white font-medium">
              Slow is smooth. Smooth is fast. And in 3 months, you'll be the one doing the passing.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
            <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px bg-gradient-to-r from-orange-500/40 via-purple-500/40 to-blue-500/40" />
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#FC4C02]/20 border border-[#FC4C02]/30 flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-[#FC4C02] font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Connect Strava</h3>
              <p className="text-gray-400 text-sm">One tap, we pull your runs automatically.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-purple-400 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Set your ceiling</h3>
              <p className="text-gray-400 text-sm">Enter your age, we calculate your MAF heart rate.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-blue-400 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Run and watch</h3>
              <p className="text-gray-400 text-sm">Every run analyzed, every trend tracked, every win surfaced.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objection Buster */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              "But I already track my runs on Strava."
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Strava shows you what happened. MAF Machine shows you what it <span className="text-white font-medium italic">means</span>. That 12:30 pace at 128 bpm? Three weeks ago that same effort was 13:15. You're faster at the same heart rate. That's aerobic progress — and Strava won't tell you that.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-6 py-32 md:py-40">
        <div className="glow-orb w-[600px] h-[600px] bg-orange-500 bottom-0 left-1/2 -translate-x-1/2" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black gradient-text mb-8">
            Trust the process.<br />We'll show you the proof.
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#FC4C02] hover:bg-[#e04400] text-white font-semibold text-lg px-8 py-4 rounded-full transition-colors mb-6"
          >
            Connect with Strava
            <ArrowRightIcon className="w-5 h-5" />
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Free. No credit card. Just connect and run.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-bold text-lg">MAF Machine</div>
          <p className="text-gray-500 text-sm italic">Slow is smooth. Smooth is fast.</p>
          <p className="text-gray-600 text-xs">Powered by Strava</p>
        </div>
      </footer>
    </div>
  );
}
