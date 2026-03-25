import React from 'react';
import { History, Search, ChevronRight, Layout, Code, Zap, Shield, Globe, Clock, User, ArrowRight, Plus, Star } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const UPDATES = [
  { version: 'v2.5.0', date: 'Oct 1, 2024', type: 'Major', description: 'Introducing real-time data streaming and AI-powered data cleaning.', icon: Zap, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { version: 'v2.4.2', date: 'Sep 25, 2024', type: 'Patch', description: 'Fixed minor bugs and improved proxy rotation performance.', icon: Shield, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { version: 'v2.4.0', date: 'Sep 15, 2024', type: 'Minor', description: 'New TikTok scraper template and improved error handling.', icon: Layout, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { version: 'v2.3.0', date: 'Sep 10, 2024', type: 'Minor', description: 'Added support for mobile app scraping and custom proxy rules.', icon: Globe, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

export default function Changelog() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 text-primary shadow-lg shadow-primary/10">
                <History className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-text-main mb-4">Changelog</h1>
              <p className="text-text-muted mt-2 max-w-2xl leading-relaxed">
                Stay up to date with the latest updates, features, and fixes from the ScrapeX team.
              </p>
            </div>

            <div className="space-y-12">
              {UPDATES.map((update) => (
                <div key={update.version} className="relative pl-12 group">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-bg-card border border-border-color flex items-center justify-center text-primary shadow-sm z-10 group-hover:scale-110 transition-transform">
                    <update.icon className="w-4 h-4" />
                  </div>
                  <div className="absolute left-4 top-8 bottom-0 w-px bg-border-color group-last:hidden"></div>
                  <div className="bg-bg-card border border-border-color rounded-3xl p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-text-main">{update.version}</h3>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          update.type === 'Major' ? 'bg-blue-500/10 text-blue-500' :
                          update.type === 'Minor' ? 'bg-emerald-500/10 text-emerald-500' :
                          'bg-amber-500/10 text-amber-500'
                        }`}>
                          {update.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-text-muted">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{update.date}</span>
                      </div>
                    </div>
                    <p className="text-text-muted leading-relaxed mb-6">
                      {update.description}
                    </p>
                    <button className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                      View full release notes <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="px-8 py-4 bg-bg-card border border-border-color text-text-main rounded-2xl font-bold hover:bg-bg-app transition-colors">
                View Older Versions
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
