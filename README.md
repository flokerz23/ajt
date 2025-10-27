# Digital Agency Landing Page

A modern, responsive landing page for a digital agency offering web development, Google Ads management, video & photo shooting, and editing services.

## Features

- **Modern Design**: Clean, minimalist aesthetic with professional typography
- **Dark/Light Mode**: Toggle between light and dark themes
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Meta tags and structured layout for better search visibility
- **Contact Form**: Functional contact form with validation
- **Service Cards**: Interactive service cards with hover effects

## Sections

1. **Hero Section**: Eye-catching headline, tagline, and CTA buttons
2. **About Us**: Agency description, mission, and core values
3. **Services**: Four service cards with detailed descriptions
4. **Contact**: Contact form and agency information
5. **Footer**: Navigation links, social media, and newsletter signup

## Technologies Used

- React 18
- TailwindCSS 3.3
- Framer Motion 10.16
- HTML5/CSS3
- JavaScript ES6+

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd landingpage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── LandingPage.js      # Main landing page component
│   ├── Navigation.js       # Navigation bar with dark mode toggle
│   ├── HeroSection.js      # Hero section with CTA
│   ├── AboutSection.js     # About us section
│   ├── ServicesSection.js  # Services showcase
│   ├── ContactSection.js   # Contact form and info
│   └── Footer.js           # Footer with links and social media
├── App.js                  # Main app component
├── index.js               # React entry point
└── index.css              # Global styles and Tailwind imports
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue theme
- Accent colors: Purple theme
- Dark mode: Gray theme

### Content
Update the content in each component file:
- Company information in `AboutSection.js`
- Services in `ServicesSection.js`
- Contact details in `ContactSection.js`

### Styling
Modify styles in `src/index.css` or individual component files using Tailwind classes.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact us through the contact form on the website.

