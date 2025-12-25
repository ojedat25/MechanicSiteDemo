# Mobile Components

This folder contains components specifically designed for mobile/smaller screen sizes (screens < 768px).

## Components

- `MobileHeader.jsx` - Mobile header with hamburger menu navigation
  - Features a collapsible hamburger menu
  - Includes all navigation links from desktop version
  - Optimized for touch interactions
  - Auto-closes menu when a link is clicked

- `MobileFooter.jsx` - Mobile-optimized footer variant
  - Vertical layout optimized for small screens
  - Same content as desktop footer but reorganized for mobile
  - Includes logo, social links, contact info, and navigation

## Usage

These components are automatically rendered by `App.jsx` when the screen width is less than 768px. The app detects screen size and switches between desktop and mobile components accordingly.

## Format

The mobile components maintain the same format and styling as the desktop versions, using the same color scheme (wine red, dark red, black, white) and Tailwind CSS classes, but with layouts optimized for smaller screens.

