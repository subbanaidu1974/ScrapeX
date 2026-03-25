import React from 'react';
import { Star, Search, ChevronRight, Layout, Code, Zap, Shield, Globe, Clock, User, ArrowRight, Plus, Download, Palette, Type } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const LOGOS = [
  { title: 'Primary Logo', description: 'Our primary logo for use on light backgrounds.', icon: Star, color: 'text-primary', bg: 'bg-primary/10' },
  { title: 'Secondary Logo', description: 'Our secondary logo for use on dark backgrounds.', icon: Star, color: 'text-white', bg: 'bg-slate-900' },
  { title: 'Icon Only', description: 'Our icon only for use in small spaces.', icon: Star, color: 'text-primary', bg: 'bg-primary/10' },
];

const COLORS = [
  { name: 'Primary', hex: '#FF6321', rgb: '255, 99, 33', bg: 'bg-[#FF6321]' },
  { name: 'Secondary', hex: '#0F172A', rgb: '15, 23, 42', bg: 'bg-[#0F172A]' },
  { name: 'Accent', hex: '#10B981', rgb: '16, 185, 129', bg: 'bg-[#10B981]' },
  { name: 'Muted', hex: '#64748B', rgb: '100, 116, 139', bg: 'bg-[#64748B]' },
];

export default function Brand() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 text-primary shadow-lg shadow-primary/10">
                <Star className="w-8 h-8 fill-current" />
              </div>
              <h1 className="text-3xl font-bold text-text-main mb-4">Brand Assets</h1>
              <p className="text-text-muted mt-2 max-w-2xl leading-relaxed">
                Download our official logos, color palettes, and brand guidelines for use in your projects and marketing materials.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-text-main mb-8 flex items-center gap-2">
                <Layout className="w-6 h-6 text-primary" /> Logos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {LOGOS.map((logo) => (
                  <div key={logo.title} className="bg-bg-card border border-border-color rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all group text-center">
                    <div className={`w-24 h-24 ${logo.bg} rounded-3xl flex items-center justify-center mb-6 mx-auto transition-transform group-hover:scale-110`}>
                      <logo.icon className={`w-12 h-12 ${logo.color} fill-current`} />
                    </div>
                    <h3 className="text-lg font-bold text-text-main mb-2 tracking-tight">{logo.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed mb-6">
                      {logo.description}
                    </p>
                    <button className="w-full py-3 bg-bg-app border border-border-color text-text-main rounded-xl font-bold hover:bg-bg-card transition-colors flex items-center justify-center gap-2">
                      Download <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-text-main mb-8 flex items-center gap-2">
                <Palette className="w-6 h-6 text-primary" /> Colors
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {COLORS.map((color) => (
                  <div key={color.name} className="bg-bg-card border border-border-color rounded-3xl p-6 hover:shadow-lg transition-shadow">
                    <div className={`w-full h-24 ${color.bg} rounded-2xl mb-6 shadow-inner`}></div>
                    <h3 className="text-lg font-bold text-text-main mb-1 tracking-tight">{color.name}</h3>
                    <p className="text-sm font-mono text-text-muted mb-1">{color.hex}</p>
                    <p className="text-xs font-mono text-text-muted">RGB: {color.rgb}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-3xl p-12 text-center">
              <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center justify-center gap-2">
                <Type className="w-6 h-6 text-primary" /> Typography
              </h2>
              <p className="text-text-muted mb-8 max-w-md mx-auto">Our primary font is <strong>Inter</strong>. It's clean, versatile, and legible across all devices and screen sizes.</p>
              <div className="flex items-center justify-center gap-8">
                <div className="text-4xl font-bold text-text-main">Aa</div>
                <div className="text-4xl font-medium text-text-main">Aa</div>
                <div className="text-4xl font-normal text-text-main">Aa</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
