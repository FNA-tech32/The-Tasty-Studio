# The Tasty Sudio 🍽️

> **A modern, elegant, and responsive culinary restaurant website showcasing gourmet dining, artisan menus, expert chefs, customer testimonials, and comprehensive contact options.**

---

## 📖 Overview

**The Tasty Sudio** (also referenced as *The Tasty Studio*) is a fully responsive, front-end web project built with semantic HTML5, modern CSS3 (Flexbox, CSS Transitions, Media Queries), and vanilla JavaScript. Designed for high-end dining restaurants, bistros, and culinary studios, the website delivers an immersive visual experience with smooth navigation, dynamic sticky header effects, mobile-friendly drawer menu, and complete contact management with alternative contact channels.

---

## ✨ Key Features

- **Hero Banner with Dynamic Call-to-Action**: Full-screen landing banner featuring high-resolution photography, inviting brand copy, and instant navigation to the menu.
- **Brand Identity & Sticky Navbar**: Fixed, scroll-aware navigation bar displaying **The Tasty Sudio** logo, transforming from a translucent backdrop to a crisp white sticky bar with box shadows upon scroll.
- **Mobile Drawer Navigation**: Responsive hamburger toggle menu optimized for mobile and tablet touchscreens.
- **Story-Driven About Us Section**: Warm, welcoming brand narrative highlighting fresh organic ingredients, culinary artistry, and dining atmosphere.
- **Curated Menu Showcase**: Reverse-flex interactive cards showcasing specialty salads, gourmet soups, artisanal pasta, and chef entrees with subtle hover zoom effects.
- **Kitchen Experts / Chef Roster**: Grid gallery spotlighting master chefs with role titles and culinary portraits.
- **Customer Reviews & Testimonials**: Dedicated testimonial carousel/grid displaying star ratings, guest quotes, and reviewer profile images.
- **Comprehensive Contact Section with Alternative Details**:
  - Primary and alternative studio addresses.
  - Primary phone line and alternative mobile contact.
  - Dedicated alternative WhatsApp direct line.
  - Primary contact email, alternative support email, and reservation email.
  - Operating hours for weekdays and weekends.
  - Active social media profile links.
  - Interactive contact form with input fields for **Primary Phone**, **Alternative Contact Number**, and **Alternative Email Address** with instant confirmation feedback.
- **Branded Footer**: Modern copyright banner celebrating **The Tasty Sudio**.

---

## 📞 Contact & Alternative Details Directory

For quick reference, the official primary and alternative contact channels configured for **The Tasty Sudio** are detailed below:

| Channel / Detail | Primary Detail | Alternative Detail / Backup Channel |
| :--- | :--- | :--- |
| **Studio Address** | `124 Culinary Boulevard, Gourmet Plaza, Suite 400, NY 10001` | `88 Foodies Haven Street, Uptown Crossing, NY 10018` |
| **Phone Number** | `+1 (555) 234-5678` | `+1 (555) 876-5432` |
| **WhatsApp Line** | — | `+1 (555) 901-2345` (Direct Chat Available) |
| **General Email** | `contact@thetastysudio.com` | `support@thetastysudio.com` |
| **Reservations Email** | `contact@thetastysudio.com` | `reservations@thetastysudio.com` |
| **Operating Hours** | **Mon – Fri:** `10:00 AM – 11:00 PM` | **Sat – Sun:** `09:00 AM – 11:30 PM` |

---

## 🛠️ Technology Stack

- **HTML5**: Semantic markup, metadata tags, and accessible form structures.
- **CSS3 (`index.css` & `index2.css`)**:
  - CSS Flexbox layout system.
  - Fluid typography and responsive clamp values.
  - Custom scroll behaviors (`scroll-behavior: smooth`).
  - Media queries targeting tablets (`max-width: 991px`) and mobile devices (`max-width: 480px`).
  - Custom color palette centered around `#c94d77` (brand accent pink/berry) and `#111` (rich charcoal).
