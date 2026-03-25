import React from 'react';
import { Search, ChevronRight, Layout, Code, Zap, Shield, Globe, Database, Server, Cpu, Layers, BookOpen, HelpCircle, Star, ArrowRight, MousePointer2 } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const SCRAPERS = [
  { title: 'Amazon Product Scraper', description: 'Extract product details, prices, and reviews from Amazon.', icon: Layout, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'TikTok Video Scraper', description: 'Download TikTok videos and metadata without watermarks.', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { title: 'Google Maps Scraper', description: 'Extract business details, ratings, and reviews from Google Maps.', icon: Globe, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { title: 'Instagram Profile Scraper', description: 'Extract profile details, posts, and followers from Instagram.', icon: Shield, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

export default function SpotlightScrapers() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 text-primary shadow-lg shadow-primary/10">
                <MousePointer2 className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-text-main mb-4">Scrapers</h1>
              <p className="text-text-muted mt-2 max-w-2xl leading-relaxed">
                Discover our library of pre-built scrapers for popular websites. Start extracting data in minutes without writing any code.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {SCRAPERS.map((scraper) => (
                <div key={scraper.title} className="bg-bg-card border border-border-color rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 ${scraper.bg} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <scraper.icon className={`w-7 h-7 ${scraper.color}`} />
                    </div>
                    <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-3 tracking-tight group-hover:text-primary transition-colors leading-tight">{scraper.title}</h3>
                  <p className="text-text-muted leading-relaxed">
                    {scraper.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-bg-card border border-border-color rounded-3xl p-12 text-center mb-16">
              <h2 className="text-2xl font-bold text-text-main mb-4">Can't find the scraper you need?</h2>
              <p className="text-text-muted mb-8 max-w-md mx-auto">Our team can build a custom scraper for any website. Contact us for a quote.</p>
              <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                Request Custom Scraper
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-bg-card border border-border-color rounded-3xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary mx-auto">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-text-main mb-1">Fast & Scalable</h3>
                <p className="text-xs text-text-muted">Extract millions of pages per day with ease.</p>
              </div>
              <div className="bg-bg-card border border-border-color rounded-3xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4 text-emerald-500 mx-auto">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-text-main mb-1">Anti-Bot Bypass</h3>
                <p className="text-xs text-text-muted">Stay undetected with our advanced anti-bot systems.</p>
              </div>
              <div className="bg-bg-card border border-border-color rounded-3xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-4 text-amber-500 mx-auto">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-text-main mb-1">Global Proxies</h3>
                <p className="text-xs text-text-muted">Access data from any country with our global proxy network.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
