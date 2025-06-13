import React, { useState } from 'react';
import { Navbar } from '../components/Layout/Navbar';
import { Footer } from '../components/Layout/Footer';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

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
      value: "hello@yovaos.com",
      action: "mailto:hello@yovaos.com"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our team",
      value: "Available 24/7",
      action: "#"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our sales team",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    }
  ];

  const faqs = [
    {
      question: "How does YovaOS pricing work?",
      answer: "We offer flexible pricing plans starting from $29/month for startups, with enterprise plans available for larger organizations."
    },
    {
      question: "Can I integrate YovaOS with my existing tools?",
      answer: "Yes! YovaOS integrates with 100+ popular business tools including Slack, Gmail, Stripe, and more."
    },
    {
      question: "Is there a free trial available?",
      answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required."
    },
    {
      question: "How secure is my data?",
      answer: "We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={onNavigate} currentPage="contact" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get in touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Have questions about YovaOS? We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 text-center hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-xl mb-4">
                  <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {info.description}
                </p>
                <a
                  href={info.action}
                  className="text-primary-500 hover:text-primary-600 font-medium"
                >
                  {info.value}
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send us a message
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                    Message sent successfully!
                  </h3>
                  <p className="text-green-600 dark:text-green-300">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project or ask any questions..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-800">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <h3 className="text-lg font-semibold text-primary-800 dark:text-primary-200">
                    Response Time
                  </h3>
                </div>
                <p className="text-primary-700 dark:text-primary-300">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
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