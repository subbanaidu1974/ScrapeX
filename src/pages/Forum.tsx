import React from 'react';
import { MessageSquare, Search, Users, Star, TrendingUp, ChevronRight, Plus, Clock, MessageCircle } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const FORUM_CATEGORIES = [
  { title: 'General Discussion', description: 'Talk about anything related to web scraping.', topics: 1245, posts: 8902, icon: MessageSquare, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Showcase', description: 'Show off your scrapers and projects.', topics: 456, posts: 2341, icon: Star, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { title: 'Help & Support', description: 'Get help from the community.', topics: 2341, posts: 12456, icon: Users, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { title: 'API & SDKs', description: 'Technical discussions about our API and SDKs.', topics: 890, posts: 4567, icon: TrendingUp, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

const RECENT_POSTS = [
  { title: 'How to handle CAPTCHAs on Amazon?', author: 'ScraperPro', time: '2m ago', replies: 12, views: 245 },
  { title: 'New TikTok scraper template released!', author: 'Admin', time: '15m ago', replies: 45, views: 1245 },
  { title: 'Best practices for proxy rotation', author: 'DataWizard', time: '1h ago', replies: 8, views: 156 },
  { title: 'Scraping dynamic content with Crawlee', author: 'JSExpert', time: '3h ago', replies: 24, views: 890 },
];

export default function Forum() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <h1 className="text-3xl font-bold text-text-main">Community Forum</h1>
                <p className="text-text-muted mt-2 max-w-2xl">
                  Connect with other developers, share your projects, and get help from the ScrapeX community.
                </p>
              </div>
              <button className="px-6 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity flex items-center gap-2">
                <Plus className="w-5 h-5" /> Start New Discussion
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {FORUM_CATEGORIES.map((category) => (
                    <div key={category.title} className="bg-bg-card border border-border-color rounded-3xl p-6 hover:shadow-lg transition-shadow group cursor-pointer">
                      <div className={`w-12 h-12 ${category.bg} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                        <category.icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h3 className="text-lg font-bold text-text-main mb-2 tracking-tight group-hover:text-primary transition-colors">{category.title}</h3>
                      <p className="text-sm text-text-muted leading-relaxed mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs font-bold text-text-muted uppercase tracking-wider">
                        <span>{category.topics} Topics</span>
                        <span>{category.posts} Posts</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-bg-card border border-border-color rounded-3xl overflow-hidden">
                  <div className="px-6 py-4 border-b border-border-color bg-bg-app flex items-center justify-between">
                    <h2 className="text-lg font-bold text-text-main">Recent Discussions</h2>
                    <button className="text-sm font-bold text-primary hover:underline">View All</button>
                  </div>
                  <div className="divide-y divide-border-color">
                    {RECENT_POSTS.map((post) => (
                      <div key={post.title} className="px-6 py-4 hover:bg-bg-app transition-colors cursor-pointer group">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-text-main group-hover:text-primary transition-colors">{post.title}</h3>
                          <div className="flex items-center gap-4 text-xs text-text-muted">
                            <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> {post.replies}</span>
                            <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {post.views}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-text-muted">
                          <span className="font-bold text-text-main">@{post.author}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-bg-card border border-border-color rounded-3xl p-6">
                  <h3 className="text-lg font-bold text-text-main mb-4">Forum Stats</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-muted">Total Members</span>
                      <span className="text-sm font-bold text-text-main">12,456</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-muted">Online Now</span>
                      <span className="text-sm font-bold text-emerald-500">456</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-muted">Total Topics</span>
                      <span className="text-sm font-bold text-text-main">45,678</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-3xl p-6">
                  <h3 className="text-lg font-bold text-text-main mb-2">Top Contributors</h3>
                  <div className="space-y-4 mt-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-bg-app border border-border-color flex items-center justify-center text-text-muted">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-text-main">User_{i}45</p>
                          <p className="text-xs text-text-muted">{1245 - i * 100} points</p>
                        </div>
                      </div>
                    ))}
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
