import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, TrendingUp, DollarSign, Users, BarChart } from 'lucide-react';
import { Report } from '../../types';

interface ReportsGeneratorProps {
  reports: Report[];
  onGenerateReport: (type: Report['type'], period: Report['period']) => void;
  onDownloadReport: (reportId: string) => void;
}

export const ReportsGenerator: React.FC<ReportsGeneratorProps> = ({
  reports,
  onGenerateReport,
  onDownloadReport
}) => {
  const [selectedType, setSelectedType] = useState<Report['type']>('revenue');
  const [selectedPeriod, setSelectedPeriod] = useState<Report['period']>('monthly');

  const reportTypes = [
    { id: 'revenue', label: 'Revenue Report', icon: DollarSign, color: 'text-green-500' },
    { id: 'sales', label: 'Sales Report', icon: TrendingUp, color: 'text-blue-500' },
    { id: 'marketing', label: 'Marketing Report', icon: BarChart, color: 'text-purple-500' },
    { id: 'operations', label: 'Operations Report', icon: Users, color: 'text-orange-500' },
  ];

  const periods = [
    { id: 'daily', label: 'Daily' },
    { id: 'weekly', label: 'Weekly' },
    { id: 'monthly', label: 'Monthly' },
    { id: 'quarterly', label: 'Quarterly' },
  ];

  const statusColors = {
    generating: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200',
    ready: 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200',
    error: 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200',
  };

  return (
    <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Reports Generator</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <FileText className="w-4 h-4" />
          <span>{reports.length} reports</span>
        </div>
      </div>

      {/* Report Generator */}
      <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
        <h4 className="font-medium text-gray-900 dark:text-white mb-4">Generate New Report</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Report Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              {reportTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id as Report['type'])}
                    className={`flex items-center space-x-2 p-3 rounded-lg border transition-all ${
                      selectedType === type.id
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${type.color}`} />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {type.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Period
            </label>
            <div className="grid grid-cols-2 gap-2">
              {periods.map((period) => (
                <button
                  key={period.id}
                  onClick={() => setSelectedPeriod(period.id as Report['period'])}
                  className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                    selectedPeriod === period.id
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                      : 'border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <button
          onClick={() => onGenerateReport(selectedType, selectedPeriod)}
          className="w-full flex items-center justify-center space-x-2 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          <FileText className="w-4 h-4" />
          <span>Generate Report</span>
        </button>
      </div>

      {/* Recent Reports */}
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white mb-4">Recent Reports</h4>
        <div className="space-y-3">
          {reports.slice(0, 5).map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-all"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <FileText className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">{report.title}</h5>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(report.generatedAt).toLocaleDateString()}</span>
                    <span>•</span>
                    <span className="capitalize">{report.period}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 text-xs font-medium rounded ${statusColors[report.status]}`}>
                  {report.status}
                </span>
                {report.status === 'ready' && (
                  <button
                    onClick={() => onDownloadReport(report.id)}
                    className="p-2 text-primary-500 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};