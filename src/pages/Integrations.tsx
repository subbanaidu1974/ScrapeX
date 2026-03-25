import React from 'react';
import { Share2, Slack, Github, Database, Mail, MessageSquare, Globe, Zap } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const INTEGRATIONS = [
  { name: 'Slack', description: 'Get notifications for finished runs directly in your Slack channels.', icon: Slack, color: 'text-[#4A154B]', bg: 'bg-[#4A154B]/10' },
  { name: 'GitHub', description: 'Sync your scraper code with GitHub repositories and trigger runs on push.', icon: Github, color: 'text-[#181717]', bg: 'bg-[#181717]/10' },
  { name: 'Webhooks', description: 'Send data to any URL as soon as it is scraped.', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { name: 'PostgreSQL', description: 'Automatically export scraped data to your PostgreSQL database.', icon: Database, color: 'text-[#336791]', bg: 'bg-[#336791]/10' },
  { name: 'Email', description: 'Receive CSV or JSON reports via email after each run.', icon: Mail, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { name: 'Discord', description: 'Post updates and data summaries to Discord webhooks.', icon: MessageSquare, color: 'text-[#5865F2]', bg: 'bg-[#5865F2]/10' },
];

export default function Integrations() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h1 className="text-3xl font-bold text-text-main">Integrations</h1>
              <p className="text-text-muted mt-2 max-w-2xl">
                Connect ScrapeX with your favorite tools to automate your workflow and send data where it's needed most.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INTEGRATIONS.map((item) => (
                <div key={item.name} className="bg-bg-card border border-border-color rounded-3xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                  <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-text-main mb-2">{item.name}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <button className="w-full py-2.5 rounded-xl border border-border-color text-sm font-semibold text-text-main hover:bg-bg-app transition-colors">
                    Configure
                  </button>
                </div>
              ))}

              <div className="bg-bg-card border border-dashed border-border-color rounded-3xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-bg-app/50 transition-colors">
                <div className="w-12 h-12 bg-bg-app rounded-2xl flex items-center justify-center mb-4 text-text-muted group-hover:text-primary transition-colors">
                  <Share2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-text-main mb-1">Request Integration</h3>
                <p className="text-sm text-text-muted">Don't see what you need?</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
