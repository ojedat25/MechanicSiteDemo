# Summit Diesel Repair Website

A React + Vite replica of the Summit Diesel Repair website, featuring 24/7 emergency services information and contact details.

## Features

- **Multi-page navigation** with React Router
- Responsive header with navigation menu
- **Home page** with maintenance message and call-to-action
- **Mobile Service page** with service request form
- **Trailer Repair page** with comprehensive service listings and FAQs
- **Service Call page** with detailed service offerings
- Footer with contact information and social media links
- Image placeholders throughout for easy customization
- Desktop-optimized alignment and layout
- Mobile-friendly responsive design
- Clean, modern UI

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── MobileService.jsx
│   │   ├── MobileService.css
│   │   ├── TrailerRepair.jsx
│   │   ├── TrailerRepair.css
│   │   ├── ServiceCall.jsx
│   │   └── ServiceCall.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
│   └── logo.png (add your logo here)
├── index.html
├── package.json
└── vite.config.js
```

## Pages

- **Home** (`/`) - Main landing page with maintenance message
- **Mobile Service** (`/request-24/7-emergency-service---towing`) - Service request form and emergency services information
- **Trailer Repair** (`/trailer-repair`) - Comprehensive trailer repair services and FAQs
- **Service Call** (`/services`) - List of all services offered

## Email Form Setup (EmailJS)

The service call form on the Mobile Service page uses EmailJS to send emails. To enable this functionality:

### Setup Steps:

1. **Create an EmailJS Account**
   - Go to https://www.emailjs.com/ and sign up for a free account
   - The free tier includes 200 emails per month

2. **Create an Email Service**
   - In the EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions to connect your email account

3. **Create an Email Template**
   - Go to "Email Templates" in the dashboard
   - Click "Create New Template"
   - Use these variables in your template:
     - `{{to_email}}` - Recipient email (toniojeda2015@gmail.com)
     - `{{from_name}}` - Sender name
     - `{{reply_to}}` - Reply-to email address
     - `{{subject}}` - Email subject
     - `{{message}}` - Form message content
   - Save the template

4. **Get Your Credentials**
   - Service ID: Found in "Email Services" section
   - Template ID: Found in "Email Templates" section
   - Public Key: Found in "Account" → "General" section

5. **Configure the App**
   - Open `src/config/emailjs.config.js`
   - Replace the placeholder values with your actual credentials:
     ```javascript
     export const EMAILJS_CONFIG = {
       serviceID: 'your_service_id',
       templateID: 'your_template_id',
       publicKey: 'your_public_key',
       recipientEmail: 'toniojeda2015@gmail.com'
     }
     ```

6. **Test the Form**
   - Start the dev server: `npm run dev`
   - Navigate to the Mobile Service page
   - Fill out and submit the form
   - Check your email inbox

## Notes

- **Logo**: Add your logo image to the `public` folder as `logo.png`. The components reference `/logo.png` which will be served from the public directory. A placeholder will be shown if the logo is not found.
- **Images**: Image placeholders are included throughout the site. Replace them with actual images by updating the placeholder divs in the components.
- **Icons**: The site uses emoji icons for phone, email, and location. You can replace these with icon libraries (Font Awesome, React Icons, etc.) if desired.
- **Desktop Alignment**: All components are properly aligned for desktop/computer viewing with a max-width of 1200px and centered layouts.
- **Form Functionality**: The service call form includes validation, loading states, and success/error messages.
- All contact information matches the original website: https://www.summitdieselmn.com/

## License

This is a replica project for educational purposes.

