import React from 'react';
import { Terminal, Search, ChevronRight, Layout, Code, Zap, Shield, Globe, Copy, ExternalLink, Database, Server } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const API_ENDPOINTS = [
  { method: 'GET', path: '/v1/spiders', description: 'List all your spiders with pagination and filtering.', color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { method: 'POST', path: '/v1/spiders', description: 'Create a new spider with custom configuration.', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { method: 'GET', path: '/v1/runs', description: 'Retrieve a list of all scraper runs and their statuses.', color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { method: 'POST', path: '/v1/runs/:id', description: 'Trigger a new run for a specific spider.', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { method: 'GET', path: '/v1/storage/:id', description: 'Download scraped data in JSON, CSV, or Excel format.', color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { method: 'DELETE', path: '/v1/runs/:id', description: 'Stop or delete a specific scraper run.', color: 'text-red-500', bg: 'bg-red-500/10' },
];

export default function ApiReference() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-primary/10">
                  <Terminal className="w-6 h-6" />
                </div>
                <h1 className="text-3xl font-bold text-text-main">API Reference</h1>
              </div>
              <p className="text-text-muted mt-2 max-w-2xl leading-relaxed">
                Integrate ScrapeX into your own applications with our powerful REST API. Control your spiders, manage runs, and retrieve data programmatically.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2 space-y-6">
                {API_ENDPOINTS.map((endpoint) => (
                  <div key={endpoint.path} className="bg-bg-card border border-border-color rounded-3xl p-6 hover:shadow-lg transition-shadow group">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${endpoint.bg} ${endpoint.color}`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm font-mono text-text-main font-semibold">{endpoint.path}</code>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed mb-4">
                      {endpoint.description}
                    </p>
                    <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                      View documentation <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div className="bg-bg-card border border-border-color rounded-3xl p-6">
                  <h3 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" /> Authentication
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-6">
                    All API requests must include your API key in the `Authorization` header.
                  </p>
                  <div className="bg-bg-app rounded-xl p-4 font-mono text-xs text-text-main border border-border-color overflow-x-auto">
                    Authorization: Bearer YOUR_API_KEY
                  </div>
                </div>

                <div className="bg-bg-card border border-border-color rounded-3xl p-6">
                  <h3 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" /> SDKs
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-between p-3 rounded-xl bg-bg-app text-sm font-bold text-text-main hover:bg-primary/10 hover:text-primary transition-all">
                      JavaScript SDK <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 rounded-xl bg-bg-app text-sm font-bold text-text-main hover:bg-primary/10 hover:text-primary transition-all">
                      Python SDK <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
