import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Play, Code, CheckCircle2, Clock, Shield, BookOpen, Heart, Twitter, Linkedin, Copy, Check, Share2, MessageSquare, ThumbsUp, MoreHorizontal, Bookmark, Loader2, Eye, EyeOff } from 'lucide-react';
import { SPIDERS } from '../data';
import { trackEvent } from '../utils/analytics';
import { toast } from 'sonner';

import { useAuth } from '../contexts/AuthContext';

export default function SpiderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, updateApiKey } = useAuth();
  const [spider, setSpider] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [customReviews, setCustomReviews] = useState<any[]>([]);
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState('');
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeSnippetTab, setActiveSnippetTab] = useState('nodejs');
  const [isCopied, setIsCopied] = useState(false);
  const [apiKey, setApiKey] = useState(user?.apiKey || '');
  const [apiKeyError, setApiKeyError] = useState(false);
  const [isSavingKey, setIsSavingKey] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);

  useEffect(() => {
    if (user?.apiKey) {
      setApiKey(user.apiKey);
    }
  }, [user?.apiKey]);

  useEffect(() => {
    // Load custom reviews from localStorage
    if (id) {
      const savedReviews = localStorage.getItem(`scrapersai_reviews_${id}`);
      if (savedReviews) {
        setCustomReviews(JSON.parse(savedReviews));
      }
      
      const savedFavorite = localStorage.getItem(`scrapersai_favorite_${id}`);
      if (savedFavorite === 'true') {
        setIsFavorite(true);
      }
    }

    // Simulate API fetch
    setLoading(true);
    const timer = setTimeout(() => {
      let found = SPIDERS.find(a => a.id === id);
      
      // Check custom spiders if not found in default SPIDERS
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
      setLoading(false);
      
      if (found) {
        trackEvent('spider_viewed', { spiderId: found.id, spiderTitle: found.title });
      }
    }, 400); // 400ms mock delay
    
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
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
          <div className="w-full max-w-[780px] animate-pulse">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 mb-4 h-64"></div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 h-96"></div>
          </div>
          <div className="hidden lg:block w-[300px] flex-shrink-0 animate-pulse">
             <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 h-64"></div>
          </div>
        </div>
      </main>
    );
  }

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
        <h2 className="text-2xl font-semibold mb-2">Spider not found</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-6">The scraper you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">
          Back to feed
        </Link>
      </div>
    );
  }

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewComment.trim() || !id) return;

    setIsSubmittingReview(true);
    
    // Simulate network request
    setTimeout(() => {
      const newReview = {
        id: Date.now(),
        user: 'You',
        rating: newReviewRating,
        comment: newReviewComment.trim()
      };

      const updatedReviews = [newReview, ...customReviews];
      setCustomReviews(updatedReviews);
      localStorage.setItem(`scrapersai_reviews_${id}`, JSON.stringify(updatedReviews));
      
      setNewReviewComment('');
      setNewReviewRating(5);
      setIsSubmittingReview(false);
    }, 500);
  };

  const toggleFavorite = () => {
    const newValue = !isFavorite;
    setIsFavorite(newValue);
    if (id) {
      localStorage.setItem(`scrapersai_favorite_${id}`, String(newValue));
    }
  };

  const handleRunScraper = async (e: React.MouseEvent) => {
    if (!apiKey.trim()) {
      e.preventDefault();
      setApiKeyError(true);
      toast.error('API Key Required', {
        description: 'Please enter your API key to run this scraper.',
      });
      
      // Focus the main input if it exists
      const mainInput = document.getElementById('main-api-key-input');
      if (mainInput) {
        mainInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        mainInput.focus();
      } else {
        // Fallback to sidebar input
        const sidebarElement = document.getElementById('api-key-input');
        if (sidebarElement) {
          sidebarElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          sidebarElement.focus();
        }
      }
      return;
    }

    trackEvent('run_scraper_clicked', { spiderId: spider.id, spiderTitle: spider.title });
    navigate(`/run/${spider.id}`, { state: { apiKey } });
  };

  const shareUrl = window.location.href;
  const shareTitle = `Check out ${spider.title} on ScrapersAI!`;

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank', 'noopener,noreferrer');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank', 'noopener,noreferrer');
  };

  const snippets = {
    nodejs: `import { ScrapersAI } from 'scrapersai';\n\nconst client = new ScrapersAI('YOUR_API_TOKEN');\n\n// Run the spider and wait for it to finish\nconst run = await client.spider('${spider?.id || 'spider-id'}').call({\n  url: 'https://example.com'\n});\n\n// Fetch and print spider results\nconst { items } = await client.dataset(run.defaultDatasetId).listItems();\nconsole.log(items);`,
    python: `from scrapersai import ScrapersAI\n\nclient = ScrapersAI('YOUR_API_TOKEN')\n\n# Run the spider and wait for it to finish\nrun = client.spider('${spider?.id || 'spider-id'}').call(\n    run_input={'url': 'https://example.com'}\n)\n\n# Fetch and print spider results\nfor item in client.dataset(run['defaultDatasetId']).iterate_items():\n    print(item)`,
    curl: `curl -X POST https://api.scrapersai.com/v2/acts/${spider?.id || 'spider-id'}/runs \\\n  -H 'Authorization: Bearer YOUR_API_TOKEN' \\\n  -H 'Content-Type: application/json' \\\n  -d '{"url": "https://example.com"}'`
  };

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(snippets[activeSnippetTab as keyof typeof snippets]);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleClone = () => {
    navigate('/build', { state: { clonedSpider: spider } });
  };

  const Icon = spider.icon;
  const allReviews = [...customReviews, ...(spider.reviews || [])];

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
          
          {/* Profile Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden relative">
            {/* Cover Image */}
            <div className="h-32 bg-slate-100 dark:bg-slate-800 relative">
               <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-transparent"></div>
            </div>
            
            {/* Profile Info */}
            <div className="px-6 pb-6 relative">
              <div className="flex justify-between items-start">
                <div className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-900 bg-slate-50 dark:bg-slate-800 flex items-center justify-center -mt-16 relative z-10 shadow-sm">
                  <Icon className="w-16 h-16 text-slate-800 dark:text-slate-200" />
                </div>
                <div className="mt-4 flex gap-2">
                  <button 
                    onClick={toggleFavorite}
                    className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                  >
                    <Bookmark className={`w-5 h-5 ${isFavorite ? 'fill-current text-slate-800 dark:text-slate-200' : ''}`} />
                  </button>
                  <button 
                    onClick={shareOnLinkedIn}
                    className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <h1 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">{spider.title}</h1>
                <p className="text-lg text-slate-800 dark:text-slate-200 mt-1">{spider.author}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {spider.category} • {spider.runs} runs • ⭐ {spider.rating}
                </p>
                <div className="flex items-center gap-2 mt-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Verified Scraper</span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="max-w-md">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">API Key</label>
                    {user && apiKey && apiKey !== user.apiKey && (
                      <button 
                        onClick={async () => {
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
                        }}
                        disabled={isSavingKey}
                        className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                      >
                        {isSavingKey ? <Loader2 className="w-3 h-3 animate-spin" /> : <CheckCircle2 className="w-3 h-3" />}
                        Save to profile
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <input 
                      id="main-api-key-input"
                      type={showApiKey ? "text" : "password"}
                      value={apiKey}
                      onChange={(e) => {
                        setApiKey(e.target.value);
                        setApiKeyError(false);
                      }}
                      placeholder="Enter your API key to run this scraper"
                      className={`w-full bg-slate-50 dark:bg-slate-800 border ${apiKeyError ? 'border-red-500 animate-shake' : 'border-slate-200 dark:border-slate-700'} rounded-xl px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                    >
                      {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    {apiKeyError && <p className="text-red-500 text-[10px] mt-1 font-bold">API Key is required to run the scraper</p>}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={handleRunScraper}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-1.5 rounded-full font-semibold transition-colors flex items-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-current" /> Run Scraper
                  </button>
                  <button 
                    onClick={handleClone}
                    className="border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 px-5 py-1.5 rounded-full font-semibold transition-colors flex items-center gap-2"
                  >
                    <Copy className="w-4 h-4" /> Clone
                  </button>
                  <button className="border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 text-slate-500 dark:text-slate-400 px-5 py-1.5 rounded-full font-semibold transition-colors flex items-center gap-2">
                    <MoreHorizontal className="w-4 h-4" /> More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">About</h2>
            <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
              {spider.description && spider.description.length > 300 && !isDescriptionExpanded 
                ? `${spider.description.substring(0, 300)}...` 
                : spider.description}
            </div>
            {spider.description && spider.description.length > 300 && (
              <button
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="mt-2 text-indigo-600 dark:text-indigo-400 hover:underline font-semibold text-sm focus:outline-none"
              >
                {isDescriptionExpanded ? 'see less' : '...see more'}
              </button>
            )}

            {/* Social Media Links */}
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Follow the creator:</span>
              <a 
                href={`https://twitter.com/${spider.author.split('/')[0]}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href={`https://linkedin.com/company/${spider.author.split('/')[0]}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Code Snippets */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Integration</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Use this scraper in your application via API.</p>
            
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <div className="flex gap-4">
                  <button 
                    onClick={() => setActiveSnippetTab('nodejs')}
                    className={`text-sm font-semibold pb-2 -mb-2 border-b-2 transition-colors ${activeSnippetTab === 'nodejs' ? 'border-indigo-600 text-slate-800 dark:text-slate-100' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
                  >
                    Node.js
                  </button>
                  <button 
                    onClick={() => setActiveSnippetTab('python')}
                    className={`text-sm font-semibold pb-2 -mb-2 border-b-2 transition-colors ${activeSnippetTab === 'python' ? 'border-indigo-600 text-slate-800 dark:text-slate-100' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
                  >
                    Python
                  </button>
                  <button 
                    onClick={() => setActiveSnippetTab('curl')}
                    className={`text-sm font-semibold pb-2 -mb-2 border-b-2 transition-colors ${activeSnippetTab === 'curl' ? 'border-indigo-600 text-slate-800 dark:text-slate-100' : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
                  >
                    cURL
                  </button>
                </div>
                <button 
                  onClick={handleCopySnippet}
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                  title="Copy code"
                >
                  {isCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="p-4 bg-slate-800 dark:bg-slate-950 overflow-x-auto">
                <pre className="text-sm font-mono text-slate-300 dark:text-slate-400">
                  <code>{snippets[activeSnippetTab as keyof typeof snippets]}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-6">Recommendations</h2>
            
            {/* Review Form */}
            <form onSubmit={handleReviewSubmit} className="mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
              <div className="flex gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <span className="text-slate-800 dark:text-slate-200 font-semibold text-sm">You</span>
                </div>
                <div className="flex-1">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReviewRating(star)}
                        className="focus:outline-none"
                      >
                        <Star className={`w-5 h-5 ${star <= newReviewRating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300 dark:text-slate-700'}`} />
                      </button>
                    ))}
                  </div>
                  <textarea
                    value={newReviewComment}
                    onChange={(e) => setNewReviewComment(e.target.value)}
                    placeholder="Write a recommendation..."
                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-1 focus:ring-indigo-600 dark:focus:ring-indigo-400 resize-none text-sm text-slate-800 dark:text-slate-200"
                    rows={3}
                    required
                  />
                  <div className="mt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmittingReview || !newReviewComment.trim()}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-full font-semibold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmittingReview ? 'Posting...' : 'Post'}
                    </button>
                  </div>
                </div>
              </div>
            </form>

            <div className="space-y-6">
              {allReviews.length > 0 ? (
                allReviews.map((review: any) => (
                  <div key={review.id} className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <span className="text-slate-800 dark:text-slate-200 font-semibold text-sm">{review.user.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 border border-slate-100 dark:border-slate-800">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">{review.user}</span>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300 dark:text-slate-700'}`} />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-slate-800 dark:text-slate-300">{review.comment}</p>
                      </div>
                      <div className="flex gap-4 mt-1 ml-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        <button className="hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 px-2 py-1 rounded transition-colors flex items-center gap-1">
                          <ThumbsUp className="w-3 h-3" /> Like
                        </button>
                        <button className="hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 px-2 py-1 rounded transition-colors flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" /> Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500 dark:text-slate-400 text-center py-4">No recommendations yet. Be the first to recommend this scraper!</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-[300px] flex-shrink-0 space-y-4">
          {/* Action Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-4 sticky top-20">
            <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4">Pricing</h3>
            <div className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">{spider.pricing}</div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">API Key</label>
                {user && apiKey && apiKey !== user.apiKey && (
                  <button 
                    onClick={async () => {
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
                    }}
                    disabled={isSavingKey}
                    className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    Save
                  </button>
                )}
              </div>
              <div className="relative">
                <input 
                  id="api-key-input"
                  type={showApiKey ? "text" : "password"}
                  value={apiKey}
                  onChange={(e) => {
                    setApiKey(e.target.value);
                    setApiKeyError(false);
                  }}
                  placeholder="Enter your API key"
                  className={`w-full bg-slate-50 dark:bg-slate-800 border ${apiKeyError ? 'border-red-500 animate-shake' : 'border-slate-200 dark:border-slate-700'} rounded-xl px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all`}
                />
                <button
                  type="button"
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                >
                  {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {apiKeyError && <p className="text-red-500 text-[10px] mt-1 font-bold">Please enter your API key to run</p>}
            </div>

            <button 
              onClick={handleRunScraper}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full font-semibold transition-colors flex items-center justify-center gap-2 mb-3"
            >
              <Play className="w-4 h-4 fill-current" /> Run on ScrapersAI
            </button>
            
            <button onClick={handleClone} className="w-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-full font-semibold transition-colors flex items-center justify-center gap-2 mb-3">
              <Copy className="w-4 h-4" /> Clone Spider
            </button>
            
            {spider.documentationUrl && (
              <a 
                href={spider.documentationUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 text-slate-500 dark:text-slate-400 px-4 py-2 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" /> Documentation
              </a>
            )}

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <Shield className="w-4 h-4" />
                <span>Enterprise-grade security</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <Clock className="w-4 h-4" />
                <span>24/7 Support available</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
