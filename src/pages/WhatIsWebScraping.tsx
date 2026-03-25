import React from 'react';
import { Search, ChevronRight, Layout, Code, Zap, Shield, Globe, Database, Server, Cpu, Layers, BookOpen, HelpCircle } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const SCRAPING_STEPS = [
  { title: 'Send Request', description: 'Your scraper sends an HTTP request to the target website\'s server.', icon: Globe, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Receive HTML', description: 'The server responds with the HTML content of the page.', icon: Layout, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { title: 'Parse Data', description: 'The scraper parses the HTML and extracts the specific data you need.', icon: Code, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { title: 'Store Data', description: 'The extracted data is saved in a structured format like JSON or CSV.', icon: Database, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

export default function WhatIsWebScraping() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 text-primary shadow-lg shadow-primary/10">
                <HelpCircle className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-text-main mb-4">What is Web Scraping?</h1>
              <p className="text-text-muted mt-2 max-w-2xl leading-relaxed">
                Web scraping is the automated process of extracting data from websites. It's a powerful tool for businesses and developers to gather information at scale.
              </p>
            </div>

            <div className="bg-bg-card border border-border-color rounded-3xl p-8 mb-16">
              <h2 className="text-2xl font-bold text-text-main mb-6">How it Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SCRAPING_STEPS.map((step, i) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${step.bg} rounded-2xl flex items-center justify-center flex-shrink-0 text-primary`}>
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-main mb-1 tracking-tight">{i + 1}. {step.title}</h3>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-text-main mb-6">Why Use Web Scraping?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Market Research', description: 'Monitor competitor prices, product reviews, and market trends.' },
                  { title: 'Lead Generation', description: 'Extract contact information and business details for sales outreach.' },
                  { title: 'Content Aggregation', description: 'Gather news, articles, and social media posts from multiple sources.' },
                  { title: 'Data Analysis', description: 'Collect large datasets for scientific research or business intelligence.' },
                ].map((item) => (
                  <div key={item.title} className="bg-bg-card border border-border-color rounded-3xl p-6 hover:shadow-lg transition-shadow group">
                    <h3 className="text-lg font-bold text-text-main mb-2 tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 text-center">
              <h2 className="text-2xl font-bold text-text-main mb-4">Ready to start scraping?</h2>
              <p className="text-text-muted mb-8 max-w-md mx-auto">ScrapeX makes it easy to build and scale your web scraping projects. Get started for free today.</p>
              <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                Start Scraping Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
