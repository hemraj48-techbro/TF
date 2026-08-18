import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Clock, 
  CheckCircle2, 
  PauseCircle, 
  Star, 
  MapPin, 
  RotateCcw
} from 'lucide-react';

export const CustomerDashboard: React.FC = () => {
  const { 
    activeSubscription, 
    customerOrders, 
    toggleSkipMeal, 
    isPauseModalOpen, 
    setIsPauseModalOpen,
    isReviewModalOpen,
    setIsReviewModalOpen,
    showToast 
  } = useApp();

  const [pauseStartDate, setPauseStartDate] = useState('2026-08-01');
  const [pauseEndDate, setPauseEndDate] = useState('2026-08-05');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('Super authentic Pithla Bhakri! Arrived smoking hot.');

  // Current active order for tracking steps
  const activeOrder = customerOrders[0];

  const orderSteps = ['Confirmed', 'Preparing', 'Out for Delivery', 'Delivered'] as const;
  const currentStepIdx = activeOrder 
    ? orderSteps.indexOf(activeOrder.status) 
    : 1;

  const handlePauseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPauseModalOpen(false);
    showToast(`Subscription paused from ${pauseStartDate} to ${pauseEndDate}`);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsReviewModalOpen(false);
    showToast('Thank you for rating your tiffin!');
  };

  return (
    <div className="space-y-4 pb-20 px-3 max-w-lg mx-auto pt-2">
      {/* Top Banner / Welcome */}
      <div className="bg-[#2b2d42] text-white p-4 rounded-2xl shadow-sm space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase font-bold tracking-wider bg-[#c85a32] px-2.5 py-0.5 rounded-full">
            Active Subscribed Tiffin
          </span>
          <span className="text-xs text-gray-300 flex items-center gap-1 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#f4a261]" /> Gangapur Road
          </span>
        </div>
        <h2 className="text-xl font-extrabold text-white">Ghar Ka Khana Today</h2>
        <p className="text-xs text-gray-300">
          Subscribed to <span className="font-bold text-[#f4a261]">{activeSubscription?.providerName || "Aai's Kitchen"}</span>
        </p>
      </div>

      {/* TODAY'S MEAL CARDS WITH SKIP TOGGLE */}
      <div className="bg-white p-4 rounded-2xl border border-[#eae2d6] shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-extrabold text-[#2b2d42]">Today's Scheduled Meals</h3>
            <p className="text-[11px] text-[#c85a32] font-semibold flex items-center gap-1 mt-0.5">
              <Clock className="w-3 h-3" /> Skip before 9 PM for free wallet refund
            </p>
          </div>
          <button
            onClick={() => setIsPauseModalOpen(true)}
            className="text-xs font-bold text-gray-500 hover:text-[#c85a32] flex items-center gap-1 bg-[#f7f4ef] px-2.5 py-1.5 rounded-lg border border-[#eae2d6]"
          >
            <PauseCircle className="w-3.5 h-3.5" /> Pause Plan
          </button>
        </div>

        {/* Lunch Meal Card */}
        <div className={`p-3.5 rounded-xl border transition-all ${
          activeSubscription?.isLunchSkippedToday 
            ? 'bg-gray-50 border-gray-200 opacity-60' 
            : 'bg-[#f7f4ef] border-[#eae2d6]'
        }`}>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-extrabold uppercase text-[#c85a32] tracking-wider">
                ☀️ Lunch (1:15 PM)
              </span>
              <h4 className="text-sm font-extrabold text-[#2b2d42]">
                Pithla & Jowar Bhakri + Varan Bhaat
              </h4>
              <p className="text-[11px] text-gray-500">Includes Thecha, Sol Kadhi & Koshimbir</p>
            </div>

            {/* Skip Toggle */}
            <div className="flex flex-col items-end gap-1">
              <button
                onClick={() => toggleSkipMeal('Lunch')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                  activeSubscription?.isLunchSkippedToday
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-[#c85a32] text-white shadow-2xs hover:bg-[#b54a24]'
                }`}
              >
                {activeSubscription?.isLunchSkippedToday ? (
                  <>
                    <RotateCcw className="w-3 h-3" /> Unskip Lunch
                  </>
                ) : (
                  'Skip Lunch'
                )}
              </button>
              {activeSubscription?.isLunchSkippedToday && (
                <span className="text-[10px] font-bold text-amber-700">Skipped (Refunded)</span>
              )}
            </div>
          </div>
        </div>

        {/* Dinner Meal Card */}
        <div className={`p-3.5 rounded-xl border transition-all ${
          activeSubscription?.isDinnerSkippedToday 
            ? 'bg-gray-50 border-gray-200 opacity-60' 
            : 'bg-[#f7f4ef] border-[#eae2d6]'
        }`}>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-extrabold uppercase text-[#2b2d42] tracking-wider">
                🌙 Dinner (8:00 PM)
              </span>
              <h4 className="text-sm font-extrabold text-[#2b2d42]">
                Sev Bhaji (Spicy Khandeshi) + 3 Chapatis
              </h4>
              <p className="text-[11px] text-gray-500">Includes Jeera Rice & Papad</p>
            </div>

            {/* Skip Toggle */}
            <div className="flex flex-col items-end gap-1">
              <button
                onClick={() => toggleSkipMeal('Dinner')}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                  activeSubscription?.isDinnerSkippedToday
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-[#2b2d42] text-white shadow-2xs hover:bg-gray-800'
                }`}
              >
                {activeSubscription?.isDinnerSkippedToday ? (
                  <>
                    <RotateCcw className="w-3 h-3" /> Unskip Dinner
                  </>
                ) : (
                  'Skip Dinner'
                )}
              </button>
              {activeSubscription?.isDinnerSkippedToday && (
                <span className="text-[10px] font-bold text-amber-700">Skipped (Refunded)</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* LIVE ORDER STATUS TRACKER STEPPER */}
      <div className="bg-white p-4 rounded-2xl border border-[#eae2d6] shadow-2xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-extrabold uppercase text-[#2a9d8f] bg-[#e6f4f1] px-2 py-0.5 rounded-md">
              Live Delivery Status
            </span>
            <h3 className="text-base font-extrabold text-[#2b2d42] mt-1">Lunch Order Progress</h3>
          </div>
          <span className="text-xs font-bold text-[#c85a32]">ETA: 1:30 PM</span>
        </div>

        {/* Visual Step Indicator */}
        <div className="relative pt-2 pb-2">
          {/* Connector Line */}
          <div className="absolute top-5 left-4 right-4 h-1 bg-gray-200 -z-0" />
          <div 
            className="absolute top-5 left-4 h-1 bg-[#2a9d8f] transition-all duration-500 -z-0" 
            style={{ width: `${(currentStepIdx / (orderSteps.length - 1)) * 90}%` }}
          />

          <div className="flex justify-between relative z-10">
            {orderSteps.map((stepName, idx) => {
              const isCompleted = idx <= currentStepIdx;
              const isCurrent = idx === currentStepIdx;
              return (
                <div key={stepName} className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    isCompleted 
                      ? 'bg-[#2a9d8f] text-white ring-4 ring-[#e6f4f1]' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                  </div>
                  <span className={`text-[10px] mt-1.5 font-bold ${
                    isCurrent ? 'text-[#2a9d8f]' : isCompleted ? 'text-[#2b2d42]' : 'text-gray-400'
                  }`}>
                    {stepName}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Rider Info Card */}
        <div className="bg-[#f7f4ef] p-3 rounded-xl border border-[#eae2d6] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#c85a32] text-white font-bold flex items-center justify-center">
              GP
            </div>
            <div>
              <p className="font-extrabold text-[#2b2d42]">Ganesh Pawar (Rider)</p>
              <p className="text-[10px] text-gray-500">Nashik Tiffin Express • MH 15 EX 4092</p>
            </div>
          </div>
          <button 
            onClick={() => setIsReviewModalOpen(true)}
            className="px-2.5 py-1 bg-white border border-[#eae2d6] rounded-lg text-[11px] font-bold text-[#c85a32] hover:bg-[#f6e8e2]"
          >
            Rate Meal
          </button>
        </div>
      </div>

      {/* MODAL 1: PAUSE SUBSCRIPTION */}
      {isPauseModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm rounded-2xl p-5 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-[#2b2d42]">Pause Subscription</h3>
              <button onClick={() => setIsPauseModalOpen(false)} className="text-gray-400 font-bold">✕</button>
            </div>

            <p className="text-xs text-gray-500">
              Going out of Nashik? Select dates to pause deliveries. Unused days will be extended at the end.
            </p>

            <form onSubmit={handlePauseSubmit} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-gray-700">Pause Start Date:</label>
                <input
                  type="date"
                  value={pauseStartDate}
                  onChange={(e) => setPauseStartDate(e.target.value)}
                  className="w-full mt-1 p-2 bg-[#f7f4ef] border border-[#eae2d6] rounded-xl text-xs font-semibold"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-700">Resume Date:</label>
                <input
                  type="date"
                  value={pauseEndDate}
                  onChange={(e) => setPauseEndDate(e.target.value)}
                  className="w-full mt-1 p-2 bg-[#f7f4ef] border border-[#eae2d6] rounded-xl text-xs font-semibold"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#c85a32] text-white font-bold rounded-xl text-xs shadow-sm mt-2"
              >
                Confirm Pause Dates
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: RATE & REVIEW PROMPT */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm rounded-2xl p-5 space-y-4 shadow-xl text-center">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-[#2b2d42]">Rate Yesterday's Tiffin</h3>
              <button onClick={() => setIsReviewModalOpen(false)} className="text-gray-400 font-bold">✕</button>
            </div>

            <p className="text-xs text-gray-500">How was the meal prepared by Sunita Aai?</p>

            {/* Stars */}
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <button key={s} onClick={() => setReviewRating(s)}>
                  <Star className={`w-7 h-7 ${s <= reviewRating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} />
                </button>
              ))}
            </div>

            <textarea
              rows={3}
              value={reviewComment}
              onChange={(e) => setReviewComment(e.target.value)}
              className="w-full p-2.5 bg-[#f7f4ef] border border-[#eae2d6] rounded-xl text-xs font-medium focus:outline-none"
              placeholder="Write feedback for the home chef..."
            />

            <button
              onClick={handleReviewSubmit}
              className="w-full py-3 bg-[#2a9d8f] text-white font-bold rounded-xl text-xs shadow-sm"
            >
              Submit Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
