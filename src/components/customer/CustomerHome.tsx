import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import type { CuisineType, DietType } from '../../types';
import { Search, Star, ShieldCheck, Clock, ChevronRight, SlidersHorizontal, MapPin, Sparkles } from 'lucide-react';

export const CustomerHome: React.FC = () => {
  const { providers, selectedArea, setSelectedProviderId } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState<CuisineType | 'All'>('All');
  const [selectedDiet, setSelectedDiet] = useState<DietType | 'All'>('All');

  const cuisines: (CuisineType | 'All')[] = ['All', 'Maharashtrian', 'North Indian', 'South Indian', 'Gujarati', 'Jain'];
  const diets: (DietType | 'All')[] = ['All', 'Veg', 'Non-Veg', 'Jain'];

  const filteredProviders = providers.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.specialtyDish.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.bio.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCuisine = selectedCuisine === 'All' || p.cuisines.includes(selectedCuisine);
    const matchesDiet = selectedDiet === 'All' || p.diets.includes(selectedDiet);
    return matchesSearch && matchesCuisine && matchesDiet;
  });

  return (
    <div className="space-y-4 pb-20 px-3 max-w-lg mx-auto pt-2">
      {/* Top Banner / Search Header */}
      <div className="bg-white p-4 rounded-2xl border border-[#eae2d6] shadow-2xs space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-[#2b2d42] tracking-tight">
              Tiffins in <span className="text-[#c85a32]">{selectedArea}</span>
            </h2>
            <p className="text-xs text-gray-500 font-medium">Home-cooked daily thalis & monthly plans</p>
          </div>
          <span className="text-xs font-bold bg-[#f6e8e2] text-[#c85a32] px-2.5 py-1 rounded-full flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> {filteredProviders.length} Kitchens
          </span>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search dish (Pithla, Shev Bhaji, Chapati...)"
            className="w-full pl-10 pr-4 py-2.5 bg-[#f7f4ef] border border-[#eae2d6] rounded-xl text-xs font-medium focus:outline-none focus:border-[#c85a32]"
          />
        </div>

        {/* Cuisine Filter Pills */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between text-[11px] font-semibold text-gray-500">
            <span className="flex items-center gap-1"><SlidersHorizontal className="w-3 h-3" /> Cuisine / Region</span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {cuisines.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCuisine(c)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCuisine === c
                    ? 'bg-[#c85a32] text-white shadow-2xs font-semibold'
                    : 'bg-[#f7f4ef] text-gray-600 hover:bg-[#f6e8e2]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Diet Filter Pills */}
        <div className="flex items-center gap-1.5 pt-1">
          <span className="text-[11px] font-semibold text-gray-400 mr-1">Diet:</span>
          {diets.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDiet(d)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                selectedDiet === d
                  ? 'bg-[#2b2d42] text-white font-semibold'
                  : 'bg-[#f7f4ef] text-gray-600 hover:bg-gray-200'
              }`}
            >
              {d === 'Veg' ? '🟢 Pure Veg' : d === 'Non-Veg' ? '🔴 Non-Veg' : '🟡 Jain'}
            </button>
          ))}
        </div>
      </div>

      {/* Provider List */}
      <div className="space-y-4">
        {filteredProviders.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl text-center border border-[#eae2d6]">
            <p className="text-sm font-bold text-gray-600">No tiffin providers found for this filter</p>
            <button 
              onClick={() => { setSelectedCuisine('All'); setSelectedDiet('All'); setSearchQuery(''); }}
              className="mt-3 text-xs font-semibold text-[#c85a32] underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded-2xl border border-[#eae2d6] overflow-hidden shadow-2xs hover:shadow-md transition-shadow group"
            >
              {/* Cover Image & Badges */}
              <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                <img
                  src={provider.coverImage}
                  alt={provider.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* FSSAI Verified Badge */}
                {provider.isFssaiVerified && (
                  <div className="absolute top-3 left-3 bg-[#2a9d8f] text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5" /> FSSAI Verified
                  </div>
                )}

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-[#2b2d42] text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>{provider.rating}</span>
                  <span className="text-gray-400 font-normal">({provider.reviewCount})</span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-xs">
                    {provider.cuisines.join(' • ')}
                  </span>
                  <h3 className="text-lg font-bold mt-1 text-white drop-shadow-xs">{provider.name}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-600 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#c85a32]" /> {provider.area}
                  </span>
                  <span className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-3.5 h-3.5" /> {provider.deliveryTime}
                  </span>
                </div>

                <div className="bg-[#f7f4ef] p-2.5 rounded-xl border border-[#eae2d6]">
                  <p className="text-[11px] font-semibold text-[#c85a32] uppercase tracking-wider">Today's Specialty:</p>
                  <p className="text-xs font-bold text-[#2b2d42] mt-0.5">{provider.specialtyDish}</p>
                </div>

                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                  {provider.bio}
                </p>

                {/* Price & Action */}
                <div className="pt-2 border-t border-[#eae2d6] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-medium uppercase">Daily Thali</span>
                    <p className="text-sm font-extrabold text-[#2b2d42]">₹{provider.perMealPrice} <span className="text-xs font-normal text-gray-500">/ meal</span></p>
                  </div>

                  <button
                    onClick={() => setSelectedProviderId(provider.id)}
                    className="px-4 py-2.5 bg-[#c85a32] hover:bg-[#b54a24] text-white text-xs font-bold rounded-xl shadow-xs flex items-center gap-1 transition-colors"
                  >
                    <span>View 7-Day Menu</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
