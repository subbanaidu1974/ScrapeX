import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Star, Bell, LogOut, Check, Menu, Sun, Moon, Coffee, Waves, TreePine, Palette } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useSidebar } from '../contexts/SidebarContext';
import { useTheme, Mode } from '../contexts/ThemeContext';
import AuthModal from './AuthModal';

const MENU_ITEMS = {
  Product: ['ScrapeX Store', 'Integrations', 'Proxy', 'MCP', 'Crawlee'],
  Developers: ['Documentation', 'Code templates', 'API reference', 'Get paid on ScrapeX'],
  Consulting: ['Professional Services', 'ScrapeX Partners'],
  Support: ['Help & Support', 'Submit your ideas', 'Forum'],
  Spotlight: ['APIs', 'What is web scraping?', 'Best web scraping tools', 'Python web scraping libraries', 'Scrapers'],
  Company: ['About ScrapeX', 'Contact us', 'Events', 'Blog', 'Become an affiliate', 'Customer stories', 'Changelog', 'Jobs', 'Brand', 'Impressum']
};

const MOCK_NOTIFICATIONS = [
  { id: 1, title: 'Scrape finished', message: 'Your Amazon spider completed successfully.', time: '2m ago', unread: true },
  { id: 2, title: 'Billing update', message: 'Your invoice for March is ready.', time: '1h ago', unread: false },
  { id: 3, title: 'New feature', message: 'Check out the new AI extraction tool.', time: '2d ago', unread: false },
];

