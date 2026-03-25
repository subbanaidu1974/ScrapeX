import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SpiderDetails from './pages/SpiderDetails';
import RunExecution from './pages/RunExecution';
import UserProfile from './pages/UserProfile';
import BuildSpider from './pages/BuildSpider';
import Store from './pages/Store';
import Runs from './pages/Runs';
import Storage from './pages/Storage';
import Schedules from './pages/Schedules';
import Integrations from './pages/Integrations';
import Proxy from './pages/Proxy';
import MCP from './pages/MCP';
import Crawlee from './pages/Crawlee';
import Documentation from './pages/Documentation';
import CodeTemplates from './pages/CodeTemplates';
import ApiReference from './pages/ApiReference';
import GetPaid from './pages/GetPaid';
import HelpSupport from './pages/HelpSupport';
import SubmitIdeas from './pages/SubmitIdeas';
import Forum from './pages/Forum';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Affiliate from './pages/Affiliate';
import CustomerStories from './pages/CustomerStories';
import Changelog from './pages/Changelog';
import Jobs from './pages/Jobs';
import Brand from './pages/Brand';
import Impressum from './pages/Impressum';
import SpotlightAPIs from './pages/SpotlightAPIs';
import WhatIsWebScraping from './pages/WhatIsWebScraping';
import BestWebScrapingTools from './pages/BestWebScrapingTools';
import PythonWebScrapingLibraries from './pages/PythonWebScrapingLibraries';
import SpotlightScrapers from './pages/SpotlightScrapers';
import ProfessionalServices from './pages/ProfessionalServices';
import ScrapeXPartners from './pages/ScrapeXPartners';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import { SidebarProvider } from './contexts/SidebarContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Toaster } from 'sonner';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SidebarProvider>
          <Router>
            <div className="min-h-screen bg-bg-app text-text-main font-sans flex flex-col transition-colors duration-300">
              <Header />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/spider/:id" element={<SpiderDetails />} />
                  <Route path="/run/:id" element={<RunExecution />} />
                  <Route path="/profile" element={<UserProfile />} />
                  <Route path="/build" element={<BuildSpider />} />
                  <Route path="/store" element={<Store />} />
                  <Route path="/runs" element={<Runs />} />
                  <Route path="/storage" element={<Storage />} />
                  <Route path="/schedules" element={<Schedules />} />
                  <Route path="/integrations" element={<Integrations />} />
                  <Route path="/proxy" element={<Proxy />} />
                  <Route path="/mcp" element={<MCP />} />
                  <Route path="/crawlee" element={<Crawlee />} />
                  <Route path="/documentation" element={<Documentation />} />
                  <Route path="/code-templates" element={<CodeTemplates />} />
                  <Route path="/api-reference" element={<ApiReference />} />
                  <Route path="/get-paid" element={<GetPaid />} />
                  <Route path="/help-support" element={<HelpSupport />} />
                  <Route path="/submit-ideas" element={<SubmitIdeas />} />
                  <Route path="/forum" element={<Forum />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/affiliate" element={<Affiliate />} />
                  <Route path="/customer-stories" element={<CustomerStories />} />
                  <Route path="/changelog" element={<Changelog />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/brand" element={<Brand />} />
                  <Route path="/impressum" element={<Impressum />} />
                  <Route path="/spotlight-apis" element={<SpotlightAPIs />} />
                  <Route path="/what-is-web-scraping" element={<WhatIsWebScraping />} />
                  <Route path="/best-web-scraping-tools" element={<BestWebScrapingTools />} />
                  <Route path="/python-web-scraping-libraries" element={<PythonWebScrapingLibraries />} />
                  <Route path="/spotlight-scrapers" element={<SpotlightScrapers />} />
                  <Route path="/professional-services" element={<ProfessionalServices />} />
                  <Route path="/scrapex-partners" element={<ScrapeXPartners />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/cookie-policy" element={<CookiePolicy />} />
                </Routes>
              </div>
              <Footer />
            </div>
            <Toaster position="top-center" richColors />
          </Router>
        </SidebarProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
