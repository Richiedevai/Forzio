import React, { useState } from 'react';
import { 
  User, 
  Building, 
  Plug, 
  Bell, 
  Palette, 
  Shield,
  Save,
  Copy,
  RefreshCw,
  Upload,
  Mail,
  Lock,
  Smartphone,
  LogOut,
  Trash2
} from 'lucide-react';
import { Card } from '../components/UI/Card';
import { Input } from '../components/UI/Input';
import { Select } from '../components/UI/Select';
import { Button } from '../components/UI/Button';
import { Toggle } from '../components/UI/Toggle';
import { SettingsTab } from '../components/Settings/SettingsTab';
import { IntegrationCard } from '../components/Settings/IntegrationCard';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/useToast';

const tabs = [
  { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
  { id: 'company', label: 'Company', icon: <Building className="w-5 h-5" /> },
  { id: 'integrations', label: 'Integrations', icon: <Plug className="w-5 h-5" /> },
  { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" /> },
  { id: 'appearance', label: 'Appearance', icon: <Palette className="w-5 h-5" /> },
  { id: 'security', label: 'Security', icon: <Shield className="w-5 h-5" /> },
];

const roleOptions = [
  { value: 'founder', label: 'Founder' },
  { value: 'ceo', label: 'CEO' },
  { value: 'cto', label: 'CTO' },
  { value: 'ops-manager', label: 'Operations Manager' },
  { value: 'other', label: 'Other' },
];

const industryOptions = [
  { value: 'saas', label: 'SaaS' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'fintech', label: 'Fintech' },
  { value: 'healthtech', label: 'Healthtech' },
  { value: 'edtech', label: 'Edtech' },
  { value: 'other', label: 'Other' },
];

const companySizeOptions = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-500', label: '201-500 employees' },
  { value: '500+', label: '500+ employees' },
];

const mockIntegrations = [
  {
    id: 'slack',
    name: 'Slack',
    description: 'Team communication and notifications',
    icon: <div className="w-5 h-5 bg-purple-500 rounded" />,
    status: 'connected' as const,
    lastSync: '2 minutes ago'
  },
  {
    id: 'gmail',
    name: 'Gmail',
    description: 'Email automation and tracking',
    icon: <Mail className="w-5 h-5 text-red-500" />,
    status: 'connected' as const,
    lastSync: '5 minutes ago'
  },
  {
    id: 'stripe',
    name: 'Stripe',
    description: 'Payment processing and analytics',
    icon: <div className="w-5 h-5 bg-blue-500 rounded" />,
    status: 'disconnected' as const
  },
  {
    id: 'notion',
    name: 'Notion',
    description: 'Documentation and knowledge base',
    icon: <div className="w-5 h-5 bg-gray-800 rounded" />,
    status: 'pending' as const
  },
];

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    role: 'founder',
    companyName: 'Acme Corp',
    industry: 'saas',
    companySize: '1-10',
    webhookUrl: 'https://api.forzio.com/webhooks/abc123',
    emailAlerts: true,
    taskReminders: true,
    weeklyReports: false,
    marketingEmails: true,
    twoFactorEnabled: false,
  });

  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const { addToast } = useToast();

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    addToast({
      message: 'Settings saved successfully!',
      type: 'success'
    });
  };

  const handleIntegrationConnect = (id: string) => {
    addToast({
      message: `Connecting to ${id}...`,
      type: 'info'
    });
  };

  const handleIntegrationDisconnect = (id: string) => {
    addToast({
      message: `Disconnected from ${id}`,
      type: 'success'
    });
  };

  const handleIntegrationConfigure = (id: string) => {
    addToast({
      message: `Opening ${id} configuration...`,
      type: 'info'
    });
  };

  const copyWebhookUrl = () => {
    navigator.clipboard.writeText(formData.webhookUrl);
    addToast({
      message: 'Webhook URL copied to clipboard',
      type: 'success'
    });
  };

  const regenerateWebhookUrl = () => {
    const newUrl = `https://api.forzio.com/webhooks/${Math.random().toString(36).substr(2, 9)}`;
    handleInputChange('webhookUrl', newUrl);
    addToast({
      message: 'Webhook URL regenerated',
      type: 'success'
    });
  };

  const handleLogoutAllDevices = async () => {
    addToast({
      message: 'Logging out from all devices...',
      type: 'info'
    });
    await logout();
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <Card title="Personal Information" description="Update your personal details and preferences">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                />
                <Input
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  disabled
                  description="Contact support to change your email address"
                />
                <Select
                  label="Role"
                  options={roleOptions}
                  value={formData.role}
                  onChange={(value) => handleInputChange('role', value)}
                />
              </div>
            </Card>

            <Card title="Change Password" description="Update your account password">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Current Password"
                  type="password"
                  showPasswordToggle
                  placeholder="Enter current password"
                />
                <Input
                  label="New Password"
                  type="password"
                  showPasswordToggle
                  placeholder="Enter new password"
                />
              </div>
              <div className="mt-4">
                <Button variant="primary">Update Password</Button>
              </div>
            </Card>
          </div>
        );

      case 'company':
        return (
          <div className="space-y-6">
            <Card title="Company Information" description="Manage your company details and branding">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Company Name"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    placeholder="Enter company name"
                  />
                  <Select
                    label="Industry"
                    options={industryOptions}
                    value={formData.industry}
                    onChange={(value) => handleInputChange('industry', value)}
                  />
                  <Select
                    label="Company Size"
                    options={companySizeOptions}
                    value={formData.companySize}
                    onChange={(value) => handleInputChange('companySize', value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Company Logo
                  </label>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-[var(--border)] rounded-lg flex items-center justify-center">
                      <Building className="w-8 h-8 text-[var(--text-muted)]" />
                    </div>
                    <Button variant="secondary" icon={<Upload className="w-4 h-4" />}>
                      Upload Logo
                    </Button>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-2">
                    Recommended: 256x256px, PNG or JPG format
                  </p>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-6">
            <Card title="Connected Services" description="Manage your third-party integrations and API connections">
              <div className="space-y-4">
                {mockIntegrations.map((integration) => (
                  <IntegrationCard
                    key={integration.id}
                    integration={integration}
                    onConnect={handleIntegrationConnect}
                    onDisconnect={handleIntegrationDisconnect}
                    onConfigure={handleIntegrationConfigure}
                  />
                ))}
              </div>
            </Card>

            <Card title="API Configuration" description="Manage your API keys and webhook endpoints">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Webhook URL
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      value={formData.webhookUrl}
                      readOnly
                      className="flex-1"
                    />
                    <Button
                      variant="secondary"
                      icon={<Copy className="w-4 h-4" />}
                      onClick={copyWebhookUrl}
                    >
                      Copy
                    </Button>
                    <Button
                      variant="secondary"
                      icon={<RefreshCw className="w-4 h-4" />}
                      onClick={regenerateWebhookUrl}
                    >
                      Regenerate
                    </Button>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mt-2">
                    Use this URL to receive webhook notifications from Forzio
                  </p>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <Card title="Email Notifications" description="Choose what email notifications you'd like to receive">
              <div className="space-y-4">
                <Toggle
                  checked={formData.emailAlerts}
                  onChange={(checked) => handleInputChange('emailAlerts', checked)}
                  label="Email Alerts"
                  description="Receive important alerts and updates via email"
                />
                <Toggle
                  checked={formData.taskReminders}
                  onChange={(checked) => handleInputChange('taskReminders', checked)}
                  label="Task Reminders"
                  description="Get reminded about upcoming and overdue tasks"
                />
                <Toggle
                  checked={formData.weeklyReports}
                  onChange={(checked) => handleInputChange('weeklyReports', checked)}
                  label="Weekly Reports"
                  description="Receive weekly performance and analytics reports"
                />
                <Toggle
                  checked={formData.marketingEmails}
                  onChange={(checked) => handleInputChange('marketingEmails', checked)}
                  label="Marketing Emails"
                  description="Receive product updates and marketing communications"
                />
              </div>
            </Card>

            <Card title="Push Notifications" description="Manage browser and mobile push notifications">
              <div className="space-y-4">
                <Toggle
                  checked={true}
                  onChange={() => {}}
                  label="Browser Notifications"
                  description="Show notifications in your browser"
                />
                <Toggle
                  checked={false}
                  onChange={() => {}}
                  label="Mobile Push"
                  description="Send notifications to your mobile device"
                />
              </div>
            </Card>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <Card title="Theme Preferences" description="Customize the appearance of your dashboard">
              <div className="space-y-6">
                <Toggle
                  checked={theme === 'dark'}
                  onChange={toggleTheme}
                  label="Dark Mode"
                  description="Use dark theme for better viewing in low light"
                />
                
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-4">
                    Accent Color
                  </label>
                  <div className="flex space-x-3">
                    {[
                      { color: '#3A9FFF', name: 'Blue' },
                      { color: '#9066F9', name: 'Purple' },
                      { color: '#10B981', name: 'Green' },
                      { color: '#F43F5E', name: 'Pink' },
                    ].map((accent) => (
                      <button
                        key={accent.color}
                        className="w-8 h-8 rounded-full border-2 border-[var(--border)] hover:scale-110 transition-transform"
                        style={{ backgroundColor: accent.color }}
                        title={accent.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card title="Display Settings" description="Adjust display preferences and layout options">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Font Size
                  </label>
                  <select className="w-full px-4 py-2 bg-[var(--bg-panel)] border border-[var(--border)] rounded-lg text-[var(--text-primary)]">
                    <option>Small</option>
                    <option selected>Medium</option>
                    <option>Large</option>
                  </select>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <Card title="Two-Factor Authentication" description="Add an extra layer of security to your account">
              <div className="space-y-4">
                <Toggle
                  checked={formData.twoFactorEnabled}
                  onChange={(checked) => handleInputChange('twoFactorEnabled', checked)}
                  label="Enable 2FA"
                  description="Require a verification code in addition to your password"
                />
                
                {formData.twoFactorEnabled && (
                  <div className="p-4 bg-[var(--success)]/10 border border-[var(--success)]/20 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Smartphone className="w-4 h-4 text-[var(--success)]" />
                      <span className="text-sm font-medium text-[var(--success)]">2FA Enabled</span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)]">
                      Your account is protected with two-factor authentication
                    </p>
                  </div>
                )}
              </div>
            </Card>

            <Card title="Active Sessions" description="Manage your active login sessions">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[var(--border)]/30 rounded-lg">
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">Current Session</p>
                    <p className="text-sm text-[var(--text-muted)]">Chrome on macOS • Active now</p>
                  </div>
                  <span className="text-xs text-[var(--success)] font-medium">Current</span>
                </div>
                
                <Button
                  variant="danger"
                  icon={<LogOut className="w-4 h-4" />}
                  onClick={handleLogoutAllDevices}
                >
                  Logout All Other Devices
                </Button>
              </div>
            </Card>

            <Card title="Danger Zone" description="Irreversible and destructive actions">
              <div className="space-y-4">
                <div className="p-4 border border-[var(--danger)]/20 rounded-lg">
                  <h4 className="font-medium text-[var(--danger)] mb-2">Delete Account</h4>
                  <p className="text-sm text-[var(--text-muted)] mb-4">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                  <Button
                    variant="danger"
                    icon={<Trash2 className="w-4 h-4" />}
                  >
                    Delete Account
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)]">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Settings</h1>
            <p className="text-[var(--text-muted)]">Manage your account, preferences, and integrations.</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-[var(--bg-panel)] border border-[var(--border)] rounded-xl p-4 sticky top-6">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <SettingsTab
                    key={tab.id}
                    id={tab.id}
                    label={tab.label}
                    icon={tab.icon}
                    isActive={activeTab === tab.id}
                    onClick={setActiveTab}
                  />
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {renderTabContent()}
            </div>
          </div>
        </div>

        {/* Sticky Save Button for Mobile */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-[var(--bg-main)] border-t border-[var(--border)] lg:hidden z-50">
          <Button
            variant="primary"
            size="lg"
            loading={isSaving}
            onClick={handleSave}
            className="w-full"
            icon={<Save className="w-4 h-4" />}
          >
            Save Settings
          </Button>
        </div>

        {/* Desktop Save Button */}
        <div className="hidden lg:flex justify-end">
          <Button
            variant="primary"
            size="lg"
            loading={isSaving}
            onClick={handleSave}
            icon={<Save className="w-4 h-4" />}
          >
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
};