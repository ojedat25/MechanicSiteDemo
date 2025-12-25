"""
Email utility functions for sending emails using Django's email backend.
"""
from django.core.mail import EmailMessage
from django.conf import settings
from typing import Dict, Optional, List
import logging

from .email_templates import get_email_template

logger = logging.getLogger(__name__)


def send_email(
    subject: str,
    body: str,
    recipient_email: Optional[str] = None,
    from_email: Optional[str] = None,
    reply_to: Optional[List[str]] = None,
    attachments: Optional[List] = None
) -> bool:
    """
    Send an email using Django's email backend.

    """
    try:
        recipient = recipient_email or settings.EMAIL_HOST_USER
        sender = from_email or settings.DEFAULT_FROM_EMAIL
        
        email = EmailMessage(
            subject=subject,
            body=body,
            from_email=sender,
            to=[recipient],
            reply_to=reply_to or [],
        )
        
        # Set content type to HTML if body contains HTML tags
        body_lower = body.lower()
        if '<html' in body_lower or '<body' in body_lower or '<div' in body_lower:
            email.content_subtype = 'html'
        
        # Add attachments if provided
        if attachments:
            for attachment in attachments:
                if hasattr(attachment, 'read'):
                    email.attach(
                        attachment.name,
                        attachment.read(),
                        attachment.content_type if hasattr(attachment, 'content_type') else 'application/octet-stream'
                    )
        
        email.send()
        logger.info(f"Email sent successfully to {recipient} with subject: {subject}")
        return True
        
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False


def send_form_email(
    form_type: str,
    form_data: Dict,
    recipient_email: Optional[str] = None,
    reply_to: Optional[str] = None,
    attachments: Optional[List] = None
) -> bool:
    """Send an email based on form type and data."""
    try:
        template_func = get_email_template(form_type)
        if not template_func:
            logger.error(f"No template found for form type: {form_type}")
            return False
        
        subject, body = template_func(form_data)
        
        reply_to_list = [reply_to] if reply_to else None
        
        return send_email(
            subject=subject,
            body=body,
            recipient_email=recipient_email,
            reply_to=reply_to_list,
            attachments=attachments
        )
        
    except Exception as e:
        logger.error(f"Failed to send form email: {str(e)}")
        return False

