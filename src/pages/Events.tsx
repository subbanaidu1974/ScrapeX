import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight, ExternalLink, Globe, Users, Zap } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const EVENTS = [
  { title: 'Web Scraping Summit 2024', date: 'Oct 15, 2024', location: 'San Francisco, CA', type: 'Conference', description: 'Join the world\'s leading web scraping experts for a day of talks, workshops, and networking.', icon: Globe, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Scaling Your Data Collection', date: 'Nov 2, 2024', location: 'Online', type: 'Webinar', description: 'Learn how to scale your scrapers to millions of pages per day without getting blocked.', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { title: 'ScrapeX Developer Meetup', date: 'Nov 20, 2024', location: 'London, UK', type: 'Meetup', description: 'Connect with other ScrapeX developers in London and share your latest projects.', icon: Users, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { title: 'AI & Web Scraping Workshop', date: 'Dec 5, 2024', location: 'Online', type: 'Workshop', description: 'Discover how to use LLMs to extract structured data from unstructured web pages.', icon: Zap, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

export default function Events() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h1 className="text-3xl font-bold text-text-main mb-4">Events & Webinars</h1>
              <p className="text-text-muted mt-2 max-w-2xl leading-relaxed">
                Stay up to date with the latest in web scraping and browser automation. Join our upcoming events, webinars, and meetups.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {EVENTS.map((event) => (
                <div key={event.title} className="bg-bg-card border border-border-color rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 ${event.bg} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <event.icon className={`w-7 h-7 ${event.color}`} />
                    </div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-3 tracking-tight group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-text-muted leading-relaxed mb-6">
                    {event.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-text-muted">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-text-muted">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <button className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    Register Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-bg-card border border-border-color rounded-3xl p-12 text-center">
              <h2 className="text-2xl font-bold text-text-main mb-4">Host an event with us?</h2>
              <p className="text-text-muted mb-8 max-w-md mx-auto">Are you an expert in web scraping or data science? We'd love to partner with you for our next webinar or meetup.</p>
              <button className="px-8 py-4 bg-bg-app border border-border-color text-text-main rounded-2xl font-bold hover:bg-bg-card transition-colors flex items-center justify-center gap-2 mx-auto">
                Contact our Events Team <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
