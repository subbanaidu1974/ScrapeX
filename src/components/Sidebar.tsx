import React, { useState } from 'react';
import { 
  LayoutDashboard, BookOpen, Play, Database, Calendar, 
  Settings, LogOut, LogIn, Users, Plus, Star, X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useSidebar } from '../contexts/SidebarContext';

interface SidebarProps {
  showToast?: (message: string) => void;
}

export default function Sidebar({ showToast }: SidebarProps) {
  const location = useLocation();
  const { user, login, logout } = useAuth();
  const { isOpen, close } = useSidebar();
  const [following, setFollowing] = useState<string[]>([]);

  const handleAction = (message: string) => {
    if (showToast) showToast(message);
    else alert(message);
  };

  const toggleFollow = (name: string) => {
    if (!user) {
      handleAction('Please login to follow creators');
      return;
    }
    setFollowing(prev => {
      const isFollowing = prev.includes(name);
      handleAction(isFollowing ? `Unfollowed ${name}` : `Following ${name}`);
      return isFollowing ? prev.filter(f => f !== name) : [...prev, name];
    });
  };

  const isActive = (path: string) => location.pathname === path;

  const navItemClass = (path: string) => `
    flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors font-medium
    ${isActive(path) 
      ? 'bg-primary/10 text-primary font-semibold' 
      : 'text-text-muted hover:bg-bg-app hover:text-text-main'}
  `;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] lg:hidden"
          onClick={close}
        />
      )}

      <aside className={`
        fixed lg:relative top-0 left-0 h-full
        w-[280px] lg:w-[260px] bg-bg-card flex flex-col border-r border-border-color flex-shrink-0 py-6 px-6 overflow-y-auto 
        [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
        z-[70] lg:z-auto transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Mobile Close Button */}
        <button 
          onClick={close}
          className="lg:hidden absolute top-4 right-4 p-2 text-text-muted hover:text-text-main hover:bg-bg-app rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Navigation */}
        <div className="mb-8">
        <p className="text-xs font-semibold text-text-muted mb-4 tracking-wider">OVERVIEW</p>
        <nav className="space-y-1">
          <Link to="/" className={navItemClass('/')} onClick={close}>
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          <Link to="/store" className={navItemClass('/store')} onClick={close}>
            <BookOpen className="w-5 h-5" />
            Store
          </Link>
          <Link to="/runs" className={navItemClass('/runs')} onClick={close}>
            <Play className="w-5 h-5" />
            Runs
          </Link>
          <Link to="/storage" className={navItemClass('/storage')} onClick={close}>
            <Database className="w-5 h-5" />
            Storage
          </Link>
          <Link to="/schedules" className={navItemClass('/schedules')} onClick={close}>
            <Calendar className="w-5 h-5" />
            Schedules
          </Link>
        </nav>
      </div>

      {/* Team / Friends */}
      <div className="mb-8">
        <p className="text-xs font-semibold text-text-muted mb-4 tracking-wider">TEAM</p>
        <div className="space-y-3">
          {[
            { name: 'Bagas Mahpie', role: 'Developer', img: 'https://i.pravatar.cc/150?u=1' },
            { name: 'Sir Dandy', role: 'Analyst', img: 'https://i.pravatar.cc/150?u=2' },
            { name: 'Jhon Tosan', role: 'Admin', img: 'https://i.pravatar.cc/150?u=3' },
          ].map((teamMember, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 px-3 cursor-pointer hover:bg-bg-app p-2 rounded-xl transition-colors" 
              onClick={() => handleAction(`Viewing ${teamMember.name}'s profile`)}
            >
              <img src={teamMember.img} alt={teamMember.name} className="w-8 h-8 rounded-full bg-bg-app" />
              <div>
                <p className="text-sm font-semibold text-text-main">{teamMember.name}</p>
                <p className="text-xs text-text-muted">{teamMember.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="mt-auto">
        <p className="text-xs font-semibold text-text-muted mb-4 tracking-wider">SETTINGS</p>
        <nav className="space-y-1">
          <button onClick={() => handleAction('Settings page coming soon')} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-text-muted hover:bg-bg-app hover:text-text-main font-medium transition-colors">
            <Settings className="w-5 h-5" />
            Setting
          </button>
          {user ? (
            <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-500 hover:bg-red-50 font-medium transition-colors">
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          ) : (
            <button onClick={login} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-primary hover:bg-primary/10 font-medium transition-colors">
              <LogIn className="w-5 h-5" />
              Login
            </button>
          )}
        </nav>
      </div>
    </aside>
  </>
);
}