export default function Header() {
  const { user, logout } = useAuth();
  const { toggle } = useSidebar();
  const { mode, setMode, cycleMode } = useTheme();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showModeSelector, setShowModeSelector] = useState(false);
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup'>('login');
  const notificationsRef = useRef<HTMLDivElement>(null);
  const modeSelectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (modeSelectorRef.current && !modeSelectorRef.current.contains(event.target as Node)) {
        setShowModeSelector(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const unreadCount = notifications.filter(n => n.unread).length;

  const modes: { id: Mode; name: string; icon: any; color: string }[] = [
    { id: 'light', name: 'Light', icon: Sun, color: 'bg-white text-slate-600 border-slate-200' },
    { id: 'dark', name: 'Dark', icon: Moon, color: 'bg-slate-900 text-slate-400 border-slate-800' },
    { id: 'sepia', name: 'Sepia', icon: Coffee, color: 'bg-[#fdf6e3] text-[#586e75] border-[#d5d0bc]' },
    { id: 'ocean', name: 'Ocean', icon: Waves, color: 'bg-[#0c4a6e] text-[#f0f9ff] border-[#0369a1]' },
    { id: 'forest', name: 'Forest', icon: TreePine, color: 'bg-[#064e3b] text-[#ecfdf5] border-[#047857]' },
  ];

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const CurrentIcon = modes.find(m => m.id === mode)?.icon || Sun;

  const PRODUCT_LINKS: Record<string, string> = {
    'ScrapeX Store': '/store',
    'Integrations': '/integrations',
    'Proxy': '/proxy',
    'MCP': '/mcp',
    'Crawlee': '/crawlee'
  };

  const DEVELOPER_LINKS: Record<string, string> = {
    'Documentation': '/documentation',
    'Code templates': '/code-templates',
    'API reference': '/api-reference',
    'Get paid on ScrapeX': '/get-paid'
  };

  const SUPPORT_LINKS: Record<string, string> = {
    'Help & Support': '/help-support',
    'Submit your ideas': '/submit-ideas',
    'Forum': '/forum'
  };

  const CONSULTING_LINKS: Record<string, string> = {
    'Professional Services': '/professional-services',
    'ScrapeX Partners': '/scrapex-partners'
  };

  const COMPANY_LINKS: Record<string, string> = {
    'About ScrapeX': '/about',
    'Contact us': '/contact',
    'Events': '/events',
    'Blog': '/blog',
    'Become an affiliate': '/affiliate',
    'Customer stories': '/customer-stories',
    'Changelog': '/changelog',
    'Jobs': '/jobs',
    "We're hiring!": '/jobs',
    'Brand': '/brand',
    'Impressum': '/impressum'
  };

  const SPOTLIGHT_LINKS: Record<string, string> = {
    'APIs': '/spotlight-apis',
    'What is web scraping?': '/what-is-web-scraping',
    'Best web scraping tools': '/best-web-scraping-tools',
    'Python web scraping libraries': '/python-web-scraping-libraries',
    'Scrapers': '/spotlight-scrapers'
  };

  return (
    <header className="bg-bg-card border-b border-border-color h-16 flex items-center justify-between px-6 sticky top-0 z-50 transition-colors duration-300">
      <div className="flex items-center gap-4 lg:gap-8">
        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggle}
          className="lg:hidden p-2 -ml-2 text-text-muted hover:bg-bg-app rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mr-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <Star className="w-5 h-5 fill-current" />
          </div>
          <span className="text-xl font-bold text-text-main">ScrapeX</span>
        </Link>
        
        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {Object.entries(MENU_ITEMS).map(([title, items]) => (
            <div 
              key={title} 
              className="relative group"
              onMouseEnter={() => setActiveMenu(title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-text-main transition-colors py-2">
                {title} 
                <ChevronDown className={`w-4 h-4 text-text-muted transition-transform duration-200 ${activeMenu === title ? 'rotate-180' : ''}`} />
              </button>
              
              {activeMenu === title && (
                <div className="absolute top-full left-0 w-56 bg-bg-card rounded-xl shadow-xl border border-border-color py-2 z-50 animate-fade-in-up">
                  {items.map(item => (
                    <Link 
                      key={item} 
                      to={
                        title === 'Product' ? (PRODUCT_LINKS[item] || '/') : 
                        title === 'Developers' ? (DEVELOPER_LINKS[item] || '/') : 
                        title === 'Support' ? (SUPPORT_LINKS[item] || '/') :
                        title === 'Company' ? (COMPANY_LINKS[item] || '/') :
                        title === 'Spotlight' ? (SPOTLIGHT_LINKS[item] || '/') :
                        title === 'Consulting' ? (CONSULTING_LINKS[item] || '/') :
                        '/'
                      } 
                      className="block px-4 py-2 text-sm text-text-muted hover:text-text-main hover:bg-bg-app transition-colors"
                      onClick={() => setActiveMenu(null)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-5">
        {/* Mode Selector */}
        <div className="relative" ref={modeSelectorRef}>
          <button
            onClick={() => setShowModeSelector(!showModeSelector)}
            className="w-9 h-9 rounded-full bg-bg-app flex items-center justify-center text-text-muted hover:text-primary transition-colors border border-border-color"
            title="Change theme mode"
          >
            <CurrentIcon className="w-4 h-4" />
          </button>

          {showModeSelector && (
            <div className="absolute right-0 mt-2 w-48 bg-bg-card rounded-2xl shadow-xl border border-border-color p-2 z-50 animate-fade-in-up">
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2 px-2">Theme Modes</p>
              <div className="flex flex-col gap-1">
                {modes.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setMode(m.id);
                      setShowModeSelector(false);
                    }}
                    className={`flex items-center gap-3 w-full px-3 py-2 rounded-xl transition-all ${mode === m.id ? 'bg-primary/10 text-primary' : 'text-text-muted hover:bg-bg-app hover:text-text-main'}`}
                  >
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center border ${m.color}`}>
                      <m.icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-medium">{m.name}</span>
                    {mode === m.id && <Check className="w-3.5 h-3.5 ml-auto" />}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {user ? (
          <div className="flex items-center gap-4">
            <div className="relative" ref={notificationsRef}>
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="w-9 h-9 rounded-full bg-bg-app flex items-center justify-center text-text-muted hover:text-primary transition-colors relative border border-border-color"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border-2 border-bg-card"></span>
                )}
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-bg-card rounded-2xl shadow-xl border border-border-color py-2 z-50 animate-fade-in-up">
                  <div className="px-4 py-3 border-b border-border-color flex justify-between items-center">
                    <h3 className="font-semibold text-text-main">Notifications</h3>
                    {unreadCount > 0 && (
                      <button 
                        onClick={markAllAsRead}
                        className="text-xs font-medium text-primary hover:opacity-80 flex items-center gap-1"
                      >
                        <Check className="w-3 h-3" /> Mark all read
                      </button>
                    )}
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map(n => (
                        <div key={n.id} className={`px-4 py-3 hover:bg-bg-app cursor-pointer transition-colors ${n.unread ? 'bg-primary/5' : ''}`}>
                          <div className="flex justify-between items-start mb-1">
                            <p className={`text-sm ${n.unread ? 'font-semibold text-text-main' : 'font-medium text-text-muted'}`}>
                              {n.title}
                            </p>
                            <span className="text-[10px] text-text-muted whitespace-nowrap ml-2">{n.time}</span>
                          </div>
                          <p className="text-xs text-text-muted line-clamp-2">{n.message}</p>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-8 text-center text-text-muted text-sm">
                        No notifications yet
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-border-color">
              <button 
                onClick={() => navigate('/profile')}
                className="w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm flex items-center justify-center hover:opacity-80 transition-opacity overflow-hidden"
                title="Profile"
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  (user.displayName || user.email || 'U').charAt(0).toUpperCase()
                )}
              </button>
              <button 
                onClick={logout} 
                className="w-8 h-8 flex items-center justify-center rounded-full text-text-muted hover:text-red-600 hover:bg-red-50 transition-colors"
                title="Log out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <>
            <button onClick={() => handleAuthClick('login')} className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">
              Log in
            </button>
            <button onClick={() => handleAuthClick('signup')} className="bg-primary hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-primary/20">
              Get started
            </button>
          </>
        )}
      </div>
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialMode={authModalMode} 
      />
    </header>
  );
}
