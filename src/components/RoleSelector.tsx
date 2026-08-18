import React from 'react';
import { useApp } from '../context/AppContext';
import { UtensilsCrossed, Store, ArrowRight, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';

export const RoleSelector: React.FC = () => {
  const { setRole } = useApp();

  return (
    <div className="min-h-[85vh] flex flex-col justify-between p-4 max-w-md mx-auto">
      {/* Top Banner */}
      <div className="text-center pt-4 pb-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f6e8e2] text-[#c85a32] text-xs font-semibold rounded-full mb-3 border border-[#edd3c7]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Nashik's Premier Home Tiffin Network</span>
        </div>
        
        <h1 className="text-3xl font-extrabold text-[#2b2d42] leading-tight tracking-tight">
          Ghar Ka Khana,<br />
          <span className="text-[#c85a32]">Delivered Fresh Daily.</span>
        </h1>
        
        <p className="text-sm text-gray-600 mt-2 px-4 font-normal">
          Connecting verified local home cooks in Gangapur, College Rd, CIDCO & Panchavati with food lovers.
        </p>

        {/* Nashik highlight pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-[11px] text-gray-500 font-medium">
          <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-[#eae2d6] shadow-2xs">
            <MapPin className="w-3 h-3 text-[#c85a32]" /> Gangapur Rd
          </span>
          <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-[#eae2d6] shadow-2xs">
            <MapPin className="w-3 h-3 text-[#c85a32]" /> College Rd
          </span>
          <span className="inline-flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-[#eae2d6] shadow-2xs">
            <MapPin className="w-3 h-3 text-[#c85a32]" /> CIDCO
          </span>
        </div>
      </div>

      {/* Role Selection Cards */}
      <div className="space-y-4 my-6">
        {/* Customer Card */}
        <div
          onClick={() => setRole('customer')}
          className="group relative bg-white p-5 rounded-2xl border-2 border-transparent hover:border-[#c85a32] shadow-sm hover:shadow-md cursor-pointer transition-all duration-200"
        >
          <div className="flex items-start justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#f6e8e2] text-[#c85a32] flex items-center justify-center group-hover:bg-[#c85a32] group-hover:text-white transition-colors">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2a9d8f] bg-[#e6f4f1] px-2.5 py-1 rounded-full flex items-center gap-1">
              <Heart className="w-3 h-3 fill-current" /> Order Food
            </span>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold text-[#2b2d42] group-hover:text-[#c85a32] transition-colors">
              I'm a Customer
            </h3>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Discover authentic home-cooked meals, 7-day no-repeat menus, flexible daily skips & group orders.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[#eae2d6] flex items-center justify-between text-xs font-semibold text-[#c85a32]">
            <span>Explore Nashik Tiffin Providers</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Provider Card */}
        <div
          onClick={() => setRole('provider')}
          className="group relative bg-white p-5 rounded-2xl border-2 border-transparent hover:border-[#f4a261] shadow-sm hover:shadow-md cursor-pointer transition-all duration-200"
        >
          <div className="flex items-start justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#fff3e0] text-[#e76f51] flex items-center justify-center group-hover:bg-[#f4a261] group-hover:text-white transition-colors">
              <Store className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#c85a32] bg-[#f6e8e2] px-2.5 py-1 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Cook & Earn
            </span>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-bold text-[#2b2d42] group-hover:text-[#e76f51] transition-colors">
              I'm a Tiffin Provider
            </h3>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Grow your home food business. Simple 3-step setup, set daily capacity, and manage subscribers easily.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[#eae2d6] flex items-center justify-between text-xs font-semibold text-[#e76f51]">
            <span>Register Kitchen / Login</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="text-center text-xs text-gray-400 font-medium">
        <p>Nashik FSSAI Verified Kitchens Network • 100% Homemade</p>
      </div>
    </div>
  );
};
