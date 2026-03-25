import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Code, Save, Play, Settings, Database, Globe, LayoutTemplate, ChevronDown, Terminal, Loader2 } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const TEMPLATES = [
  {
    id: 'ecommerce',
    name: 'E-commerce Product Scraper',
    description: 'Extracts product details like title, price, and images from e-commerce product pages.',
    url: 'https://example-ecommerce.com/product/123',
    category: 'E-commerce',
    code: `// E-commerce Product Scraper\n\nasync function scrape(page) {\n  const product = await page.evaluate(() => {\n    return {\n      title: document.querySelector('h1')?.innerText,\n      price: document.querySelector('.price')?.innerText,\n      description: document.querySelector('.description')?.innerText,\n      images: Array.from(document.querySelectorAll('img.product-image')).map(img => img.src)\n    };\n  });\n  return product;\n}`,
    schema: `{\n  "type": "object",\n  "properties": {\n    "title": { "type": "string" },\n    "price": { "type": "string" },\n    "description": { "type": "string" },\n    "images": {\n      "type": "array",\n      "items": { "type": "string", "format": "uri" }\n    }\n  }\n}`
  },
  {
    id: 'social',
    name: 'Social Media Profile Scraper',
    description: 'Extracts user profile information including bio, follower count, and recent posts.',
    url: 'https://example-social.com/username',
    category: 'Social Media',
    code: `// Social Media Profile Scraper\n\nasync function scrape(page) {\n  const profile = await page.evaluate(() => {\n    return {\n      username: document.querySelector('.username')?.innerText,\n      bio: document.querySelector('.bio')?.innerText,\n      followers: parseInt(document.querySelector('.follower-count')?.innerText.replace(/,/g, '') || '0'),\n      following: parseInt(document.querySelector('.following-count')?.innerText.replace(/,/g, '') || '0')\n    };\n  });\n  return profile;\n}`,
    schema: `{\n  "type": "object",\n  "properties": {\n    "username": { "type": "string" },\n    "bio": { "type": "string" },\n    "followers": { "type": "number" },\n    "following": { "type": "number" }\n  }\n}`
  },
  {
    id: 'realestate',
    name: 'Real Estate Listing Scraper',
    description: 'Extracts property details such as price, address, bedrooms, and bathrooms.',
    url: 'https://example-realestate.com/property/456',
    category: 'Real Estate',
    code: `// Real Estate Listing Scraper\n\nasync function scrape(page) {\n  const listing = await page.evaluate(() => {\n    return {\n      price: document.querySelector('.property-price')?.innerText,\n      address: document.querySelector('.property-address')?.innerText,\n      beds: parseInt(document.querySelector('.beds-count')?.innerText || '0'),\n      baths: parseFloat(document.querySelector('.baths-count')?.innerText || '0'),\n      sqft: parseInt(document.querySelector('.sqft-count')?.innerText.replace(/,/g, '') || '0')\n    };\n  });\n  return listing;\n}`,
    schema: `{\n  "type": "object",\n  "properties": {\n    "price": { "type": "string" },\n    "address": { "type": "string" },\n    "beds": { "type": "number" },\n    "baths": { "type": "number" },\n    "sqft": { "type": "number" }\n  }\n}`
  }
];

