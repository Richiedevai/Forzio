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
  Play,
  Brain,
  Rocket,
  Target,
  Activity,
  MessageSquare,
  Calendar,
  DollarSign
} from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const agentCards = [
    {
      name: "Founder Agent",
      status: "Active",
      lastTask: "Weekly Brief Sent",
      icon: Brain,
      color: "from-electric-blue to-violet-indigo"
    },
    {
      name: "Sales Agent",
      status: "Active", 
      lastTask: "Sent 10 follow-ups",
      icon: TrendingUp,
      color: "from-emerald-green to-electric-blue"
    },
    {
      name: "Marketing Agent",
      status: "Active",
      lastTask: "LinkedIn Post Done",
      icon: MessageSquare,
      color: "from-violet-indigo to-emerald-green"
    },
    {
      name: "Ops Agent",
      status: "Paused",
      lastTask: "Reminders inactive",
      icon: Target,
      color: "from-gray-500 to-gray-600"
    }
  ];

  const problemSolutions = [
    { problem: "Tasks get lost in Slack", solution: "Kanban + AI follow-ups" },
    { problem: "No time for marketing", solution: "Marketing agent auto-posts and reports" },
    { problem: "Delayed founder updates", solution: "Founder Agent sends auto-summary" },
    { problem: "Overwhelmed with decisions", solution: "Prioritized alerts & standups by AI" }
  ];

  const liveOutputs = [
    "🔥 3 tasks are overdue",
    "📈 SEO leads are up 34%", 
    "📅 Burn rate increased by 15%",
    "🖊 Investor update is ready"
  ];

  const testimonials = [
    {
      name: "Ananya S.",
      role: "SaaS Founder",
      content: "It's like having a Chief of Staff and a full ops team in one dashboard.",
      rating: 5
    },
    {
      name: "Marcus R.",
      role: "E-commerce Founder",
      content: "Forzio handles everything I used to stress about. Now I focus on growth.",
      rating: 5
    },
    {
      name: "Sarah K.",
      role: "Tech Startup CEO",
      content: "My AI co-founder that never sleeps. Game-changing for any startup.",
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
    <div className="min-h-screen bg-public-bg">
      <Navbar onNavigate={onNavigate} currentPage="landing" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-violet-indigo/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-electric rounded-full shadow-neon-blue mb-8 animate-pulse-glow">
              <span className="text-sm font-medium text-white">
                🧠 Meet Your AI Co-founder
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-public-text mb-6 leading-tight">
              <span className="bg-gradient-electric bg-clip-text text-transparent">
                Meet Your AI
              </span>
              <br />
              Co-founder
            </h1>
            
            <p className="text-xl text-public-text/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let Forzio run your operations, automate your growth, and generate insights — 
              so you can scale faster and stress less.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => onNavigate('auth')}
                className="flex items-center space-x-2 px-8 py-4 bg-gradient-electric text-white rounded-xl font-semibold hover:shadow-neon-blue transition-all duration-200 hover:scale-105 hover:-translate-y-1"
              >
                <Rocket className="w-5 h-5" />
                <span>Try For Free</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button 
                onClick={() => onNavigate('contact')}
                className="flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-electric-blue text-electric-blue rounded-xl font-semibold hover:bg-electric-blue hover:text-white transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Book Demo</span>
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-electric bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-sm text-public-text/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agent Visuals Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-public-text mb-4">
              Your AI Team, Always Working
            </h2>
            <p className="text-xl text-public-text/70">
              Deploy intelligent agents that handle your operations 24/7
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agentCards.map((agent, index) => (
              <div key={index} className="bg-gradient-to-br from-public-border/50 to-transparent border border-public-border rounded-2xl p-6 hover:shadow-neon-blue transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${agent.color}`}>
                    <agent.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    agent.status === 'Active' 
                      ? 'bg-emerald-green/20 text-emerald-green border border-emerald-green/30' 
                      : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                  }`}>
                    {agent.status}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-public-text mb-2">{agent.name}</h3>
                <p className="text-sm text-public-text/60 mb-4">{agent.lastTask}</p>
                
                <div className="flex space-x-2">
                  <button className="flex-1 px-3 py-2 bg-electric-blue/20 text-electric-blue rounded-lg text-sm font-medium hover:bg-electric-blue hover:text-white transition-all">
                    Run
                  </button>
                  <button className="px-3 py-2 bg-public-border text-public-text/60 rounded-lg text-sm hover:bg-public-text/10 transition-all">
                    Schedule
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-public-border/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-public-text mb-4">
              From Chaos to Control
            </h2>
            <p className="text-xl text-public-text/70">
              Stop fighting fires. Start building your empire.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problemSolutions.map((item, index) => (
              <div key={index} className="flex items-center space-x-6 p-6 bg-gradient-to-r from-public-border/30 to-transparent border border-public-border rounded-2xl hover:shadow-neon-blue transition-all duration-300">
                <div className="flex-1">
                  <div className="text-vibrant-red/80 font-medium mb-2">❌ {item.problem}</div>
                  <div className="text-emerald-green font-medium">✅ {item.solution}</div>
                </div>
                <ArrowRight className="w-6 h-6 text-electric-blue" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live AI Output Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-public-text mb-4">
              Real-time AI Insights
            </h2>
            <p className="text-xl text-public-text/70">
              Get instant updates that matter, delivered like Slack messages
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-public-border/50 to-transparent border border-public-border rounded-2xl p-8">
            <div className="space-y-4">
              {liveOutputs.map((output, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-public-border/30 rounded-xl hover:bg-public-border/50 transition-all duration-200 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-8 h-8 bg-gradient-electric rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-public-text font-medium">{output}</p>
                    <p className="text-public-text/50 text-sm">Forzio AI • Just now</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Setup Flow Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-electric-blue/5 to-violet-indigo/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-public-text mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-public-text/70">
              From signup to AI automation in 3 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Sign up", description: "Create your account in 30 seconds", icon: Users },
              { step: "2", title: "Answer 5 questions", description: "Tell us about your startup", icon: MessageSquare },
              { step: "3", title: "Activate your agents", description: "Watch AI take over your operations", icon: Zap }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-electric rounded-2xl flex items-center justify-center mx-auto shadow-neon-blue group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-violet-indigo rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-public-text mb-2">{item.title}</h3>
                <p className="text-public-text/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-public-text mb-4">
              Loved by founders worldwide
            </h2>
            <p className="text-xl text-public-text/70">
              Join thousands who've made Forzio their AI co-founder
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-public-border/50 to-transparent border border-public-border rounded-2xl p-6 hover:shadow-neon-blue transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-electric-blue fill-current" />
                  ))}
                </div>
                <p className="text-public-text/80 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-public-text">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-public-text/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-electric-blue/10 to-violet-indigo/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-public-text mb-4">
            Focus on growth.
            <br />
            <span className="bg-gradient-electric bg-clip-text text-transparent">
              Let Forzio handle the grind.
            </span>
          </h2>
          <p className="text-xl text-public-text/70 mb-8">
            Your AI co-founder is ready to transform your startup
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('auth')}
              className="flex items-center space-x-2 px-8 py-4 bg-gradient-electric text-white rounded-xl font-semibold hover:shadow-glow-intense transition-all duration-200 hover:scale-105 hover:-translate-y-1"
            >
              <Rocket className="w-5 h-5" />
              <span>Join Beta</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-electric-blue text-electric-blue rounded-xl font-semibold hover:bg-electric-blue hover:text-white transition-all duration-200">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
          
          <p className="text-sm text-public-text/50 mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};