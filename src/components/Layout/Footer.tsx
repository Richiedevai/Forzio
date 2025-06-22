import React from 'react';
import { Twitter, Linkedin, Github, Mail, Brain } from 'lucide-react';
import type { Page } from '../../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-public-bg border-t border-public-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-electric flex items-center justify-center shadow-neon-blue">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-electric bg-clip-text text-transparent">Forzio</h1>
                <p className="text-xs text-public-text/60">Your AI Co-founder</p>
              </div>
            </div>
            <p className="text-public-text/70 mb-4 max-w-md">
              Built to run your startup while you scale it. Automate operations, 
              track performance, and generate insights with your AI co-founder.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-public-text/60 hover:text-electric-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-public-text/60 hover:text-electric-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-public-text/60 hover:text-electric-blue transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-public-text/60 hover:text-electric-blue transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-public-text mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => onNavigate('dashboard' as Page)}
                  className="text-sm text-public-text/70 hover:text-electric-blue transition-colors"
                >
                  Dashboard
                </button>
              </li>
              <li>
                <a href="#" className="text-sm text-public-text/70 hover:text-electric-blue transition-colors">
                  AI Agents
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-public-text/70 hover:text-electric-blue transition-colors">
                  Automations
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-public-text/70 hover:text-electric-blue transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-public-text mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => onNavigate('about' as Page)}
                  className="text-sm text-public-text/70 hover:text-electric-blue transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact' as Page)}
                  className="text-sm text-public-text/70 hover:text-electric-blue transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="text-sm text-public-text/70 hover:text-electric-blue transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-public-text/70 hover:text-electric-blue transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-public-border">
          <p className="text-center text-sm text-public-text/50">
            © 2025 Forzio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};