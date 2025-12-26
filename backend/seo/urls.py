"""
URL configuration for SEO app.
"""
from django.urls import path
from .views import sitemap_view, robots_txt_view

app_name = 'seo'

urlpatterns = [
    path('sitemap.xml', sitemap_view, name='sitemap'),
    path('robots.txt', robots_txt_view, name='robots'),
]

