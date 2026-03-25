import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Terminal, Loader2, CheckCircle2, Download, 
  Play, Code, MoreHorizontal, Share2, Shield, Lock, LogIn,
  AlertCircle, LogOut
} from 'lucide-react';
import { SPIDERS } from '../data';
import { useAuth } from '../contexts/AuthContext';

export default function RunExecution() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, login, logout } = useAuth();
  const [spider, setSpider] = useState<any>(null);
  const [status, setStatus] = useState<'idle' | 'starting' | 'running' | 'completed'>('idle');
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let found = SPIDERS.find(a => a.id === id);
    
    if (!found && id?.startsWith('custom-')) {
      const customSpiders = JSON.parse(localStorage.getItem('scrapersai_custom_spiders') || '[]');
      const customSpider = customSpiders.find((a: any) => a.id === id);
      if (customSpider) {
        found = {
          ...customSpider,
          icon: Code, // Default icon for custom spiders
        };
      }
    }
    
    setSpider(found);
  }, [id]);

  useEffect(() => {
    if (spider && hasStarted && user) {
      // Simulate execution process
      const mockLogs = [
        `[INFO] Authorization verified for ${user.email}`,
        `[INFO] Initializing ${spider.title}...`,
        `[INFO] Allocating compute resources...`,
        `[INFO] Starting headless browser instance...`,
        `[INFO] Navigating to target URLs...`,
        `[WARN] Rate limit approaching, adding delay...`,
        `[INFO] Extracting data from page 1...`,
        `[INFO] Extracting data from page 2...`,
        `[INFO] Extracting data from page 3...`,
        `[INFO] Processing and cleaning extracted data...`,
        `[INFO] Saving results to dataset...`,
        `[SUCCESS] Run completed successfully.`
      ];

      let currentLogIndex = 0;
      
      const logInterval = setInterval(() => {
        if (currentLogIndex < mockLogs.length) {
          setLogs(prev => [...prev, mockLogs[currentLogIndex]]);
          
          if (currentLogIndex === 0) setStatus('starting');
          else if (currentLogIndex > 0 && currentLogIndex < mockLogs.length - 1) setStatus('running');
          else setStatus('completed');

          setProgress(Math.floor((currentLogIndex / (mockLogs.length - 1)) * 100));
          currentLogIndex++;
        } else {
          clearInterval(logInterval);
        }
      }, 800);

      return () => clearInterval(logInterval);
    }
  }, [spider, hasStarted, user]);

  const handleStartRun = () => {
    if (!user) return;
    setHasStarted(true);
  };

  if (!spider) {
    return (
      <div className="bg-[#f4f7fe] dark:bg-slate-950 text-slate-800 dark:text-slate-200 pt-8 pb-16 text-center transition-colors duration-300">
        <div className="max-w-[1128px] mx-auto px-0 sm:px-4 mb-6 text-left">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
        </div>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-4"></div>
        <p className="text-slate-500 dark:text-slate-400">Loading run details...</p>
      </div>
    );
  }

  const Icon = spider.icon;

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
        
        {/* Main Content */}
        <div className="w-full max-w-[780px] space-y-4">
          
          <div className="flex items-center justify-between mb-2 px-4 sm:px-0">
            <Link to={`/spider/${spider.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Spider
            </Link>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-500">
              Run ID: run_{Math.random().toString(36).substring(2, 9)}
            </span>
          </div>

          {!user ? (
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 p-12 text-center">
              <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Authorization Required</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">
                To ensure security and proper resource allocation, you must be logged in to run scrapers.
              </p>
              <button 
                onClick={login}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-indigo-200 dark:shadow-none flex items-center gap-2 mx-auto"
              >
                <LogIn className="w-5 h-5" />
                Login to Continue
              </button>
            </div>
          ) : !hasStarted ? (
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 p-12 text-center">
              <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">Ready to Execute</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">
                You are authorized as <span className="font-bold text-slate-800 dark:text-slate-200">{user.email}</span>. 
                Click below to start the scraper run.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleStartRun}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-indigo-200 dark:shadow-none flex items-center gap-2"
                >
                  <Play className="w-5 h-5 fill-current" />
                  Start Run Now
                </button>
                <button 
                  onClick={() => {
                    logout();
                    setHasStarted(false);
                  }}
                  className="border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 justify-center"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
              <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400 dark:text-slate-500">
                <AlertCircle className="w-4 h-4" />
                <span>This run will consume compute credits from your account.</span>
              </div>
            </div>
          ) : (
            <>
              {/* Status Card */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${spider.iconBg || 'bg-slate-50 dark:bg-slate-800'} border border-slate-100 dark:border-slate-700 flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${spider.iconColor || 'text-slate-800 dark:text-slate-200'}`} />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{spider.title}</h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{spider.author}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 mb-1">Status</p>
                      <div className="flex items-center gap-2">
                        {status === 'starting' && <><Loader2 className="w-4 h-4 animate-spin text-indigo-600 dark:text-indigo-400" /><span className="font-semibold text-slate-800 dark:text-slate-200">Starting...</span></>}
                        {status === 'running' && <><Loader2 className="w-4 h-4 animate-spin text-indigo-600 dark:text-indigo-400" /><span className="font-semibold text-slate-800 dark:text-slate-200">Running</span></>}
                        {status === 'completed' && <><CheckCircle2 className="w-4 h-4 text-emerald-500" /><span className="font-semibold text-slate-800 dark:text-slate-200">Succeeded</span></>}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-semibold text-slate-800 dark:text-slate-100">{progress}%</span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div 
                      className="h-full transition-all duration-500 bg-indigo-600"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Terminal / Logs */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col h-[500px]">
                <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                  <Terminal className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Execution Logs</span>
                </div>
                <div className="p-4 overflow-y-auto flex-grow font-mono text-sm space-y-2 bg-slate-800 dark:bg-slate-950 rounded-b-2xl">
                  {logs.map((log, i) => (
                    <div key={i} className={`${log.includes('[WARN]') ? 'text-yellow-400' : log.includes('[SUCCESS]') ? 'text-emerald-400' : 'text-slate-300 dark:text-slate-400'}`}>
                      <span className="text-slate-500 dark:text-slate-600 mr-3 select-none">{new Date().toISOString().split('T')[1].substring(0, 8)}</span>
                      {log}
                    </div>
                  ))}
                  {status !== 'completed' && (
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-600 mt-2">
                      <span className="animate-pulse">_</span>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Sidebar: Results & Actions */}
        <div className="hidden lg:block w-[300px] flex-shrink-0 space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-4 sticky top-20">
            <h2 className="text-base font-semibold mb-4 text-slate-800 dark:text-slate-100">Run Results</h2>
            
            {status === 'completed' ? (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center">
                  <div className="text-3xl font-semibold text-slate-800 dark:text-slate-100">1,248</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Items extracted</div>
                </div>
                
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full font-semibold transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Download JSON
                </button>
                <button className="w-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full font-semibold transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Download CSV
                </button>
                
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button 
                    onClick={() => {
                      setHasStarted(false);
                      setLogs([]);
                      setProgress(0);
                      setStatus('idle');
                    }}
                    className="w-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 text-slate-500 dark:text-slate-400 px-4 py-2 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" /> Run Again
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500 dark:text-slate-400">
                <Loader2 className={`w-8 h-8 ${hasStarted ? 'animate-spin' : ''} mx-auto mb-3 text-indigo-600 dark:text-indigo-400`} />
                <p className="text-sm font-semibold">{hasStarted ? 'Waiting for results...' : 'Start run to see results'}</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
