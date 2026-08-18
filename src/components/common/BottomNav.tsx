import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Search, 
  Calendar, 
  ShoppingBag, 
  User, 
  CheckSquare, 
  Utensils, 
  TrendingUp, 
  Store 
} from 'lucide-react';

interface NavTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export const BottomNav: React.FC = () => {
  const { role, activeTab, setActiveTab } = useApp();

  if (!role) return null;

  const customerTabs: NavTab[] = [
    { id: 'home', label: 'Search', icon: Search },
    { id: 'dashboard', label: 'My Tiffin', icon: Calendar, badge: 'Active' },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const providerTabs: NavTab[] = [
    { id: 'provider_home', label: 'Today', icon: CheckSquare },
    { id: 'provider_menu', label: 'Menu & Cap', icon: Utensils },
    { id: 'provider_earnings', label: 'Earnings', icon: TrendingUp },
    { id: 'provider_profile', label: 'Profile', icon: Store },
  ];

  const tabs = role === 'customer' ? customerTabs : providerTabs;


  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 glass-nav max-w-lg mx-auto">
      <div className="flex items-center justify-around h-16 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 ${
                isActive 
                  ? 'text-[#c85a32] font-semibold scale-105' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
                {tab.badge && (
                  <span className="absolute -top-1 -right-2.5 w-2 h-2 rounded-full bg-[#c85a32] animate-ping" />
                )}
              </div>
              <span className="text-[11px] mt-1 tracking-tight">{tab.label}</span>
              {isActive && (
                <div className="absolute top-0 w-8 h-1 bg-[#c85a32] rounded-b-full shadow-xs" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
