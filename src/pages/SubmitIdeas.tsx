import React, { useState } from 'react';
import { Lightbulb, Search, MessageSquare, ThumbsUp, ChevronRight, Plus, X, Check } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const IDEAS = [
  { id: 1, title: 'Add real-time data streaming', description: 'Allow users to stream scraped data directly to their apps via WebSockets.', votes: 124, status: 'In Review', category: 'Feature' },
  { id: 2, title: 'Support for mobile app scraping', description: 'Enable scraping of mobile app data using emulators or real devices.', votes: 89, status: 'Planned', category: 'New Product' },
  { id: 3, title: 'AI-powered data cleaning', description: 'Automatically clean and format scraped data using LLMs.', votes: 256, status: 'In Progress', category: 'AI' },
  { id: 4, title: 'Custom proxy rotation rules', description: 'Give users more control over how proxies are rotated for specific sites.', votes: 45, status: 'Completed', category: 'Proxy' },
];

export default function SubmitIdeas() {
  const [showForm, setShowForm] = useState(false);
  const [toast, setToast] = useState<{ message: string, visible: boolean }>({ message: '', visible: false });

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 3000);
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
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-2">
                  <Lightbulb className="w-4 h-4" />
                  <span>Product Roadmap</span>
                </div>
                <h1 className="text-3xl font-bold text-text-main">Submit Your Ideas</h1>
                <p className="text-text-muted mt-2 max-w-2xl">
                  Help us build the future of ScrapeX. Share your ideas, vote on features, and see what's coming next.
                </p>
              </div>
              <button 
                onClick={() => setShowForm(true)}
                className="px-6 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <Plus className="w-5 h-5" /> Submit New Idea
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-text-main">Popular Ideas</h2>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">Trending</button>
                    <button className="px-3 py-1 rounded-full bg-bg-card text-text-muted text-xs font-bold border border-border-color hover:bg-bg-app transition-colors">Newest</button>
                  </div>
                </div>
                {IDEAS.map((idea) => (
                  <div key={idea.id} className="bg-bg-card border border-border-color rounded-3xl p-6 hover:shadow-lg transition-shadow group flex gap-6">
                    <div className="flex flex-col items-center gap-1 flex-shrink-0">
                      <button 
                        onClick={() => showToast('Thanks for voting!')}
                        className="w-12 h-12 rounded-2xl bg-bg-app flex flex-col items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 transition-all border border-border-color hover:border-primary/30"
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-xs font-bold mt-1">{idea.votes}</span>
                      </button>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded-full">
                          {idea.category}
                        </span>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          idea.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' :
                          idea.status === 'In Progress' ? 'bg-blue-500/10 text-blue-500' :
                          'bg-amber-500/10 text-amber-500'
                        }`}>
                          {idea.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-text-main mb-2 tracking-tight group-hover:text-primary transition-colors">{idea.title}</h3>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {idea.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div className="bg-bg-card border border-border-color rounded-3xl p-6">
                  <h3 className="text-lg font-bold text-text-main mb-4">Roadmap Status</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Completed', count: 124, color: 'bg-emerald-500' },
                      { label: 'In Progress', count: 12, color: 'bg-blue-500' },
                      { label: 'Planned', count: 45, color: 'bg-amber-500' },
                      { label: 'In Review', count: 89, color: 'bg-primary' },
                    ].map((status) => (
                      <div key={status.label} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${status.color}`}></div>
                          <span className="text-sm text-text-muted">{status.label}</span>
                        </div>
                        <span className="text-sm font-bold text-text-main">{status.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Submit Idea Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setShowForm(false)}></div>
          <div className="bg-bg-card border border-border-color rounded-3xl w-full max-w-lg p-8 relative z-10 shadow-2xl animate-fade-in-up">
            <button onClick={() => setShowForm(false)} className="absolute top-6 right-6 text-text-muted hover:text-text-main">
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-text-main mb-6">Submit New Idea</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-text-muted mb-2 uppercase tracking-wider">Title</label>
                <input 
                  type="text" 
                  placeholder="What's your idea?" 
                  className="w-full h-12 px-4 bg-bg-app rounded-xl border border-border-color focus:ring-2 focus:ring-primary outline-none text-sm text-text-main transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-text-muted mb-2 uppercase tracking-wider">Description</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us more about it..." 
                  className="w-full p-4 bg-bg-app rounded-xl border border-border-color focus:ring-2 focus:ring-primary outline-none text-sm text-text-main transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                onClick={() => { setShowForm(false); showToast('Idea submitted successfully!'); }}
                className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
              >
                Submit Idea
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
