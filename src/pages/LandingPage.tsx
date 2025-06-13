import React from 'react';
import { Navbar } from '../components/Layout/Navbar';
import { Footer } from '../components/Layout/Footer';
import { 
  ArrowRight, 
  Bot, 
  BarChart3, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star,
  Play
} from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Automation",
      description: "Deploy intelligent agents that handle routine tasks, respond to emails, and manage workflows automatically."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Get instant insights into your business performance with comprehensive dashboards and automated reports."
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Connect all your tools and automate complex business processes with our visual workflow builder."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, SSO, and compliance with industry standards."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart",
      content: "YovaOS transformed how we operate. Our team productivity increased by 40% in just 2 months.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, GrowthLab",
      content: "The AI agents handle our customer support so well, our response time dropped from hours to minutes.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "COO, ScaleUp Inc",
      content: "Finally, a platform that understands what founders need. It's like having a co-founder that never sleeps.",
      rating: 5
    }
  ];

  const stats = [
    { value: "10,000+", label: "Active Founders" },
    { value: "2.5M+", label: "Tasks Automated" },
    { value: "99.9%", label: "Uptime" },
    { value: "40%", label: "Avg. Time Saved" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={onNavigate} currentPage="landing" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white dark:bg-dark-card rounded-full shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                🚀 Now in Beta - Join 10,000+ Founders
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              The Operating System
              <br />
              <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                for Founders
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Automate your business operations, track performance in real-time, and scale with 
              AI-powered insights. Everything you need to run your startup, in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => onNavigate('dashboard')}
                className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <span>Try Dashboard Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="flex items-center space-x-2 px-8 py-4 bg-white dark:bg-dark-card text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need to scale
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From AI automation to real-time analytics, YovaOS provides all the tools 
              modern founders need to build and scale their businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-200 border border-gray-100 dark:border-gray-800 hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-xl">
                    <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Loved by founders worldwide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See what other founders are saying about YovaOS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of founders who are already scaling with YovaOS
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('auth')}
              className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 text-gray-700 dark:text-gray-300 hover:text-primary-500 font-semibold transition-colors"
            >
              Talk to Sales
            </button>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};