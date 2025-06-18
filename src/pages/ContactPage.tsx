import React, { useState } from 'react';
import { Navbar } from '../components/Layout/Navbar';
import { Footer } from '../components/Layout/Footer';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Brain } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: "hello@forzio.com",
      action: "mailto:hello@forzio.com"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our AI",
      value: "Available 24/7",
      action: "#"
    },
    {
      icon: Phone,
      title: "Book Demo",
      description: "Schedule a call",
      value: "30-min demo",
      action: "tel:+15551234567"
    }
  ];

  const faqs = [
    {
      question: "How does Forzio pricing work?",
      answer: "We're currently in beta with free access for early founders. Paid plans will start at $99/month for growing startups."
    },
    {
      question: "Can Forzio integrate with my existing tools?",
      answer: "Yes! Forzio connects with 100+ popular startup tools including Slack, Gmail, Stripe, Notion, and more."
    },
    {
      question: "Is there a free trial available?",
      answer: "Absolutely! We offer free beta access with full AI co-founder capabilities. No credit card required."
    },
    {
      question: "How secure is my startup data?",
      answer: "We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits."
    }
  ];

  return (
    <div className="min-h-screen bg-public-bg">
      <Navbar onNavigate={onNavigate} currentPage="contact" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-gradient-electric rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-neon-blue">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-public-text mb-6">
            Let's build together
          </h1>
          <p className="text-xl text-public-text/70 mb-8">
            Ready to meet your AI co-founder? We're here to help you scale faster.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gradient-to-br from-public-border/50 to-transparent border border-public-border rounded-2xl p-6 text-center hover:shadow-neon-blue transition-all duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-electric rounded-xl mb-4 shadow-neon-blue">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-public-text mb-2">
                  {info.title}
                </h3>
                <p className="text-public-text/60 mb-3">
                  {info.description}
                </p>
                <a
                  href={info.action}
                  className="text-electric-blue hover:text-violet-indigo font-medium"
                >
                  {info.value}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-public-text mb-6">
                Send us a message
              </h2>
              
              {isSubmitted ? (
                <div className="bg-emerald-green/10 border border-emerald-green/30 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-emerald-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-emerald-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-green mb-2">
                    Message sent successfully!
                  </h3>
                  <p className="text-emerald-green/80">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-public-text/80 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-public-border rounded-xl bg-public-bg/50 text-public-text placeholder-public-text/50 focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-public-text/80 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-public-border rounded-xl bg-public-bg/50 text-public-text placeholder-public-text/50 focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-public-text/80 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-public-border rounded-xl bg-public-bg/50 text-public-text placeholder-public-text/50 focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-public-text/80 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-public-border rounded-xl bg-public-bg/50 text-public-text placeholder-public-text/50 focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your startup and how we can help..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-electric text-white rounded-xl font-semibold hover:shadow-neon-blue transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold text-public-text mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gradient-to-br from-public-border/50 to-transparent border border-public-border rounded-xl p-6 hover:shadow-neon-blue transition-all duration-300">
                    <h3 className="text-lg font-semibold text-public-text mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-public-text/70">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-electric-blue/10 border border-electric-blue/30 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="w-5 h-5 text-electric-blue" />
                  <h3 className="text-lg font-semibold text-electric-blue">
                    Response Time
                  </h3>
                </div>
                <p className="text-public-text/70">
                  We typically respond to all inquiries within 24 hours. 
                  For urgent matters, reach out via our live chat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};