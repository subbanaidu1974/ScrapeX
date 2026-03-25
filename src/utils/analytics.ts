export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  const event = {
    eventName,
    properties: properties || {},
    timestamp: new Date().toISOString(),
  };
  
  // Log to console for development/debugging
  console.log('[Analytics Event]', event);
  
  // Store in localStorage to simulate a persistent analytics backend
  try {
    const existingEvents = JSON.parse(localStorage.getItem('scrapersai_analytics') || '[]');
    existingEvents.push(event);
    // Keep only the last 100 events to avoid filling up localStorage
    if (existingEvents.length > 100) {
      existingEvents.shift();
    }
    localStorage.setItem('scrapersai_analytics', JSON.stringify(existingEvents));
  } catch (e) {
    console.error('Failed to save analytics event', e);
  }
};

export const trackPageView = (pagePath: string, properties?: Record<string, any>) => {
  trackEvent('page_view', { page_path: pagePath, ...properties });
};
