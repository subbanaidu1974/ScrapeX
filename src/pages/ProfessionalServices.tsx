import React from 'react';
import { Briefcase, Search, ChevronRight, Layout, Code, Zap, Shield, Globe, Database, Server, Cpu, Layers, BookOpen, HelpCircle, Star, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const SERVICES = [
  { title: 'Custom Scraper Development', description: 'Our experts build custom, high-performance scrapers tailored to your specific data needs.', icon: Code, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Data Extraction Strategy', description: 'Consult with our team to design a scalable and efficient data collection architecture.', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { title: 'Anti-Bot & Proxy Consulting', description: 'Overcome complex anti-bot systems and optimize your proxy rotation strategy.', icon: Shield, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { title: 'Managed Data Pipelines', description: 'We handle the entire data collection process, from scraping to delivery in your preferred format.', icon: Database, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

export default function ProfessionalServices() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 text-primary shadow-lg shadow-primary/10">
                <Briefcase className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-text-main mb-4">Professional Services</h1>
              <p className="text-text-muted mt-2 max-w-2xl leading-relaxed">
                Unlock the full potential of your data with our expert consulting and development services. We help you solve the most complex web scraping challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {SERVICES.map((service) => (
                <div key={service.title} className="bg-bg-card border border-border-color rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                  <div className="flex items-center gap-6 mb-6">
                    <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <service.icon className={`w-7 h-7 ${service.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-text-main tracking-tight group-hover:text-primary transition-colors leading-tight">{service.title}</h3>
                  </div>
                  <p className="text-text-muted leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all cursor-pointer">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-text-main mb-6">Why Choose Our Services?</h2>
                <div className="space-y-6">
                  {[
                    { title: 'Expert Team', description: 'Work with the engineers who built the ScrapeX platform.' },
                    { title: 'Proven Results', description: 'We have helped hundreds of companies scale their data collection.' },
                    { title: 'Custom Solutions', description: 'Every project is unique, and we tailor our approach to your needs.' },
                    { title: 'Ongoing Support', description: 'We don\'t just build and leave; we provide ongoing maintenance and support.' },
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
              <div className="bg-bg-card border border-border-color rounded-3xl p-8 flex flex-col justify-center text-center">
                <MessageSquare className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-text-main mb-4">Ready to get started?</h2>
                <p className="text-text-muted mb-8 max-w-md mx-auto">Schedule a free consultation with our experts to discuss your project and how we can help.</p>
                <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
