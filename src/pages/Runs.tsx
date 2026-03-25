import React, { useState } from 'react';
import { Search, Play, CheckCircle2, Loader2, X, ArrowUpRight, MoreVertical, Terminal, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SPIDERS } from '../data';
import Sidebar from '../components/Sidebar';

const MOCK_RUNS = [
  { id: 'run_1', spiderId: 'google-maps-scraper', status: 'completed', started: '2 mins ago', duration: '45s', items: 1248 },
  { id: 'run_2', spiderId: 'tiktok-scraper', status: 'running', started: 'Just now', duration: '12s', items: 156 },
  { id: 'run_3', spiderId: 'amazon-scraper', status: 'completed', started: '1 hour ago', duration: '2m 15s', items: 5432 },
  { id: 'run_4', spiderId: 'instagram-scraper', status: 'completed', started: '3 hours ago', duration: '1m 30s', items: 890 },
  { id: 'run_5', spiderId: 'website-content-crawler', status: 'completed', started: 'Yesterday', duration: '5m 10s', items: 12450 },
  { id: 'run_6', spiderId: 'e-commerce-scraping-tool', status: 'completed', started: '2 days ago', duration: '3m 45s', items: 3210 },
];

export default function Runs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState<{ message: string, visible: boolean }>({ message: '', visible: false });
  const navigate = useNavigate();

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 3000);
  };

  const filteredRuns = MOCK_RUNS.filter(run => {
    const spider = SPIDERS.find(a => a.id === run.spiderId);
    return spider?.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="flex h-[calc(100vh-64px)] bg-[#f4f7fe] dark:bg-slate-950 overflow-hidden relative transition-colors duration-300">
      {/* Toast Notification */}
      {toast.visible && (
        <div className="absolute bottom-8 right-8 bg-slate-800 dark:bg-slate-900 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 z-50 animate-fade-in-up">
          <span className="text-sm font-semibold">{toast.message}</span>
          <button onClick={() => setToast({ message: '', visible: false })} className="text-slate-400 hover:text-white">
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
                <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Recent Runs</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Monitor and manage your scraper executions.</p>
              </div>
              
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Search runs..." 
                  className="w-full h-11 pl-12 pr-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none text-sm text-slate-700 dark:text-slate-200 shadow-sm transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Runs Table */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden transition-colors duration-300">
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                <div className="col-span-8 md:col-span-4">SPIDER</div>
                <div className="hidden md:block col-span-2">STATUS</div>
                <div className="hidden md:block col-span-2">STARTED</div>
                <div className="hidden md:block col-span-2">DURATION / ITEMS</div>
                <div className="col-span-4 md:col-span-2 text-right">ACTIONS</div>
              </div>
              
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredRuns.map((run) => {
                  const spider = SPIDERS.find(a => a.id === run.spiderId);
                  if (!spider) return null;
                  
                  return (
                    <div 
                      key={run.id} 
                      className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                    >
                      <div className="col-span-8 md:col-span-4 flex items-center gap-3 min-w-0">
                        <div className={`w-10 h-10 rounded-xl ${spider.iconBg || 'bg-slate-50 dark:bg-slate-800'} flex items-center justify-center flex-shrink-0`}>
                          <spider.icon className={`w-5 h-5 ${spider.iconColor || 'text-slate-800 dark:text-slate-200'}`} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer" onClick={() => navigate(`/spider/${spider.id}`)}>
                            {spider.title}
                          </p>
                          <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 truncate">{run.id}</p>
                        </div>
                      </div>
                      
                      <div className="hidden md:block col-span-2">
                        {run.status === 'completed' ? (
                          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wider">Succeeded</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span className="text-xs font-bold uppercase tracking-wider">Running</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="hidden md:block col-span-2">
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">{run.started}</p>
                      </div>
                      
                      <div className="hidden md:block col-span-2">
                        <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{run.duration}</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-500">{run.items.toLocaleString()} items</p>
                      </div>
                      
                      <div className="col-span-4 md:col-span-2 flex justify-end gap-2">
                        <button 
                          onClick={() => navigate(`/run/${spider.id}`)}
                          className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors"
                          title="View Details"
                        >
                          <Terminal className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => showToast('Downloading results...')}
                          className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors"
                          title="Download Results"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => showToast('More options')}
                          className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {filteredRuns.length === 0 && (
                <div className="p-12 text-center">
                  <p className="text-slate-500 dark:text-slate-400">No runs found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
