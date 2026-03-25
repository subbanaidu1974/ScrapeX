import React from 'react';
import { Globe, Code, Zap, Shield, Search, ArrowRight, Database, Server, Cpu, Layers } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const API_FEATURES = [
  { title: 'RESTful Architecture', description: 'Easy to integrate with any language or framework using standard HTTP methods.', icon: Globe, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Real-time Results', description: 'Get data back instantly as soon as the scraping task is completed.', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { title: 'Auto-scaling', description: 'Our infrastructure scales automatically to handle any volume of requests.', icon: Server, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { title: 'Secure & Reliable', description: 'Enterprise-grade security with 99.9% uptime guarantee.', icon: Shield, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

export default function SpotlightAPIs() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 text-primary shadow-lg shadow-primary/10">
                <Cpu className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-text-main mb-4">ScrapeX APIs</h1>
              <p className="text-text-muted mt-2 max-w-2xl leading-relaxed">
                Powerful, scalable, and easy-to-use APIs for all your web scraping and data extraction needs. Integrate ScrapeX directly into your workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {API_FEATURES.map((feature) => (
                <div key={feature.title} className="bg-bg-card border border-border-color rounded-3xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                  <div className={`w-12 h-12 ${feature.bg} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-text-main mb-2 tracking-tight">{feature.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-bg-card border border-border-color rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-text-main mb-6 flex items-center gap-2">
                  <Code className="w-6 h-6 text-primary" /> Quick Integration
                </h2>
                <div className="bg-slate-900 rounded-2xl p-6 font-mono text-sm text-slate-300 overflow-x-auto">
                  <p className="text-slate-500 mb-2">// Fetch data from Amazon using ScrapeX API</p>
                  <p><span className="text-pink-400">const</span> response = <span className="text-pink-400">await</span> <span className="text-blue-400">fetch</span>(<span className="text-emerald-400">'https://api.scrapex.com/v1/scrape'</span>, &#123;</p>
                  <p className="ml-4">method: <span className="text-emerald-400">'POST'</span>,</p>
                  <p className="ml-4">headers: &#123;</p>
                  <p className="ml-8"><span className="text-emerald-400">'Authorization'</span>: <span className="text-emerald-400">'Bearer YOUR_API_KEY'</span>,</p>
                  <p className="ml-8"><span className="text-emerald-400">'Content-Type'</span>: <span className="text-emerald-400">'application/json'</span></p>
                  <p className="ml-4">&#125;,</p>
                  <p className="ml-4">body: <span className="text-blue-400">JSON</span>.<span className="text-blue-400">stringify</span>(&#123;</p>
                  <p className="ml-8">url: <span className="text-emerald-400">'https://amazon.com/p/123'</span>,</p>
                  <p className="ml-8">spider: <span className="text-emerald-400">'amazon-product-scraper'</span></p>
                  <p className="ml-4">&#125;)</p>
                  <p>&#125;);</p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-text-main mb-4">Built for Developers</h2>
                <p className="text-text-muted leading-relaxed mb-6">
                  Our APIs are designed by developers, for developers. With comprehensive documentation, SDKs for popular languages, and a powerful dashboard for monitoring, ScrapeX makes it easy to build and scale your data collection.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Comprehensive API Reference</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>SDKs for Node.js, Python, and Go</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Webhooks for asynchronous tasks</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 text-center">
              <h2 className="text-2xl font-bold text-text-main mb-4">Start building today</h2>
              <p className="text-text-muted mb-8 max-w-md mx-auto">Get your API key and start extracting data from any website in minutes.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                  Get API Key
                </button>
                <button className="px-8 py-4 bg-bg-card border border-border-color text-text-main rounded-2xl font-bold hover:bg-bg-app transition-colors">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
