import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LandingPage } from './pages/LandingPage';
import { AboutPage } from './pages/AboutPage';
import { AuthPage } from './pages/AuthPage';
import { ContactPage } from './pages/ContactPage';
import { DashboardApp } from './components/Dashboard/DashboardApp';
import { ToastContainer } from './components/UI/Toast';
import { useToast } from './hooks/useToast';

export type Page = 'landing' | 'about' | 'auth' | 'contact' | 'dashboard';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const { user, isLoading } = useAuth();
  const { toasts, removeToast } = useToast();

  // Auto-redirect to dashboard if user is authenticated
  useEffect(() => {
    if (user && currentPage === 'auth') {
      setCurrentPage('dashboard');
    }
  }, [user, currentPage]);

  const handleNavigate = (page: Page) => {
    if (page === 'dashboard' && !user) {
      setCurrentPage('auth');
    } else {
      setCurrentPage(page);
    }
  };

  const renderPage = () => {
    if (isLoading) {
      return (
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading...</p>
          </div>
        </div>
      );
    }

    if (user && currentPage === 'dashboard') {
      return <DashboardApp />;
    }

    switch (currentPage) {
      case 'landing': return <LandingPage onNavigate={handleNavigate} />;
      case 'about': return <AboutPage onNavigate={handleNavigate} />;
      case 'auth': return <AuthPage onNavigate={handleNavigate} />;
      case 'contact': return <ContactPage onNavigate={handleNavigate} />;
      case 'dashboard': 
        if (!user) {
          return <AuthPage onNavigate={handleNavigate} />;
        }
        return <DashboardApp />;
      default: return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg font-inter">
      {renderPage()}
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </div>
  );
}

function App() {
  console.log("App is loading");
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;