import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import type { Page } from '../../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[var(--bg-card)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                <img 
                  src="/YOvA.png" // <-- your new logo here
                  alt="Forzio Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[var(--text-primary)]">Forzio</h1>
                <p className="text-xs text-[var(--text-muted)]">Your AI Co-founder</p>
              </div>
            </div>
            <p className="footer-text mb-4 max-w-md">
              Built to run your startup while you scale it. Automate operations, 
              track performance, and generate insights with your AI co-founder.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="footer-link">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="footer-link">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="footer-link">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="footer-link">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => onNavigate('dashboard' as Page)}
                  className="text-sm footer-link"
                >
                  Dashboard
                </button>
              </li>
              <li>
                <a href="#" className="text-sm footer-link">
                  AI Agents
                </a>
              </li>
              <li>
                <a href="#" className="text-sm footer-link">
                  Automations
                </a>
              </li>
              <li>
                <a href="#" className="text-sm footer-link">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => onNavigate('about' as Page)}
                  className="text-sm footer-link"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact' as Page)}
                  className="text-sm footer-link"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="text-sm footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm footer-link">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--border)]">
          <p className="text-center text-sm footer-text">
            © 2025 Forzio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
