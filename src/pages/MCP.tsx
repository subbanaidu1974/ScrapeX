import React from 'react';
import { Cpu, MessageSquare, Database, Zap, Code, Terminal, ArrowRight } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const MCP_FEATURES = [
  { title: 'AI-Native Data Access', description: 'Enable your AI models to directly query and retrieve scraped data using the Model Context Protocol.', icon: MessageSquare, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Real-time Context', description: 'Provide your LLMs with the most up-to-date information from the web as context for their responses.', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { title: 'Seamless Integration', description: 'Connect ScrapeX to any MCP-compliant AI application or framework with minimal configuration.', icon: Database, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { title: 'Developer-First APIs', description: 'Build your own MCP servers and clients using our robust and well-documented APIs.', icon: Code, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

export default function MCP() {
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
              <h1 className="text-3xl font-bold text-text-main">Model Context Protocol (MCP)</h1>
              <p className="text-text-muted mt-2 max-w-2xl">
                The open standard for connecting AI models to data sources. ScrapeX is fully MCP-compliant, allowing you to use your scraped data as a dynamic context for your AI applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {MCP_FEATURES.map((feature) => (
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

            <div className="bg-bg-card border border-border-color rounded-3xl p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold text-text-main">Quick Start with MCP</h2>
              </div>
              <div className="bg-bg-app rounded-2xl p-6 font-mono text-sm text-text-main border border-border-color">
                <p className="text-text-muted mb-2"># Install the ScrapeX MCP server</p>
                <p className="mb-4">npm install -g @scrapex/mcp-server</p>
                <p className="text-text-muted mb-2"># Configure your API key</p>
                <p className="mb-4">scrapex-mcp configure --api-key YOUR_API_KEY</p>
                <p className="text-text-muted mb-2"># Start the server</p>
                <p>scrapex-mcp start</p>
              </div>
              <div className="mt-8 flex gap-4">
                <button className="px-6 py-3 bg-primary text-white rounded-xl font-semibold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity flex items-center gap-2">
                  Read Documentation <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 bg-bg-card border border-border-color text-text-main rounded-xl font-semibold hover:bg-bg-app transition-colors">
                  View Examples
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
