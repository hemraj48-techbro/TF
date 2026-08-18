import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import type { Order, Subscription } from '../../types';
import { 
  X, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  MapPin
} from 'lucide-react';

export const OrderCheckoutModal: React.FC = () => {
  const { 
    isCheckoutModalOpen, 
    setIsCheckoutModalOpen, 
    checkoutProvider, 
    checkoutType, 
    setCheckoutType,
    addOrder,
    addSubscription,
    setActiveTab,
    showToast 
  } = useApp();

  const [mealType, setMealType] = useState<'Lunch' | 'Dinner' | 'Both'>('Lunch');
  const [headcount, setHeadcount] = useState<number>(6);
  const [quantity, setQuantity] = useState<number>(1);
  const [deliveryAddress, setDeliveryAddress] = useState<string>('Flat 402, Sai Silver Heights, Near KTHM College, Gangapur Road, Nashik');
  
  // Payment view state
  const [step, setStep] = useState<'config' | 'upi' | 'success'>('config');
  const [selectedUpi, setSelectedUpi] = useState<'GPay' | 'PhonePe' | 'Paytm' | 'BHIM'>('GPay');

  if (!isCheckoutModalOpen || !checkoutProvider) return null;

  // Calculate pricing based on checkout type
  let basePrice = checkoutProvider.perMealPrice;
  let totalAmount = 0;
  let savingsText = '';

  if (checkoutType === 'Single') {
    totalAmount = basePrice * quantity;
  } else if (checkoutType === 'Weekly') {
    totalAmount = checkoutProvider.weeklyPlanPrice;
    savingsText = 'Save ₹150 vs daily ordering!';
  } else if (checkoutType === 'Monthly') {
    totalAmount = checkoutProvider.monthlyPlanPrice;
    savingsText = 'Save ₹600 vs daily ordering!';
  } else if (checkoutType === 'Group') {
    totalAmount = basePrice * headcount;
    savingsText = `Group discount applied for ${headcount} people!`;
  }

  const handleProceedToPayment = () => {
    setStep('upi');
  };

  const handleCompletePayment = () => {
    setStep('success');

    setTimeout(() => {
      if (checkoutType === 'Weekly' || checkoutType === 'Monthly') {
        const newSub: Subscription = {
          id: `SUB-${Math.floor(100 + Math.random() * 900)}`,
          providerId: checkoutProvider.id,
          providerName: checkoutProvider.name,
          providerImage: checkoutProvider.coverImage,
          planType: checkoutType,
          startDate: '2026-07-29',
          endDate: checkoutType === 'Weekly' ? '2026-08-05' : '2026-08-28',
          mealType: mealType,
          diet: checkoutProvider.diets[0] || 'Veg',
          pricePerDay: Math.round(totalAmount / (checkoutType === 'Weekly' ? 7 : 30)),
          totalPaid: totalAmount,
          status: 'Active',
          isLunchSkippedToday: false,
          isDinnerSkippedToday: false,
          deliveryAddress: deliveryAddress
        };
        addSubscription(newSub);
      } else {
        const newOrd: Order = {
          id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
          providerId: checkoutProvider.id,
          providerName: checkoutProvider.name,
          providerArea: checkoutProvider.area,
          customerName: 'Hemraj Patil',
          customerPhone: '+91 98234 56789',
          customerAddress: deliveryAddress,
          mealType: mealType,
          orderType: checkoutType,
          itemsSummary: checkoutType === 'Group' ? `${headcount}x Group Thalis` : `${quantity}x ${mealType} Thali`,
          headcount: checkoutType === 'Group' ? headcount : undefined,
          totalAmount: totalAmount,
          status: 'Confirmed',
          orderDate: 'Today, 28 July',
          deliveryTime: mealType === 'Lunch' ? '1:15 PM - 1:45 PM' : '8:00 PM - 8:30 PM',
          isSubscriber: false,
          paymentMethod: `UPI (${selectedUpi})` as any,
          paymentId: `UPI${Math.floor(100000 + Math.random() * 900000)}`
        };
        addOrder(newOrd);
      }

      setIsCheckoutModalOpen(false);
      setStep('config');
      setActiveTab('dashboard');
      showToast('Order confirmed successfully!');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-4 border-b border-[#eae2d6] flex items-center justify-between bg-white">
          <div>
            <h3 className="text-base font-extrabold text-[#2b2d42]">Checkout Order</h3>
            <p className="text-xs text-gray-500">{checkoutProvider.name}</p>
          </div>
          <button
            onClick={() => { setIsCheckoutModalOpen(false); setStep('config'); }}
            className="p-1.5 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: CONFIGURATION */}
        {step === 'config' && (
          <div className="p-4 overflow-y-auto space-y-4">
            {/* Plan Selector Switcher */}
            <div className="grid grid-cols-4 gap-1.5 p-1 bg-[#f7f4ef] rounded-xl border border-[#eae2d6]">
              {(['Single', 'Weekly', 'Monthly', 'Group'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setCheckoutType(t)}
                  className={`py-2 rounded-lg text-xs font-extrabold transition-all ${
                    checkoutType === t
                      ? 'bg-[#c85a32] text-white shadow-2xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {t === 'Single' ? 'Order Once' : t === 'Group' ? 'Group' : t}
                </button>
              ))}
            </div>

            {/* Savings highlight */}
            {savingsText && (
              <div className="bg-[#fff3e0] border border-[#f4a261]/40 p-2.5 rounded-xl text-xs text-[#e76f51] font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>{savingsText}</span>
              </div>
            )}

            {/* Group order specific field */}
            {checkoutType === 'Group' && (
              <div className="bg-white p-3.5 rounded-2xl border border-[#eae2d6] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#2b2d42] flex items-center gap-1">
                    <Users className="w-4 h-4 text-[#c85a32]" /> Group / Office Headcount
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setHeadcount(Math.max(2, headcount - 1))}
                      className="w-7 h-7 rounded-lg bg-gray-100 font-bold text-[#2b2d42]"
                    >
                      -
                    </button>
                    <span className="text-sm font-extrabold text-[#2b2d42]">{headcount} people</span>
                    <button
                      onClick={() => setHeadcount(headcount + 1)}
                      className="w-7 h-7 rounded-lg bg-[#f6e8e2] font-bold text-[#c85a32]"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500">Single box bulk delivery for teams and groups in Nashik.</p>
              </div>
            )}

            {/* Meal Type Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#2b2d42]">Select Meal Type:</label>
              <div className="grid grid-cols-3 gap-2">
                {(['Lunch', 'Dinner', 'Both'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMealType(m)}
                    className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                      mealType === m
                        ? 'border-[#c85a32] bg-[#f6e8e2] text-[#c85a32]'
                        : 'border-[#eae2d6] bg-white text-gray-700'
                    }`}
                  >
                    {m === 'Lunch' ? '☀️ Lunch' : m === 'Dinner' ? '🌙 Dinner' : '🍽️ Both'}
                  </button>
                ))}
              </div>
            </div>

            {/* Single Order Quantity */}
            {checkoutType === 'Single' && (
              <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-[#eae2d6]">
                <span className="text-xs font-bold text-[#2b2d42]">Quantity (Thalis):</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 rounded-lg bg-gray-100 font-bold"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-[#2b2d42]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 rounded-lg bg-[#f6e8e2] text-[#c85a32] font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Delivery Address Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#2b2d42] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#c85a32]" /> Delivery Address in Nashik:
              </label>
              <textarea
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                rows={2}
                className="w-full p-2.5 bg-[#f7f4ef] border border-[#eae2d6] rounded-xl text-xs font-medium focus:outline-none focus:border-[#c85a32]"
              />
            </div>

            {/* Bill Summary */}
            <div className="bg-[#f7f4ef] p-3.5 rounded-2xl border border-[#eae2d6] space-y-2 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Base Meal Price</span>
                <span>₹{basePrice}</span>
              </div>
              {checkoutType === 'Group' && (
                <div className="flex justify-between text-gray-600">
                  <span>Headcount multiplier ({headcount}x)</span>
                  <span>₹{basePrice * headcount}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-600">
                <span>Nashik Delivery Charge</span>
                <span className="text-[#2a9d8f] font-bold">FREE</span>
              </div>
              <div className="pt-2 border-t border-[#eae2d6] flex justify-between text-sm font-extrabold text-[#2b2d42]">
                <span>Total Amount Payable</span>
                <span className="text-[#c85a32]">₹{totalAmount}</span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: MOCK UPI PAYMENT SCREEN */}
        {step === 'upi' && (
          <div className="p-5 overflow-y-auto space-y-5 text-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Payable</span>
              <h2 className="text-3xl font-extrabold text-[#2b2d42] mt-0.5">₹{totalAmount}</h2>
              <p className="text-xs text-gray-500 mt-1">Select UPI App to authorize payment</p>
            </div>

            {/* UPI App Options */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'GPay', name: 'Google Pay' },
                { id: 'PhonePe', name: 'PhonePe' },
                { id: 'Paytm', name: 'Paytm UPI' },
                { id: 'BHIM', name: 'BHIM UPI' }
              ].map((app) => (
                <button
                  key={app.id}
                  onClick={() => setSelectedUpi(app.id as any)}
                  className={`p-3.5 rounded-2xl border-2 font-bold text-xs transition-all flex flex-col items-center gap-1.5 ${
                    selectedUpi === app.id
                      ? 'border-[#c85a32] bg-[#f6e8e2] text-[#c85a32] shadow-xs'
                      : 'border-[#eae2d6] bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-white shadow-2xs flex items-center justify-center font-black text-sm">
                    {app.id[0]}
                  </div>
                  <span>{app.name}</span>
                </button>
              ))}
            </div>

            <div className="bg-[#e6f4f1] p-3 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-[#2a9d8f]">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Encrypted UPI Mock Sandbox</span>
            </div>
          </div>
        )}

        {/* STEP 3: SUCCESS ANIMATION */}
        {step === 'success' && (
          <div className="p-8 text-center space-y-4 my-auto">
            <CheckCircle2 className="w-20 h-20 text-[#2a9d8f] mx-auto animate-bounce" />
            <h2 className="text-2xl font-extrabold text-[#2b2d42]">Payment Successful!</h2>
            <p className="text-xs text-gray-500">Your tiffin order has been confirmed with {checkoutProvider.name}.</p>
          </div>
        )}

        {/* Footer Action Button */}
        {step !== 'success' && (
          <div className="p-4 border-t border-[#eae2d6] bg-white">
            {step === 'config' ? (
              <button
                onClick={handleProceedToPayment}
                className="w-full py-3.5 bg-[#c85a32] hover:bg-[#b54a24] text-white font-extrabold rounded-xl shadow-sm text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Proceed to Pay ₹{totalAmount}</span>
              </button>
            ) : (
              <button
                onClick={handleCompletePayment}
                className="w-full py-3.5 bg-[#2a9d8f] hover:bg-[#238579] text-white font-extrabold rounded-xl shadow-sm text-sm transition-colors"
              >
                Pay ₹{totalAmount} via {selectedUpi}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
