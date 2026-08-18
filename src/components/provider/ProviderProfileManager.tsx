import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Edit3, Star } from 'lucide-react';


export const ProviderProfileManager: React.FC = () => {
  const { providers, showToast, setRole } = useApp();
  const provider = providers[0];

  const [isFssaiVerified, setIsFssaiVerified] = useState(provider.isFssaiVerified);
  const [fssaiNo, setFssaiNo] = useState(provider.fssaiLicenseNo);
  const [perMealPrice, setPerMealPrice] = useState(provider.perMealPrice);
  const [weeklyPlanPrice, setWeeklyPlanPrice] = useState(provider.weeklyPlanPrice);
  const [monthlyPlanPrice, setMonthlyPlanPrice] = useState(provider.monthlyPlanPrice);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Kitchen profile & pricing updated successfully!');
  };

  return (
    <div className="space-y-4 pb-20 px-3 max-w-lg mx-auto pt-2">
      {/* Header card */}
      <div className="bg-white p-4 rounded-2xl border border-[#eae2d6] shadow-2xs space-y-3">
        <div className="flex items-center gap-3">
          <img
            src={provider.coverImage}
            alt={provider.name}
            className="w-14 h-14 rounded-2xl object-cover border border-[#eae2d6]"
          />
          <div>
            <h2 className="text-base font-extrabold text-[#2b2d42]">{provider.name}</h2>
            <p className="text-xs text-gray-500 font-medium">Owner: {provider.ownerName}</p>
            <span className="text-[10px] font-bold text-[#c85a32] bg-[#f6e8e2] px-2 py-0.5 rounded-md mt-1 inline-block">
              {provider.area}, Nashik
            </span>
          </div>
        </div>

        {/* Quick Demo Switcher */}
        <div className="pt-2 border-t border-[#eae2d6] flex items-center justify-between text-xs">
          <span className="text-gray-500 font-medium">Currently testing Provider View</span>
          <button
            onClick={() => setRole('customer')}
            className="font-extrabold text-[#c85a32] underline hover:text-[#b54a24]"
          >
            Switch to Customer View
          </button>
        </div>
      </div>

      {/* EDIT MENU & PRICING FORM */}
      <form onSubmit={handleSaveProfile} className="bg-white p-4 rounded-2xl border border-[#eae2d6] shadow-2xs space-y-4">
        <h3 className="text-sm font-extrabold text-[#2b2d42] flex items-center gap-1.5">
          <Edit3 className="w-4 h-4 text-[#c85a32]" /> Manage Base Pricing & FSSAI
        </h3>

        <div className="space-y-3 text-xs">
          {/* FSSAI Toggle */}
          <div className="bg-[#f7f4ef] p-3 rounded-xl border border-[#eae2d6] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2a9d8f]" />
              <div>
                <span className="font-bold text-[#2b2d42]">FSSAI License Status</span>
                <p className="text-[10px] text-gray-500">Show verified badge to customers</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsFssaiVerified(!isFssaiVerified)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                isFssaiVerified
                  ? 'bg-[#2a9d8f] text-white shadow-2xs'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {isFssaiVerified ? 'Verified ✓' : 'Unverified'}
            </button>
          </div>

          {isFssaiVerified && (
            <div>
              <label className="font-bold text-[#2b2d42]">FSSAI License No:</label>
              <input
                type="text"
                value={fssaiNo}
                onChange={(e) => setFssaiNo(e.target.value)}
                className="w-full mt-1 p-2.5 bg-[#f7f4ef] border border-[#eae2d6] rounded-xl font-bold"
              />
            </div>
          )}

          <div className="grid grid-cols-3 gap-2 pt-1">
            <div>
              <label className="font-bold text-[#2b2d42]">Per Meal (₹)</label>
              <input
                type="number"
                value={perMealPrice}
                onChange={(e) => setPerMealPrice(Number(e.target.value))}
                className="w-full mt-1 p-2.5 bg-[#f7f4ef] border border-[#eae2d6] rounded-xl font-bold text-center"
              />
            </div>
            <div>
              <label className="font-bold text-[#2b2d42]">Weekly (₹)</label>
              <input
                type="number"
                value={weeklyPlanPrice}
                onChange={(e) => setWeeklyPlanPrice(Number(e.target.value))}
                className="w-full mt-1 p-2.5 bg-[#f7f4ef] border border-[#eae2d6] rounded-xl font-bold text-center"
              />
            </div>
            <div>
              <label className="font-bold text-[#2b2d42]">Monthly (₹)</label>
              <input
                type="number"
                value={monthlyPlanPrice}
                onChange={(e) => setMonthlyPlanPrice(Number(e.target.value))}
                className="w-full mt-1 p-2.5 bg-[#f7f4ef] border border-[#eae2d6] rounded-xl font-bold text-center"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#c85a32] hover:bg-[#b54a24] text-white font-extrabold rounded-xl text-xs shadow-sm transition-colors"
        >
          Save Kitchen Changes
        </button>
      </form>

      {/* RATINGS & REVIEWS RECEIVED */}
      <div className="bg-white p-4 rounded-2xl border border-[#eae2d6] shadow-2xs space-y-3">
        <h3 className="text-sm font-extrabold text-[#2b2d42] flex items-center justify-between">
          <span>Customer Reviews ({provider.reviews.length})</span>
          <span className="text-xs font-bold text-amber-600 flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-500" /> {provider.rating} Avg
          </span>
        </h3>

        <div className="space-y-2">
          {provider.reviews.map((r) => (
            <div key={r.id} className="p-3 bg-[#f7f4ef] rounded-xl border border-[#eae2d6] space-y-1 text-xs">
              <div className="flex justify-between font-bold text-[#2b2d42]">
                <span>{r.customerName} ({r.customerArea})</span>
                <span className="text-amber-600">★ {r.rating}</span>
              </div>
              <p className="text-gray-600 text-[11px]">"{r.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
