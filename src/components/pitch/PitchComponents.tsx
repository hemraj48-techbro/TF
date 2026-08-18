import React, { useState } from 'react';
import { 
  MapPin, Star, CheckCircle2, XCircle, TrendingUp, 
  Smartphone, Clock, Award, Flame, Zap, Send 
} from 'lucide-react';


// 1. Eureka! 2026 IIT Bombay Badge Component
export const EurekaBadge: React.FC = () => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#181B28] border border-[#FF6B00]/40 text-xs font-semibold shadow-lg shadow-[#FF6B00]/10">
    <span className="flex h-2 w-2 relative">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B00]"></span>
    </span>
    <span className="text-gray-300">Eureka! 2026</span>
    <span className="text-gray-500">•</span>
    <span className="text-[#FF9D00] font-bold">IIT Bombay E-Cell Pitch</span>
  </div>
);

// 2. Interactive Nashik Map Mockup Component
export const InteractiveMapMockup: React.FC = () => {
  const [selectedPin, setSelectedPin] = useState(0);

  const providers = [
    {
      id: 0,
      name: "Aaji's Kitchen (College Road)",
      type: "Home Cook",
      rating: 4.9,
      reviews: 142,
      price: "₹85/tiffin",
      distance: "0.8 km",
      specialty: "Authentic Maharashtrian Pithla Bhakri & Chapati Thali",
      lat: "35%",
      lng: "42%",
      badge: "Pure Veg • Top Rated",
      slots: "4 slots left today",
      nightMode: true
    },
    {
      id: 1,
      name: "Panchavati Swad Tiffin",
      type: "Small Tiffin Service",
      rating: 4.8,
      reviews: 98,
      price: "₹75/tiffin",
      distance: "1.4 km",
      specialty: "North Indian & Gujarati Daily Thali (Weekly Plan)",
      lat: "60%",
      lng: "65%",
      badge: "Budget Friendly",
      slots: "Available",
      nightMode: false
    },
    {
      id: 2,
      name: "Canada Corner Student Meals",
      type: "Cloud Kitchen Partner",
      rating: 4.7,
      reviews: 210,
      price: "₹95/tiffin",
      distance: "1.9 km",
      specialty: "High Protein Fitness & Regular Meal Boxes",
      lat: "25%",
      lng: "70%",
      badge: "Fast Delivery",
      slots: "Available",
      nightMode: true
    },
    {
      id: 3,
      name: "Gangapur Rd Home Cook (Sunita)",
      type: "Home Cook",
      rating: 5.0,
      reviews: 64,
      price: "₹90/tiffin",
      distance: "2.2 km",
      specialty: "Zero-Oil Homemade Dal, Roti & Sabzi",
      lat: "75%",
      lng: "30%",
      badge: "Homely & Healthy",
      slots: "2 slots left",
      nightMode: false
    }
  ];

  const current = providers[selectedPin];

  return (
    <div className="rounded-2xl pitch-glass-card p-4 sm:p-6 border border-white/10 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#FF6B00] font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Hyperlocal Discovery Demo • Nashik City</span>
          </div>
          <h3 className="text-lg font-bold text-white mt-0.5">Map-Based Tiffin Finder</h3>
        </div>
        <div className="flex items-center gap-2 text-xs bg-[#1A1D2B] px-3 py-1.5 rounded-lg border border-white/10 text-gray-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>48 Active Providers near College Rd & Canada Corner</span>
        </div>
      </div>

      {/* Simulated Map Graphic Container */}
      <div className="relative w-full h-[280px] sm:h-[320px] rounded-xl overflow-hidden bg-[#0F121C] border border-white/10 pitch-bg-grid">
        {/* Map stylized roads */}
        <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 100 Q 150 120 300 80 T 600 150" fill="none" stroke="#FF6B00" strokeWidth="4" />
          <path d="M 120 0 Q 140 180 200 350" fill="none" stroke="#94A3B8" strokeWidth="3" strokeDasharray="6 6" />
          <path d="M 350 0 Q 300 200 450 350" fill="none" stroke="#94A3B8" strokeWidth="2" />
          <path d="M 0 240 Q 250 200 600 280" fill="none" stroke="#FF6B00" strokeWidth="3" />
        </svg>

        {/* Region Labels */}
        <span className="absolute top-4 left-6 text-[10px] font-bold text-gray-400 bg-black/60 px-2 py-0.5 rounded border border-white/10">College Road</span>
        <span className="absolute bottom-6 left-10 text-[10px] font-bold text-gray-400 bg-black/60 px-2 py-0.5 rounded border border-white/10">Gangapur Road</span>
        <span className="absolute top-8 right-8 text-[10px] font-bold text-gray-400 bg-black/60 px-2 py-0.5 rounded border border-white/10">Canada Corner</span>
        <span className="absolute bottom-10 right-12 text-[10px] font-bold text-gray-400 bg-black/60 px-2 py-0.5 rounded border border-white/10">Panchavati</span>

        {/* Interactive Provider Pins */}
        {providers.map((p) => {
          const isSelected = p.id === selectedPin;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedPin(p.id)}
              style={{ top: p.lat, left: p.lng }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 z-10 ${
                isSelected ? 'scale-125 z-20' : 'hover:scale-110'
              }`}
            >
              <div className="relative flex flex-col items-center">
                <div className={`p-2 rounded-full border shadow-xl flex items-center justify-center transition-all ${
                  isSelected 
                    ? 'bg-[#FF6B00] text-white border-white orange-glow-sm' 
                    : 'bg-[#181B28] text-[#FF6B00] border-[#FF6B00]/50 hover:bg-[#FF6B00] hover:text-white'
                }`}>
                  <Flame className="w-4 h-4" />
                </div>
                <span className="mt-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-black/80 text-white border border-white/20 whitespace-nowrap shadow-md">
                  {p.price}
                </span>
              </div>
            </button>
          );
        })}

        {/* Selected Provider Overlay Popup inside Map */}
        <div className="absolute bottom-3 left-3 right-3 sm:left-auto sm:right-3 sm:w-80 p-3.5 rounded-xl bg-[#141724]/95 backdrop-blur-md border border-[#FF6B00]/40 shadow-2xl z-20">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 inline-block mb-1">
                {current.type}
              </span>
              <h4 className="text-sm font-bold text-white leading-tight">{current.name}</h4>
              <p className="text-[11px] text-gray-300 mt-1 line-clamp-1">{current.specialty}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="text-sm font-black text-[#FF9D00]">{current.price}</span>
              <div className="flex items-center gap-1 justify-end text-xs text-amber-400 font-bold mt-0.5">
                <Star className="w-3 h-3 fill-amber-400" />
                <span>{current.rating}</span>
                <span className="text-[10px] text-gray-400">({current.reviews})</span>
              </div>
            </div>
          </div>

          <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs">
            <span className="text-gray-400 flex items-center gap-1 text-[11px]">
              <MapPin className="w-3 h-3 text-[#FF6B00]" /> {current.distance} away
            </span>
            <span className="text-emerald-400 font-medium text-[11px] flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> {current.slots}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3 text-center text-xs text-gray-400">
        💡 Click on any orange map pin to preview tiffin providers in Nashik
      </div>
    </div>
  );
};

// 3. How It Works 3-Step Interactive Component
export const HowItWorksSimulator: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Discover Providers on Map",
      desc: "Hyperlocal discovery algorithm filters verified home cooks, tiffin services, and cloud kitchens in Nashik by location, diet preference (Jain/Pure Veg/Non-Veg), user ratings, and meal slot.",
      icon: MapPin,
      previewTitle: "Step 1: Hyperlocal Search & Filters",
      previewItems: [
        "Live Distance Filter (0.5 km – 5 km)",
        "Weekly & Monthly Menu Calendar View",
        "Provider FSSAI License & Kitchen Verification Tag",
        "Night Tiffin Slot Toggle (9 PM – 12 AM)"
      ]
    },
    {
      num: "02",
      title: "Subscribe & Pay Online",
      desc: "Choose flexible 7-day or 30-day meal plans. Instant, zero-friction UPI payments via GPay, PhonePe, or Paytm with full wallet pause/skip guarantee.",
      icon: Smartphone,
      previewTitle: "Step 2: Instant Subscription & Wallet",
      previewItems: [
        "Select Lunch (12-2 PM) or Dinner (7-9 PM) Tiffin",
        "1-Tap Pause: Going home for weekend? Skip with zero fee",
        "Instant UPI Payment (Autopay or Manual)",
        "Wallet Refund for unused skipped meal slots"
      ]
    },
    {
      num: "03",
      title: "Tiffin Delivered & Rated",
      desc: "Fresh, hot meal delivered straight to your PG, office desk, or room with live delivery status tracking and dish rating feedback.",
      icon: Clock,
      previewTitle: "Step 3: Real-Time Tracking & Rating",
      previewItems: [
        "Push notification: 'Aaji has packed your tiffin!'",
        "Live status: Out for Delivery → Delivered",
        "Rate today's taste & portion size",
        "Seamless daily delivery without repeat calls"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Step Selector Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((s, idx) => {
          const isActive = idx === activeStep;
          const Icon = s.icon;
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-5 rounded-2xl text-left transition-all duration-300 relative border ${
                isActive
                  ? 'bg-[#1A1E2E] border-[#FF6B00] orange-glow-sm scale-[1.02]'
                  : 'bg-[#12141D] border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-black px-2.5 py-1 rounded-md ${
                  isActive ? 'bg-[#FF6B00] text-white' : 'bg-white/10 text-gray-400'
                }`}>
                  STEP {s.num}
                </span>
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#FF6B00]' : 'text-gray-500'}`} />
              </div>
              <h4 className="text-base font-bold text-white mb-1">{s.title}</h4>
              <p className="text-xs text-gray-400 line-clamp-2">{s.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Selected Step Visual Preview Box */}
      <div className="p-6 rounded-2xl pitch-glass-card-orange border border-[#FF6B00]/30 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 flex-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B00]">
              Interactive Flow Preview • {steps[activeStep].title}
            </span>
            <h3 className="text-xl font-black text-white">{steps[activeStep].previewTitle}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {steps[activeStep].previewItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-gray-200 bg-[#161926] p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. Interactive Financial Revenue Calculator for Evaluators
export const RevenueCalculator: React.FC = () => {
  const [subscribers, setSubscribers] = useState(2500);
  const [mealPrice, setMealPrice] = useState(85);
  const [commissionRate, setCommissionRate] = useState(10);
  const [providerCount, setProviderCount] = useState(150);

  // Math calculations
  const dailyMeals = subscribers * 1.5; // average lunch + dinner users mix
  const monthlyGMV = Math.round(dailyMeals * mealPrice * 26); // 26 active days a month
  const commissionRevenue = Math.round(monthlyGMV * (commissionRate / 100));
  const providerSubscriptionRev = providerCount * 299; // avg ₹299/mo plan
  const totalMonthlyRev = commissionRevenue + providerSubscriptionRev;
  const annualARR = Math.round((totalMonthlyRev * 12) / 100000); // in Lakhs

  return (
    <div className="rounded-2xl pitch-glass-card p-6 sm:p-8 border border-white/10 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Interactive Pitch Tool • Financial Unit Economics</span>
          </div>
          <h3 className="text-xl font-black text-white mt-1">Platform Revenue Simulator</h3>
          <p className="text-xs text-gray-400">Adjust parameters to simulate TiffinFinder's recurring monthly revenue & ARR.</p>
        </div>
        <div className="bg-[#FF6B00]/10 border border-[#FF6B00]/30 px-4 py-3 rounded-xl text-right flex-shrink-0">
          <span className="text-[11px] text-gray-400 uppercase font-semibold block">Projected ARR</span>
          <span className="text-2xl font-black text-[#FF9D00]">₹{annualARR} Lakhs</span>
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Slider 1: Active Subscribers */}
        <div className="space-y-2 bg-[#161926] p-4 rounded-xl border border-white/10">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-gray-300">Active Monthly Subscribers</span>
            <span className="text-[#FF6B00]">{subscribers.toLocaleString()} Users</span>
          </div>
          <input 
            type="range" 
            min="500" 
            max="15000" 
            step="250"
            value={subscribers} 
            onChange={(e) => setSubscribers(Number(e.target.value))}
            className="w-full accent-[#FF6B00] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-gray-500">
            <span>500 (Launch)</span>
            <span>15,000 (Dominate Nashik)</span>
          </div>
        </div>

        {/* Slider 2: Average Meal Price */}
        <div className="space-y-2 bg-[#161926] p-4 rounded-xl border border-white/10">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-gray-300">Average Price per Tiffin</span>
            <span className="text-[#FF6B00]">₹{mealPrice} / meal</span>
          </div>
          <input 
            type="range" 
            min="65" 
            max="130" 
            step="5"
            value={mealPrice} 
            onChange={(e) => setMealPrice(Number(e.target.value))}
            className="w-full accent-[#FF6B00] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-gray-500">
            <span>₹65 (Budget Thali)</span>
            <span>₹130 (Special Thali)</span>
          </div>
        </div>

        {/* Slider 3: Commission Rate */}
        <div className="space-y-2 bg-[#161926] p-4 rounded-xl border border-white/10">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-gray-300">Platform Order Commission</span>
            <span className="text-[#FF6B00]">{commissionRate}% (Swiggy charges 25-30%)</span>
          </div>
          <input 
            type="range" 
            min="8" 
            max="15" 
            step="1"
            value={commissionRate} 
            onChange={(e) => setCommissionRate(Number(e.target.value))}
            className="w-full accent-[#FF6B00] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-gray-500">
            <span>8% (Low Fee)</span>
            <span>15% (Max Fee)</span>
          </div>
        </div>

        {/* Slider 4: Provider Count */}
        <div className="space-y-2 bg-[#161926] p-4 rounded-xl border border-white/10">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-gray-300">Subscribed Tiffin Providers</span>
            <span className="text-[#FF6B00]">{providerCount} Home Cooks</span>
          </div>
          <input 
            type="range" 
            min="20" 
            max="500" 
            step="10"
            value={providerCount} 
            onChange={(e) => setProviderCount(Number(e.target.value))}
            className="w-full accent-[#FF6B00] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-gray-500">
            <span>20 Providers</span>
            <span>500 Providers</span>
          </div>
        </div>
      </div>

      {/* Output Results Summary Card */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
        <div className="bg-[#121522] p-4 rounded-xl border border-white/10 text-center">
          <span className="text-[11px] text-gray-400 block font-medium">Monthly GMV</span>
          <span className="text-lg font-bold text-white">₹{(monthlyGMV / 100000).toFixed(1)} Lakhs</span>
        </div>

        <div className="bg-[#121522] p-4 rounded-xl border border-white/10 text-center">
          <span className="text-[11px] text-gray-400 block font-medium">Order Commission</span>
          <span className="text-lg font-bold text-emerald-400">₹{(commissionRevenue / 1000).toFixed(1)}K / mo</span>
        </div>

        <div className="bg-[#121522] p-4 rounded-xl border border-white/10 text-center">
          <span className="text-[11px] text-gray-400 block font-medium">Provider Subscriptions</span>
          <span className="text-lg font-bold text-emerald-400">₹{(providerSubscriptionRev / 1000).toFixed(1)}K / mo</span>
        </div>

        <div className="bg-[#FF6B00]/15 p-4 rounded-xl border border-[#FF6B00]/40 text-center">
          <span className="text-[11px] text-gray-300 block font-bold">Total Platform Income</span>
          <span className="text-lg font-black text-[#FF9D00]">₹{(totalMonthlyRev / 100000).toFixed(2)} L / mo</span>
        </div>
      </div>
    </div>
  );
};

// 5. Side-by-Side Competitive Matrix Component
export const ComparisonMatrix: React.FC = () => {
  const comparisonData = [
    {
      feature: "Hyperlocal Map Discovery in Nashik",
      tiffinFinder: "Yes (Dedicated Tier-2 Focus)",
      swiggy: "No (Restaurant & Aggregator)",
      whatsapp: "No (Text lists on groups)"
    },
    {
      feature: "Flexible Subscription (Weekly/Monthly)",
      tiffinFinder: "Yes (Built-in Subscription Engine)",
      swiggy: "No (One-off ordering only)",
      whatsapp: "Manual paper notebook tracking"
    },
    {
      feature: "1-Tap Pause & Meal Skip with Refund",
      tiffinFinder: "Yes (Automated wallet credit)",
      swiggy: "N/A",
      whatsapp: "Frequent disputes / no refund"
    },
    {
      feature: "Commission Fee Charged to Cook",
      tiffinFinder: "8–12% (Lowest in Industry)",
      swiggy: "25–30% (Destroys margin)",
      whatsapp: "0% (Zero digital growth)"
    },
    {
      feature: "Home Cook Onboarding Support",
      tiffinFinder: "Yes (Assisted FSSAI & Onboarding)",
      swiggy: "No (Commercial licenses required)",
      whatsapp: "No platform structure"
    },
    {
      feature: "Night Tiffin Mode (9 PM – 12 AM)",
      tiffinFinder: "Yes (Dedicated Night Tiffins)",
      swiggy: "Limited to late restaurants",
      whatsapp: "No night service"
    }
  ];

  return (
    <div className="rounded-2xl pitch-glass-card border border-white/10 overflow-hidden">
      <div className="p-5 sm:p-6 bg-[#161927] border-b border-white/10 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">Competitive Moat Matrix</h3>
          <p className="text-xs text-gray-400">Why TiffinFinder beats traditional food aggregators & offline WhatsApp groups</p>
        </div>
        <span className="text-xs font-bold px-3 py-1 bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/40 rounded-full">
          First Mover Advantage
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="bg-[#0F111A] text-gray-400 border-b border-white/10 uppercase tracking-wider">
              <th className="p-4 font-bold">Feature / Parameter</th>
              <th className="p-4 font-bold text-[#FF9D00] bg-[#FF6B00]/10 border-x border-[#FF6B00]/20">
                TiffinFinder (Us)
              </th>
              <th className="p-4 font-bold">Swiggy / Zomato</th>
              <th className="p-4 font-bold">Local WhatsApp Vendors</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {comparisonData.map((row, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02]">
                <td className="p-4 font-semibold text-gray-200">{row.feature}</td>
                <td className="p-4 font-bold text-emerald-400 bg-[#FF6B00]/5 border-x border-[#FF6B00]/15 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{row.tiffinFinder}</span>
                </td>
                <td className="p-4 text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    <span>{row.swiggy}</span>
                  </div>
                </td>
                <td className="p-4 text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span>{row.whatsapp}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 6. Interactive Growth Roadmap Component (2025 - 2028)
export const RoadmapTimeline: React.FC = () => {
  const milestones = [
    {
      year: "2025",
      phase: "Phase 1: Nashik MVP Launch",
      focus: "Onboard 100+ verified home cooks & small tiffin providers in Nashik (College Rd, Gangapur Rd, Canada Corner). Launch Android app & Web.",
      metrics: "5,000 Active Monthly Subscribers • ₹15L GMV/mo",
      status: "Target 2025",
      isCurrent: true
    },
    {
      year: "2026",
      phase: "Phase 2: Dominate Nashik Market",
      focus: "Expand to all 12 Nashik zones including Nashik Road, Satpur Industrial, Panchavati, & Indira Nagar. Achieve operational profitability.",
      metrics: "25,000 Active Subscribers • 400+ Providers • ₹1 Cr GMV/mo",
      status: "Target 2026",
      isCurrent: false
    },
    {
      year: "2027",
      phase: "Phase 3: Tier-2 Maharashtra Expansion",
      focus: "Replicate playbook in Aurangabad (Chhatrapati Sambhajinagar) and Nagpur. Launch B2B Corporate PG & Hospital tiffin subscriptions.",
      metrics: "75,000 Subscribers across 3 cities • ₹4 Cr GMV/mo",
      status: "Target 2027",
      isCurrent: false
    },
    {
      year: "2028",
      phase: "Phase 4: Pan-India Tier-2 Scale",
      focus: "Scale to 20+ Tier-2 & Tier-3 cities in Maharashtra, Gujarat, and MP. Introduce cloud kitchen partner franchising & automated logistics.",
      metrics: "₹500 Crore ARR • 300,000+ Daily Meals Served",
      status: "Target 2028",
      isCurrent: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {milestones.map((m, idx) => (
        <div 
          key={idx}
          className={`p-6 rounded-2xl border transition-all duration-300 relative ${
            m.isCurrent 
              ? 'pitch-glass-card-orange border-[#FF6B00] orange-glow-sm' 
              : 'pitch-glass-card border-white/10 hover:border-white/20'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-black text-gradient-orange">{m.year}</span>
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide ${
              m.isCurrent ? 'bg-[#FF6B00] text-white' : 'bg-white/10 text-gray-400'
            }`}>
              {m.status}
            </span>
          </div>

          <h4 className="text-base font-bold text-white mb-2">{m.phase}</h4>
          <p className="text-xs text-gray-300 leading-relaxed mb-4">{m.focus}</p>

          <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <Zap className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>{m.metrics}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

// 7. Judge Pitch Action Modal (Eureka! 2026 E-Cell IIT Bombay Evaluator Hub)
export const JudgeActionModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [evalName, setEvalName] = useState('');
  const [evalOrg, setEvalOrg] = useState('');
  const [evalScore, setEvalScore] = useState(5);
  const [comments, setComments] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-lg rounded-2xl bg-[#141724] border border-[#FF6B00]/40 p-6 sm:p-8 shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full bg-white/5"
        >
          ✕
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-[#FF6B00]" />
              <div>
                <h3 className="text-lg font-bold text-white">Eureka! 2026 Evaluator Feedback</h3>
                <p className="text-xs text-gray-400">IIT Bombay E-Cell Judges & Investors Deck Action</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Evaluator / Investor Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Dr. Rajesh Sharma (E-Cell Judge / Angel)" 
                  value={evalName}
                  onChange={(e) => setEvalName(e.target.value)}
                  className="w-full bg-[#0F111A] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#FF6B00] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Organization / Fund</label>
                <input 
                  type="text" 
                  placeholder="e.g. IIT Bombay Alumni Network / Venture Fund" 
                  value={evalOrg}
                  onChange={(e) => setEvalOrg(e.target.value)}
                  className="w-full bg-[#0F111A] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#FF6B00] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Pitch Deck Score (1 to 5 Stars)</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setEvalScore(star)}
                      className={`p-2 rounded-lg border transition-all ${
                        star <= evalScore 
                          ? 'bg-[#FF6B00] text-white border-[#FF6B00]' 
                          : 'bg-[#0F111A] text-gray-500 border-white/10'
                      }`}
                    >
                      <Star className="w-4 h-4 fill-current" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Investor Remarks / Feedback</label>
                <textarea 
                  rows={3}
                  placeholder="Share feedback on unit economics, Tier-2 expansion strategy, or next steps..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="w-full bg-[#0F111A] border border-white/10 rounded-xl p-3 text-xs text-white focus:border-[#FF6B00] outline-none resize-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <button 
                type="submit"
                className="flex-1 py-3 bg-[#FF6B00] hover:bg-[#FF8800] text-white font-bold text-xs rounded-xl shadow-lg orange-glow-sm transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Evaluation & Request Deck</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Thank You, {evalName || 'Judge'}!</h3>
            <p className="text-xs text-gray-300 leading-relaxed max-w-sm mx-auto">
              Your feedback & deck request has been logged for Founder **Hemraj Patil**. We look forward to connecting during Eureka! 2026 finals.
            </p>
            <button 
              onClick={onClose}
              className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