- **JavaScript ES6 (`index.js`)**:
  - Scroll listener adding `.sticky` class to `<header>`.
  - Mobile menu drawer toggle logic (`toggleMenu()`).
  - Form submission interceptor (`handleContactSubmit()`) providing user confirmation for submitted primary and alternative contact info.
- **Font Awesome 5.15.0**: Vector icons for star ratings, contact badges, and social media links.
- **Google Fonts / System Fonts**: Clean typography powered by `'Poppins'` and modern sans-serif fallbacks.

---

## 📁 Project Structure

```text
The-Tasty-Studio/
├── index.html         # Main HTML document containing all sections & structure
├── index.css          # Primary desktop stylesheets, layout rules & branding styles
├── index2.css         # Responsive media queries for tablets & mobile devices
├── index.js           # Interactive script (sticky header, menu toggle & form handler)
├── README.md          # Project documentation & website guide
└── IMAGES/            # High-resolution assets
    ├── bg.jpg         # Hero banner background image
    ├── bg2.jpg        # Reviews section background image
    ├── bg3.jpg        # Contact section background image
    ├── menu.png       # Mobile hamburger menu icon
    ├── close.png      # Mobile menu close (X) icon
    ├── img1.jpg       # About Us feature image
    ├── menu1.jpg      # Menu item 1 (Special Salads)
    ├── menu2.jpg      # Menu item 2 (Special Soup)
    ├── menu3.jpg      # Menu item 3 (Artisanal Pasta)
    ├── menu4.jpg      # Menu item 4 (Fresh Greens Salad)
    ├── menu5.jpg      # Menu item 5 (Signature Broth Soup)
    ├── menu6.jpg      # Menu item 6 (Chef's Special Entree)
    ├── expert1.jpg    # Chef Sophie Laurent portrait
    ├── expert2.jpg    # Chef Marco Rossi portrait
    ├── expert3.jpg    # Chef Elena Chen portrait
    ├── expert4.jpg    # Chef Antonio Silva portrait
    ├── testi1.jpg     # Reviewer Emily Watson avatar
    ├── testi2.jpg     # Reviewer David Miller avatar
    └── testi3.jpg     # Reviewer Priya Sharma avatar
```

---

## 🚀 Getting Started & Local Setup

### 1. Clone or Download the Project
```bash
git clone https://github.com/Shubham-Gupta312/FoodRestro.git The-Tasty-Studio
cd The-Tasty-Studio
```

### 2. Run Locally

Since this is a lightweight static website, no build steps or dependencies are required:

- **Direct Open**: Double-click `index.html` or drag it into any web browser (Chrome, Edge, Firefox, Safari).
- **VS Code Live Server**: Right-click `index.html` in VS Code and choose **Open with Live Server**.
- **Python Local Server**:
  ```bash
  # Python 3
  python -m http.server 8000
  ```
  Then open `http://localhost:8000` in your browser.
- **Node.js Local Server**:
  ```bash
  npx serve .
  ```

---

## 🎨 Customization Guide

### Changing Brand Name or Logo
1. In `index.html`, locate the `<a href="#" class="logo">` tag inside `<header>`:
   ```html
   <a href="#" class="logo">The Tasty <span>Sudio.</span></a>
   ```
2. Update the text to your preferred branding.

### Updating Contact & Alternative Details
- Modify the `.contact-info` section in `index.html` to update phone numbers, emails, addresses, and hours.
- Update the `<form class="contactform">` placeholders and labels if additional custom fields are required.

### Modifying Theme Colors
Open `index.css` and adjust the primary brand color values:
- Accent Color: `#c94d77`
- Accent Hover Color: `#dd1d5d`
- Soft Badge Background: `#fce4ec`
- Background Color: `#f6f6ff`

---

## 🌐 Browser Compatibility

Tested and fully functional on:
- Google Chrome (Desktop & Android)
- Mozilla Firefox (Desktop & Mobile)
- Apple Safari (macOS & iOS)
- Microsoft Edge
- Opera & Brave

---

## 📜 License & Acknowledgments

- **Brand**: The Tasty Sudio
- **Designed for**: Modern culinary, restaurant, and food studio web showcases.
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Images**: High-definition culinary photography curated for educational and portfolio demonstration.
