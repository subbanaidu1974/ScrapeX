import React from 'react';
import Sidebar from '../components/Sidebar';

export default function PrivacyPolicy() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-text-main mb-8">Privacy Policy</h1>
            <div className="prose prose-invert max-w-none text-text-muted space-y-6">
              <p>Last updated: March 24, 2026</p>
              <section>
                <h2 className="text-xl font-bold text-text-main mb-4">1. Introduction</h2>
                <p>Welcome to ScrapeX. We respect your privacy and are committed to protecting your personal data.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-text-main mb-4">2. Data We Collect</h2>
                <p>We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-text-main mb-4">3. How We Use Your Data</h2>
                <p>We use the data we collect to provide, maintain, and improve our services, and to develop new ones.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-text-main mb-4">4. Data Sharing</h2>
                <p>We do not share your personal data with third parties except as described in this policy.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
