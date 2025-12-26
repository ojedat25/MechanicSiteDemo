# Backend API

Django REST API for Summit Diesel Repair site. Handles form submissions via email and serves SEO endpoints.

## Setup

1. **Create virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run migrations:**
   ```bash
   python manage.py migrate
   ```

4. **Start development server:**
   ```bash
   python manage.py runserver
   ```

## API Endpoints

### Email Form Submission
- **POST** `/email/` - Submit form data and send email
  - Accepts JSON or FormData
  - Required field: `formType` (hiring, mobile_service, service_call, trailer_repair)
  - Optional: `recipientEmail`, `replyTo`, form fields, file attachments

### SEO
- **GET** `/sitemap.xml` - XML sitemap for search engines
- **GET** `/robots.txt` - Robots.txt file

## Configuration

Set environment variables or update `mechanic_site/settings.py`:

- `FRONTEND_URL` - Frontend domain for sitemap URLs
- Email settings (SMTP) - Configure in settings.py for production

## Production

Deploy with Gunicorn:
```bash
gunicorn mechanic_site.wsgi:application
```

## Apps

- **emails** - Form submission handling and email templates
- **seo** - Sitemap and robots.txt generation

