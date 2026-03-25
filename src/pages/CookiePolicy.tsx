import React from 'react';
import Sidebar from '../components/Sidebar';

export default function CookiePolicy() {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-text-main mb-8">Cookie Policy</h1>
            <div className="prose prose-invert max-w-none text-text-muted space-y-6">
              <p>Last updated: March 24, 2026</p>
              <section>
                <h2 className="text-xl font-bold text-text-main mb-4">1. What are cookies?</h2>
                <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-text-main mb-4">2. How we use cookies</h2>
                <p>We use cookies to understand how you use our website and to improve your experience.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-text-main mb-4">3. Types of cookies we use</h2>
                <p>We use both session cookies and persistent cookies on our website.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-text-main mb-4">4. Managing cookies</h2>
                <p>You can control and/or delete cookies as you wish. For details, see aboutcookies.org.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
