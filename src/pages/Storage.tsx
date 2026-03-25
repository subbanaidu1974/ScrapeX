import React, { useState } from 'react';
import { Search, Database, Download, Trash2, MoreVertical, X, FileText, Table, FileJson } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const MOCK_DATASETS = [
  { id: 'ds_1', name: 'Google Maps Results - NYC', type: 'JSON', size: '2.4 MB', items: 1248, updated: '2 mins ago' },
  { id: 'ds_2', name: 'TikTok Trending Videos', type: 'CSV', size: '156 KB', items: 156, updated: 'Just now' },
  { id: 'ds_3', name: 'Amazon Product List', type: 'JSON', size: '12.8 MB', items: 5432, updated: '1 hour ago' },
  { id: 'ds_4', name: 'Instagram Profiles', type: 'CSV', size: '890 KB', items: 890, updated: '3 hours ago' },
  { id: 'ds_5', name: 'Website Content - Blog', type: 'JSON', size: '45.2 MB', items: 12450, updated: 'Yesterday' },
  { id: 'ds_6', name: 'E-commerce Prices', type: 'CSV', size: '3.1 MB', items: 3210, updated: '2 days ago' },
];

export default function Storage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState<{ message: string, visible: boolean }>({ message: '', visible: false });

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 3000);
  };

  const filteredDatasets = MOCK_DATASETS.filter(ds => 
    ds.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Storage</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage your datasets and extracted data.</p>
              </div>
              
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Search datasets..." 
                  className="w-full h-11 pl-12 pr-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none text-sm text-slate-700 dark:text-slate-200 shadow-sm transition-colors"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Datasets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDatasets.map((ds) => (
                <div 
                  key={ds.id} 
                  className="bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800 group hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-900 transition-all flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${ds.type === 'JSON' ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400' : 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'}`}>
                      {ds.type === 'JSON' ? <FileJson className="w-6 h-6" /> : <Table className="w-6 h-6" />}
                    </div>
                    <button onClick={() => showToast('More options')} className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 p-1 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                    {ds.name}
                  </h3>
                  <p className="text-[10px] font-mono text-slate-400 dark:text-slate-500 mb-4">{ds.id}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-2.5">
                      <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">Size</p>
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{ds.size}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-2.5">
                      <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">Items</p>
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{ds.items.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50 dark:border-slate-800">
                    <span className="text-[11px] text-slate-400 dark:text-slate-500">Updated {ds.updated}</span>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => showToast('Downloading dataset...')}
                        className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors"
                        title="Download"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => showToast('Deleting dataset...')}
                        className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 hover:border-red-500 dark:hover:border-red-400 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredDatasets.length === 0 && (
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-12 text-center shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-slate-300 dark:text-slate-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">No datasets found</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Your extracted data will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
