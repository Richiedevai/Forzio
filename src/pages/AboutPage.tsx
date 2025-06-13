import React from 'react';
import { Navbar } from '../components/Layout/Navbar';
import { Footer } from '../components/Layout/Footer';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're on a mission to democratize business automation and make powerful tools accessible to every founder."
    },
    {
      icon: Users,
      title: "Founder-First",
      description: "Built by founders, for founders. We understand the unique challenges of building and scaling a business."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We're constantly pushing the boundaries of what's possible with AI and automation technology."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to delivering exceptional products and experiences that exceed expectations."
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "The Idea",
      description: "Founded by a team of serial entrepreneurs who experienced the pain of managing multiple tools and processes."
    },
    {
      year: "2024",
      title: "First Product",
      description: "Launched our MVP with basic automation features and gained our first 1,000 users."
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Integrated advanced AI capabilities and launched our intelligent agent system."
    },
    {
      year: "2025",
      title: "Scale & Growth",
      description: "Serving 10,000+ founders worldwide with comprehensive business automation platform."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={onNavigate} currentPage="about" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Building the future of
            <br />
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              business automation
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            YovaOS was born from the frustration of juggling dozens of tools and processes 
            while trying to build and scale a business. We believe every founder deserves 
            access to enterprise-level automation and insights.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  As serial entrepreneurs, we've built and scaled multiple companies. Each time, 
                  we found ourselves drowning in a sea of disconnected tools, manual processes, 
                  and repetitive tasks that pulled us away from what really mattered: building 
                  great products and serving customers.
                </p>
                <p>
                  We tried every productivity tool, automation platform, and business intelligence 
                  solution on the market. Nothing was built specifically for the unique needs of 
                  founders and early-stage companies.
                </p>
                <p>
                  That's when we decided to build YovaOS - the operating system we wished we had 
                  when we were starting our first companies. A platform that understands the 
                  founder journey and grows with your business.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To become the default operating system for every founder, providing the tools, 
                insights, and automation needed to build successful businesses.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-500">10K+</div>
                  <div className="text-sm text-gray-500">Active Founders</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-500">50+</div>
                  <div className="text-sm text-gray-500">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-xl">
                    <value.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From idea to platform serving thousands of founders
            </p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{item.year}</span>
                </div>
                <div className="flex-1 bg-white dark:bg-dark-card rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};