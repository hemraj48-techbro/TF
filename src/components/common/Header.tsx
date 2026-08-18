import React from 'react';
import { useApp } from '../../context/AppContext';
import { NASHIK_AREAS } from '../../mockData';
import type { NashikArea } from '../../types';
import { UtensilsCrossed, MapPin, Smartphone, Monitor, UserCheck, Store } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    role,
    setRole,
    selectedArea,
    setSelectedArea,
    isMobilePreview,
    setIsMobilePreview
  } = useApp();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#eae2d6] shadow-xs px-4 py-2.5">
      <div className="flex items-center justify-between gap-2 max-w-lg mx-auto">
        {/* Logo */}
        <div 
          onClick={() => setRole(null)} 
          className="flex items-center gap-2 cursor-pointer group"
          title="Return to Role Selector"
        >
          <div className="w-9 h-9 rounded-xl bg-[#c85a32] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <UtensilsCrossed className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg text-[#2b2d42] leading-tight tracking-tight">Tiffin Finder</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 bg-[#f6e8e2] text-[#c85a32] rounded-md">Nashik</span>
            </div>
            <p className="text-[10px] text-gray-500 font-medium">Home-cooked tiffin marketplace</p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Location Picker (Only for customer role) */}
          {role === 'customer' && (
            <div className="relative flex items-center bg-[#f7f4ef] rounded-lg px-2 py-1 border border-[#eae2d6]">
              <MapPin className="w-3.5 h-3.5 text-[#c85a32] mr-1 shrink-0" />
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value as NashikArea)}
                className="bg-transparent text-xs font-semibold text-[#2b2d42] focus:outline-none cursor-pointer pr-1"
              >
                {NASHIK_AREAS.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Role Switcher Pill */}
          {role && (
            <button
              onClick={() => setRole(role === 'customer' ? 'provider' : 'customer')}
              className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-full bg-[#f6e8e2] text-[#c85a32] hover:bg-[#c85a32] hover:text-white transition-colors"
              title="Switch role for demo"
            >
              {role === 'customer' ? (
                <>
                  <Store className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Provider Mode</span>
                </>
              ) : (
                <>
                  <UserCheck className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Customer Mode</span>
                </>
              )}
            </button>
          )}

          {/* Device Frame Toggle */}
          <button
            onClick={() => setIsMobilePreview(!isMobilePreview)}
            className="p-1.5 rounded-lg text-gray-500 hover:text-[#c85a32] hover:bg-[#f6e8e2] transition-colors"
            title={isMobilePreview ? "View full width" : "View mobile container"}
          >
            {isMobilePreview ? <Monitor className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
