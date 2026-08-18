import React from 'react';
import { Award, ArrowUpRight, Wallet, ShieldCheck } from 'lucide-react';


export const ProviderEarnings: React.FC = () => {
  const earningsData = {
    today: 1450,
    thisWeek: 9800,
    thisMonth: 38200,
    activeSubscribersCount: 38
  };

  const topDishes = [
    { name: 'Standard Maharashtrian Thali', orders: 142, revenue: 14200, percentage: 85 },
    { name: 'Pithla Bhakri Special', orders: 98, revenue: 9800, percentage: 65 },
    { name: 'Kala Masala Chicken / Veg', orders: 64, revenue: 7680, percentage: 48 },
    { name: 'Sunday Puran Poli Thali', orders: 45, revenue: 6300, percentage: 38 }
  ];

  return (
    <div className="space-y-4 pb-20 px-3 max-w-lg mx-auto pt-2">
      {/* Top Banner */}
      <div className="bg-[#2b2d42] text-white p-4 rounded-2xl shadow-sm space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase font-bold tracking-wider bg-[#2a9d8f] text-white px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <Wallet className="w-3 h-3" /> Nashik Provider Wallet
          </span>
          <span className="text-xs text-gray-300 font-medium">Daily Direct Bank Payouts</span>
        </div>
        <h2 className="text-xl font-extrabold text-white">Earnings Summary</h2>
        <p className="text-xs text-gray-300">
          Track revenue from daily thalis, group orders & monthly subscriptions.
        </p>
      </div>

      {/* 3 Overview Cards */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-white p-3 rounded-2xl border border-[#eae2d6] shadow-2xs space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase">Today</span>
          <p className="text-base font-extrabold text-[#c85a32]">₹{earningsData.today}</p>
          <span className="text-[10px] text-green-600 font-semibold flex items-center gap-0.5">
            <ArrowUpRight className="w-3 h-3" /> +14%
          </span>
        </div>

        <div className="bg-white p-3 rounded-2xl border border-[#eae2d6] shadow-2xs space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase">This Week</span>
          <p className="text-base font-extrabold text-[#2b2d42]">₹{earningsData.thisWeek}</p>
          <span className="text-[10px] text-green-600 font-semibold flex items-center gap-0.5">
            <ArrowUpRight className="w-3 h-3" /> +22%
          </span>
        </div>

        <div className="bg-white p-3 rounded-2xl border border-[#eae2d6] shadow-2xs space-y-1">
          <span className="text-[10px] text-gray-400 font-bold uppercase">This Month</span>
          <p className="text-base font-extrabold text-[#2a9d8f]">₹{earningsData.thisMonth}</p>
          <span className="text-[10px] text-gray-400 font-medium">38 Subs</span>
        </div>
      </div>

      {/* TOP SELLING DISHES BREAKDOWN */}
      <div className="bg-white p-4 rounded-2xl border border-[#eae2d6] shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-extrabold text-[#2b2d42] flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" /> Top-Selling Dishes
            </h3>
            <p className="text-[11px] text-gray-500">Most ordered items by Nashik customers</p>
          </div>
          <span className="text-[10px] font-bold bg-[#fff3e0] text-[#e76f51] px-2 py-0.5 rounded-md">
            Ranking List
          </span>
        </div>

        <div className="space-y-3">
          {topDishes.map((dish, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#2b2d42]">
                  {idx + 1}. {dish.name}
                </span>
                <span className="font-extrabold text-[#c85a32]">₹{dish.revenue.toLocaleString('en-IN')}</span>
              </div>

              {/* Ranking Bar */}
              <div className="h-2 w-full bg-[#f7f4ef] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#c85a32] to-[#f4a261] rounded-full"
                  style={{ width: `${dish.percentage}%` }}
                />
              </div>

              <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                <span>{dish.orders} Total Thalis Served</span>
                <span>{dish.percentage}% of Revenue</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BANK PAYOUT ACCOUNT STATUS */}
      <div className="bg-white p-4 rounded-2xl border border-[#eae2d6] shadow-2xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#2a9d8f]" />
            <div>
              <h4 className="text-xs font-extrabold text-[#2b2d42]">Verified Nashik Bank Account</h4>
              <p className="text-[10px] text-gray-500">HDFC Bank • A/C Ending **** 4921</p>
            </div>
          </div>
          <span className="text-[10px] font-bold text-[#2a9d8f] bg-[#e6f4f1] px-2.5 py-1 rounded-full">
            Active Auto-Payout
          </span>
        </div>
        <p className="text-[11px] text-gray-500 border-t border-[#eae2d6] pt-2">
          Earnings are transferred automatically every evening at 9:00 PM after daily orders are completed.
        </p>
      </div>
    </div>
  );
};
