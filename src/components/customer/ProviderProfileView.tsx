import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ArrowLeft, 
  Star, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Calendar, 
  Share2, 
  Award,
  Users
} from 'lucide-react';

export const ProviderProfileView: React.FC = () => {
  const { 
    providers, 
    selectedProviderId, 
    setSelectedProviderId,
    setCheckoutProvider,
    setCheckoutType,
    setIsCheckoutModalOpen 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'menu' | 'reviews' | 'about'>('menu');
  const [selectedDay, setSelectedDay] = useState<number>(0);

  const provider = providers.find(p => p.id === selectedProviderId) || providers[0];
  const daysList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;
  const currentDayMenu = provider.weeklyMenu[selectedDay] || provider.weeklyMenu[0];

  const handleOpenCheckout = (type: 'Single' | 'Weekly' | 'Monthly' | 'Group') => {
    setCheckoutProvider(provider);
    setCheckoutType(type);
    setIsCheckoutModalOpen(true);
  };

  return (
    <div className="space-y-4 pb-28 max-w-lg mx-auto bg-[#f7f4ef] min-h-screen">
      {/* Top Image & Nav Header */}
      <div className="relative h-56 w-full bg-gray-900">
        <img
          src={provider.coverImage}
          alt={provider.name}
          className="w-full h-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

        {/* Back & Share Buttons */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <button
            onClick={() => setSelectedProviderId(null)}
            className="w-9 h-9 rounded-full bg-white/90 text-[#2b2d42] flex items-center justify-center backdrop-blur-xs shadow-md hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="w-9 h-9 rounded-full bg-white/90 text-[#2b2d42] flex items-center justify-center backdrop-blur-xs shadow-md hover:bg-white transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Floating FSSAI Badge */}
        {provider.isFssaiVerified && (
          <div className="absolute top-3 right-16 bg-[#2a9d8f] text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
            <ShieldCheck className="w-3.5 h-3.5" /> FSSAI Verified
          </div>
        )}

        {/* Provider Title Info */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase bg-[#c85a32] px-2 py-0.5 rounded-md">
              {provider.cuisines.join(' • ')}
            </span>
            <span className="text-xs text-gray-200 flex items-center gap-1 font-medium">
              <MapPin className="w-3 h-3 text-[#f4a261]" /> {provider.area}
            </span>
          </div>

          <h1 className="text-2xl font-extrabold text-white leading-tight">{provider.name}</h1>
          <p className="text-xs text-gray-300 font-medium mt-0.5">By {provider.ownerName}</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-3 space-y-4">
        {/* Quick Stats Bar */}
        <div className="bg-white p-3.5 rounded-2xl border border-[#eae2d6] shadow-2xs flex items-center justify-around text-center">
          <div>
            <div className="flex items-center justify-center gap-1 text-sm font-extrabold text-[#2b2d42]">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>{provider.rating}</span>
            </div>
            <p className="text-[10px] text-gray-400 font-medium">{provider.reviewCount} Reviews</p>
          </div>
          <div className="h-8 w-px bg-[#eae2d6]" />
          <div>
            <div className="flex items-center justify-center gap-1 text-sm font-extrabold text-[#2b2d42]">
              <Clock className="w-4 h-4 text-[#c85a32]" />
              <span>{provider.deliveryTime}</span>
            </div>
            <p className="text-[10px] text-gray-400 font-medium">Avg Delivery</p>
          </div>
          <div className="h-8 w-px bg-[#eae2d6]" />
          <div>
            <div className="flex items-center justify-center gap-1 text-sm font-extrabold text-[#2a9d8f]">
              <Award className="w-4 h-4" />
              <span>100%</span>
            </div>
            <p className="text-[10px] text-gray-400 font-medium">Home Made</p>
          </div>
        </div>

        {/* FSSAI Verified Box */}
        {provider.isFssaiVerified && (
          <div className="bg-[#e6f4f1] border border-[#2a9d8f]/30 p-3 rounded-xl flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2a9d8f]" />
              <div>
                <span className="font-extrabold text-[#2b2d42]">FSSAI License Verified</span>
                <p className="text-[10px] text-gray-600">Lic. No: {provider.fssaiLicenseNo}</p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-[#2a9d8f] bg-white px-2 py-0.5 rounded-full border border-[#2a9d8f]/30">
              Hygiene Approved
            </span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#eae2d6] bg-white rounded-xl p-1 shadow-2xs">
          <button
            onClick={() => setActiveTab('menu')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
              activeTab === 'menu'
                ? 'bg-[#c85a32] text-white shadow-2xs'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" /> 7-Day Menu Grid
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${
              activeTab === 'reviews'
                ? 'bg-[#c85a32] text-white shadow-2xs'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Reviews ({provider.reviews.length})
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-colors ${
              activeTab === 'about'
                ? 'bg-[#c85a32] text-white shadow-2xs'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            About Kitchen
          </button>
        </div>

        {/* TAB 1: 7-DAY NO-REPEAT MENU GRID */}
        {activeTab === 'menu' && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-[#eae2d6] shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-extrabold text-[#2b2d42]">No-Repeat Weekly Calendar</h3>
                  <p className="text-[11px] text-gray-500">Different fresh dishes cooked every day of the week</p>
                </div>
                <span className="text-[10px] font-bold bg-[#f6e8e2] text-[#c85a32] px-2 py-0.5 rounded-md">
                  Weekly Schedule
                </span>
              </div>

              {/* Day Selector Buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {daysList.map((day, idx) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(idx)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex flex-col items-center min-w-[64px] ${
                      selectedDay === idx
                        ? 'bg-[#2b2d42] text-white shadow-xs'
                        : 'bg-[#f7f4ef] text-gray-600 hover:bg-[#f6e8e2]'
                    }`}
                  >
                    <span className="text-[10px] opacity-75 font-normal">{day.substring(0, 3)}</span>
                    <span>{day}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Cards for Selected Day */}
            <div className="space-y-3">
              {/* Lunch Menu Card */}
              <div className="bg-white p-4 rounded-2xl border border-[#eae2d6] shadow-2xs space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#c85a32] uppercase tracking-wider flex items-center gap-1">
                    ☀️ Lunch Thali Menu
                  </span>
                  {currentDayMenu.lunch.specialTag && (
                    <span className="text-[10px] font-bold bg-[#fff3e0] text-[#e76f51] px-2 py-0.5 rounded-full border border-[#f4a261]/30">
                      {currentDayMenu.lunch.specialTag}
                    </span>
                  )}
                </div>

                <h4 className="text-base font-extrabold text-[#2b2d42]">
                  {currentDayMenu.lunch.main}
                </h4>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="bg-[#f7f4ef] p-2 rounded-xl border border-[#eae2d6]">
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">Breads / Roti</span>
                    <p className="font-bold text-[#2b2d42] mt-0.5">{currentDayMenu.lunch.bread}</p>
                  </div>
                  <div className="bg-[#f7f4ef] p-2 rounded-xl border border-[#eae2d6]">
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">Rice Dish</span>
                    <p className="font-bold text-[#2b2d42] mt-0.5">{currentDayMenu.lunch.riceDish}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#eae2d6]">
                  <span className="text-[10px] text-gray-400 font-semibold uppercase">Accompaniments & Sides:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {currentDayMenu.lunch.sides.map((side, sIdx) => (
                      <span key={sIdx} className="text-xs bg-[#f6e8e2] text-[#c85a32] px-2.5 py-0.5 rounded-full font-medium">
                        + {side}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dinner Menu Card */}
              <div className="bg-white p-4 rounded-2xl border border-[#eae2d6] shadow-2xs space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#2b2d42] uppercase tracking-wider flex items-center gap-1">
                    🌙 Dinner Thali Menu
                  </span>
                  {currentDayMenu.dinner.specialTag && (
                    <span className="text-[10px] font-bold bg-[#fff3e0] text-[#e76f51] px-2 py-0.5 rounded-full">
                      {currentDayMenu.dinner.specialTag}
                    </span>
                  )}
                </div>

                <h4 className="text-base font-extrabold text-[#2b2d42]">
                  {currentDayMenu.dinner.main}
                </h4>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="bg-[#f7f4ef] p-2 rounded-xl border border-[#eae2d6]">
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">Breads / Roti</span>
                    <p className="font-bold text-[#2b2d42] mt-0.5">{currentDayMenu.dinner.bread}</p>
                  </div>
                  <div className="bg-[#f7f4ef] p-2 rounded-xl border border-[#eae2d6]">
                    <span className="text-[10px] text-gray-400 font-semibold uppercase">Rice Dish</span>
                    <p className="font-bold text-[#2b2d42] mt-0.5">{currentDayMenu.dinner.riceDish}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#eae2d6]">
                  <span className="text-[10px] text-gray-400 font-semibold uppercase">Accompaniments & Sides:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {currentDayMenu.dinner.sides.map((side, sIdx) => (
                      <span key={sIdx} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full font-medium">
                        + {side}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: REVIEWS */}
        {activeTab === 'reviews' && (
          <div className="space-y-3">
            {provider.reviews.map((rev) => (
              <div key={rev.id} className="bg-white p-4 rounded-2xl border border-[#eae2d6] shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#2b2d42]">{rev.customerName}</h4>
                    <span className="text-[10px] text-gray-400">{rev.customerArea} • {rev.date}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-xs font-bold text-amber-800">{rev.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">"{rev.comment}"</p>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: ABOUT KITCHEN */}
        {activeTab === 'about' && (
          <div className="bg-white p-4 rounded-2xl border border-[#eae2d6] shadow-2xs space-y-4">
            <div>
              <h4 className="text-sm font-extrabold text-[#2b2d42]">About {provider.name}</h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">{provider.bio}</p>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#eae2d6]">
              <span className="text-xs font-bold text-[#2b2d42]">Kitchen Photos</span>
              <div className="grid grid-cols-2 gap-2">
                {provider.kitchenPhotos.map((img, i) => (
                  <img key={i} src={img} alt="Kitchen" className="h-28 w-full object-cover rounded-xl border border-[#eae2d6]" />
                ))}
              </div>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-[#eae2d6] text-xs text-gray-600">
              <p><span className="font-bold text-[#2b2d42]">Owner:</span> {provider.ownerName}</p>
              <p><span className="font-bold text-[#2b2d42]">Full Address:</span> {provider.fullAddress}</p>
              <p><span className="font-bold text-[#2b2d42]">Daily Cooking Capacity:</span> {provider.dailyCapacity} Meals</p>
            </div>
          </div>
        )}
      </div>

      {/* Floating Bottom Sticky Action Bar */}
      <div className="fixed bottom-16 left-0 right-0 z-30 bg-white border-t border-[#eae2d6] p-3 shadow-lg max-w-lg mx-auto">
        <div className="flex items-center gap-2">
          {/* Single Order CTA */}
          <button
            onClick={() => handleOpenCheckout('Single')}
            className="flex-1 py-3 bg-[#f6e8e2] hover:bg-[#edd3c7] text-[#c85a32] font-extrabold rounded-xl text-xs flex flex-col items-center justify-center transition-colors"
          >
            <span>Order Once</span>
            <span className="text-[10px] font-bold text-[#c85a32]/80">₹{provider.perMealPrice} / meal</span>
          </button>

          {/* Subscribe Plan CTA */}
          <button
            onClick={() => handleOpenCheckout('Weekly')}
            className="flex-1 py-3 bg-[#c85a32] hover:bg-[#b54a24] text-white font-extrabold rounded-xl text-xs flex flex-col items-center justify-center shadow-sm transition-colors"
          >
            <span>Subscribe Plan</span>
            <span className="text-[10px] font-medium text-white/90">Weekly / Monthly</span>
          </button>

          {/* Group Order Option Button */}
          <button
            onClick={() => handleOpenCheckout('Group')}
            className="p-3 bg-[#2b2d42] hover:bg-gray-800 text-white rounded-xl text-xs flex items-center justify-center"
            title="Order for a group / office"
          >
            <Users className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
