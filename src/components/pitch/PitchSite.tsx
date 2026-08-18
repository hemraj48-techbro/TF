import React, { useState } from 'react';
import { 
  Flame, MapPin, Smartphone, TrendingUp, Clock, Award, 
  ArrowRight, Sparkles, Moon, RefreshCw, Lock, Download, Users 
} from 'lucide-react';

import { 
  EurekaBadge, 
  InteractiveMapMockup, 
  HowItWorksSimulator, 
  RevenueCalculator, 
  ComparisonMatrix, 
  RoadmapTimeline, 
  JudgeActionModal 
} from './PitchComponents';

export const PitchSite: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f1f5f9] relative pitch-bg-dots selection:bg-[#FF6B00] selection:text-white">
      {/* Background Radial Glow Effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-[#FF9D00]/5 rounded-full blur-[160px] pointer-events-none z-0"></div>

      {/* STICKY PITCH DECK NAVBAR */}
      <nav className="sticky top-0 z-40 pitch-glass-nav py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF9D00] to-[#FF5500] flex items-center justify-center text-white shadow-lg orange-glow-sm">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-white">TiffinFinder</span>
                <span className="px-2 py-0.5 rounded text-[9px] font-extrabold bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/40">
                  NASHIK
                </span>
              </div>
              <span className="text-[10px] text-gray-400 font-medium block">Hyperlocal Tiffin Subscription Platform</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-semibold text-gray-300">
            <a href="#problem" className="hover:text-[#FF6B00] transition-colors">Problem</a>
            <a href="#solution" className="hover:text-[#FF6B00] transition-colors">Solution</a>
            <a href="#how-it-works" className="hover:text-[#FF6B00] transition-colors">How It Works</a>
            <a href="#market" className="hover:text-[#FF6B00] transition-colors">Market Opportunity</a>
            <a href="#business-model" className="hover:text-[#FF6B00] transition-colors">Business Model</a>
            <a href="#advantage" className="hover:text-[#FF6B00] transition-colors">Moat</a>
            <a href="#vision" className="hover:text-[#FF6B00] transition-colors">Roadmap</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-white text-xs font-bold shadow-lg orange-glow-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Eureka! 2026 Judge Hub</span>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          <EurekaBadge />

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight max-w-5xl leading-[1.15]">
            Maharashtra's 1st Hyperlocal <br />
            <span className="text-gradient-orange">Tiffin Subscription Engine</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-lg max-w-3xl leading-relaxed font-normal">
            Connecting daily meal seekers — <span className="text-white font-semibold">students, office workers, & migrants</span> — directly with local home cooks & tiffin providers in <span className="text-[#FF9D00] font-bold">Nashik</span> through map-based discovery & automated subscriptions.
          </p>

          {/* Quick Metrics Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-4">
            <div className="p-4 rounded-2xl pitch-glass-card border-white/10 text-center">
              <span className="text-2xl sm:text-3xl font-black text-[#FF9D00]">1.6L+</span>
              <span className="text-[11px] text-gray-400 font-medium block mt-1">Daily Meal Seekers in Nashik</span>
            </div>
            <div className="p-4 rounded-2xl pitch-glass-card border-white/10 text-center">
              <span className="text-2xl sm:text-3xl font-black text-[#FF6B00]">₹50 Cr</span>
              <span className="text-[11px] text-gray-400 font-medium block mt-1">Monthly TAM (Nashik)</span>
            </div>
            <div className="p-4 rounded-2xl pitch-glass-card border-white/10 text-center">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400">8–12%</span>
              <span className="text-[11px] text-gray-400 font-medium block mt-1">Lowest Industry Commission</span>
            </div>
            <div className="p-4 rounded-2xl pitch-glass-card border-white/10 text-center">
              <span className="text-2xl sm:text-3xl font-black text-teal-300">5+ Cities</span>
              <span className="text-[11px] text-gray-400 font-medium block mt-1">Tier-2 Maharashtra Monopoly</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <a
              href="#solution"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#FF8800] text-white text-xs font-bold shadow-xl orange-glow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Hyperlocal Solution</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl pitch-glass-card border-white/20 hover:border-[#FF6B00]/50 text-white text-xs font-bold transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#FF9D00]" />
              <span>Request Investor Pitch Deck</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 1: PROBLEM */}
      <section id="problem" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full text-[10px] font-black bg-rose-500/10 text-rose-400 border border-rose-500/30 uppercase tracking-widest">
            The Market Pain Point
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Why Daily Meals in Nashik Are <span className="text-rose-500">Broken</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            160,000+ students and working migrants face daily food insecurity, high costs, and zero digital discovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl pitch-glass-card border-rose-500/20 hover:border-rose-500/40 transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold text-lg">
              ₹₹₹
            </div>
            <h3 className="text-lg font-bold text-white">Expensive Restaurants</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Ordering restaurant meals on Swiggy costs <span className="text-white font-semibold">₹150–₹300 per meal</span>. Students & PG residents cannot afford ₹9,000/month on daily food.
            </p>
          </div>

          <div className="p-6 rounded-2xl pitch-glass-card border-rose-500/20 hover:border-rose-500/40 transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Invisible Local Providers</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Over 500+ authentic home cooks in Nashik have <span className="text-white font-semibold">zero online footprint</span>. Customers have no way to discover nearby tiffin options digitally.
            </p>
          </div>

          <div className="p-6 rounded-2xl pitch-glass-card border-rose-500/20 hover:border-rose-500/40 transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Zero Subscription Tech</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              No platform in Nashik supports <span className="text-white font-semibold">weekly/monthly tiffin plans</span>, automated wallet skips, or weekend vacation pauses.
            </p>
          </div>

          <div className="p-6 rounded-2xl pitch-glass-card border-rose-500/20 hover:border-rose-500/40 transition-all space-y-3">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Word of Mouth Trap</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Home cooks & housewives are trapped relying solely on paper flyers and neighborhood word-of-mouth, limiting their income to just 5-10 orders.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: SOLUTION & INTERACTIVE MAP */}
      <section id="solution" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full text-[10px] font-black bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30 uppercase tracking-widest">
            The Solution
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Maharashtra's 1st <span className="text-gradient-orange">Hyperlocal Tiffin App</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-300">
            Connecting hunger with home-cooked warmth through modern mobile technology.
          </p>
        </div>

        {/* 7 Solution Pillar Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-[#131624] border border-white/10 space-y-2">
            <div className="p-2 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] w-fit">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Map-Based Discovery</h4>
            <p className="text-xs text-gray-400">Discover verified home cooks within 1-3 km radius in Nashik with live slot availability.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#131624] border border-white/10 space-y-2">
            <div className="p-2 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] w-fit">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Weekly & Monthly Plans</h4>
            <p className="text-xs text-gray-400">Flexible 7-day trial or 30-day subscriptions starting at just ₹75 per home-cooked thali.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#131624] border border-white/10 space-y-2">
            <div className="p-2 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] w-fit">
              <Smartphone className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Instant UPI Autopay</h4>
            <p className="text-xs text-gray-400">Zero transaction friction via PhonePe, GPay, Paytm with automated daily wallet deductions.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#131624] border border-white/10 space-y-2">
            <div className="p-2 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] w-fit">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Real-Time Tracking</h4>
            <p className="text-xs text-gray-400">Live order status: Cooked with love → Dispatched → Delivered to your doorstep.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#131624] border border-white/10 space-y-2">
            <div className="p-2 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] w-fit">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">1-Tap Pause & Skip</h4>
            <p className="text-xs text-gray-400">Going home for the weekend? Pause your subscription with 1 tap & get instant wallet credit.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#131624] border border-white/10 space-y-2">
            <div className="p-2 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] w-fit">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Provider Dashboard</h4>
            <p className="text-xs text-gray-400">Digital portal for home cooks to manage daily menus, track earnings, & limit max orders.</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#131624] border border-white/10 space-y-2 sm:col-span-2">
            <div className="p-2 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] w-fit">
              <Moon className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Night Tiffin Mode (9 PM – 12 AM)</h4>
            <p className="text-xs text-gray-400">Dedicated late-night meal slots serving night-shift IT employees, hospital staff, & student exam prep.</p>
          </div>
        </div>

        {/* Live Interactive Map Mockup */}
        <InteractiveMapMockup />
      </section>

      {/* SECTION 3: HOW IT WORKS */}
      <section id="how-it-works" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full text-[10px] font-black bg-teal-500/10 text-teal-400 border border-teal-500/30 uppercase tracking-widest">
            3-Step Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            How TiffinFinder Works
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            From map discovery to daily doorstep delivery in 3 simple steps.
          </p>
        </div>

        <HowItWorksSimulator />
      </section>

      {/* SECTION 4: MARKET OPPORTUNITY */}
      <section id="market" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full text-[10px] font-black bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase tracking-widest">
            Market Opportunity
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Massive Untapped <span className="text-emerald-400">Tier-2 Opportunity</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Unlocking India's ₹7.5 Lakh Crore food services market starting with Tier-2 Maharashtra cities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-2xl pitch-glass-card border-white/10 text-center space-y-2">
            <span className="text-3xl font-black text-[#FF9D00]">1.6 Lakh+</span>
            <h4 className="text-sm font-bold text-white">Target Seekers in Nashik</h4>
            <p className="text-xs text-gray-400">Students (KBT, MET, Sandip Univ), IT employees, hospital workers, & PG residents.</p>
          </div>

          <div className="p-6 rounded-2xl pitch-glass-card border-white/10 text-center space-y-2">
            <span className="text-3xl font-black text-[#FF6B00]">₹50 Crore / mo</span>
            <h4 className="text-sm font-bold text-white">Total Addressable Market</h4>
            <p className="text-xs text-gray-400">Monthly tiffin expenditure potential in Nashik alone (1.6L x ₹3,000/mo avg).</p>
          </div>

          <div className="p-6 rounded-2xl pitch-glass-card border-white/10 text-center space-y-2">
            <span className="text-3xl font-black text-emerald-400">5+ Cities</span>
            <h4 className="text-sm font-bold text-white">Zero Tiffin App Competition</h4>
            <p className="text-xs text-gray-400">Nashik, Aurangabad, Nagpur, Kolhapur, & Solapur currently have 0 dedicated platforms.</p>
          </div>

          <div className="p-6 rounded-2xl pitch-glass-card border-white/10 text-center space-y-2">
            <span className="text-3xl font-black text-teal-300">₹7.5 Lakh Cr</span>
            <h4 className="text-sm font-bold text-white">India Food Market</h4>
            <p className="text-xs text-gray-400">Total Indian food services TAM growing at 12.5% CAGR with unorganized tiffin leading.</p>
          </div>
        </div>
      </section>

      {/* SECTION 5: BUSINESS MODEL & CALCULATOR */}
      <section id="business-model" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full text-[10px] font-black bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30 uppercase tracking-widest">
            Monetization & Unit Economics
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            High-Margin <span className="text-gradient-orange">Revenue Streams</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Dual monetization engine balancing low merchant commissions with monthly recurring SaaS subscriptions.
          </p>
        </div>

        {/* 4 Revenue Streams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-2xl pitch-glass-card border-white/10 space-y-3">
            <div className="px-3 py-1 rounded text-xs font-bold bg-emerald-500/20 text-emerald-400 w-fit">
              Stream 1 (Core)
            </div>
            <h3 className="text-lg font-bold text-white">Order Commission</h3>
            <span className="text-2xl font-black text-[#FF9D00]">8% – 12%</span>
            <p className="text-xs text-gray-400">Ultra-low order commission vs Swiggy's 25-30%, retaining provider loyalty.</p>
          </div>

          <div className="p-6 rounded-2xl pitch-glass-card border-white/10 space-y-3">
            <div className="px-3 py-1 rounded text-xs font-bold bg-emerald-500/20 text-emerald-400 w-fit">
              Stream 2 (Recurring)
            </div>
            <h3 className="text-lg font-bold text-white">Provider Subscription</h3>
            <span className="text-2xl font-black text-[#FF6B00]">₹199 – ₹499/mo</span>
            <p className="text-xs text-gray-400">Monthly SaaS fee for provider dashboard, analytics, and kitchen tools.</p>
          </div>

          <div className="p-6 rounded-2xl pitch-glass-card border-white/10 space-y-3">
            <div className="px-3 py-1 rounded text-xs font-bold bg-emerald-500/20 text-emerald-400 w-fit">
              Stream 3 (Ad Revenue)
            </div>
            <h3 className="text-lg font-bold text-white">Featured Listings</h3>
            <span className="text-2xl font-black text-teal-300">₹500 – ₹1000/mo</span>
            <p className="text-xs text-gray-400">Top-of-map placement for top-rated cloud kitchens & commercial tiffins.</p>
          </div>

          <div className="p-6 rounded-2xl pitch-glass-card border-white/10 space-y-3">
            <div className="px-3 py-1 rounded text-xs font-bold bg-purple-500/20 text-purple-400 w-fit">
              Stream 4 (Phase 2)
            </div>
            <h3 className="text-lg font-bold text-white">Delivery Fee</h3>
            <span className="text-2xl font-black text-purple-300">₹10 – ₹20/order</span>
            <p className="text-xs text-gray-400">Future dedicated fleet delivery monetization for non-self-delivering providers.</p>
          </div>
        </div>

        {/* Interactive Unit Economics Revenue Calculator */}
        <RevenueCalculator />
      </section>

      {/* SECTION 6: COMPETITIVE ADVANTAGE */}
      <section id="advantage" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full text-[10px] font-black bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 uppercase tracking-widest">
            Unfair Advantage
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Our Competitive <span className="text-indigo-400">Moat</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Why giant restaurant aggregators cannot replicate our hyperlocal tiffin subscription engine.
          </p>
        </div>

        <ComparisonMatrix />
      </section>

      {/* SECTION 7: FUTURE VISION & ROADMAP */}
      <section id="vision" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full text-[10px] font-black bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase tracking-widest">
            Scale Roadmap
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Future Vision & <span className="text-gradient-gold">Roadmap</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Clear path to dominating Tier-2 Maharashtra & scaling to ₹500 Cr ARR across India.
          </p>
        </div>

        <RoadmapTimeline />
      </section>

      {/* SECTION 8: EUREKA! 2026 EVALUATOR CTA & DECK HUB */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="rounded-3xl pitch-glass-card-orange p-8 sm:p-12 border border-[#FF6B00]/40 text-center relative overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/20 rounded-full blur-[100px] pointer-events-none"></div>

          <EurekaBadge />

          <h2 className="text-3xl sm:text-5xl font-black text-white max-w-3xl mx-auto leading-tight">
            Building the Future of Daily Home Meals for <span className="text-gradient-orange">Tier-2 India</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Targeted for <span className="text-white font-bold">Eureka! 2026 IIT Bombay E-Cell</span> judges, mentors, and early-stage angel investors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-white font-black text-sm shadow-xl orange-glow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Award className="w-5 h-5" />
              <span>Evaluate Pitch & Request Full Deck</span>
            </button>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
            <span>Founder: Hemraj Patil & Team • Nashik, MH</span>
            <span>Target: Pre-Seed Round • Eureka! 2026 IIT Bombay</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/10 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#FF6B00]" />
            <span className="font-bold text-white">TiffinFinder Nashik</span>
            <span>© 2025–2026. All rights reserved.</span>
          </div>
          <div className="text-gray-400">
            Presented at IIT Bombay E-Cell Eureka! 2026
          </div>
        </div>
      </footer>

      {/* JUDGE ACTION MODAL */}
      <JudgeActionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
