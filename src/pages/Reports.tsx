import React, { useState } from 'react';
import { BarChart, TrendingUp, FileText, Download } from 'lucide-react';
import { MetricCard } from '../components/UI/MetricCard';
import { ReportsGenerator } from '../components/Dashboard/ReportsGenerator';
import { Report } from '../types';
import { useToast } from '../hooks/useToast';

const mockReports: Report[] = [
  {
    id: '1',
    title: 'Monthly Revenue Report - December 2024',
    type: 'revenue',
    period: 'monthly',
    data: {},
    generatedAt: new Date('2025-01-01'),
    status: 'ready'
  },
  {
    id: '2',
    title: 'Weekly Sales Performance',
    type: 'sales',
    period: 'weekly',
    data: {},
    generatedAt: new Date('2025-01-08'),
    status: 'ready'
  },
  {
    id: '3',
    title: 'Q4 Marketing Campaign Analysis',
    type: 'marketing',
    period: 'quarterly',
    data: {},
    generatedAt: new Date('2025-01-15'),
    status: 'generating'
  }
];

export const Reports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>(mockReports);
  const { addToast } = useToast();

  const handleGenerateReport = (type: Report['type'], period: Report['period']) => {
    const newReport: Report = {
      id: Date.now().toString(),
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Report - ${period}`,
      type,
      period,
      data: {},
      generatedAt: new Date(),
      status: 'generating'
    };

    setReports(prev => [newReport, ...prev]);
    
    addToast({
      message: `Generating ${type} report...`,
      type: 'info'
    });

    // Simulate report generation
    setTimeout(() => {
      setReports(prev => prev.map(report =>
        report.id === newReport.id
          ? { ...report, status: 'ready' }
          : report
      ));
      
      addToast({
        message: 'Report generated successfully!',
        type: 'success'
      });
    }, 3000);
  };

  const handleDownloadReport = (reportId: string) => {
    const report = reports.find(r => r.id === reportId);
    if (report) {
      addToast({
        message: `Downloading ${report.title}...`,
        type: 'info'
      });
    }
  };

  const totalReports = reports.length;
  const readyReports = reports.filter(r => r.status === 'ready').length;
  const generatingReports = reports.filter(r => r.status === 'generating').length;

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Reports & Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400">Generate insights and export comprehensive business reports.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Reports"
          value={totalReports.toString()}
          change="All time"
          changeType="neutral"
          icon={BarChart}
        />
        <MetricCard
          title="Ready Reports"
          value={readyReports.toString()}
          change="Available for download"
          changeType="positive"
          icon={FileText}
        />
        <MetricCard
          title="Generating"
          value={generatingReports.toString()}
          change="In progress"
          changeType="neutral"
          icon={TrendingUp}
        />
        <MetricCard
          title="Downloads"
          value="34"
          change="This month"
          changeType="positive"
          icon={Download}
        />
      </div>

      <ReportsGenerator
        reports={reports}
        onGenerateReport={handleGenerateReport}
        onDownloadReport={handleDownloadReport}
      />
    </div>
  );
};