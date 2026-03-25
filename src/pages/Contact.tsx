import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, X } from 'lucide-react';
import Sidebar from '../components/Sidebar';

export default function Contact() {
  const [toast, setToast] = useState<{ message: string, visible: boolean }>({ message: '', visible: false });

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 3000);
  };

  return (
    <div className="flex h-[calc(100vh-64px)] bg-bg-app overflow-hidden relative transition-colors duration-300">
      {/* Toast Notification */}
      {toast.visible && (
        <div className="absolute bottom-8 right-8 bg-bg-card text-text-main px-6 py-3 rounded-xl shadow-2xl flex items-center gap-3 z-50 animate-fade-in-up border border-border-color">
          <span className="text-sm font-semibold">{toast.message}</span>
          <button onClick={() => setToast({ message: '', visible: false })} className="text-text-muted hover:text-text-main">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <Sidebar showToast={showToast} />
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h1 className="text-3xl font-bold text-text-main mb-4">Contact Us</h1>
              <p className="text-text-muted mt-2 max-w-2xl">
                Have a question or need help? Our team is here to support you. Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 bg-bg-card border border-border-color rounded-3xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-text-main mb-6">Send us a message</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-text-muted mb-2 uppercase tracking-wider">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your name" 
                      className="w-full h-12 px-4 bg-bg-app rounded-xl border border-border-color focus:ring-2 focus:ring-primary outline-none text-sm text-text-main transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-muted mb-2 uppercase tracking-wider">Email</label>
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="w-full h-12 px-4 bg-bg-app rounded-xl border border-border-color focus:ring-2 focus:ring-primary outline-none text-sm text-text-main transition-colors"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-bold text-text-muted mb-2 uppercase tracking-wider">Subject</label>
                  <input 
                    type="text" 
                    placeholder="How can we help?" 
                    className="w-full h-12 px-4 bg-bg-app rounded-xl border border-border-color focus:ring-2 focus:ring-primary outline-none text-sm text-text-main transition-colors"
                  />
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-bold text-text-muted mb-2 uppercase tracking-wider">Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell us more about your inquiry..." 
                    className="w-full p-4 bg-bg-app rounded-xl border border-border-color focus:ring-2 focus:ring-primary outline-none text-sm text-text-main transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  onClick={() => showToast('Message sent successfully!')}
                  className="px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </div>

              <div className="space-y-6">
                <div className="bg-bg-card border border-border-color rounded-3xl p-8">
                  <h3 className="text-lg font-bold text-text-main mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-main">Email</p>
                        <p className="text-sm text-text-muted">support@scrapex.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-main">Phone</p>
                        <p className="text-sm text-text-muted">+1 (555) 000-0000</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-main">Office</p>
                        <p className="text-sm text-text-muted">123 Scraper Lane, San Francisco, CA 94103</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 text-center">
                  <MessageCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-text-main mb-2">Live Chat</h3>
                  <p className="text-sm text-text-muted mb-6">Need immediate help? Chat with our support team in real-time.</p>
                  <button className="w-full py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
                    Start Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
