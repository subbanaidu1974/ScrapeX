import React from 'react';
import { BookOpen, Search, ChevronRight, Layout, Code, Zap, Shield, Globe, Clock, User, ArrowRight } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const POSTS = [
  { title: 'The Future of Web Scraping with AI', excerpt: 'Discover how LLMs are changing the way we extract data from the web.', author: 'Admin', date: 'Oct 1, 2024', category: 'AI', img: 'https://picsum.photos/seed/ai/800/600' },
  { title: 'Anti-Bot Bypass: A Complete Guide', excerpt: 'Learn the latest techniques to stay undetected while scraping.', author: 'ScraperPro', date: 'Sep 25, 2024', category: 'Security', img: 'https://picsum.photos/seed/security/800/600' },
  { title: 'Scaling to 1M Pages Per Day', excerpt: 'How to build a scalable scraping infrastructure with ScrapeX.', author: 'DataWizard', date: 'Sep 15, 2024', category: 'Scaling', img: 'https://picsum.photos/seed/scaling/800/600' },
  { title: 'Web Scraping for E-commerce', excerpt: 'Extract product details, prices, and reviews from Amazon and more.', author: 'Admin', date: 'Sep 10, 2024', category: 'E-commerce', img: 'https://picsum.photos/seed/ecommerce/800/600' },
];

export default function Blog() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <h1 className="text-3xl font-bold text-text-main">ScrapeX Blog</h1>
                <p className="text-text-muted mt-2 max-w-2xl leading-relaxed">
                  The latest news, guides, and insights from the ScrapeX team and community.
                </p>
              </div>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full h-11 pl-12 pr-4 bg-bg-card rounded-xl border border-border-color focus:ring-2 focus:ring-primary outline-none text-sm text-text-main transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {POSTS.map((post) => (
                <div key={post.title} className="bg-bg-card border border-border-color rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-text-main mb-3 tracking-tight group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                    <p className="text-text-muted leading-relaxed mb-6 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                      Read article <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button className="px-8 py-4 bg-bg-card border border-border-color text-text-main rounded-2xl font-bold hover:bg-bg-app transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
