import React from 'react';
import { Search, ChevronRight, Layout, Code, Zap, Shield, Globe, Database, Server, Cpu, Layers, BookOpen, HelpCircle, Star, ArrowRight } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const TOOLS = [
  { title: 'ScrapeX Store', description: 'Pre-built spiders for popular websites like Amazon, TikTok, and more.', icon: Star, color: 'text-primary', bg: 'bg-primary/10' },
  { title: 'Crawlee', description: 'The most powerful web scraping and browser automation library for Node.js.', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { title: 'ScrapeX Proxy', description: 'Residential and datacenter proxies to stay undetected while scraping.', icon: Globe, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'MCP (Model Context Protocol)', description: 'Integrate your scrapers directly with AI models like Claude or Gemini.', icon: Cpu, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

export default function BestWebScrapingTools() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 text-primary shadow-lg shadow-primary/10">
                <Star className="w-8 h-8 fill-current" />
              </div>
              <h1 className="text-3xl font-bold text-text-main mb-4">Best Web Scraping Tools</h1>
              <p className="text-text-muted mt-2 max-w-2xl leading-relaxed">
                Discover the best tools and libraries for web scraping in 2024. From pre-built spiders to powerful developer libraries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {TOOLS.map((tool) => (
                <div key={tool.title} className="bg-bg-card border border-border-color rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 ${tool.bg} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <tool.icon className={`w-7 h-7 ${tool.color}`} />
                    </div>
                    <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-3 tracking-tight group-hover:text-primary transition-colors leading-tight">{tool.title}</h3>
                  <p className="text-text-muted leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 text-center">
              <h2 className="text-2xl font-bold text-text-main mb-4">Not sure which tool to use?</h2>
              <p className="text-text-muted mb-8 max-w-md mx-auto">Our team can help you choose the best tools and infrastructure for your specific scraping project.</p>
              <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                Contact our Experts
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
