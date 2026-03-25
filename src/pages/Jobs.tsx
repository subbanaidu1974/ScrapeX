import React from 'react';
import { Users, Search, ChevronRight, Layout, Code, Zap, Shield, Globe, Clock, User, ArrowRight, Plus, Star, Heart, MapPin } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const JOBS = [
  { title: 'Senior Backend Engineer', location: 'Remote / San Francisco', type: 'Full-time', department: 'Engineering', description: 'Help us build the most powerful and scalable web scraping infrastructure in the world.', icon: Code, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Product Designer', location: 'Remote / London', type: 'Full-time', department: 'Design', description: 'Design the next generation of web scraping and browser automation tools.', icon: Layout, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { title: 'Developer Advocate', location: 'Remote', type: 'Full-time', department: 'Community', description: 'Connect with our developer community and help them succeed with ScrapeX.', icon: Users, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { title: 'Customer Success Manager', location: 'Remote / New York', type: 'Full-time', department: 'Success', description: 'Help our customers solve their data challenges and drive growth with ScrapeX.', icon: Heart, color: 'text-red-500', bg: 'bg-red-500/10' },
];

export default function Jobs() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 text-primary shadow-lg shadow-primary/10">
                <Users className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-text-main mb-4">Join the ScrapeX Team</h1>
              <p className="text-text-muted mt-2 max-w-2xl leading-relaxed">
                We're building the future of web scraping and browser automation. Join our global team of talented people and help us make the world's data accessible to everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { label: 'Open Positions', count: 12, color: 'text-blue-500', bg: 'bg-blue-500/10' },
                { label: 'Countries', count: 5, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
                { label: 'Team Members', count: 45, color: 'text-amber-500', bg: 'bg-amber-500/10' },
                { label: 'Happy Customers', count: '10k+', color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
              ].map((stat) => (
                <div key={stat.label} className="bg-bg-card border border-border-color rounded-3xl p-6 text-center hover:shadow-lg transition-shadow">
                  <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.count}</p>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-text-main mb-8">Open Positions</h2>
              <div className="space-y-6">
                {JOBS.map((job) => (
                  <div key={job.title} className="bg-bg-card border border-border-color rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 ${job.bg} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                        <job.icon className={`w-7 h-7 ${job.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-text-main mb-1 tracking-tight group-hover:text-primary transition-colors leading-tight">{job.title}</h3>
                        <div className="flex items-center gap-4 text-xs text-text-muted">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 text-center">
              <h2 className="text-2xl font-bold text-text-main mb-4">Don't see a role for you?</h2>
              <p className="text-text-muted mb-8 max-w-md mx-auto">We're always looking for talented people to join our team. Send us your resume and we'll keep you in mind for future roles.</p>
              <button className="px-8 py-4 bg-bg-app border border-border-color text-text-main rounded-2xl font-bold hover:bg-bg-card transition-colors flex items-center justify-center gap-2 mx-auto">
                Send Resume <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
