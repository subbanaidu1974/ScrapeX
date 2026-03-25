import React, { useState } from 'react';
import { Search, Calendar, Play, CheckCircle2, Loader2, X, ArrowUpRight, MoreVertical, Plus, Clock, ToggleLeft as Toggle, ToggleRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SPIDERS } from '../data';
import Sidebar from '../components/Sidebar';

const MOCK_SCHEDULES = [
  { id: 'sch_1', spiderId: 'google-maps-scraper', frequency: 'Every day', nextRun: 'Tomorrow, 8:00 AM', status: 'paused' },
  { id: 'sch_2', spiderId: 'tiktok-scraper', frequency: 'Every 6 hours', nextRun: 'In 2 hours', status: 'paused' },
  { id: 'sch_3', spiderId: 'amazon-scraper', frequency: 'Every Monday', nextRun: 'Next Monday, 9:00 AM', status: 'paused' },
  { id: 'sch_4', spiderId: 'instagram-scraper', frequency: 'Every month', nextRun: 'April 1st, 12:00 AM', status: 'paused' },
];

export default function Schedules() {
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState<{ message: string, visible: boolean }>({ message: '', visible: false });
  const navigate = useNavigate();

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 3000);
  };

  const filteredSchedules = MOCK_SCHEDULES.filter(sch => {
    const spider = SPIDERS.find(a => a.id === sch.spiderId);
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
                <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Schedules</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Automate your scrapers with recurring schedules.</p>
              </div>
              
              <div className="flex gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-80">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                  <input 
                    type="text" 
                    placeholder="Search schedules..." 
                    className="w-full h-11 pl-12 pr-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none text-sm text-slate-700 dark:text-slate-200 shadow-sm transition-colors"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button 
                  onClick={() => showToast('Creating new schedule...')}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl font-bold transition-all shadow-lg shadow-indigo-200 dark:shadow-none flex items-center gap-2 whitespace-nowrap"
                >
                  <Plus className="w-5 h-5" />
                  New Schedule
                </button>
              </div>
            </div>

            {/* Schedules Table */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden transition-colors duration-300">
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                <div className="col-span-8 md:col-span-4">SPIDER</div>
                <div className="hidden md:block col-span-2">FREQUENCY</div>
                <div className="hidden md:block col-span-3">NEXT RUN</div>
                <div className="hidden md:block col-span-2">STATUS</div>
                <div className="col-span-4 md:col-span-1 text-right">ACTIONS</div>
              </div>
              
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredSchedules.map((sch) => {
                  const spider = SPIDERS.find(a => a.id === sch.spiderId);
                  if (!spider) return null;
                  
                  return (
                    <div 
                      key={sch.id} 
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
                          <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 truncate">{sch.id}</p>
                        </div>
                      </div>
                      
                      <div className="hidden md:block col-span-2">
                        <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                          <Clock className="w-4 h-4" />
                          <span className="text-xs font-semibold">{sch.frequency}</span>
                        </div>
                      </div>
                      
                      <div className="hidden md:block col-span-3">
                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">{sch.nextRun}</p>
                      </div>
                      
                      <div className="hidden md:block col-span-2">
                        <button 
                          onClick={() => showToast(`Schedule ${sch.status === 'active' ? 'paused' : 'activated'}`)}
                          className={`flex items-center gap-2 transition-colors ${sch.status === 'active' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-500'}`}
                        >
                          {sch.status === 'active' ? <ToggleRight className="w-6 h-6" /> : <Toggle className="w-6 h-6" />}
                          <span className="text-xs font-bold uppercase tracking-wider">{sch.status}</span>
                        </button>
                      </div>
                      
                      <div className="col-span-4 md:col-span-1 flex justify-end">
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
              
              {filteredSchedules.length === 0 && (
                <div className="p-12 text-center">
                  <p className="text-slate-500 dark:text-slate-400">No schedules found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
