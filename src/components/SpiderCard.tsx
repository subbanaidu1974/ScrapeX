import React from 'react';
import { Star, Users, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SpiderCard({ spider }: any) {
  const navigate = useNavigate();
  
  // Extract author display name from path (e.g., "compass" from "compass/crawler-google-places")
  const authorPath = spider.author.split('/')[0];
  const authorDisplayName = authorPath.charAt(0).toUpperCase() + authorPath.slice(1);

  const handleRunClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/run/${spider.id}`);
  };

  return (
    <div 
      onClick={() => navigate(`/spider/${spider.id}`)}
      className="bg-bg-card rounded-xl border border-border-color p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full group"
    >
      {/* Header */}
      <div className="flex items-start gap-2.5">
        <div className={`w-9 h-9 rounded-lg ${spider.iconBg || 'bg-bg-app'} border border-border-color flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
          <spider.icon className={`w-4.5 h-4.5 ${spider.iconColor || 'text-text-muted'}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="text-[13px] font-bold text-text-main truncate group-hover:text-primary transition-colors" title={spider.title}>
                {spider.title}
              </h3>
              <p className="text-[10px] text-text-muted truncate mt-0.5 font-medium">
                {spider.author}
              </p>
            </div>
            <button 
              onClick={handleRunClick}
              className="flex-shrink-0 w-7 h-7 bg-primary/10 text-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
              title="Run Scraper"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-[11px] text-text-muted line-clamp-2 mt-2 leading-relaxed flex-1">
        {spider.description}
      </p>
      
      {/* Footer */}
      <div className="flex items-center justify-between flex-wrap gap-y-2 mt-3 pt-3 border-t border-border-color">
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="w-4 h-4 rounded-sm bg-bg-app flex items-center justify-center overflow-hidden border border-border-color flex-shrink-0">
             <img 
               src={`https://ui-avatars.com/api/?name=${authorPath}&background=random&size=32&bold=true`} 
               alt={authorPath} 
               className="w-full h-full object-cover" 
               referrerPolicy="no-referrer"
             />
          </div>
          <span className="text-[11px] font-bold text-text-main truncate">{authorDisplayName}</span>
        </div>
        
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="flex items-center gap-1 text-[11px] text-text-muted">
            <Star className="w-3 h-3 text-text-muted opacity-60" />
            <span className="font-semibold text-text-main">{spider.rating}</span>
            <span className="text-text-muted opacity-60">({spider.reviews?.length || 0})</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-text-muted">
            <Users className="w-3 h-3 text-text-muted opacity-60" />
            <span className="font-semibold text-text-main">{spider.runs}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
