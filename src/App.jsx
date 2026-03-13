import { FlameIcon, ArrowRightIcon, TrendingUpIcon, TargetIcon, ZapIcon, StarIcon, TrophyIcon, AwardIcon, BotIcon } from 'lucide-react';
import { MockDashboard } from './MockDashboard';
import { FloatingBadges } from './FloatingBadges';
import { PhoneShowcase } from './PhoneShowcase';

export function App() {
  return (
    <div className="min-h-screen bg-[#0F0F13] text-white overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="glow-orb w-[600px] h-[600px] bg-purple-600 top-1/4 left-1/2 -translate-x-1/2" />
        <div className="glow-orb w-[400px] h-[400px] bg-orange-500 top-1/3 left-1/3" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-12">
              <img src="/maf-machine-logo.svg" alt="MAF Machine" className="h-10" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight gradient-text mb-6">
              Slow is smooth.<br />Smooth is fast.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-10">
              MAF training is a patience game. We made it an actual game. Streaks, levels, badges, and an AI coach that sees progress you can't feel yet.
            </p>
            <a
              href="https://mafmachine.com/api/auth/strava"
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
            The method works. The motivation doesn't.
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            You already committed to MAF. You know the ceiling, you know the math, you know it takes 12 weeks. What you don't have is a reason to open your run data and feel good about what you see. MAF Machine fixes that.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="glow-orb w-[500px] h-[500px] bg-blue-600 bottom-0 right-0" />
        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6">
              <FlameIcon className="w-6 h-6 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Streaks that keep you honest</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Hit your weekly below-ceiling minutes, your streak grows. Miss a week but still ran? It pauses, doesn't break. Your streak is the heartbeat of the game. Protect it.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-6">
              <TrophyIcon className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Badges you actually earn</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              First 20-minute zone lock. First sub-3% cardiac drift. First 8-week streak. 29 badges across five chapters, from your first run to your first year. Each one means you did something real.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
              <TrendingUpIcon className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Levels that match the journey</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Spark → Go-Getter → Steady Flame → Lion Heart → Distance King. Ten levels mapped to real aerobic adaptation. You'll hit Level 3 before you have a chance to doubt the method.
            </p>
          </div>
        </div>
      </section>

      {/* Phone Showcase */}
      <PhoneShowcase />

      {/* Gamification / Badges Section */}
      <section className="relative px-6 py-24 md:py-32 overflow-x-clip">
        <div className="glow-orb w-[500px] h-[500px] bg-orange-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.15 }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black gradient-text mb-6">
                Every run builds the fire.
              </h2>
              <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
                <p>
                  Your first five runs each earn a badge, just for showing up. Then the real game starts. Zone locks. Drift busters. Negative splits. Surprise bonuses for running in the rain or getting out before dawn.
                </p>
                <p>
                  No XP counters. No leaderboards. Just a progress bar, the next badge you're about to unlock, and a coach that tells you exactly what's improving.
                </p>
                <p>
                  The runs that used to feel like nothing? Now they feel like <span className="text-white font-medium">progress</span>.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
                  <FlameIcon className="w-4 h-4 text-orange-400" />
                  <span className="text-sm font-medium text-orange-300">Streaks</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                  <TrophyIcon className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium text-yellow-300">Badges</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                  <StarIcon className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium text-purple-300">Levels</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <BotIcon className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">AI Coach</span>
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
            Built for the runners who stay.
          </h2>
          <div className="text-gray-400 text-lg leading-relaxed space-y-4">
            <p>
              Most people quit MAF at week six. Right when it's about to work. You're not most people, but even you need something better than staring at a pace number and hoping it's trending down.
            </p>
            <p>
              MAF Machine turns every run into proof that the method is working. Cardiac drift, efficiency factor, zone discipline, tracked, trended, and translated by an AI coach who knows your history and tells you what the numbers actually mean.
            </p>
            <p className="text-white font-medium">
              You're doing the hard part. We make sure you see the payoff.
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
              <p className="text-gray-400 text-sm">One tap, your runs sync automatically.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-purple-400 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Set your ceiling</h3>
              <p className="text-gray-400 text-sm">Enter your age, we do the math.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-blue-400 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Run your next run</h3>
              <p className="text-gray-400 text-sm">We analyze it, award your progress, and your coach tells you what improved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objection Buster */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              "I already track my runs on Strava."
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Strava shows what happened. MAF Machine shows what it <span className="text-white font-medium italic">means</span>, and makes it fun. That 12:30 pace at 128 bpm? We know three weeks ago that was 13:15. We gave you a badge for it. Your coach noticed too. And your streak just hit week six.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-6 py-32 md:py-40">
        <div className="glow-orb w-[600px] h-[600px] bg-orange-500 bottom-0 left-1/2 -translate-x-1/2" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black gradient-text mb-4">
            Your next run counts.
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Connect Strava. Set your ceiling. Your first badge is waiting.
          </p>
          <a
            href="https://mafmachine.com/api/auth/strava"
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
          <p className="text-gray-600 text-xs">Built by <a href="https://marliin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Marliin</a></p>
        </div>
      </footer>
    </div>
  );
}
