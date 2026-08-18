import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { BottomNav } from './components/common/BottomNav';
import { RoleSelector } from './components/RoleSelector';
import { CustomerOnboarding } from './components/customer/CustomerOnboarding';
import { CustomerHome } from './components/customer/CustomerHome';
import { ProviderProfileView } from './components/customer/ProviderProfileView';
import { CustomerDashboard } from './components/customer/CustomerDashboard';
import { OrderCheckoutModal } from './components/customer/OrderCheckoutModal';
import { ProviderOnboarding } from './components/provider/ProviderOnboarding';
import { ProviderHome } from './components/provider/ProviderHome';
import { ProviderEarnings } from './components/provider/ProviderEarnings';
import { ProviderProfileManager } from './components/provider/ProviderProfileManager';
import { PitchSite } from './components/pitch/PitchSite';
import { Store, CheckCircle2, Layout, Smartphone } from 'lucide-react';

const MainContent: React.FC = () => {
  const [viewMode, setViewMode] = useState<'pitch' | 'app'>('pitch');
  const {
    role,
    setRole,
    customerOnboarded,
    providerOnboarded,
    activeTab,
    selectedProviderId,
    isMobilePreview,
    toastMessage,
    selectedArea
  } = useApp();

  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f1f5f9] relative">
      {/* Top Pitch Site vs Mobile App Prototype View Switcher Bar */}
      <div className="bg-[#121520] border-b border-white/10 px-4 py-2 flex items-center justify-between text-xs sticky top-0 z-50">
        <div className="flex items-center gap-2 text-gray-300">
          <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping"></span>
          <span className="font-bold text-white">TiffinFinder</span>
          <span className="text-gray-500 hidden sm:inline">• Eureka! 2026 Pitch Site & App Prototype</span>
        </div>

        <div className="flex items-center bg-[#090a0f] p-1 rounded-xl border border-white/10">
          <button
            onClick={() => setViewMode('pitch')}
            className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
              viewMode === 'pitch'
                ? 'bg-[#FF6B00] text-white shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>1-Page Pitch Site</span>
          </button>

          <button
            onClick={() => setViewMode('app')}
            className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
              viewMode === 'app'
                ? 'bg-[#FF6B00] text-white shadow-md'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Live App Prototype</span>
          </button>
        </div>
      </div>

      {viewMode === 'pitch' ? (
        <PitchSite />
      ) : (
        <div className={`min-h-screen bg-[#f7f4ef] flex flex-col items-center justify-start text-[#2b2d42] ${isMobilePreview ? 'py-0 sm:py-6' : 'py-0'}`}>
          {/* Toast Notification Banner */}
          {toastMessage && (
            <div className="fixed top-14 left-1/2 -translate-x-1/2 z-50 bg-[#2b2d42] text-white px-4 py-2.5 rounded-full text-xs font-extrabold shadow-lg flex items-center gap-2 border border-white/20 transition-all duration-300">
              <CheckCircle2 className="w-4 h-4 text-[#2a9d8f]" />
              <span>{toastMessage}</span>
            </div>
          )}


          {/* Main Container Container (Mobile Viewport Shell or Full Screen) */}
          <div 
            className={`w-full bg-[#f7f4ef] relative flex flex-col transition-all duration-300 min-h-screen ${
              isMobilePreview 
                ? 'max-w-md bg-white sm:rounded-[36px] sm:shadow-2xl sm:border-4 sm:border-[#eae2d6] sm:overflow-hidden sm:min-h-[844px]' 
                : 'max-w-4xl'
            }`}
          >
            <Header />

            {/* Dynamic View Routing */}
            <main className="flex-1 overflow-y-auto">
              {!role && <RoleSelector />}

              {/* CUSTOMER FLOW */}
              {role === 'customer' && (
                <>
                  {!customerOnboarded ? (
                    <CustomerOnboarding />
                  ) : selectedProviderId ? (
                    <ProviderProfileView />
                  ) : (
                    <>
                      {activeTab === 'home' && <CustomerHome />}
                      {activeTab === 'dashboard' && <CustomerDashboard />}
                      {activeTab === 'orders' && <CustomerDashboard />}
                      {activeTab === 'profile' && (
                        <div className="p-4 space-y-4 max-w-lg mx-auto">
                          <div className="bg-white p-5 rounded-2xl border border-[#eae2d6] text-center space-y-2">
                            <div className="w-16 h-16 rounded-full bg-[#f6e8e2] text-[#c85a32] font-black text-xl flex items-center justify-center mx-auto">
                              HP
                            </div>
                            <h2 className="text-lg font-extrabold text-[#2b2d42]">Hemraj Patil</h2>
                            <p className="text-xs text-gray-500">+91 98234 56789 • {selectedArea}, Nashik</p>

                            <div className="pt-4 border-t border-[#eae2d6] flex flex-col gap-2">
                              <button
                                onClick={() => setRole('provider')}
                                className="w-full py-3 bg-[#f6e8e2] text-[#c85a32] font-extrabold rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-[#c85a32] hover:text-white transition-colors"
                              >
                                <Store className="w-4 h-4" />
                                <span>Switch to Tiffin Provider Demo Mode</span>
                              </button>
                              <button
                                onClick={() => setRole(null)}
                                className="w-full py-2.5 bg-gray-100 text-gray-600 font-bold rounded-xl text-xs"
                              >
                                Reset Role Selection
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}

              {/* PROVIDER FLOW */}
              {role === 'provider' && (
                <>
                  {!providerOnboarded ? (
                    <ProviderOnboarding />
                  ) : (
                    <>
                      {activeTab === 'provider_home' && <ProviderHome />}
                      {activeTab === 'provider_menu' && <ProviderHome />}
                      {activeTab === 'provider_earnings' && <ProviderEarnings />}
                      {activeTab === 'provider_profile' && <ProviderProfileManager />}
                    </>
                  )}
                </>
              )}
            </main>

            <BottomNav />
            <OrderCheckoutModal />
          </div>
        </div>
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
};

export default App;

