"""
Views for handling form submissions and sending emails.
"""
from django.views import View
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.conf import settings
import json
import logging

from .utils import send_form_email

logger = logging.getLogger(__name__)


@method_decorator(csrf_exempt, name='dispatch')
class EmailFormView(View):
    """
    View class to handle POST requests for different form types.
    Expects JSON data with 'formType' and form fields.
    """
    
    def post(self, request):
        """Handle POST request to send email based on form type."""
        try:
            # Check if request is FormData (multipart/form-data) or JSON
            # FormData requests are parsed into request.POST by Django
            if request.POST:
                # Handle FormData (multipart/form-data)
                form_data = dict(request.POST)
                # Convert QueryDict values to single values where appropriate
                for key, value in form_data.items():
                    if isinstance(value, list) and len(value) == 1:
                        form_data[key] = value[0]
                
                # Handle file attachments
                files = {}
                if request.FILES:
                    for key, file in request.FILES.items():
                        files[key] = file
                
                form_type = form_data.get('formType', '')
            else:
                # Handle JSON data
                try:
                    data = json.loads(request.body)
                except json.JSONDecodeError:
                    return JsonResponse({
                        'success': False,
                        'error': 'Invalid JSON data'
                    }, status=400)
                
                form_data = data
                form_type = form_data.get('formType', '')
                files = {}
            
            if not form_type:
                return JsonResponse({
                    'success': False,
                    'error': 'formType is required'
                }, status=400)
            
            # Get optional email parameters
            recipient_email = form_data.get('recipientEmail') or settings.EMAIL_HOST_USER
            reply_to = form_data.get('replyTo') or form_data.get('email') or form_data.get('reply_to') or None
            
            # Remove metadata fields from form_data before passing to template
            template_data = {k: v for k, v in form_data.items() 
                           if k not in ['formType', 'recipientEmail', 'replyTo', 'reply_to']}
            
            # Prepare file attachments
            attachments = list(files.values()) if files else None
            
            # Send email using the utility function
            success = send_form_email(
                form_type=form_type,
                form_data=template_data,
                recipient_email=recipient_email,
                reply_to=reply_to,
                attachments=attachments
            )
            
            if success:
                return JsonResponse({
                    'success': True,
                    'message': 'Email sent successfully'
                })
            else:
                return JsonResponse({
                    'success': False,
                    'error': 'Failed to send email'
                }, status=500)
                
        except Exception as e:
            logger.error(f"Error processing email form: {str(e)}")
            return JsonResponse({
                'success': False,
                'error': f'Server error: {str(e)}'
            }, status=500)
    
    def get(self, request):
        """
        Handle GET request - return available form types.
        """
        return JsonResponse({
            'available_form_types': [
                'hiring',
                'job_application',
                'mobile_service',
                'service_call',
                'trailer_repair'
            ],
            'endpoint': '/email/',
            'method': 'POST',
            'format': 'JSON or FormData'
        })
