import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { LandingPage } from './pages/LandingPage';
import { AboutPage } from './pages/AboutPage';
import { AuthPage } from './pages/AuthPage';
import { ContactPage } from './pages/ContactPage';
import { DashboardApp } from './components/Dashboard/DashboardApp';
import { ToastContainer } from './components/UI/Toast';
import { useToast } from './hooks/useToast';

type Page = 'landing' | 'about' | 'auth' | 'contact' | 'dashboard';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toasts, removeToast } = useToast();

  const renderPage = () => {
    if (isAuthenticated && currentPage === 'dashboard') {
      return <DashboardApp />;
    }

    switch (currentPage) {
      case 'landing': return <LandingPage onNavigate={setCurrentPage} />;
      case 'about': return <AboutPage onNavigate={setCurrentPage} />;
      case 'auth': return <AuthPage onNavigate={setCurrentPage} onAuth={setIsAuthenticated} />;
      case 'contact': return <ContactPage onNavigate={setCurrentPage} />;
      case 'dashboard': 
        if (!isAuthenticated) {
          setCurrentPage('auth');
          return <AuthPage onNavigate={setCurrentPage} onAuth={setIsAuthenticated} />;
        }
        return <DashboardApp />;
      default: return <LandingPage onNavigate={setCurrentPage} />;
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
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;