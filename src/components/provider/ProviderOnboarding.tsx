import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import type { NashikArea } from '../../types';
import { NASHIK_AREAS } from '../../mockData';
import { Store, Camera, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProviderOnboarding: React.FC = () => {
  const { setProviderOnboarded, showToast } = useApp();
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form state
  const [kitchenName, setKitchenName] = useState("Sunita Aai's Nashik Kitchen");
  const [area, setArea] = useState<NashikArea>('Gangapur Road');
  const [fssaiNo, setFssaiNo] = useState('21523048000192');

  const [dishName, setDishName] = useState('Pithla Bhakri & Varan Bhaat');
  const [dishPrice, setDishPrice] = useState(100);

  const [perMeal, setPerMeal] = useState(100);
  const [weeklyPrice, setWeeklyPrice] = useState(650);
  const [monthlyPrice, setMonthlyPrice] = useState(2400);

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setProviderOnboarded(true);
    showToast('Kitchen registered successfully on Tiffin Finder!');
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-center px-4 max-w-md mx-auto py-6">
      {/* Step Indicator */}
      <div className="flex items-center justify-between mb-6 px-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-xs transition-colors ${
              step >= s 
                ? 'bg-[#c85a32] text-white shadow-xs' 
                : 'bg-gray-200 text-gray-500'
            }`}>
              {s}
            </div>
            <span className="text-xs font-bold text-[#2b2d42]">
              {s === 1 ? 'Kitchen' : s === 2 ? 'Menu' : 'Pricing'}
            </span>
            {s < 3 && <div className="h-0.5 w-8 bg-gray-200" />}
          </div>
        ))}
      </div>

      {/* STEP 1: Kitchen Details & Photo */}
      {step === 1 && (
        <div className="bg-white p-6 rounded-2xl border border-[#eae2d6] shadow-sm space-y-4">
          <div className="text-center space-y-1">
            <div className="w-12 h-12 bg-[#f6e8e2] text-[#c85a32] rounded-2xl flex items-center justify-center mx-auto mb-2">
              <Store className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-extrabold text-[#2b2d42]">Step 1: Kitchen Details</h2>
            <p className="text-xs text-gray-500">Upload kitchen photo & set location in Nashik</p>
          </div>

          <div className="space-y-3 pt-2">
            <div>
              <label className="text-xs font-bold text-[#2b2d42]">Tiffin Service Name:</label>
              <input
                type="text"
                value={kitchenName}
                onChange={(e) => setKitchenName(e.target.value)}
                className="w-full mt-1 p-3 bg-[#f7f4ef] border border-[#eae2d6] rounded-xl text-xs font-bold text-[#2b2d42] focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#2b2d42]">Nashik Area Location:</label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value as NashikArea)}
                className="w-full mt-1 p-3 bg-[#f7f4ef] border border-[#eae2d6] rounded-xl text-xs font-bold text-[#2b2d42] focus:outline-none"
              >
                {NASHIK_AREAS.map(a => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-[#2b2d42]">FSSAI Registration Number (Optional):</label>
              <input
                type="text"
                value={fssaiNo}
                onChange={(e) => setFssaiNo(e.target.value)}
                placeholder="2152XXXXXX"
                className="w-full mt-1 p-3 bg-[#f7f4ef] border border-[#eae2d6] rounded-xl text-xs font-semibold focus:outline-none"
              />
            </div>

            {/* Photo Upload Mock */}
            <div className="border-2 border-dashed border-[#c85a32]/30 bg-[#f6e8e2]/50 p-4 rounded-xl text-center space-y-1 cursor-pointer">
              <Camera className="w-6 h-6 text-[#c85a32] mx-auto" />
              <p className="text-xs font-bold text-[#c85a32]">Photo Uploaded: kitchen_photo_sunita.jpg</p>
              <span className="text-[10px] text-gray-400">Click to replace photo</span>
            </div>
          </div>

          <button
            onClick={() => setStep(2)}
            className="w-full py-3.5 bg-[#c85a32] hover:bg-[#b54a24] text-white font-extrabold rounded-xl shadow-sm text-xs flex items-center justify-center gap-2 mt-4"
          >
            <span>Next: Add Menu Items</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* STEP 2: Add Menu Items */}
      {step === 2 && (
        <div className="bg-white p-6 rounded-2xl border border-[#eae2d6] shadow-sm space-y-4">
          <div className="text-center space-y-1">
            <h2 className="text-xl font-extrabold text-[#2b2d42]">Step 2: Add Signature Dishes</h2>
            <p className="text-xs text-gray-500">What delicious meals will you prepare?</p>
          </div>

          <div className="space-y-3 pt-2">
            <div>
              <label className="text-xs font-bold text-[#2b2d42]">Specialty Dish Name:</label>
              <input
                type="text"
                value={dishName}
                onChange={(e) => setDishName(e.target.value)}
                className="w-full mt-1 p-3 bg-[#f7f4ef] border border-[#eae2d6] rounded-xl text-xs font-bold text-[#2b2d42]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#2b2d42]">Single Meal Price (₹):</label>
              <input
                type="number"
                value={dishPrice}
                onChange={(e) => setDishPrice(Number(e.target.value))}
                className="w-full mt-1 p-3 bg-[#f7f4ef] border border-[#eae2d6] rounded-xl text-xs font-bold text-[#2b2d42]"
              />
            </div>

            <div className="bg-[#f7f4ef] p-3 rounded-xl border border-[#eae2d6] flex items-center justify-between text-xs">
              <span className="font-semibold text-gray-700">Maharashtrian Pure Veg Thali</span>
              <span className="font-bold text-[#c85a32]">₹100</span>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <button
              onClick={() => setStep(1)}
              className="flex-1 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl text-xs"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="flex-2 py-3 bg-[#c85a32] text-white font-extrabold rounded-xl text-xs flex items-center justify-center gap-2"
            >
              <span>Next: Set Plans</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Base Pricing & Complete */}
      {step === 3 && (
        <div className="bg-white p-6 rounded-2xl border border-[#eae2d6] shadow-sm space-y-4">
          <div className="text-center space-y-1">
            <h2 className="text-xl font-extrabold text-[#2b2d42]">Step 3: Base Pricing</h2>
            <p className="text-xs text-gray-500">Set competitive daily, weekly & monthly rates</p>
          </div>

          <div className="space-y-3 pt-2">
            <div>
              <label className="text-xs font-bold text-[#2b2d42]">Per Meal Rate (₹):</label>
              <input
                type="number"
                value={perMeal}
                onChange={(e) => setPerMeal(Number(e.target.value))}
                className="w-full mt-1 p-3 bg-[#f7f4ef] border border-[#eae2d6] rounded-xl text-xs font-bold text-[#2b2d42]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#2b2d42]">Weekly Subscription Rate (7 Days) (₹):</label>
              <input
                type="number"
                value={weeklyPrice}
                onChange={(e) => setWeeklyPrice(Number(e.target.value))}
                className="w-full mt-1 p-3 bg-[#f7f4ef] border border-[#eae2d6] rounded-xl text-xs font-bold text-[#2b2d42]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#2b2d42]">Monthly Subscription Rate (30 Days) (₹):</label>
              <input
                type="number"
                value={monthlyPrice}
                onChange={(e) => setMonthlyPrice(Number(e.target.value))}
                className="w-full mt-1 p-3 bg-[#f7f4ef] border border-[#eae2d6] rounded-xl text-xs font-bold text-[#2b2d42]"
              />
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <button
              onClick={() => setStep(2)}
              className="flex-1 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl text-xs"
            >
              Back
            </button>
            <button
              onClick={handleFinish}
              className="flex-2 py-3.5 bg-[#2a9d8f] text-white font-extrabold rounded-xl text-xs shadow-sm flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" /> Complete Setup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
