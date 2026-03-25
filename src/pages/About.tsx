import React from 'react';
import { Star, Target, Users, Heart, Globe, Shield } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const VALUES = [
  { title: 'Transparency', description: 'We believe in open communication and honest data practices.', icon: Shield, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Innovation', description: 'Constantly pushing the boundaries of what is possible in web scraping.', icon: Target, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { title: 'Customer First', description: 'Our tools are built to solve real-world problems for our users.', icon: Heart, color: 'text-red-500', bg: 'bg-red-500/10' },
  { title: 'Global Community', description: 'Connecting developers and businesses across the globe.', icon: Globe, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

export default function About() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 text-primary mx-auto shadow-lg shadow-primary/10">
                <Star className="w-10 h-10 fill-current" />
              </div>
              <h1 className="text-4xl font-bold text-text-main mb-4 tracking-tight">About ScrapeX</h1>
              <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                We're on a mission to make the world's data accessible to everyone, everywhere.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div>
                <h2 className="text-2xl font-bold text-text-main mb-4">Our Story</h2>
                <p className="text-text-muted leading-relaxed mb-4">
                  Founded in 2023, ScrapeX started with a simple idea: web scraping shouldn't be a headache. We saw developers struggling with proxy rotation, anti-bot systems, and unscalable infrastructure.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Today, ScrapeX is a leading platform for web scraping and browser automation, trusted by thousands of developers and businesses worldwide to power their data-driven decisions.
                </p>
              </div>
              <div className="bg-bg-card border border-border-color rounded-3xl p-8 flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary mb-1">10k+</p>
                    <p className="text-xs font-bold text-text-muted uppercase tracking-wider">Users</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary mb-1">500M+</p>
                    <p className="text-xs font-bold text-text-muted uppercase tracking-wider">Pages Scraped</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary mb-1">70M+</p>
                    <p className="text-xs font-bold text-text-muted uppercase tracking-wider">Proxies</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary mb-1">99.9%</p>
                    <p className="text-xs font-bold text-text-muted uppercase tracking-wider">Uptime</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-2xl font-bold text-text-main mb-8 text-center">Our Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {VALUES.map((value) => (
                  <div key={value.title} className="bg-bg-card border border-border-color rounded-3xl p-6 hover:shadow-lg transition-shadow group">
                    <div className={`w-12 h-12 ${value.bg} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                      <value.icon className={`w-6 h-6 ${value.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-text-main mb-2 tracking-tight">{value.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 text-center">
              <h2 className="text-2xl font-bold text-text-main mb-4">Join our mission</h2>
              <p className="text-text-muted mb-8 max-w-md mx-auto">We're always looking for talented people to help us build the future of web scraping.</p>
              <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
