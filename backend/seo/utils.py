"""
SEO utilities for generating sitemap and robots.txt.
Kept separate from views for clarity and reusability.
"""
from django.conf import settings
from datetime import date


def get_frontend_url():
    """
    Get the frontend URL where the React app is served.
    This is where the actual pages are, so sitemap URLs should point here.
    """
    # In production, frontend and backend may be on different domains
    frontend_url = getattr(settings, 'FRONTEND_URL', None)
    if frontend_url:
        return frontend_url
    
    # Fallback: assume same domain as backend in development
    if settings.DEBUG:
        return 'http://localhost:5173'
    
    # Production fallback
    return 'https://mechanicsitedemo-1.onrender.com'


def get_sitemap_urls():
    """
    Returns list of URL dicts for sitemap.xml.
    Each dict contains: loc, lastmod, changefreq, priority.
    URLs point to the frontend domain where pages are actually served.
    """
    frontend_url = get_frontend_url()
    today = date.today().isoformat()
    
    return [
        {
            'loc': f'{frontend_url}/',
            'lastmod': today,
            'changefreq': 'weekly',
            'priority': '1.0'
        },
        {
            'loc': f'{frontend_url}/request-24/7-emergency-service---towing',
            'lastmod': today,
            'changefreq': 'monthly',
            'priority': '0.9'
        },
        {
            'loc': f'{frontend_url}/trailer-repair',
            'lastmod': today,
            'changefreq': 'monthly',
            'priority': '0.9'
        },
        {
            'loc': f'{frontend_url}/services',
            'lastmod': today,
            'changefreq': 'monthly',
            'priority': '0.9'
        }
    ]

