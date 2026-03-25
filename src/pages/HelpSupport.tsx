import React from 'react';
import { HelpCircle, Search, MessageCircle, Mail, Phone, ChevronRight, Book, Shield, Zap } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const FAQS = [
  { question: 'How do I start my first scraper?', answer: 'You can start by visiting the Store and selecting a pre-built spider, or use our Build tool to create a custom one from scratch.' },
  { question: 'What are residential proxies?', answer: 'Residential proxies use real IP addresses from home internet connections, making them much harder for websites to detect and block compared to datacenter proxies.' },
  { question: 'How is billing calculated?', answer: 'Billing is based on your compute usage (measured in minutes) and the number of proxy requests made. You can monitor this in real-time on your dashboard.' },
  { question: 'Can I export my data to a database?', answer: 'Yes! We support direct integrations with PostgreSQL, MySQL, and more. You can also export data as JSON, CSV, or Excel files.' },
];

export default function HelpSupport() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold text-text-main mb-4">How can we help you?</h1>
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input 
                  type="text" 
                  placeholder="Search for help articles..." 
                  className="w-full h-12 pl-12 pr-4 bg-bg-card rounded-2xl border border-border-color focus:ring-2 focus:ring-primary outline-none text-sm text-text-main shadow-sm transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-bg-card border border-border-color rounded-3xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary mx-auto group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-text-main mb-1">Live Chat</h3>
                <p className="text-xs text-text-muted">Average response: 5m</p>
              </div>
              <div className="bg-bg-card border border-border-color rounded-3xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4 text-emerald-500 mx-auto group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-text-main mb-1">Email Support</h3>
                <p className="text-xs text-text-muted">Average response: 2h</p>
              </div>
              <div className="bg-bg-card border border-border-color rounded-3xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-4 text-amber-500 mx-auto group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-text-main mb-1">Phone Support</h3>
                <p className="text-xs text-text-muted">Available for Enterprise</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-xl font-bold text-text-main mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {FAQS.map((faq, i) => (
                  <div key={i} className="bg-bg-card border border-border-color rounded-2xl p-6 hover:border-primary/30 transition-colors cursor-pointer group">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-text-main group-hover:text-primary transition-colors">{faq.question}</h3>
                      <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-transform group-hover:translate-x-1" />
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Book className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-text-main">Still need help?</h3>
                  <p className="text-sm text-text-muted">Check out our full documentation for detailed guides.</p>
                </div>
              </div>
              <button className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
