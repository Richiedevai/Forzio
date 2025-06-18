import React, { useState } from 'react';
import { Sidebar } from '../Layout/Sidebar';
import { Header } from '../Layout/Header';
import { Dashboard } from '../../pages/Dashboard';
import { Sales } from '../../pages/Sales';
import { Marketing } from '../../pages/Marketing';
import { Operations } from '../../pages/Operations';
import { Finance } from '../../pages/Finance';
import { Team } from '../../pages/Team';
import { Inbox } from '../../pages/Inbox';
import { Reports } from '../../pages/Reports';
import { Agents } from '../../pages/Agents';
import { Settings } from '../../pages/Settings';

export const DashboardApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'sales': return <Sales />;
      case 'marketing': return <Marketing />;
      case 'operations': return <Operations />;
      case 'finance': return <Finance />;
      case 'team': return <Team />;
      case 'inbox': return <Inbox />;
      case 'reports': return <Reports />;
      case 'agents': return <Agents />;
      case 'settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-bg-dark">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};