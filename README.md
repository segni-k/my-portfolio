# Segni Kasahun - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a beautiful design with dark/light mode toggle and smooth animations.

## Features

- ✨ Modern and clean design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive on all devices
- ⚡ Built with Next.js 16 and TypeScript
- 🎨 Styled with Tailwind CSS
- 🚀 Fast performance and SEO optimized
- 📧 Contact form integrated with Formspree
- 🔗 GitHub project links

## Sections

1. **Hero** - Introduction with call-to-action buttons
2. **About** - Personal information and background
3. **Skills** - Technical skills with progress bars and tools
4. **Experience** - Work experience and education timeline
5. **Projects** - Portfolio of recent projects with GitHub links
6. **Contact** - Contact form and social media links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/segni-k/my-portfolio.git
cd my-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

#### Hero Section
Edit \`components/Hero.tsx\` to update:
- Your name
- Title/role
- Description
- Social media links

#### About Section
Edit \`components/About.tsx\` to update:
- Bio/description
- Contact details (email, phone, location)
- Languages
- Availability status

#### Skills Section
Edit \`components/Skills.tsx\` to update:
- Your skill list with percentages
- Tools and technologies you use

#### Experience Section
Edit \`components/Experience.tsx\` to update:
- Work experience entries
- Education entries

#### Projects Section
Edit \`components/Projects.tsx\` to update:
- Your projects
- **IMPORTANT**: Replace the placeholder GitHub links with your actual repository links
- Add live demo links for deployed projects
- Update project descriptions and technologies

### Contact Form

The contact form uses Formspree. To use your own form:
1. Sign up at [Formspree](https://formspree.io)
2. Create a new form
3. Replace the form endpoint in \`components/Contact.tsx\`:
   \`\`\`tsx
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   \`\`\`

### Theme Colors

To customize the color scheme, edit \`tailwind.config.ts\` or update the classes in components:
- Primary color: \`blue-600\`
- Accent color: \`indigo-600\`
- Update any \`bg-blue-600\`, \`text-blue-600\`, etc. to your preferred colors

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with default settings

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
my-portfolio/
├── app/
│   ├── layout.tsx       # Root layout with theme provider
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation with theme toggle
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Experience.tsx   # Experience & Education
│   ├── Projects.tsx     # Projects showcase
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer
│   └── ThemeProvider.tsx # Theme context provider
├── public/              # Static assets
├── package.json         # Dependencies
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
\`\`\`

## Technologies Used

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Theme**: next-themes
- **Form**: Formspree
- **Deployment**: Vercel (recommended)

## Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm start\` - Start production server
- \`npm run lint\` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Segni Kasahun. All rights reserved.

## Contact

- Email: segnikasahun969@gmail.com
- Location: Addis Ababa, Ethiopia
- GitHub: [@segni-k](https://github.com/segni-k)

---

Built with ❤️ using Next.js and Tailwind CSS
