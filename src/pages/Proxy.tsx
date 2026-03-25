import React from 'react';
import { Shield, Globe, Lock, Zap, Server, Activity, ArrowRight } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const PROXY_FEATURES = [
  { title: 'Residential Proxies', description: 'Access 70M+ real residential IPs worldwide to bypass even the toughest anti-bot systems.', icon: Globe, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Datacenter Proxies', description: 'High-speed, cost-effective proxies for large-scale scraping tasks that don\'t require residential IPs.', icon: Server, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { title: 'Smart Rotation', description: 'Automatically rotate IPs and manage sessions to maintain high success rates.', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { title: 'Advanced Security', description: 'Protect your identity and avoid IP bans with our built-in proxy management layer.', icon: Shield, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

export default function Proxy() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h1 className="text-3xl font-bold text-text-main">Proxy Management</h1>
              <p className="text-text-muted mt-2 max-w-2xl">
                High-performance proxies integrated directly into your scraping workflow. Bypass blocks, avoid captchas, and scale your data collection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {PROXY_FEATURES.map((feature) => (
                <div key={feature.title} className="bg-bg-card border border-border-color rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                  <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-3">{feature.title}</h3>
                  <p className="text-text-muted leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl font-bold text-text-main mb-2">Ready to scale?</h2>
                <p className="text-text-muted">Start with our free tier or upgrade for unlimited residential proxy access.</p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-primary text-white rounded-xl font-semibold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                  View Pricing
                </button>
                <button className="px-6 py-3 bg-bg-card border border-border-color text-text-main rounded-xl font-semibold hover:bg-bg-app transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
