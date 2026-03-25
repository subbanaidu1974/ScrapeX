import React from 'react';
import { Star, Search, ChevronRight, Layout, Code, Zap, Shield, Globe, Quote, ArrowRight, ExternalLink, Users } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const STORIES = [
  { title: 'How E-commerce Giant Scaled to 10M Products', company: 'ShopifyPlus', description: 'ScrapeX helped us scale our data collection to 10 million products per day with 99.9% uptime.', icon: Layout, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Real-time Price Monitoring for Travel Agency', company: 'TravelGo', description: 'We use ScrapeX to monitor flight and hotel prices in real-time, giving us a competitive edge.', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { title: 'Data-driven Marketing for Global Brand', company: 'BrandX', description: 'ScrapeX provides us with the data we need to power our marketing campaigns and drive growth.', icon: Star, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { title: 'Automating Lead Generation for B2B SaaS', company: 'SaaSPro', description: 'ScrapeX has automated our lead generation process, saving us hundreds of hours every month.', icon: Shield, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

export default function CustomerStories() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h1 className="text-3xl font-bold text-text-main mb-4">Customer Stories</h1>
              <p className="text-text-muted mt-2 max-w-2xl leading-relaxed">
                Discover how businesses of all sizes use ScrapeX to solve their data challenges and drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {STORIES.map((story) => (
                <div key={story.title} className="bg-bg-card border border-border-color rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 ${story.bg} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <story.icon className={`w-7 h-7 ${story.color}`} />
                    </div>
                    <span className="text-sm font-bold text-text-main">{story.company}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-3 tracking-tight group-hover:text-primary transition-colors leading-tight">{story.title}</h3>
                  <p className="text-text-muted leading-relaxed mb-8">
                    {story.description}
                  </p>
                  <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                    Read full story <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 text-center">
              <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-20" />
              <p className="text-2xl font-bold text-text-main mb-8 max-w-2xl mx-auto leading-tight italic">
                "ScrapeX is the most powerful and scalable web scraping platform we've ever used. It's a game-changer for our data team."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-bg-app border border-border-color flex items-center justify-center text-text-muted">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-text-main">John Doe</p>
                  <p className="text-xs text-text-muted">CTO, ShopifyPlus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
