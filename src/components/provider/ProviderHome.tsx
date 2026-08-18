import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Users, 
  CheckSquare, 
  Square, 
  Send, 
  ChefHat,
  Truck
} from 'lucide-react';

export const ProviderHome: React.FC = () => {
  const { 
    providerChecklist, 
    setProviderChecklist, 
    providerCapacity, 
    setProviderCapacity,
    showToast 
  } = useApp();

  const togglePrepared = (id: string) => {
    setProviderChecklist(prev => prev.map(item => {
      if (item.id === id) {
        const nextVal = !item.prepared;
        showToast(nextVal ? `Marked "${item.customerName}" as Prepared!` : `Unmarked "${item.customerName}"`);
        return { ...item, prepared: nextVal };
      }
      return item;
    }));
  };

  const toggleOutForDelivery = (id: string) => {
    setProviderChecklist(prev => prev.map(item => {
      if (item.id === id) {
        const nextVal = !item.outForDelivery;
        showToast(nextVal ? `Marked "${item.customerName}" as Out for Delivery!` : `Unmarked "${item.customerName}"`);
        return { ...item, outForDelivery: nextVal };
      }
      return item;
    }));
  };

  const subscriberOrders = providerChecklist.filter(o => o.type === 'Subscribers');
  const oneTimeOrders = providerChecklist.filter(o => o.type === 'One-time orders');

  const totalPreparedCount = providerChecklist.filter(o => o.prepared).length;

  return (
    <div className="space-y-4 pb-20 px-3 max-w-lg mx-auto pt-2">
      {/* Top Welcome Header */}
      <div className="bg-[#2b2d42] text-white p-4 rounded-2xl shadow-sm space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase font-bold tracking-wider bg-[#c85a32] px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <ChefHat className="w-3 h-3" /> Sunita Aai's Kitchen
          </span>
          <span className="text-xs text-gray-300 font-medium">Gangapur Road</span>
        </div>
        <h2 className="text-xl font-extrabold text-white">Today's Kitchen Operations</h2>
        <p className="text-xs text-gray-300">
          {providerChecklist.length} orders scheduled for lunch & dinner.
        </p>
      </div>

      {/* DAILY CAPACITY STEPPER COUNTER */}
      <div className="bg-white p-4 rounded-2xl border border-[#eae2d6] shadow-2xs space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-extrabold text-[#2b2d42]">Daily Cooking Capacity</h3>
            <p className="text-[11px] text-gray-500">How many total people can you cook for today?</p>
          </div>
          <span className="text-xs font-bold text-[#c85a32] bg-[#f6e8e2] px-2.5 py-1 rounded-full">
            {totalPreparedCount} / {providerCapacity} Cooked
          </span>
        </div>

        <div className="flex items-center justify-between bg-[#f7f4ef] p-3 rounded-xl border border-[#eae2d6]">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#c85a32]" />
            <span className="text-xs font-extrabold text-[#2b2d42]">Capacity Limit:</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setProviderCapacity(Math.max(10, providerCapacity - 5))}
              className="w-8 h-8 rounded-lg bg-white border border-[#eae2d6] text-[#2b2d42] font-extrabold shadow-2xs hover:bg-gray-100"
            >
              -
            </button>
            <span className="text-base font-extrabold text-[#2b2d42] min-w-[32px] text-center">
              {providerCapacity}
            </span>
            <button
              onClick={() => setProviderCapacity(providerCapacity + 5)}
              className="w-8 h-8 rounded-lg bg-[#c85a32] text-white font-extrabold shadow-2xs hover:bg-[#b54a24]"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* TODAY'S ORDERS CHECKLIST (WHATSAPP STYLE) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-extrabold text-[#2b2d42] flex items-center gap-1.5">
            <CheckSquare className="w-4 h-4 text-[#c85a32]" /> Today's Order Checklist
          </h3>
          <span className="text-xs text-gray-400 font-medium">WhatsApp Style Simple List</span>
        </div>

        {/* SECTION 1: SUBSCRIBERS */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-[#c85a32] bg-[#f6e8e2] px-3 py-1.5 rounded-lg">
            <span>Subscribers ({subscriberOrders.length})</span>
            <span className="text-[10px] font-medium text-gray-600">Daily Regular Tiffins</span>
          </div>

          {subscriberOrders.map((order) => (
            <div
              key={order.id}
              className={`bg-white p-3.5 rounded-2xl border transition-all space-y-2 ${
                order.outForDelivery
                  ? 'border-[#2a9d8f] bg-[#e6f4f1]/30'
                  : order.prepared
                  ? 'border-amber-300 bg-amber-50/40'
                  : 'border-[#eae2d6]'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-[#2b2d42]">{order.customerName}</h4>
                  <p className="text-xs font-semibold text-[#c85a32] mt-0.5">{order.meal}</p>
                  <p className="text-[11px] text-gray-500">{order.area} • Phone: {order.phone}</p>
                </div>
                
                <a
                  href={`https://wa.me/91${order.phone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-[#25D366] text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-2xs hover:opacity-90"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Action Checkboxes */}
              <div className="pt-2 border-t border-[#eae2d6] flex items-center justify-between text-xs font-semibold">
                <button
                  onClick={() => togglePrepared(order.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
                    order.prepared
                      ? 'bg-amber-100 border-amber-300 text-amber-900 font-extrabold'
                      : 'bg-[#f7f4ef] border-[#eae2d6] text-gray-600'
                  }`}
                >
                  {order.prepared ? <ChefHat className="w-4 h-4 text-amber-700" /> : <Square className="w-4 h-4" />}
                  <span>{order.prepared ? 'Prepared ✓' : 'Mark Prepared'}</span>
                </button>

                <button
                  onClick={() => toggleOutForDelivery(order.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
                    order.outForDelivery
                      ? 'bg-[#2a9d8f] text-white border-[#2a9d8f] font-extrabold'
                      : 'bg-[#f7f4ef] border-[#eae2d6] text-gray-600'
                  }`}
                >
                  {order.outForDelivery ? <Truck className="w-4 h-4" /> : <Square className="w-4 h-4" />}
                  <span>{order.outForDelivery ? 'Out for Delivery ✓' : 'Dispatch'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 2: ONE-TIME ORDERS */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between text-xs font-bold text-[#2b2d42] bg-[#f7f4ef] px-3 py-1.5 rounded-lg border border-[#eae2d6]">
            <span>One-Time Orders ({oneTimeOrders.length})</span>
            <span className="text-[10px] text-gray-500 font-medium">Single & Group Orders</span>
          </div>

          {oneTimeOrders.map((order) => (
            <div
              key={order.id}
              className={`bg-white p-3.5 rounded-2xl border transition-all space-y-2 ${
                order.outForDelivery
                  ? 'border-[#2a9d8f] bg-[#e6f4f1]/30'
                  : order.prepared
                  ? 'border-amber-300 bg-amber-50/40'
                  : 'border-[#eae2d6]'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-extrabold text-[#2b2d42]">{order.customerName}</h4>
                    <span className="text-[10px] font-extrabold bg-[#fff3e0] text-[#e76f51] px-2 py-0.5 rounded-md">
                      Special Order
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#c85a32] mt-0.5">{order.meal}</p>
                  <p className="text-[11px] text-gray-500">{order.area} • Phone: {order.phone}</p>
                </div>

                <a
                  href={`https://wa.me/91${order.phone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-[#25D366] text-white rounded-xl text-xs font-bold flex items-center gap-1 shadow-2xs hover:opacity-90"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Action Checkboxes */}
              <div className="pt-2 border-t border-[#eae2d6] flex items-center justify-between text-xs font-semibold">
                <button
                  onClick={() => togglePrepared(order.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
                    order.prepared
                      ? 'bg-amber-100 border-amber-300 text-amber-900 font-extrabold'
                      : 'bg-[#f7f4ef] border-[#eae2d6] text-gray-600'
                  }`}
                >
                  {order.prepared ? <ChefHat className="w-4 h-4 text-amber-700" /> : <Square className="w-4 h-4" />}
                  <span>{order.prepared ? 'Prepared ✓' : 'Mark Prepared'}</span>
                </button>

                <button
                  onClick={() => toggleOutForDelivery(order.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
                    order.outForDelivery
                      ? 'bg-[#2a9d8f] text-white border-[#2a9d8f] font-extrabold'
                      : 'bg-[#f7f4ef] border-[#eae2d6] text-gray-600'
                  }`}
                >
                  {order.outForDelivery ? <Truck className="w-4 h-4" /> : <Square className="w-4 h-4" />}
                  <span>{order.outForDelivery ? 'Out for Delivery ✓' : 'Dispatch'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
