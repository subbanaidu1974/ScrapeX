import React, { useState } from 'react';
import { Search, Heart, Users, Star, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SPIDERS, CATEGORIES } from '../data';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';
import SpiderCard from '../components/SpiderCard';

export default function Store() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [toast, setToast] = useState<{ message: string, visible: boolean }>({ message: '', visible: false });
  const navigate = useNavigate();
  const { user } = useAuth();

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 3000);
  };

  const filteredSpiders = SPIDERS.filter(spider => {
    const matchesSearch = spider.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         spider.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || spider.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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

      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-bold text-text-main">ScrapeX Store</h1>
                <p className="text-text-muted text-sm mt-1">Discover the best scrapers and automation tools.</p>
              </div>
              
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input 
                  type="text" 
                  placeholder="Search scrapers..." 
                  className="w-full h-11 pl-12 pr-4 bg-bg-card rounded-xl border border-border-color focus:ring-2 focus:ring-primary outline-none text-sm text-text-main shadow-sm transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <button 
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${selectedCategory === 'All' ? 'bg-primary text-white shadow-md' : 'bg-bg-card text-text-muted hover:bg-bg-app border border-border-color'}`}
              >
                All Categories
              </button>
              {CATEGORIES.map(category => (
                <button 
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${selectedCategory === category ? 'bg-primary text-white shadow-md' : 'bg-bg-card text-text-muted hover:bg-bg-app border border-border-color'}`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Spiders Grid */}
            {filteredSpiders.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredSpiders.map((spider) => (
                  <SpiderCard key={spider.id} spider={spider} />
                ))}
              </div>
            ) : (
              <div className="bg-bg-card rounded-3xl p-12 text-center shadow-sm border border-border-color transition-colors duration-300">
                <div className="w-16 h-16 bg-bg-app rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-text-muted opacity-50" />
                </div>
                <h3 className="text-lg font-bold text-text-main">No scrapers found</h3>
                <p className="text-text-muted text-sm mt-1">Try adjusting your search or category filters.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="mt-6 text-primary font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
