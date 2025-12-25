"""
Email template functions for different form types.
Each function takes form data and returns (subject, body) tuple.
"""
from typing import Dict, Tuple


def get_email_template(form_type: str):
    """
    Get the appropriate email template function based on form type.
    
    """
    templates = {
        'hiring': hiring_application_template,
        'job_application': hiring_application_template,
        'mobile_service': mobile_service_template,
        'service_call': service_call_template,
        'trailer_repair': trailer_repair_template,
    }
    
    return templates.get(form_type.lower())


def hiring_application_template(form_data: Dict) -> Tuple[str, str]:
    """
    Generate email template for job application/hiring form.
    
    Args:
        form_data: Dictionary containing form fields
        
    Returns:
        Tuple of (subject, html_body)
    """
    full_name = form_data.get('fullName', 'N/A')
    phone = form_data.get('phone', 'N/A')
    dob = form_data.get('dob', 'N/A')
    street_address = form_data.get('streetAddress', 'N/A')
    city = form_data.get('city', 'N/A')
    state = form_data.get('state', 'N/A')
    zip_code = form_data.get('zipCode', 'N/A')
    
    address = f"{street_address}, {city}, {state} {zip_code}"
    
    subject = f"Job Application - {full_name}"
    
    body = f"""
    <html>
    <head>
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background-color: #722f37; color: white; padding: 20px; text-align: center; }}
            .content {{ background-color: #f9f9f9; padding: 20px; }}
            .field {{ margin-bottom: 15px; }}
            .label {{ font-weight: bold; color: #722f37; }}
            .value {{ margin-top: 5px; }}
            .footer {{ text-align: center; padding: 20px; color: #666; font-size: 12px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>New Job Application</h2>
            </div>
            <div class="content">
                <div class="field">
                    <div class="label">Full Name:</div>
                    <div class="value">{full_name}</div>
                </div>
                <div class="field">
                    <div class="label">Phone Number:</div>
                    <div class="value">{phone}</div>
                </div>
                <div class="field">
                    <div class="label">Date of Birth:</div>
                    <div class="value">{dob}</div>
                </div>
                <div class="field">
                    <div class="label">Address:</div>
                    <div class="value">{address}</div>
                </div>
                <div class="field">
                    <div class="label">Resume:</div>
                    <div class="value">Resume file attached (if provided)</div>
                </div>
            </div>
            <div class="footer">
                <p>This email was sent from the Summit Diesel job application form.</p>
            </div>
        </div>
    </body>
    </html>
    """
    
    return subject, body


