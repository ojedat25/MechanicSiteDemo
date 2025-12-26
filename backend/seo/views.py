"""
SEO views for sitemap.xml and robots.txt.
Served by Django to ensure search engines can discover them.
"""
from django.http import HttpResponse
from .utils import get_sitemap_urls, get_frontend_url


def sitemap_view(request):
    """
    Generate and serve sitemap.xml.
    Returns XML with all public frontend routes.
    URLs point to the frontend domain where pages are actually served.
    """
    urls = get_sitemap_urls()
    
    xml_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    ]
    
    for url_data in urls:
        xml_lines.append('  <url>')
        xml_lines.append(f'    <loc>{url_data["loc"]}</loc>')
        xml_lines.append(f'    <lastmod>{url_data["lastmod"]}</lastmod>')
        xml_lines.append(f'    <changefreq>{url_data["changefreq"]}</changefreq>')
        xml_lines.append(f'    <priority>{url_data["priority"]}</priority>')
        xml_lines.append('  </url>')
    
    xml_lines.append('</urlset>')
    
    response = HttpResponse('\n'.join(xml_lines), content_type='application/xml')
    return response


def robots_txt_view(request):
    """
    Generate and serve robots.txt.
    Allows all crawlers and references sitemap.xml.
    Note: If frontend and backend are on different domains, ensure these endpoints
    are proxied to the frontend domain or search engines won't discover them.
    """
    frontend_url = get_frontend_url()
    
    robots_content = f"""User-agent: *
Allow: /

Sitemap: {frontend_url}/sitemap.xml
"""
    
    response = HttpResponse(robots_content, content_type='text/plain')
    return response
