export interface User {
  id: string;
  email: string;
  name: string;
  role: 'founder' | 'admin' | 'viewer';
  avatar?: string;
  company?: string;
}

export interface Agent {
  id: string;
  name: string;
  type: 'sales' | 'marketing' | 'support' | 'operations';
  status: 'active' | 'idle' | 'error';
  lastAction: string;
  tasksCompleted: number;
  avatar: string;
  description: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo?: string;
  agentId?: string;
  dueDate?: Date;
  createdAt: Date;
  tags: string[];
}

export interface Automation {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'paused' | 'error';
  lastRun?: Date;
  nextRun?: Date;
  executions: number;
  successRate: number;
  type: 'scheduled' | 'trigger' | 'webhook';
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: string;
  timestamp: Date;
  type: 'text' | 'image' | 'file';
  channel: 'whatsapp' | 'internal' | 'support';
}

export interface Report {
  id: string;
  title: string;
  type: 'revenue' | 'sales' | 'marketing' | 'operations';
  period: 'daily' | 'weekly' | 'monthly' | 'quarterly';
  data: any;
  generatedAt: Date;
  status: 'generating' | 'ready' | 'error';
}