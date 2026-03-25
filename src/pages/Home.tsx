import React, { useState } from 'react';
import { 
  Search, Mail, Bell, LayoutDashboard, Inbox, BookOpen, 
  CheckSquare, Users, Settings, LogOut, ChevronLeft, ChevronRight, 
  Heart, MoreVertical, ArrowUpRight, Plus, Play, Database, Calendar,
  Star, Globe, X, LogIn, Clock
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SPIDERS } from '../data';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';
import SpiderCard from '../components/SpiderCard';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [trendingIndex, setTrendingIndex] = useState(0);
  const [allSpidersIndex, setAllSpidersIndex] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [following, setFollowing] = useState<string[]>([]);
  const [toast, setToast] = useState<{ message: string, visible: boolean }>({ message: '', visible: false });
  
  const navigate = useNavigate();
  const { user, login, logout } = useAuth();

  // Filter spiders based on search
  const filteredSpiders = SPIDERS.filter(spider => 
    spider.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    spider.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const trendingSpiders = filteredSpiders.slice(trendingIndex, trendingIndex + 3);
  const recentRuns = filteredSpiders.slice(0, 4);

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 3000);
  };

  const handlePrevTrending = () => {
    setTrendingIndex(prev => Math.max(0, prev - 1));
  };

  const handleNextTrending = () => {
    setTrendingIndex(prev => Math.min(Math.max(0, filteredSpiders.length - 3), prev + 1));
  };

  const handlePrevAllSpiders = () => {
    setAllSpidersIndex(prev => Math.max(0, prev - 8));
  };

  const handleNextAllSpiders = () => {
    setAllSpidersIndex(prev => Math.min(Math.max(0, filteredSpiders.length - 8), prev + 8));
  };

  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!user) {
      showToast('Please login to save favorites');
      return;
    }
    setFavorites(prev => {
      const isFav = prev.includes(id);
      showToast(isFav ? 'Removed from favorites' : 'Added to favorites');
      return isFav ? prev.filter(f => f !== id) : [...prev, id];
    });
  };

  const toggleFollow = (name: string) => {
    if (!user) {
      showToast('Please login to follow creators');
      return;
    }
    setFollowing(prev => {
      const isFollowing = prev.includes(name);
      showToast(isFollowing ? `Unfollowed ${name}` : `Following ${name}`);
      return isFollowing ? prev.filter(f => f !== name) : [...prev, name];
    });
  };

  const handleLogout = async () => {
    try {
      await logout();
      showToast('Logged out successfully');
    } catch (error) {
      showToast('Error logging out');
    }
  };

  const handleLogin = async () => {
    try {
      await login();
      showToast('Logged in successfully');
    } catch (error) {
      showToast('Error logging in');
    }
  };

  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      {/* Toast Notification */}
      {toast.visible && (
        <div className="absolute bottom-8 right-8 bg-bg-card text-text-main px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 z-50 animate-fade-in-up border border-border-color">
          <span className="text-sm font-semibold">{toast.message}</span>
          <button onClick={() => setToast({ message: '', visible: false })} className="text-text-muted hover:text-text-main">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <Sidebar showToast={showToast} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header Spacer */}
        <header className="h-6 flex-shrink-0 bg-bg-app transition-colors duration-300">
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 pt-2 pb-8 flex flex-col lg:flex-row gap-5">
          
          {/* Left Column (All Spiders, Stats, Trending, Lessons) */}
          <div className="flex-1 flex flex-col gap-5 min-w-0">
            
            {/* Statistics (Compute Usage) */}
            <div className="bg-bg-card rounded-3xl p-5 shadow-sm border border-border-theme transition-colors duration-300">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-text-main">Compute Usage</h2>
                <button onClick={() => showToast('Compute usage options')} className="text-text-muted hover:text-text-main p-1 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                {/* Circular Progress (Simulated) */}
                <div className="flex-shrink-0">
                  <div className="relative w-28 h-28 cursor-pointer group" onClick={() => showToast('Viewing detailed usage')}>
                    <svg className="w-full h-full transform -rotate-90 transition-transform group-hover:scale-105" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-slate-100 dark:text-slate-800" />
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="currentColor" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="80" strokeLinecap="round" className="text-primary transition-all duration-1000" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <img src={user?.photoURL || "https://i.pravatar.cc/150?u=admin"} alt="User" className="w-14 h-14 rounded-full border-2 border-white dark:border-slate-800 shadow-sm" referrerPolicy="no-referrer" />
                      <div className="absolute top-0 right-0 bg-primary text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                        32%
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Welcome Text */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="font-bold text-text-main text-xl mb-0.5">Good Morning, {user?.displayName?.split(' ')[0] || user?.email?.split('@')[0] || 'Guest'} 🔥</h3>
                  <p className="text-xs text-text-muted max-w-xs mx-auto lg:mx-0">Your compute usage is looking good. Continue your scraping to achieve your target!</p>
                </div>

                {/* Bar Chart */}
                <div className="w-full lg:w-64 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4">
                  <div className="flex items-end justify-between h-16 mb-2 gap-2">
                    <div onClick={() => showToast('Usage on Aug 1-10: 30%')} className="w-full bg-primary/20 rounded-t-md h-[30%] hover:bg-primary/30 transition-colors cursor-pointer"></div>
                    <div onClick={() => showToast('Usage on Aug 11-20: 60%')} className="w-full bg-primary/60 rounded-t-md h-[60%] hover:bg-primary/70 transition-colors cursor-pointer"></div>
                    <div onClick={() => showToast('Usage on Aug 21-30: 20%')} className="w-full bg-primary/10 rounded-t-md h-[20%] hover:bg-primary/20 transition-colors cursor-pointer"></div>
                    <div onClick={() => showToast('Usage on Sep 1-10: 90%')} className="w-full bg-primary rounded-t-md h-[90%] hover:opacity-80 transition-colors cursor-pointer"></div>
                    <div onClick={() => showToast('Usage on Sep 11-20: 40%')} className="w-full bg-primary/40 rounded-t-md h-[40%] hover:bg-primary/50 transition-colors cursor-pointer"></div>
                  </div>
                  <div className="flex justify-between text-[9px] font-bold text-text-muted uppercase tracking-wider">
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input 
                type="text" 
                placeholder="Search your spiders..." 
                className="w-full h-12 pl-12 pr-4 bg-bg-card rounded-xl border border-border-theme focus:ring-2 focus:ring-primary outline-none text-sm text-text-main shadow-sm transition-colors duration-300"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setTrendingIndex(0); // Reset index on search
                  setAllSpidersIndex(0);
                }}
              />
            </div>

            {/* All Spiders */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-text-main">All Spiders</h2>
                <div className="flex gap-2">
                  <button 
                    onClick={handlePrevAllSpiders}
                    disabled={allSpidersIndex === 0}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-colors ${allSpidersIndex === 0 ? 'bg-bg-card text-slate-300 dark:text-slate-600 cursor-not-allowed' : 'bg-bg-card text-text-muted hover:text-primary'}`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={handleNextAllSpiders}
                    disabled={allSpidersIndex >= filteredSpiders.length - 8}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-colors ${allSpidersIndex >= filteredSpiders.length - 8 ? 'bg-primary/30 text-white cursor-not-allowed' : 'bg-primary text-white hover:opacity-90'}`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {filteredSpiders.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredSpiders.slice(allSpidersIndex, allSpidersIndex + 8).map((spider, index) => (
                    <div 
                      key={spider.id} 
                      className={`${
                        index < 2 ? 'block' : 
                        index < 4 ? 'hidden sm:block' : 
                        index < 6 ? 'hidden lg:block' : 
                        'hidden xl:block'
                      }`}
                    >
                      <SpiderCard spider={spider} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-bg-card rounded-2xl p-8 text-center shadow-sm border border-border-theme transition-colors duration-300">
                  <p className="text-text-muted">No spiders found matching "{searchQuery}"</p>
                </div>
              )}
            </div>

            {/* Trending Spiders */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-text-main">Trending Spiders</h2>
                <div className="flex gap-2">
                  <button 
                    onClick={handlePrevTrending}
                    disabled={trendingIndex === 0}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-colors ${trendingIndex === 0 ? 'bg-bg-card text-slate-300 dark:text-slate-600 cursor-not-allowed' : 'bg-bg-card text-text-muted hover:text-primary'}`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={handleNextTrending}
                    disabled={trendingIndex >= filteredSpiders.length - 3}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-colors ${trendingIndex >= filteredSpiders.length - 3 ? 'bg-primary/30 text-white cursor-not-allowed' : 'bg-primary text-white hover:opacity-90'}`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {trendingSpiders.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {trendingSpiders.map((spider) => (
                    <SpiderCard key={spider.id} spider={spider} />
                  ))}
                </div>
              ) : (
                <div className="bg-bg-card rounded-2xl p-8 text-center shadow-sm border border-border-theme transition-colors duration-300">
                  <p className="text-text-muted">No spiders found matching "{searchQuery}"</p>
                </div>
              )}
            </div>

            {/* Recent Runs */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-text-main">Recent Runs</h2>
                <button onClick={() => showToast('Viewing all runs')} className="text-sm font-semibold text-primary hover:underline">See all</button>
              </div>
              
              {recentRuns.length > 0 ? (
                <div className="bg-bg-card rounded-2xl shadow-sm overflow-hidden border border-border-theme transition-colors duration-300">
                  <div className="grid grid-cols-12 gap-4 p-4 border-b border-border-theme text-xs font-bold text-text-muted uppercase tracking-wider">
                    <div className="col-span-4">SPIDER</div>
                    <div className="col-span-3">CATEGORY</div>
                    <div className="col-span-4">DESCRIPTION</div>
                    <div className="col-span-1 text-right">ACTION</div>
                  </div>
                  <div className="divide-y divide-border-theme">
                    {recentRuns.map((spider) => (
                      <div 
                        key={spider.id} 
                        onClick={() => navigate(`/run/${spider.id}`)}
                        className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                      >
                        <div className="col-span-4 flex items-center gap-3 min-w-0">
                          <div className={`w-10 h-10 rounded-full ${spider.iconBg || 'bg-slate-100 dark:bg-slate-800'} flex items-center justify-center flex-shrink-0`}>
                            <spider.icon className={`w-5 h-5 ${spider.iconColor || 'text-slate-600 dark:text-slate-400'}`} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-text-main truncate">{spider.title}</p>
                            <p className="text-xs text-text-muted">2 mins ago</p>
                          </div>
                        </div>
                        <div className="col-span-3">
                          <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider inline-block truncate max-w-full">
                            {spider.category}
                          </span>
                        </div>
                        <div className="col-span-4 min-w-0">
                          <p className="text-sm text-text-muted truncate">{spider.description}</p>
                        </div>
                        <div className="col-span-1 flex justify-end">
                          <button 
                            onClick={(e) => { e.stopPropagation(); navigate(`/run/${spider.id}`); }}
                            className="w-8 h-8 rounded-full border border-border-theme flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-bg-card rounded-2xl p-8 text-center shadow-sm border border-border-theme transition-colors duration-300">
                  <p className="text-text-muted">No recent runs found</p>
                </div>
              )}
            </div>

          </div>

          {/* Right Column (Stats, Mentors) */}
          <div className="w-[320px] flex flex-col gap-5 flex-shrink-0 h-full">
            
            {/* Top Creators */}
            <div className="bg-bg-card rounded-3xl p-6 shadow-sm h-[42%] flex flex-col border border-border-theme transition-colors duration-300">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-text-main">Top Creators</h2>
                <button onClick={() => showToast('Add new creator')} className="w-8 h-8 rounded-full border border-border-theme flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                {[
                  { name: 'Padhang Satrio', role: 'Creator', img: 'https://i.pravatar.cc/150?u=4' },
                  { name: 'Zakir Horizontal', role: 'Creator', img: 'https://i.pravatar.cc/150?u=5' },
                  { name: 'Leonardo Samsul', role: 'Creator', img: 'https://i.pravatar.cc/150?u=6' },
                ].map((mentor, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3 cursor-pointer group" onClick={() => showToast(`Viewing ${mentor.name}'s profile`)}>
                      <div className="relative">
                        <img src={mentor.img} alt={mentor.name} className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:ring-2 ring-primary/20 transition-all" />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-800 dark:bg-slate-100 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center">
                          <Plus className="w-2 h-2 text-white dark:text-slate-900" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-main group-hover:text-primary transition-colors">{mentor.name}</p>
                        <p className="text-xs text-text-muted">{mentor.role}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => toggleFollow(mentor.name)}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-full border text-xs font-bold transition-colors ${following.includes(mentor.name) ? 'bg-primary text-white border-primary hover:opacity-90' : 'border-border-theme text-primary hover:bg-primary/10'}`}
                    >
                      <Users className="w-3 h-3" />
                      {following.includes(mentor.name) ? 'Following' : 'Follow'}
                    </button>
                  </div>
                ))}
              </div>
              
              <button onClick={() => showToast('Viewing all creators')} className="w-full py-3 rounded-xl bg-primary/10 text-primary font-bold text-sm hover:bg-primary/20 transition-colors mt-auto">
                See All
              </button>
            </div>

            {/* Schedules Tile */}
            <div className="bg-bg-card rounded-3xl p-6 shadow-sm flex-1 flex flex-col overflow-hidden border border-border-theme transition-colors duration-300">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-text-main">Schedules</h2>
                <button onClick={() => navigate('/schedules')} className="text-xs font-bold text-primary hover:opacity-80 transition-colors">
                  View All
                </button>
              </div>
              
              <div className="space-y-3 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {[
                  { title: 'Google Maps Scraper', next: 'Tomorrow, 8:00 AM', status: 'active' },
                  { title: 'TikTok Scraper', next: 'In 2 hours', status: 'paused' },
                  { title: 'Amazon Scraper', next: 'Next Monday', status: 'active' },
                  { title: 'LinkedIn Jobs', next: 'Every Friday', status: 'paused' },
                ].map((sch, i) => (
                  <div 
                    key={i} 
                    className={`p-3 rounded-2xl border transition-all cursor-pointer shadow-sm hover:shadow-md ${
                      sch.status === 'active' 
                        ? 'bg-emerald-50/80 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30 hover:border-emerald-500/50' 
                        : 'bg-slate-50 dark:bg-slate-800/80 border-border-theme hover:border-primary/30'
                    }`} 
                    onClick={() => navigate('/schedules')}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-xs font-bold text-text-main truncate pr-2">
                        {sch.title}
                      </p>
                      <div className={`w-2 h-2 rounded-full ${sch.status === 'active' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-slate-400 dark:bg-slate-500'}`}></div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-text-main/80 dark:text-text-main/90 font-bold">
                      <Clock className="w-3 h-3" />
                      <span>{sch.next}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
