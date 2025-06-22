import React from 'react';
import { Navbar } from '../components/Layout/Navbar';
import { Footer } from '../components/Layout/Footer';
import { Target, Users, Lightbulb, Award, Brain, Rocket, Zap } from 'lucide-react';
import type { Page } from '../App';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    {
      icon: Brain,
      title: "AI-First Approach",
      description: "We believe AI should be every founder's co-founder, handling operations while you focus on vision and growth."
    },
    {
      icon: Users,
      title: "Founder-Obsessed",
      description: "Built by founders, for founders. We understand the unique challenges of building and scaling a startup."
    },
    {
      icon: Rocket,
      title: "Scale-Ready",
      description: "From MVP to IPO, Forzio grows with your startup, adapting to your changing needs at every stage."
    },
    {
      icon: Zap,
      title: "Automation Excellence",
      description: "We're committed to delivering the most intelligent and reliable automation platform for modern startups."
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "The Vision",
      description: "Founded by serial entrepreneurs who experienced the pain of juggling operations while trying to scale."
    },
    {
      year: "2024",
      title: "AI Co-founder Born",
      description: "Launched our first AI agents and gained our first 1,000 founder users who saw immediate productivity gains."
    },
    {
      year: "2024",
      title: "Intelligence Breakthrough",
      description: "Integrated advanced AI capabilities that can truly understand and predict startup needs."
    },
    {
      year: "2025",
      title: "Scale & Impact",
      description: "Serving 10,000+ founders worldwide, becoming the default AI co-founder for ambitious startups."
    }
  ];

  return (
    <div className="min-h-screen bg-public-bg">
      <Navbar onNavigate={onNavigate} currentPage="about" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-public-text mb-6">
            Building the future of
            <br />
            <span className="bg-gradient-electric bg-clip-text text-transparent">
              startup operations
            </span>
          </h1>
          <p className="text-xl text-public-text/70 mb-8">
            Forzio was born from the frustration of brilliant founders getting bogged down 
            in operations instead of building the future. We believe every founder deserves 
            an AI co-founder that handles the grind.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-public-border/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-public-text mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-public-text/70">
                <p>
                  As serial entrepreneurs, we've built and scaled multiple companies. Each time, 
                  we found ourselves drowning in operational tasks that pulled us away from 
                  what really mattered: building great products and serving customers.
                </p>
                <p>
                  We tried every productivity tool and automation platform on the market. 
                  Nothing was built specifically for the unique chaos and rapid evolution 
                  of startup life.
                </p>
                <p>
                  That's when we decided to build Forzio - the AI co-founder we wished we had 
                  when we were starting our first companies. An AI that understands the founder 
                  journey and evolves with your startup.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-public-border/50 to-transparent border border-public-border rounded-2xl p-8 shadow-neon-blue">
              <h3 className="text-xl font-semibold text-public-text mb-4">
                Our Mission
              </h3>
              <p className="text-public-text/70 mb-6">
                To become the default AI co-founder for every ambitious startup, 
                handling operations so founders can focus on changing the world.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold bg-gradient-electric bg-clip-text text-transparent">10K+</div>
                  <div className="text-sm text-public-text/60">Active Founders</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-electric bg-clip-text text-transparent">50+</div>
                  <div className="text-sm text-public-text/60">Countries</div>
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
            <h2 className="text-3xl font-bold text-public-text mb-4">
              Our Values
            </h2>
            <p className="text-xl text-public-text/70">
              The principles that guide everything we build
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-public-border/50 to-transparent border border-public-border rounded-2xl p-6 hover:shadow-neon-blue transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-electric rounded-xl shadow-neon-blue">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-public-text">
                    {value.title}
                  </h3>
                </div>
                <p className="text-public-text/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-electric-blue/5 to-violet-indigo/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-public-text mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-public-text/70">
              From idea to AI co-founder serving thousands of founders
            </p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-electric rounded-full flex items-center justify-center shadow-neon-blue">
                  <span className="text-white font-bold">{item.year}</span>
                </div>
                <div className="flex-1 bg-gradient-to-br from-public-border/50 to-transparent border border-public-border rounded-xl p-6 hover:shadow-neon-blue transition-all duration-300">
                  <h3 className="text-xl font-semibold text-public-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-public-text/70">
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