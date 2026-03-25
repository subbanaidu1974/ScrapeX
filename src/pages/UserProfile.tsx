import React, { useState, useEffect } from 'react';
import { ArrowLeft, User, Mail, Settings, Activity, LogOut, Code, Play, Trash2, Edit3, Briefcase, MapPin, Link as LinkIcon, Key, Loader2, CheckCircle2, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';

export default function UserProfile() {
  const { user, logout, updateApiKey } = useAuth();
  const navigate = useNavigate();
  const [customSpiders, setCustomSpiders] = useState<any[]>([]);
  const [apiKey, setApiKey] = useState(user?.apiKey || '');
  const [isSavingKey, setIsSavingKey] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);

  useEffect(() => {
    if (user?.apiKey) {
      setApiKey(user.apiKey);
    }
  }, [user?.apiKey]);

  useEffect(() => {
    const saved = localStorage.getItem('scrapersai_custom_spiders');
    if (saved) {
      setCustomSpiders(JSON.parse(saved));
    }
  }, []);

  const handleDeleteSpider = (id: string) => {
    if (window.confirm('Are you sure you want to delete this spider?')) {
      const updated = customSpiders.filter(a => a.id !== id);
      setCustomSpiders(updated);
      localStorage.setItem('scrapersai_custom_spiders', JSON.stringify(updated));
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const handleSaveApiKey = async () => {
    if (!user) return;
    try {
      setIsSavingKey(true);
      await updateApiKey(apiKey);
      toast.success('API Key Saved', {
        description: 'Your global API key has been updated successfully.',
      });
    } catch (error) {
      toast.error('Error saving API key');
    } finally {
      setIsSavingKey(false);
    }
  };

  if (!user) {
    return (
      <main className="bg-[#f4f7fe] dark:bg-slate-950 text-slate-800 dark:text-slate-200 pt-8 pb-16 font-sans transition-colors duration-300">
        <div className="max-w-[1128px] mx-auto px-0 sm:px-4 mb-6">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
        </div>
        <div className="max-w-[1128px] mx-auto px-0 sm:px-4 text-center">
          <h1 className="text-2xl font-semibold mb-2 text-slate-800 dark:text-slate-100">Please Log In</h1>
          <p className="text-slate-500 dark:text-slate-400">You need to be logged in to view your profile.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#f4f7fe] dark:bg-slate-950 text-slate-800 dark:text-slate-200 pt-8 pb-16 font-sans transition-colors duration-300">
      <div className="max-w-[1128px] mx-auto px-0 sm:px-4 mb-6">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>
      </div>
      <div className="max-w-[1128px] mx-auto px-0 sm:px-4 flex justify-center gap-6">
        
        {/* Left Sidebar */}
        <div className="hidden md:block w-[225px] flex-shrink-0 space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden sticky top-20 transition-colors duration-300">
            <div className="h-14 bg-slate-100 dark:bg-slate-800 relative">
               <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-transparent"></div>
            </div>
            <div className="px-4 pb-4 relative flex flex-col items-center text-center">
              {user.photoURL ? (
                <img src={user.photoURL} alt={user.displayName || 'User'} className="w-16 h-16 rounded-full border-2 border-white dark:border-slate-900 bg-slate-50 dark:bg-slate-800 -mt-8 relative z-10" referrerPolicy="no-referrer" />
              ) : (
                <div className="w-16 h-16 rounded-full border-2 border-white dark:border-slate-900 bg-slate-50 dark:bg-slate-800 -mt-8 relative z-10 flex items-center justify-center">
                  <User className="w-8 h-8 text-slate-400 dark:text-slate-500" />
                </div>
              )}
              <h2 className="text-base font-semibold text-slate-800 dark:text-slate-100 mt-2">{user.displayName || 'User'}</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{user.email}</p>
            </div>
            <div className="border-t border-slate-100 dark:border-slate-800 px-4 py-3">
              <button 
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              >
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-[780px] space-y-4">
          
          {/* Profile Header Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden relative transition-colors duration-300">
            {/* Cover Image */}
            <div className="h-48 bg-slate-100 dark:bg-slate-800 relative">
               <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-transparent"></div>
               <button className="absolute top-4 right-4 p-2 bg-white/50 dark:bg-slate-900/50 hover:bg-white/80 dark:hover:bg-slate-800/80 rounded-full transition-colors text-slate-700 dark:text-slate-300 backdrop-blur-sm">
                 <Edit3 className="w-5 h-5" />
               </button>
            </div>
            
            {/* Profile Info */}
            <div className="px-6 pb-6 relative">
              <div className="flex justify-between items-start">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || 'User'} className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-900 bg-slate-50 dark:bg-slate-800 -mt-16 relative z-10" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-900 bg-slate-50 dark:bg-slate-800 flex items-center justify-center -mt-16 relative z-10">
                    <User className="w-16 h-16 text-slate-400 dark:text-slate-500" />
                  </div>
                )}
                <div className="mt-4 flex gap-2">
                  <button className="border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 px-4 py-1.5 rounded-full font-semibold transition-colors text-sm">
                    Edit profile
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <h1 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">{user.displayName || 'User'}</h1>
                <p className="text-base text-slate-700 dark:text-slate-300 mt-1">Scraper Developer at ScrapersAI</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> San Francisco, CA</span>
                  <span className="flex items-center gap-1"><LinkIcon className="w-4 h-4" /> <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Contact info</a></span>
                </div>
              </div>
            </div>
          </div>

          {/* API Configuration Section */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 transition-colors duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Key className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">API Configuration</h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Set your global API key here. This key will be used by default for all scrapers you run.
            </p>
            
            <div className="max-w-md space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Global API Key
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input 
                      type={showApiKey ? "text" : "password"}
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="Enter your API key"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    >
                      {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <button 
                    onClick={handleSaveApiKey}
                    disabled={isSavingKey || apiKey === user.apiKey}
                    className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2 rounded-xl font-semibold transition-colors text-sm flex items-center gap-2"
                  >
                    {isSavingKey ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                    Save
                  </button>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 italic">
                * Your API key is stored securely and never shared with third parties.
              </p>
            </div>
          </div>

          {/* Built Spiders Section */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 transition-colors duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">My Built Spiders</h2>
              <Link to="/build" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold text-sm flex items-center gap-1">
                + Build New Spider
              </Link>
            </div>

            {customSpiders.length === 0 ? (
              <div className="text-center py-8 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <Code className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">No spiders built yet</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Start building your first custom scraper to extract data from any website.</p>
                <Link to="/build" className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-semibold transition-colors inline-block text-sm">
                  Build Spider
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {customSpiders.map((spider) => (
                  <div key={spider.id} className="flex items-start gap-4 p-4 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0">
                      <Code className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <Link to={`/spider/${spider.id}`} className="text-base font-semibold text-slate-800 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline">
                          {spider.title}
                        </Link>
                        <button 
                          onClick={() => handleDeleteSpider(spider.id)}
                          className="text-slate-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 transition-colors p-1"
                          title="Delete Spider"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{spider.description}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded-md">{spider.category}</span>
                        <Link to={`/run/${spider.id}`} className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
                          <Play className="w-3 h-3" /> Run
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Activity Section */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 transition-colors duration-300">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Activity</h2>
            <div className="text-center py-8 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <Activity className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
              <p className="text-slate-500 dark:text-slate-400 text-sm">No recent activity to show.</p>
            </div>
          </div>

        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-[300px] flex-shrink-0 space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-4 sticky top-20 transition-colors duration-300">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">Profile language</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">English</p>
            <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">Public profile & URL</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">www.scrapersai.com/in/{user.displayName?.toLowerCase().replace(/\s+/g, '-') || 'user'}</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
