import React from 'react';
import { Search, ChevronRight, Layout, Code, Zap, Shield, Globe, Database, Server, Cpu, Layers, BookOpen, HelpCircle, Star, ArrowRight } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const LIBRARIES = [
  { title: 'Beautiful Soup', description: 'A Python library for pulling data out of HTML and XML files.', icon: Code, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Scrapy', description: 'An open-source and collaborative framework for extracting the data you need from websites.', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { title: 'Selenium', description: 'Web browser automation for scraping dynamic content and single-page applications.', icon: Globe, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { title: 'Playwright', description: 'A Python library to automate Chromium, Firefox and WebKit with a single API.', icon: Cpu, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

export default function PythonWebScrapingLibraries() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 text-primary shadow-lg shadow-primary/10">
                <Code className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-text-main mb-4">Python Web Scraping Libraries</h1>
              <p className="text-text-muted mt-2 max-w-2xl leading-relaxed">
                Python is the most popular language for web scraping. Discover the best libraries and frameworks for your Python scraping projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {LIBRARIES.map((library) => (
                <div key={library.title} className="bg-bg-card border border-border-color rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 ${library.bg} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <library.icon className={`w-7 h-7 ${library.color}`} />
                    </div>
                    <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-3 tracking-tight group-hover:text-primary transition-colors leading-tight">{library.title}</h3>
                  <p className="text-text-muted leading-relaxed">
                    {library.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-bg-card border border-border-color rounded-3xl p-8 mb-16">
              <h2 className="text-2xl font-bold text-text-main mb-6">Why Python for Scraping?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Large Ecosystem', description: 'Thousands of libraries and frameworks for all your scraping needs.' },
                  { title: 'Easy to Learn', description: 'Simple and intuitive syntax makes it easy to build and maintain scrapers.' },
                  { title: 'Powerful Data Tools', description: 'Integrate your scrapers with Pandas, NumPy, and other data analysis tools.' },
                  { title: 'Community Support', description: 'A massive community of developers to help you solve any scraping challenge.' },
                ].map((item) => (
                  <div key={item.title} className="bg-bg-card border border-border-color rounded-3xl p-6 hover:shadow-lg transition-shadow group">
                    <h3 className="text-lg font-bold text-text-main mb-2 tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 text-center">
              <h2 className="text-2xl font-bold text-text-main mb-4">Start your Python scraping project</h2>
              <p className="text-text-muted mb-8 max-w-md mx-auto">ScrapeX provides Python SDKs and pre-built spiders to help you build and scale your Python scraping projects.</p>
              <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                View Python SDK
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
