import React from 'react';
import { Shield, Search, ChevronRight, Layout, Code, Zap, Globe, Clock, User, ArrowRight, Plus, Star, Heart, MapPin, FileText, Scale, Landmark } from 'lucide-react';
import Sidebar from '../components/Sidebar';

export default function Impressum() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 text-primary shadow-lg shadow-primary/10">
                <Landmark className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-text-main mb-4">Impressum</h1>
              <p className="text-text-muted mt-2 max-w-2xl leading-relaxed">
                Legal information about ScrapeX.
              </p>
            </div>

            <div className="space-y-12">
              <div className="bg-bg-card border border-border-color rounded-3xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-text-main mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" /> Company Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-main">Company Name</p>
                      <p className="text-sm text-text-muted">ScrapeX Inc.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-main">Address</p>
                      <p className="text-sm text-text-muted">123 Scraper Lane, San Francisco, CA 94103</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 flex-shrink-0">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-main">Legal Representative</p>
                      <p className="text-sm text-text-muted">John Doe, CEO</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-bg-card border border-border-color rounded-3xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-text-main mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" /> Data Protection Officer
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-main">DPO Name</p>
                      <p className="text-sm text-text-muted">Jane Doe</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 flex-shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-main">Email</p>
                      <p className="text-sm text-text-muted">dpo@scrapex.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-sm text-text-muted">Last updated: Oct 1, 2024</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