export default function BuildSpider() {
  const { user, login } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const clonedSpider = location.state?.clonedSpider;

  const [activeTab, setActiveTab] = useState('config');
  const [formData, setFormData] = useState({
    name: clonedSpider ? `Copy of ${clonedSpider.title}` : '',
    description: clonedSpider?.description || '',
    url: clonedSpider?.url || '',
    category: clonedSpider?.category || 'E-commerce',
  });
  const [errors, setErrors] = useState({ name: '', url: '' });
  const [code, setCode] = useState(clonedSpider?.code || '// Write your scraping logic here\n\nasync function scrape(page) {\n  // Example: Extract all links\n  const links = await page.$$eval("a", els => els.map(el => el.href));\n  return { links };\n}');
  const [schema, setSchema] = useState(clonedSpider?.schema || '{\n  "type": "object",\n  "properties": {\n    "title": { "type": "string" },\n    "price": { "type": "number" }\n  }\n}');
  const [isTemplateDropdownOpen, setIsTemplateDropdownOpen] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsTemplateDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLoadTemplate = (template: typeof TEMPLATES[0]) => {
    setFormData({
      name: template.name,
      description: template.description,
      url: template.url,
      category: template.category
    });
    setCode(template.code);
    setSchema(template.schema);
    setErrors({ name: '', url: '' });
    setIsTemplateDropdownOpen(false);
  };

  const validateForm = () => {
    const newErrors = { name: '', url: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Spider name is required.';
      isValid = false;
    }

    if (!formData.url.trim()) {
      newErrors.url = 'Target URL is required.';
      isValid = false;
    } else {
      try {
        new URL(formData.url);
      } catch (_) {
        newErrors.url = 'Please enter a valid URL (e.g., https://example.com).';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleTestRun = () => {
    if (!user) {
      login();
      return;
    }

    if (!validateForm()) {
      setActiveTab('config');
      return;
    }
    
    setActiveTab('test');
    setIsTesting(true);
    setTestResult(null);

    // Simulate scraping process
    setTimeout(() => {
      setIsTesting(false);
      try {
        // Generate mock data based on schema if possible, or generic success
        const mockData = {
          status: "success",
          data: {
            message: "Test run completed successfully using sample data.",
            url_tested: formData.url,
            extracted_items: 42,
            timestamp: new Date().toISOString(),
            authorized_user: user.email
          }
        };
        setTestResult(JSON.stringify(mockData, null, 2));
      } catch (e) {
        setTestResult(JSON.stringify({ error: "Failed to execute test run." }, null, 2));
      }
    }, 2000);
  };

  const handleSave = () => {
    if (!user) {
      login();
      return;
    }
    
    if (!validateForm()) {
      setActiveTab('config');
      return;
    }
    
    // Save to localStorage
    const newSpider = {
      id: `custom-${Date.now()}`,
      title: formData.name || 'Untitled Spider',
      description: formData.description,
      url: formData.url,
      category: formData.category,
      code: code,
      schema: schema,
      createdAt: new Date().toISOString(),
      author: user.displayName || user.email || 'You',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      pricing: 'Custom',
      rating: 0,
      runs: '0'
    };

    const existingSpiders = JSON.parse(localStorage.getItem('scrapersai_custom_spiders') || '[]');
    localStorage.setItem('scrapersai_custom_spiders', JSON.stringify([newSpider, ...existingSpiders]));

    alert('Spider saved successfully!');
    navigate('/profile');
  };

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
      <div className="max-w-[1128px] mx-auto px-0 sm:px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-colors duration-300">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Build your own Spider</h1>
          </div>
          <div className="flex gap-2 items-center">
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsTemplateDropdownOpen(!isTemplateDropdownOpen)}
                className="px-4 py-1.5 rounded-full font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-2 text-sm"
              >
                <LayoutTemplate className="w-4 h-4" /> Templates <ChevronDown className="w-4 h-4" />
              </button>
              
              {isTemplateDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 z-50 overflow-hidden">
                  <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">Load Template</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Start with a pre-configured spider</p>
                  </div>
                  <div className="max-h-80 overflow-y-auto p-2">
                    {TEMPLATES.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => handleLoadTemplate(template)}
                        className="w-full text-left px-3 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                      >
                        <div className="font-semibold text-sm text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {template.name}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                          {template.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button onClick={handleTestRun} className="px-4 py-1.5 rounded-full font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-2 text-sm">
              <Play className="w-4 h-4" /> Test Run
            </button>
            <button onClick={handleSave} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-full font-semibold transition-colors flex items-center gap-2 text-sm">
              <Save className="w-4 h-4" /> Save Spider
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Tabs */}
          <div className="w-full lg:w-[225px] flex-shrink-0 space-y-2">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-2 transition-colors duration-300">
              <button 
                onClick={() => setActiveTab('config')}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-semibold flex items-center gap-3 transition-colors text-sm ${activeTab === 'config' ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
              >
                <Settings className="w-4 h-4" /> Configuration
              </button>
              <button 
                onClick={() => setActiveTab('code')}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-semibold flex items-center gap-3 transition-colors text-sm ${activeTab === 'code' ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
              >
                <Code className="w-4 h-4" /> Source Code
              </button>
              <button 
                onClick={() => setActiveTab('schema')}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-semibold flex items-center gap-3 transition-colors text-sm ${activeTab === 'schema' ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
              >
                <Database className="w-4 h-4" /> Output Schema
              </button>
              <button 
                onClick={() => setActiveTab('test')}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-semibold flex items-center gap-3 transition-colors text-sm ${activeTab === 'test' ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
              >
                <Terminal className="w-4 h-4" /> Test Results
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 min-h-[500px] overflow-hidden transition-colors duration-300">
            
            {activeTab === 'config' && (
              <div className="p-6 space-y-6">
                <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">Basic Configuration</h2>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">Spider Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={e => {
                      setFormData({...formData, name: e.target.value});
                      if (errors.name) setErrors({...errors, name: ''});
                    }}
                    placeholder="e.g., Amazon Product Scraper"
                    className={`w-full p-2.5 rounded-xl border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-white dark:bg-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5 font-semibold">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">Description</label>
                  <textarea 
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    placeholder="What does this spider do?"
                    rows={3}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all resize-none text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">Target URL</label>
                  <div className="relative">
                    <Globe className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${errors.url ? 'text-red-500' : 'text-slate-400 dark:text-slate-500'}`} />
                    <input 
                      type="url" 
                      value={formData.url}
                      onChange={e => {
                        setFormData({...formData, url: e.target.value});
                        if (errors.url) setErrors({...errors, url: ''});
                      }}
                      placeholder="https://example.com"
                      className={`w-full pl-9 p-2.5 rounded-xl border ${errors.url ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-white dark:bg-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500`}
                    />
                  </div>
                  {errors.url && <p className="text-red-500 text-xs mt-1.5 font-semibold">{errors.url}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-800 dark:text-slate-200">Category</label>
                  <select 
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value})}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all text-sm text-slate-800 dark:text-slate-200 appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(100,116,139,1)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: `right 1rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.2em 1.2em` }}
                  >
                    <option className="bg-white dark:bg-slate-800">E-commerce</option>
                    <option className="bg-white dark:bg-slate-800">Social Media</option>
                    <option className="bg-white dark:bg-slate-800">Real Estate</option>
                    <option className="bg-white dark:bg-slate-800">Jobs</option>
                    <option className="bg-white dark:bg-slate-800">News</option>
                    <option className="bg-white dark:bg-slate-800">Other</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === 'code' && (
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Source Code</h2>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800">JavaScript / Node.js</span>
                </div>
                <div className="flex-1 bg-slate-800 dark:bg-slate-950">
                  <Editor
                    height="100%"
                    defaultLanguage="javascript"
                    theme={theme === 'dark' ? 'vs-dark' : 'light'}
                    value={code}
                    onChange={(value) => setCode(value || '')}
                    options={{
                      minimap: { enabled: false },
                      fontSize: 14,
                      fontFamily: "'JetBrains Mono', monospace",
                      wordWrap: 'on',
                      scrollBeyondLastLine: false,
                      padding: { top: 16, bottom: 16 },
                      overviewRulerLanes: 0,
                      hideCursorInOverviewRuler: true,
                      scrollbar: { vertical: 'hidden', horizontal: 'hidden' },
                    }}
                  />
                </div>
              </div>
            )}

            {activeTab === 'schema' && (
              <div className="h-full flex flex-col">
                <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">Output Schema</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Define the JSON schema for your spider's output.</p>
                </div>
                <div className="flex-1 bg-slate-800 dark:bg-slate-950">
                  <Editor
                    height="100%"
                    defaultLanguage="json"
                    theme={theme === 'dark' ? 'vs-dark' : 'light'}
                    value={schema}
                    onChange={(value) => setSchema(value || '')}
                    options={{
                      minimap: { enabled: false },
                      fontSize: 14,
                      fontFamily: "'JetBrains Mono', monospace",
                      wordWrap: 'on',
                      scrollBeyondLastLine: false,
                      padding: { top: 16, bottom: 16 },
                      overviewRulerLanes: 0,
                      hideCursorInOverviewRuler: true,
                      scrollbar: { vertical: 'hidden', horizontal: 'hidden' },
                    }}
                  />
                </div>
              </div>
            )}

            {activeTab === 'test' && (
              <div className="h-full flex flex-col">
                <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">Test Results</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Run your spider with sample data to verify the output format.</p>
                </div>
                <div className="flex-1 bg-slate-800 dark:bg-slate-950 relative">
                  {isTesting ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800/80 dark:bg-slate-950/80 z-10">
                      <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mb-4" />
                      <p className="text-white font-semibold text-sm">Running spider on {formData.url || 'target URL'}...</p>
                      <p className="text-slate-400 text-xs mt-2">This usually takes a few seconds.</p>
                    </div>
                  ) : testResult ? (
                    <Editor
                      height="100%"
                      defaultLanguage="json"
                      theme={theme === 'dark' ? 'vs-dark' : 'light'}
                      value={testResult}
                      options={{
                        readOnly: true,
                        minimap: { enabled: false },
                        fontSize: 14,
                        fontFamily: "'JetBrains Mono', monospace",
                        wordWrap: 'on',
                        scrollBeyondLastLine: false,
                        padding: { top: 16, bottom: 16 },
                        overviewRulerLanes: 0,
                        hideCursorInOverviewRuler: true,
                        scrollbar: { vertical: 'hidden', horizontal: 'hidden' },
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                      <div className="w-12 h-12 rounded-full bg-slate-700 dark:bg-slate-800 flex items-center justify-center mb-4">
                        <Terminal className="w-6 h-6 text-slate-400 dark:text-slate-500" />
                      </div>
                      <p className="text-slate-400 dark:text-slate-500 text-sm">Click <strong className="text-white dark:text-slate-200 font-semibold">Test Run</strong> to execute your spider with sample data.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
