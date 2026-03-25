import React from 'react';
import { DollarSign, Search, ChevronRight, Layout, Code, Zap, Shield, Globe, Copy, ExternalLink, Database, Server, TrendingUp, Users, Star } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const EARNING_STEPS = [
  { title: 'Create a Scraper', description: 'Build a high-quality scraper for any website using our tools and SDKs.', icon: Code, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Publish to Store', description: 'List your scraper on the ScrapeX Store and set your own pricing.', icon: Layout, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { title: 'Get Paid', description: 'Receive monthly payouts as users subscribe to and run your scrapers.', icon: DollarSign, color: 'text-amber-500', bg: 'bg-amber-500/10' },
];

export default function GetPaid() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 text-primary shadow-lg shadow-primary/10">
                <DollarSign className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-text-main">Get Paid on ScrapeX</h1>
              <p className="text-text-muted mt-2 max-w-2xl leading-relaxed">
                Turn your web scraping skills into a recurring revenue stream. Join our community of creators and start earning today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {EARNING_STEPS.map((step, i) => (
                <div key={step.title} className="bg-bg-card border border-border-color rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all group relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-4xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">0{i + 1}</div>
                  <div className={`w-14 h-14 ${step.bg} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                    <step.icon className={`w-7 h-7 ${step.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-bg-card border border-border-color rounded-3xl p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" /> Why become a creator?
                </h2>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                      <Star className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-text-muted"><strong className="text-text-main">Global Reach:</strong> Your scrapers are available to thousands of users worldwide.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-text-muted"><strong className="text-text-main">Community Support:</strong> Connect with other developers and learn from the best.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-text-muted"><strong className="text-text-main">Easy Payouts:</strong> Get paid directly to your bank account or PayPal.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-bold text-text-main mb-4">Ready to start earning?</h2>
                <p className="text-text-muted mb-8 max-w-sm mx-auto">Join our community of creators and start building your first scraper today.</p>
                <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                  Become a Creator
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
