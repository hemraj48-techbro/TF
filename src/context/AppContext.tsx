import React, { createContext, useContext, useState } from 'react';
import type { Role, NashikArea, Provider, Order, Subscription } from '../types';
import { MOCK_PROVIDERS, INITIAL_CUSTOMER_ORDERS, INITIAL_CUSTOMER_SUBSCRIPTION, INITIAL_PROVIDER_ORDERS } from '../mockData';

interface AppContextType {
  role: Role;
  setRole: (role: Role) => void;
  selectedArea: NashikArea;
  setSelectedArea: (area: NashikArea) => void;
  customerOnboarded: boolean;
  setCustomerOnboarded: (val: boolean) => void;
  providerOnboarded: boolean;
  setProviderOnboarded: (val: boolean) => void;
  providers: Provider[];
  setProviders: React.Dispatch<React.SetStateAction<Provider[]>>;
  activeSubscription: Subscription | null;
  setActiveSubscription: React.Dispatch<React.SetStateAction<Subscription | null>>;
  customerOrders: Order[];
  setCustomerOrders: React.Dispatch<React.SetStateAction<Order[]>>;
  providerChecklist: typeof INITIAL_PROVIDER_ORDERS;
  setProviderChecklist: React.Dispatch<React.SetStateAction<typeof INITIAL_PROVIDER_ORDERS>>;
  providerCapacity: number;
  setProviderCapacity: React.Dispatch<React.SetStateAction<number>>;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedProviderId: string | null;
  setSelectedProviderId: (id: string | null) => void;
  checkoutProvider: Provider | null;
  setCheckoutProvider: (p: Provider | null) => void;
  checkoutType: 'Single' | 'Weekly' | 'Monthly' | 'Group';
  setCheckoutType: (type: 'Single' | 'Weekly' | 'Monthly' | 'Group') => void;
  isCheckoutModalOpen: boolean;
  setIsCheckoutModalOpen: (open: boolean) => void;
  isPauseModalOpen: boolean;
  setIsPauseModalOpen: (open: boolean) => void;
  isReviewModalOpen: boolean;
  setIsReviewModalOpen: (open: boolean) => void;
  toggleSkipMeal: (meal: 'Lunch' | 'Dinner') => void;
  addOrder: (order: Order) => void;
  addSubscription: (sub: Subscription) => void;
  isMobilePreview: boolean;
  setIsMobilePreview: (val: boolean) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<Role>(() => {
    return (localStorage.getItem('tiffin_finder_role') as Role) || null;
  });
  
  const [selectedArea, setSelectedArea] = useState<NashikArea>('Gangapur Road');
  const [customerOnboarded, setCustomerOnboarded] = useState<boolean>(true);
  const [providerOnboarded, setProviderOnboarded] = useState<boolean>(true);
  
  const [providers, setProviders] = useState<Provider[]>(MOCK_PROVIDERS);
  const [activeSubscription, setActiveSubscription] = useState<Subscription | null>(INITIAL_CUSTOMER_SUBSCRIPTION);
  const [customerOrders, setCustomerOrders] = useState<Order[]>(INITIAL_CUSTOMER_ORDERS);
  const [providerChecklist, setProviderChecklist] = useState(INITIAL_PROVIDER_ORDERS);
  const [providerCapacity, setProviderCapacity] = useState<number>(60);
  
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProviderId, setSelectedProviderId] = useState<string | null>(null);
  
  const [checkoutProvider, setCheckoutProvider] = useState<Provider | null>(null);
  const [checkoutType, setCheckoutType] = useState<'Single' | 'Weekly' | 'Monthly' | 'Group'>('Single');
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState<boolean>(false);
  const [isPauseModalOpen, setIsPauseModalOpen] = useState<boolean>(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState<boolean>(false);
  const [isMobilePreview, setIsMobilePreview] = useState<boolean>(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const setRole = (newRole: Role) => {
    setRoleState(newRole);
    if (newRole) {
      localStorage.setItem('tiffin_finder_role', newRole);
    } else {
      localStorage.removeItem('tiffin_finder_role');
    }
    setActiveTab(newRole === 'provider' ? 'provider_home' : 'home');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const toggleSkipMeal = (meal: 'Lunch' | 'Dinner') => {
    if (!activeSubscription) return;
    
    if (meal === 'Lunch') {
      const nextVal = !activeSubscription.isLunchSkippedToday;
      setActiveSubscription({
        ...activeSubscription,
        isLunchSkippedToday: nextVal
      });
      showToast(nextVal ? 'Lunch skipped for today! Refund credited to wallet.' : 'Lunch unskipped for today!');
    } else {
      const nextVal = !activeSubscription.isDinnerSkippedToday;
      setActiveSubscription({
        ...activeSubscription,
        isDinnerSkippedToday: nextVal
      });
      showToast(nextVal ? 'Dinner skipped for today! Refund credited to wallet.' : 'Dinner unskipped for today!');
    }
  };

  const addOrder = (order: Order) => {
    setCustomerOrders(prev => [order, ...prev]);
  };

  const addSubscription = (sub: Subscription) => {
    setActiveSubscription(sub);
  };

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        selectedArea,
        setSelectedArea,
        customerOnboarded,
        setCustomerOnboarded,
        providerOnboarded,
        setProviderOnboarded,
        providers,
        setProviders,
        activeSubscription,
        setActiveSubscription,
        customerOrders,
        setCustomerOrders,
        providerChecklist,
        setProviderChecklist,
        providerCapacity,
        setProviderCapacity,
        activeTab,
        setActiveTab,
        selectedProviderId,
        setSelectedProviderId,
        checkoutProvider,
        setCheckoutProvider,
        checkoutType,
        setCheckoutType,
        isCheckoutModalOpen,
        setIsCheckoutModalOpen,
        isPauseModalOpen,
        setIsPauseModalOpen,
        isReviewModalOpen,
        setIsReviewModalOpen,
        toggleSkipMeal,
        addOrder,
        addSubscription,
        isMobilePreview,
        setIsMobilePreview,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
