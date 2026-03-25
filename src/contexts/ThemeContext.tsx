import React, { createContext, useContext, useEffect, useState } from 'react';

export type Mode = 'light' | 'dark' | 'sepia' | 'ocean' | 'forest';

interface ThemeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  cycleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('scrapersai_mode') as Mode;
      if (savedMode) return savedMode;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all possible mode classes
    const modes: Mode[] = ['light', 'dark', 'sepia', 'ocean', 'forest'];
    modes.forEach(m => root.classList.remove(m));
    
    // Add current mode class
    root.classList.add(mode);
    
    // Set color-scheme for system UI elements
    root.style.colorScheme = (mode === 'dark' || mode === 'ocean' || mode === 'forest') ? 'dark' : 'light';
    
    localStorage.setItem('scrapersai_mode', mode);
  }, [mode]);

  const cycleMode = () => {
    const modes: Mode[] = ['light', 'dark', 'sepia', 'ocean', 'forest'];
    const currentIndex = modes.indexOf(mode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setMode(modes[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode, cycleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
