import React from 'react';
import { Code, Search, ChevronRight, Layout, Terminal, Zap, Shield, Globe, Copy, ExternalLink } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const TEMPLATES = [
  {
    title: 'Amazon Product Scraper',
    description: 'Extract product details, prices, and reviews from Amazon.',
    category: 'E-commerce',
    icon: Layout,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    title: 'Google Maps Scraper',
    description: 'Scrape business details, ratings, and reviews from Google Maps.',
    category: 'Local Business',
    icon: Globe,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
  {
    title: 'TikTok Profile Scraper',
    description: 'Get user profile info, video counts, and follower stats.',
    category: 'Social Media',
    icon: Zap,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
  {
    title: 'Real Estate Scraper',
    description: 'Extract property listings, prices, and locations from Zillow.',
    category: 'Real Estate',
    icon: Layout,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
  },
  {
    title: 'LinkedIn Jobs Scraper',
    description: 'Collect job postings, company info, and descriptions.',
    category: 'Jobs',
    icon: Shield,
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
  },
  {
    title: 'Crypto Price Tracker',
    description: 'Monitor real-time cryptocurrency prices and market data.',
    category: 'Finance',
    icon: Zap,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
];

export default function CodeTemplates() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h1 className="text-3xl font-bold text-text-main">Code Templates</h1>
              <p className="text-text-muted mt-2 max-w-2xl">
                Jumpstart your scraping projects with our pre-built, production-ready code templates. Each template is fully customizable and built on top of Crawlee.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TEMPLATES.map((template) => (
                <div key={template.title} className="bg-bg-card border border-border-color rounded-3xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer">
                  <div className={`w-12 h-12 ${template.bg} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <template.icon className={`w-6 h-6 ${template.color}`} />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full">
                      {template.category}
                    </span>
                    <button className="text-text-muted hover:text-primary transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <h3 className="text-lg font-bold text-text-main mb-2 tracking-tight">{template.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-6">
                    {template.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <button className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                      View code <ChevronRight className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-bg-app text-text-muted hover:text-text-main transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
