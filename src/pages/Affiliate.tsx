import React from 'react';
import { DollarSign, Search, ChevronRight, Layout, Code, Zap, Shield, Globe, Copy, ExternalLink, Database, Server, TrendingUp, Users, Star, Gift, Clock } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const AFFILIATE_BENEFITS = [
  { title: '20% Commission', description: 'Earn 20% recurring commission for every user you refer to ScrapeX.', icon: DollarSign, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { title: '90-Day Cookie', description: 'We track your referrals for 90 days, giving you more time to earn.', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Marketing Assets', description: 'Access to high-quality banners, logos, and promotional materials.', icon: Gift, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { title: 'Dedicated Support', description: 'Our affiliate team is here to help you succeed and grow.', icon: Users, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

export default function Affiliate() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 text-primary shadow-lg shadow-primary/10">
                <DollarSign className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-text-main">Become a ScrapeX Affiliate</h1>
              <p className="text-text-muted mt-2 max-w-2xl leading-relaxed">
                Refer users to ScrapeX and earn recurring commissions. Join our affiliate program and start earning today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {AFFILIATE_BENEFITS.map((benefit) => (
                <div key={benefit.title} className="bg-bg-card border border-border-color rounded-3xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                  <div className={`w-12 h-12 ${benefit.bg} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-text-main mb-2 tracking-tight">{benefit.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-bg-card border border-border-color rounded-3xl p-12 text-center mb-16">
              <h2 className="text-2xl font-bold text-text-main mb-4">Ready to start earning?</h2>
              <p className="text-text-muted mb-8 max-w-md mx-auto">Join our affiliate program and start earning recurring commissions for every user you refer.</p>
              <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                Join Affiliate Program
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-bg-card border border-border-color rounded-3xl p-8">
                <h3 className="text-lg font-bold text-text-main mb-6">Affiliate FAQ</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-bold text-text-main mb-1">How do I get paid?</p>
                    <p className="text-sm text-text-muted">Payouts are made monthly via PayPal or direct bank transfer once you reach the $50 threshold.</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-main mb-1">Can I refer myself?</p>
                    <p className="text-sm text-text-muted">No, self-referrals are not allowed and will result in account suspension.</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-main mb-1">How long is the cookie duration?</p>
                    <p className="text-sm text-text-muted">We use a 90-day cookie, so you get credit for any sign-ups within 90 days of the initial click.</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-text-main mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" /> Program Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-muted">Total Affiliates</span>
                    <span className="text-sm font-bold text-text-main">1,245</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-muted">Total Payouts</span>
                    <span className="text-sm font-bold text-text-main">$124,567</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-muted">Average Earnings</span>
                    <span className="text-sm font-bold text-emerald-500">$456/mo</span>
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
