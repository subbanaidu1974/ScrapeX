import React from 'react';
import { Code, Globe, Zap, Shield, Layout, Terminal, ArrowRight, ExternalLink } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const CRAWLEE_FEATURES = [
  { title: 'Unified Interface', description: 'Write your scraper once and switch between Playwright, Puppeteer, or Cheerio with a single line of code.', icon: Code, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { title: 'Anti-Bot Protection', description: 'Built-in support for fingerprinting, proxy rotation, and captcha solving to stay undetected.', icon: Shield, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { title: 'Scalable Architecture', description: 'Efficiently manage thousands of requests with automatic retries and concurrency control.', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { title: 'Headless Browsing', description: 'Full support for modern web browsers to scrape dynamic, JavaScript-heavy websites.', icon: Globe, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
];

export default function Crawlee() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="w-16 h-16 bg-[#FF9000]/10 rounded-3xl flex items-center justify-center mb-6 text-[#FF9000] shadow-lg shadow-[#FF9000]/10">
                <Layout className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold text-text-main">Crawlee Integration</h1>
              <p className="text-text-muted mt-2 max-w-2xl">
                The most powerful web scraping and browser automation library for Node.js. ScrapeX is built on top of Crawlee, giving you the best-in-class scraping experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {CRAWLEE_FEATURES.map((feature) => (
                <div key={feature.title} className="bg-bg-card border border-border-color rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                  <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-text-main mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-text-muted leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-bg-card border border-border-color rounded-3xl p-8 mb-12">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Terminal className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-bold text-text-main">Crawlee in Action</h2>
                </div>
                <a href="https://crawlee.dev" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                  Visit crawlee.dev <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="bg-bg-app rounded-2xl p-6 font-mono text-sm text-text-main border border-border-color overflow-x-auto">
                <p className="text-text-muted mb-2">import &#123; PlaywrightCrawler &#125; from 'crawlee';</p>
                <p className="mb-4">const crawler = new PlaywrightCrawler(&#123;</p>
                <p className="pl-4 mb-2">async requestHandler(&#123; page, request &#125;) &#123;</p>
                <p className="pl-8 mb-2">const title = await page.title();</p>
                <p className="pl-8 mb-2">console.log(`Title of $&#123;request.url&#125; is $&#123;title&#125;`);</p>
                <p className="pl-4 mb-2">&#125;,</p>
                <p className="mb-4">&#125;);</p>
                <p>await crawler.run(['https://crawlee.dev']);</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
