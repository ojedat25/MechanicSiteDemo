"""
URL configuration for emails app.
"""
from django.urls import path
from .views import EmailFormView

app_name = 'emails'

urlpatterns = [
    path('', EmailFormView.as_view(), name='email_form'),
]

