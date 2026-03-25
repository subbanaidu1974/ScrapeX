import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-app border-t border-border-color py-16 px-8 mt-12 w-full transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* Product */}
        <div>
          <h3 className="font-semibold text-text-main mb-4">Product</h3>
          <ul className="space-y-3">
            <li><Link to="/store" className="text-sm text-text-muted hover:text-text-main">ScrapeX Store</Link></li>
            <li><Link to="/integrations" className="text-sm text-text-muted hover:text-text-main">Integrations</Link></li>
            <li><Link to="/proxy" className="text-sm text-text-muted hover:text-text-main">Proxy</Link></li>
            <li><Link to="/mcp" className="text-sm text-text-muted hover:text-text-main">MCP</Link></li>
            <li><Link to="/crawlee" className="text-sm text-text-muted hover:text-text-main flex items-center gap-1">Crawlee <ArrowUpRight className="w-3 h-3" /></Link></li>
          </ul>
        </div>

        {/* Developers */}
        <div>
          <h3 className="font-semibold text-text-main mb-4">Developers</h3>
          <ul className="space-y-3">
            <li><Link to="/documentation" className="text-sm text-text-muted hover:text-text-main">Documentation</Link></li>
            <li><Link to="/code-templates" className="text-sm text-text-muted hover:text-text-main">Code templates</Link></li>
            <li><Link to="/api-reference" className="text-sm text-text-muted hover:text-text-main">API reference</Link></li>
            <li><Link to="/get-paid" className="text-sm text-text-muted hover:text-text-main">Get paid on ScrapeX</Link></li>
          </ul>
        </div>

        {/* Consulting */}
        <div>
          <h3 className="font-semibold text-text-main mb-4">Consulting</h3>
          <ul className="space-y-3">
            <li><Link to="/professional-services" className="text-sm text-text-muted hover:text-text-main">Professional Services</Link></li>
            <li><Link to="/scrapex-partners" className="text-sm text-text-muted hover:text-text-main">ScrapeX Partners</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-text-main mb-4">Support</h3>
          <ul className="space-y-3">
            <li><Link to="/help-support" className="text-sm text-text-muted hover:text-text-main">Help & Support</Link></li>
            <li><Link to="/submit-ideas" className="text-sm text-text-muted hover:text-text-main">Submit your ideas</Link></li>
            <li><Link to="/forum" className="text-sm text-text-muted hover:text-text-main">Forum</Link></li>
          </ul>
        </div>

        {/* Spotlight */}
        <div>
          <h3 className="font-semibold text-text-main mb-4">Spotlight</h3>
          <ul className="space-y-3">
            <li><Link to="/spotlight-apis" className="text-sm text-text-muted hover:text-text-main">APIs</Link></li>
            <li><Link to="/what-is-web-scraping" className="text-sm text-text-muted hover:text-text-main">What is web scraping?</Link></li>
            <li><Link to="/best-web-scraping-tools" className="text-sm text-text-muted hover:text-text-main">Best web scraping tools</Link></li>
            <li><Link to="/python-web-scraping-libraries" className="text-sm text-text-muted hover:text-text-main">Python web scraping libraries</Link></li>
            <li><Link to="/spotlight-scrapers" className="text-sm text-text-muted hover:text-text-main">Scrapers</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-text-main mb-4">Company</h3>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-sm text-text-muted hover:text-text-main">About ScrapeX</Link></li>
            <li><Link to="/contact" className="text-sm text-text-muted hover:text-text-main">Contact us</Link></li>
            <li><Link to="/events" className="text-sm text-text-muted hover:text-text-main">Events</Link></li>
            <li><Link to="/blog" className="text-sm text-text-muted hover:text-text-main">Blog</Link></li>
            <li><Link to="/affiliate" className="text-sm text-text-muted hover:text-text-main">Become an affiliate</Link></li>
            <li><Link to="/customer-stories" className="text-sm text-text-muted hover:text-text-main">Customer stories</Link></li>
            <li><Link to="/changelog" className="text-sm text-text-muted hover:text-text-main">Changelog</Link></li>
            <li>
              <Link to="/jobs" className="text-sm text-text-muted hover:text-text-main flex items-center gap-2">
                Jobs <span className="bg-text-main text-bg-app text-[10px] px-1.5 py-0.5 rounded font-medium">We're hiring!</span>
              </Link>
            </li>
            <li><Link to="/brand" className="text-sm text-text-muted hover:text-text-main">Brand</Link></li>
            <li><Link to="/impressum" className="text-sm text-text-muted hover:text-text-main">Impressum</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border-color flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <span className="text-sm text-text-muted">© 2026 ScrapeX s.r.o.</span>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-sm text-text-muted hover:text-text-main">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-sm text-text-muted hover:text-text-main">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-sm text-text-muted hover:text-text-main">Cookie Policy</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-text-muted hover:text-text-main transition-colors">Twitter</a>
          <a href="#" className="text-text-muted hover:text-text-main transition-colors">GitHub</a>
          <a href="#" className="text-text-muted hover:text-text-main transition-colors">LinkedIn</a>
          <a href="#" className="text-text-muted hover:text-text-main transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
}