def mobile_service_template(form_data: Dict) -> Tuple[str, str]:
    """
    Generate email template for mobile service request form.
    
    Args:
        form_data: Dictionary containing form fields
        
    Returns:
        Tuple of (subject, html_body)
    """
    company_name = form_data.get('companyName', 'N/A')
    owner_name = form_data.get('ownerName', 'N/A')
    owner_phone = form_data.get('ownerPhone', 'N/A')
    email = form_data.get('email', 'N/A')
    driver_name = form_data.get('driverName', 'N/A')
    driver_phone = form_data.get('driverPhone', 'N/A')
    date = form_data.get('date', 'N/A')
    dot_number = form_data.get('dotNumber', 'N/A')
    unit_number = form_data.get('unitNumber', 'N/A')
    year = form_data.get('year', 'N/A')
    make = form_data.get('make', 'N/A')
    model = form_data.get('model', 'N/A')
    plate_number = form_data.get('plateNumber', 'N/A')
    color = form_data.get('color', 'N/A')
    vin = form_data.get('vin', 'N/A')
    location = form_data.get('location', 'N/A')
    description = form_data.get('description', 'N/A')
    
    subject = f"Mobile Service Request - {company_name or 'New Request'}"
    
    body = f"""
    <html>
    <head>
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 700px; margin: 0 auto; padding: 20px; }}
            .header {{ background-color: #722f37; color: white; padding: 20px; text-align: center; }}
            .content {{ background-color: #f9f9f9; padding: 20px; }}
            .section {{ margin-bottom: 25px; }}
            .section-title {{ font-weight: bold; color: #722f37; font-size: 18px; margin-bottom: 10px; border-bottom: 2px solid #722f37; padding-bottom: 5px; }}
            .field {{ margin-bottom: 10px; }}
            .label {{ font-weight: bold; color: #555; }}
            .value {{ margin-top: 3px; }}
            .footer {{ text-align: center; padding: 20px; color: #666; font-size: 12px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>Mobile Service Request</h2>
            </div>
            <div class="content">
                <div class="section">
                    <div class="section-title">Request Information</div>
                    <div class="field">
                        <div class="label">Date:</div>
                        <div class="value">{date}</div>
                    </div>
                    <div class="field">
                        <div class="label">Company Name:</div>
                        <div class="value">{company_name}</div>
                    </div>
                    <div class="field">
                        <div class="label">US DOT #:</div>
                        <div class="value">{dot_number}</div>
                    </div>
                    <div class="field">
                        <div class="label">Unit #:</div>
                        <div class="value">{unit_number}</div>
                    </div>
                </div>
                
                <div class="section">
                    <div class="section-title">Owner Information</div>
                    <div class="field">
                        <div class="label">Owner Name:</div>
                        <div class="value">{owner_name}</div>
                    </div>
                    <div class="field">
                        <div class="label">Owner Phone:</div>
                        <div class="value">{owner_phone}</div>
                    </div>
                    <div class="field">
                        <div class="label">Email:</div>
                        <div class="value">{email}</div>
                    </div>
                </div>
                
                <div class="section">
                    <div class="section-title">Driver Information</div>
                    <div class="field">
                        <div class="label">Driver Name:</div>
                        <div class="value">{driver_name}</div>
                    </div>
                    <div class="field">
                        <div class="label">Driver Phone:</div>
                        <div class="value">{driver_phone}</div>
                    </div>
                </div>
                
                <div class="section">
                    <div class="section-title">Vehicle Information</div>
                    <div class="field">
                        <div class="label">Year:</div>
                        <div class="value">{year}</div>
                    </div>
                    <div class="field">
                        <div class="label">Make:</div>
                        <div class="value">{make}</div>
                    </div>
                    <div class="field">
                        <div class="label">Model:</div>
                        <div class="value">{model}</div>
                    </div>
                    <div class="field">
                        <div class="label">Plate #:</div>
                        <div class="value">{plate_number}</div>
                    </div>
                    <div class="field">
                        <div class="label">Color:</div>
                        <div class="value">{color}</div>
                    </div>
                    <div class="field">
                        <div class="label">VIN #:</div>
                        <div class="value">{vin}</div>
                    </div>
                </div>
                
                <div class="section">
                    <div class="section-title">Service Details</div>
                    <div class="field">
                        <div class="label">Location:</div>
                        <div class="value">{location}</div>
                    </div>
                    <div class="field">
                        <div class="label">Description/Details:</div>
                        <div class="value">{description}</div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <p>This email was sent from the Summit Diesel mobile service request form.</p>
            </div>
        </div>
    </body>
    </html>
    """
    
    return subject, body


def service_call_template(form_data: Dict) -> Tuple[str, str]:
    """
    Generate email template for service call form.
    Similar to mobile service but can be customized for different fields.
    
    Args:
        form_data: Dictionary containing form fields
        
    Returns:
        Tuple of (subject, html_body)
    """
    # Can reuse mobile_service_template or customize as needed
    return mobile_service_template(form_data)


def trailer_repair_template(form_data: Dict) -> Tuple[str, str]:
    """
    Generate email template for trailer repair form.
    
    Args:
        form_data: Dictionary containing form fields
        
    Returns:
        Tuple of (subject, html_body)
    """
    # Customize based on trailer repair form fields
    # For now, using a generic template
    name = form_data.get('name', form_data.get('fullName', 'N/A'))
    phone = form_data.get('phone', 'N/A')
    email = form_data.get('email', 'N/A')
    message = form_data.get('message', form_data.get('description', 'N/A'))
    
    subject = f"Trailer Repair Inquiry - {name}"
    
    body = f"""
    <html>
    <head>
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background-color: #722f37; color: white; padding: 20px; text-align: center; }}
            .content {{ background-color: #f9f9f9; padding: 20px; }}
            .field {{ margin-bottom: 15px; }}
            .label {{ font-weight: bold; color: #722f37; }}
            .value {{ margin-top: 5px; }}
            .footer {{ text-align: center; padding: 20px; color: #666; font-size: 12px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>Trailer Repair Inquiry</h2>
            </div>
            <div class="content">
                <div class="field">
                    <div class="label">Name:</div>
                    <div class="value">{name}</div>
                </div>
                <div class="field">
                    <div class="label">Phone:</div>
                    <div class="value">{phone}</div>
                </div>
                <div class="field">
                    <div class="label">Email:</div>
                    <div class="value">{email}</div>
                </div>
                <div class="field">
                    <div class="label">Message/Description:</div>
                    <div class="value">{message}</div>
                </div>
            </div>
            <div class="footer">
                <p>This email was sent from the Summit Diesel trailer repair inquiry form.</p>
            </div>
        </div>
    </body>
    </html>
    """
    
    return subject, body

