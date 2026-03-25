import React from 'react';
import { Book, Search, ChevronRight, Code, Terminal, Zap, Shield, Globe } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const DOCS_SECTIONS = [
  {
    title: 'Getting Started',
    items: ['Introduction', 'Quick Start Guide', 'Installation', 'Your First Scraper'],
  },
  {
    title: 'Core Concepts',
    items: ['Spiders', 'Runs', 'Storage', 'Schedules', 'Proxies'],
  },
  {
    title: 'Advanced Guides',
    items: ['Anti-Bot Bypass', 'Dynamic Content', 'Data Transformation', 'Webhooks'],
  },
  {
    title: 'SDKs & Tools',
    items: ['JavaScript SDK', 'Python SDK', 'CLI Tool', 'MCP Server'],
  },
];

export default function Documentation() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar Navigation */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-0 space-y-8">
                  {DOCS_SECTIONS.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item}>
                            <button className="text-sm text-text-muted hover:text-primary transition-colors">
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </aside>

              {/* Main Content */}
              <div className="flex-1">
                <div className="mb-12">
                  <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-4">
                    <Book className="w-4 h-4" />
                    <span>Documentation</span>
                  </div>
                  <h1 className="text-4xl font-bold text-text-main mb-4 tracking-tight">Introduction to ScrapeX</h1>
                  <p className="text-lg text-text-muted leading-relaxed">
                    Welcome to the ScrapeX documentation. ScrapeX is a powerful, all-in-one platform for web scraping, data extraction, and browser automation. Whether you're a beginner or an expert, we have the tools and guides to help you scale your data collection.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-bg-card border border-border-color rounded-3xl p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-text-main mb-2">Quick Start</h3>
                    <p className="text-sm text-text-muted mb-4">Get up and running with your first scraper in less than 5 minutes.</p>
                    <div className="flex items-center gap-1 text-primary text-sm font-bold">
                      Get started <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="bg-bg-card border border-border-color rounded-3xl p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4 text-emerald-500 group-hover:scale-110 transition-transform">
                      <Code className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-text-main mb-2">API Reference</h3>
                    <p className="text-sm text-text-muted mb-4">Detailed documentation for our REST API and SDKs.</p>
                    <div className="flex items-center gap-1 text-primary text-sm font-bold">
                      View API <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-text-main mb-4">Why ScrapeX?</h2>
                  <p className="text-text-muted mb-6">
                    ScrapeX provides a robust infrastructure that handles the complexities of modern web scraping for you:
                  </p>
                  <ul className="space-y-4 mb-12">
                    <li className="flex gap-3">
                      <div className="w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 text-blue-500">
                        <Shield className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-text-muted"><strong className="text-text-main">Anti-Bot Bypass:</strong> Built-in support for fingerprinting and captcha solving.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0 text-amber-500">
                        <Globe className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-text-muted"><strong className="text-text-main">Global Proxies:</strong> Access to 70M+ residential and datacenter IPs.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0 text-purple-500">
                        <Terminal className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-text-muted"><strong className="text-text-main">Developer Friendly:</strong> Powerful CLI and SDKs for Node.js and Python.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
