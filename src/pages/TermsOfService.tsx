import React from 'react';
import Sidebar from '../components/Sidebar';

export default function TermsOfService() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-text-main mb-8">Terms of Service</h1>
            <div className="prose prose-invert max-w-none text-text-muted space-y-6">
              <p>Last updated: March 24, 2026</p>
              <section>
                <h2 className="text-xl font-bold text-text-main mb-4">1. Acceptance of Terms</h2>
                <p>By accessing or using ScrapeX, you agree to be bound by these Terms of Service.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-text-main mb-4">2. Description of Service</h2>
                <p>ScrapeX provides a platform for web scraping and data extraction services.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-text-main mb-4">3. User Responsibilities</h2>
                <p>You are responsible for your use of the service and for any content you provide.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-text-main mb-4">4. Termination</h2>
                <p>We may terminate or suspend your access to our services at any time, without prior notice or liability.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
