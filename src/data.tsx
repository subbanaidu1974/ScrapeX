import { MapPin, Globe, Video, ShoppingCart, Code, Star } from 'lucide-react';

export const CATEGORIES = [
  'Social media', 
  'AI', 
  'Agents', 
  'Lead generation', 
  'E-commerce', 
  'SEO tools',
  'Real Estate',
  'Jobs',
  'Travel',
  'News',
  'Finance',
  'Developer Tools'
];

export const SPIDERS = [
  { 
    id: 'google-maps-scraper', 
    title: 'Google Maps Scraper', 
    author: 'compass/crawler-google-places', 
    icon: MapPin, 
    iconColor: 'text-green-600', 
    iconBg: 'bg-green-100',
    description: 'Extract data from Google Maps. Scrape places, coordinates, reviews, contact details, websites, and more. Unofficial Google Maps API. This spider is highly optimized for scale and can handle millions of requests per day without getting blocked. It automatically rotates proxies, handles captchas, and parses the complex JSON responses from Google Maps into clean, structured data ready for your database or spreadsheet. Perfect for lead generation, market research, and competitive analysis.',
    category: 'Lead generation',
    documentationUrl: 'https://docs.scrapersai.com/google-maps-scraper',
    pricing: '$49/month',
    rating: 4.8,
    runs: '1.2M',
    reviews: [
      { id: 1, user: 'DataMiner99', rating: 5, comment: 'Best maps scraper out there. Super fast.' },
      { id: 2, user: 'LeadGenPro', rating: 4, comment: 'Great tool, but sometimes gets rate limited if you go too fast.' }
    ]
  },
  { 
    id: 'website-content-crawler', 
    title: 'Website Content Crawler', 
    author: 'scrapersai/website-content-crawler', 
    icon: Globe, 
    iconColor: 'text-blue-600', 
    iconBg: 'bg-blue-100',
    description: 'Crawl websites and extract text content, metadata, and links. Perfect for feeding LLMs and AI agents.',
    category: 'AI',
    documentationUrl: 'https://docs.scrapersai.com/website-content-crawler',
    pricing: 'Pay as you go ($0.50/1000 pages)',
    rating: 4.9,
    runs: '850K',
    reviews: [
      { id: 1, user: 'AIEngineer', rating: 5, comment: 'Clean text output, perfect for RAG pipelines.' }
    ]
  },
  { 
    id: 'tiktok-scraper', 
    title: 'TikTok Scraper', 
    author: 'clockworks/tiktok-scraper', 
    icon: Video, 
    iconColor: 'text-black', 
    iconBg: 'bg-gray-200',
    description: 'Extract TikTok profiles, videos, hashtags, and comments. Download videos without watermarks.',
    category: 'Social media',
    pricing: '$99/month',
    rating: 4.5,
    runs: '2.1M',
    reviews: [
      { id: 1, user: 'SocialMarketer', rating: 5, comment: 'Saved me hundreds of hours of manual research.' },
      { id: 2, user: 'TrendWatcher', rating: 4, comment: 'Works well, occasional captchas.' }
    ]
  },
  { 
    id: 'e-commerce-scraping-tool', 
    title: 'E-commerce Scraping Tool', 
    author: 'scrapersai/e-commerce-scraping-tool', 
    icon: ShoppingCart, 
    iconColor: 'text-orange-600', 
    iconBg: 'bg-orange-100',
    description: 'Universal e-commerce scraper. Extract products, prices, reviews, and stock availability from any online store.',
    category: 'E-commerce',
    documentationUrl: 'https://docs.scrapersai.com/e-commerce-scraping-tool',
    pricing: '$199/month',
    rating: 4.7,
    runs: '500K',
    reviews: [
      { id: 1, user: 'PriceTracker', rating: 5, comment: 'Handles pagination and dynamic loading flawlessly.' }
    ]
  },
  { 
    id: 'instagram-scraper', 
    title: 'Instagram Scraper', 
    author: 'scrapersai/instagram-scraper', 
    icon: Globe, 
    iconColor: 'text-pink-600', 
    iconBg: 'bg-pink-100',
    description: 'Scrape Instagram profiles, posts, comments, and followers. Export data in JSON or CSV.',
    category: 'Social media',
    pricing: '$79/month',
    rating: 4.6,
    runs: '3.4M',
    reviews: [
      { id: 1, user: 'InstaGrowth', rating: 5, comment: 'Reliable and fast.' }
    ]
  },
  { 
    id: 'contact-info-scraper', 
    title: 'Contact Details Scraper', 
    author: 'scrapersai/contact-info-scraper', 
    icon: MapPin, 
    iconColor: 'text-purple-600', 
    iconBg: 'bg-purple-100',
    description: 'Find emails, phone numbers, and social media links from any website domain.',
    category: 'Lead generation',
    pricing: '$29/month',
    rating: 4.4,
    runs: '920K',
    reviews: [
      { id: 1, user: 'SalesRep', rating: 4, comment: 'Good hit rate on emails.' }
    ]
  },
  { 
    id: 'youtube-scraper', 
    title: 'YouTube Scraper', 
    author: 'stream/youtube-scraper', 
    icon: Video, 
    iconColor: 'text-red-600', 
    iconBg: 'bg-red-100',
    description: 'Extract YouTube video details, comments, transcripts, and channel statistics.',
    category: 'Social media',
    pricing: 'Free tier available',
    rating: 4.9,
    runs: '1.8M',
    reviews: [
      { id: 1, user: 'ContentCreator', rating: 5, comment: 'The transcript extraction is a lifesaver.' }
    ]
  },
  { 
    id: 'amazon-scraper', 
    title: 'Amazon Scraper', 
    author: 'retail/amazon-scraper', 
    icon: ShoppingCart, 
    iconColor: 'text-yellow-600', 
    iconBg: 'bg-yellow-100',
    description: 'Scrape Amazon products, reviews, sellers, and pricing data across all regions.',
    category: 'E-commerce',
    pricing: '$149/month',
    rating: 4.8,
    runs: '4.2M',
    reviews: [
      { id: 1, user: 'FBA_Seller', rating: 5, comment: 'Essential for my business.' },
      { id: 2, user: 'DataAnalyst', rating: 5, comment: 'Clean data structure.' }
    ]
  },
  { 
    id: 'twitter-scraper', 
    title: 'Twitter / X Scraper', 
    author: 'social/twitter-scraper', 
    icon: Globe, 
    iconColor: 'text-blue-400', 
    iconBg: 'bg-blue-50',
    description: 'Extract tweets, user profiles, followers, and trends from Twitter/X.',
    category: 'Social media',
    pricing: '$89/month',
    rating: 4.3,
    runs: '2.5M',
    reviews: []
  },
  { 
    id: 'linkedin-scraper', 
    title: 'LinkedIn Profile Scraper', 
    author: 'b2b/linkedin-scraper', 
    icon: MapPin, 
    iconColor: 'text-blue-700', 
    iconBg: 'bg-blue-100',
    description: 'Extract professional profiles, company data, and job postings.',
    category: 'Jobs',
    pricing: '$199/month',
    rating: 4.6,
    runs: '1.1M',
    reviews: []
  },
  { 
    id: 'reddit-scraper', 
    title: 'Reddit Scraper', 
    author: 'community/reddit-scraper', 
    icon: Globe, 
    iconColor: 'text-orange-500', 
    iconBg: 'bg-orange-50',
    description: 'Scrape subreddits, posts, and nested comments for sentiment analysis.',
    category: 'Social media',
    pricing: '$39/month',
    rating: 4.7,
    runs: '890K',
    reviews: []
  },
  { 
    id: 'github-scraper', 
    title: 'GitHub Repository Scraper', 
    author: 'dev/github-scraper', 
    icon: Code, 
    iconColor: 'text-gray-800', 
    iconBg: 'bg-gray-200',
    description: 'Extract repository details, issues, pull requests, and contributor stats.',
    category: 'Developer Tools',
    pricing: 'Free',
    rating: 4.9,
    runs: '450K',
    reviews: []
  },
  { 
    id: 'zillow-scraper', 
    title: 'Zillow Real Estate Scraper', 
    author: 'property/zillow-scraper', 
    icon: MapPin, 
    iconColor: 'text-blue-500', 
    iconBg: 'bg-blue-100',
    description: 'Extract property listings, prices, agent details, and historical data.',
    category: 'Real Estate',
    pricing: '$129/month',
    rating: 4.5,
    runs: '670K',
    reviews: []
  },
  { 
    id: 'yelp-scraper', 
    title: 'Yelp Reviews Scraper', 
    author: 'local/yelp-scraper', 
    icon: Star, 
    iconColor: 'text-red-500', 
    iconBg: 'bg-red-100',
    description: 'Scrape business details, ratings, and user reviews from Yelp.',
    category: 'Lead generation',
    pricing: '$59/month',
    rating: 4.4,
    runs: '1.3M',
    reviews: []
  },
  { 
    id: 'tripadvisor-scraper', 
    title: 'TripAdvisor Scraper', 
    author: 'travel/tripadvisor-scraper', 
    icon: Globe, 
    iconColor: 'text-green-500', 
    iconBg: 'bg-green-100',
    description: 'Extract hotel, restaurant, and attraction reviews and ratings.',
    category: 'Travel',
    pricing: '$79/month',
    rating: 4.6,
    runs: '920K',
    reviews: []
  },
  { 
    id: 'booking-scraper', 
    title: 'Booking.com Scraper', 
    author: 'travel/booking-scraper', 
    icon: MapPin, 
    iconColor: 'text-blue-800', 
    iconBg: 'bg-blue-100',
    description: 'Scrape hotel prices, availability, and reviews across dates and locations.',
    category: 'Travel',
    pricing: '$149/month',
    rating: 4.8,
    runs: '2.2M',
    reviews: []
  },
  { 
    id: 'indeed-scraper', 
    title: 'Indeed Jobs Scraper', 
    author: 'hr/indeed-scraper', 
    icon: Globe, 
    iconColor: 'text-blue-600', 
    iconBg: 'bg-blue-100',
    description: 'Extract job postings, company reviews, and salary data.',
    category: 'Jobs',
    pricing: '$99/month',
    rating: 4.7,
    runs: '1.5M',
    reviews: []
  },
  { 
    id: 'glassdoor-scraper', 
    title: 'Glassdoor Scraper', 
    author: 'hr/glassdoor-scraper', 
    icon: Star, 
    iconColor: 'text-green-600', 
    iconBg: 'bg-green-100',
    description: 'Scrape company reviews, interview questions, and salary insights.',
    category: 'Jobs',
    pricing: '$119/month',
    rating: 4.5,
    runs: '840K',
    reviews: []
  },
  { 
    id: 'pinterest-scraper', 
    title: 'Pinterest Scraper', 
    author: 'social/pinterest-scraper', 
    icon: Video, 
    iconColor: 'text-red-600', 
    iconBg: 'bg-red-100',
    description: 'Extract pins, boards, user profiles, and image URLs.',
    category: 'Social media',
    pricing: '$49/month',
    rating: 4.2,
    runs: '560K',
    reviews: []
  },
  { 
    id: 'twitch-scraper', 
    title: 'Twitch Scraper', 
    author: 'stream/twitch-scraper', 
    icon: Video, 
    iconColor: 'text-purple-500', 
    iconBg: 'bg-purple-100',
    description: 'Scrape live streams, channel stats, and VOD metadata.',
    category: 'Social media',
    pricing: '$69/month',
    rating: 4.6,
    runs: '710K',
    reviews: []
  }
];
