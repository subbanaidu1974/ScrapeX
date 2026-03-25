import React from 'react';
import { Users, Search, ChevronRight, Layout, Code, Zap, Shield, Globe, Database, Server, Cpu, Layers, BookOpen, HelpCircle, Star, ArrowRight, Handshake, ExternalLink, CheckCircle2 } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const PARTNERS = [
  { name: 'DataFlow Inc.', type: 'Technology Partner', description: 'Integrating ScrapeX with advanced data flow and visualization tools.', icon: Database, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { name: 'CloudScale', type: 'Infrastructure Partner', description: 'Providing high-performance cloud infrastructure for ScrapeX deployments.', icon: Server, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { name: 'ProxyMaster', type: 'Proxy Partner', description: 'Our preferred partner for high-quality residential and datacenter proxies.', icon: Globe, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { name: 'AI Solutions', type: 'AI Partner', description: 'Leveraging AI and machine learning to enhance ScrapeX data extraction.', icon: Cpu, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

export default function ScrapeXPartners() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 text-primary shadow-lg shadow-primary/10">
                <Handshake className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-text-main mb-4">ScrapeX Partners</h1>
              <p className="text-text-muted mt-2 max-w-2xl leading-relaxed">
                We partner with the best in the industry to provide you with a comprehensive and seamless web scraping experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {PARTNERS.map((partner) => (
                <div key={partner.name} className="bg-bg-card border border-border-color rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 ${partner.bg} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <partner.icon className={`w-7 h-7 ${partner.color}`} />
                    </div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                      {partner.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-3 tracking-tight group-hover:text-primary transition-colors leading-tight">{partner.name}</h3>
                  <p className="text-text-muted leading-relaxed mb-8">
                    {partner.description}
                  </p>
                  <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                    Visit Website <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-bg-card border border-border-color rounded-3xl p-12 text-center mb-16">
              <h2 className="text-2xl font-bold text-text-main mb-4">Become a Partner</h2>
              <p className="text-text-muted mb-8 max-w-md mx-auto">Join our ecosystem of technology and service partners to help businesses unlock the power of web data.</p>
              <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                Apply for Partnership
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-bg-card border border-border-color rounded-3xl p-8">
                <h3 className="text-lg font-bold text-text-main mb-6">Partner Benefits</h3>
                <div className="space-y-6">
                  {[
                    { title: 'Co-Marketing Opportunities', description: 'Collaborate on webinars, blog posts, and case studies.' },
                    { title: 'Technical Support', description: 'Access to our engineering team for integration assistance.' },
                    { title: 'Referral Rewards', description: 'Earn rewards for referring customers to ScrapeX.' },
                    { title: 'Early Access', description: 'Get early access to new features and API updates.' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-text-main mb-1">{item.title}</h4>
                        <p className="text-sm text-text-muted">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 flex flex-col justify-center text-center">
                <Globe className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-lg font-bold text-text-main mb-2">Global Ecosystem</h3>
                <p className="text-sm text-text-muted mb-6">We're building a global network of partners to solve the world's most complex data challenges.</p>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">50+</p>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Partners</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">15</p>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Countries</p>
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
