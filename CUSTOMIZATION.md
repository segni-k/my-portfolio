# Quick Customization Guide

## Important: Update Your GitHub Links

The portfolio currently has placeholder GitHub links. You need to update them with your actual repository URLs.

### Where to Update:

1. **Projects Section** (`components/Projects.tsx`)
   - Find the `projects` array
   - Replace each `githubLink` with your actual repository URL
   - Add `liveLink` for deployed projects (leave as `null` for backend-only projects)

   Example:
   \`\`\`tsx
   {
     title: "TrackBite - Meal Tracking App",
     githubLink: "https://github.com/YOUR-USERNAME/trackbite", // Update this!
     liveLink: null, // Or add deployed URL
   }
   \`\`\`

2. **Hero Section** (`components/Hero.tsx`)
   - Update GitHub link: `https://github.com/YOUR-USERNAME`
   - Update LinkedIn link (currently placeholder)
   - Verify Telegram and Facebook links

3. **Contact Section** (`components/Contact.tsx`)
   - Verify all social media links
   - Update GitHub link
   - Update LinkedIn link

## Other Quick Updates:

### 1. Add Your Profile Picture (Optional)
Instead of the "SK" placeholder, you can add your photo:
- Place your image in `public/profile.jpg`
- Update `Hero.tsx` and `About.tsx` to use the image

### 2. Update GitHub Username
The main GitHub link is: `https://github.com/segni-k`
Update "segni-k" to your actual GitHub username in:
- `components/Hero.tsx`
- `components/Projects.tsx`
- `components/Contact.tsx`

### 3. Customize Contact Form
- The form currently uses: `https://formspree.io/f/xeezlrza`
- Sign up at Formspree.io to get your own form endpoint
- Update the URL in `components/Contact.tsx`

## Testing Checklist:

- [ ] All GitHub links work
- [ ] Social media links are correct
- [ ] Contact form sends to your email
- [ ] Dark/light mode toggle works
- [ ] All sections are visible
- [ ] Mobile responsive (test on phone)
- [ ] Navigation links scroll to correct sections

## Deployment:

Once you're happy with your customizations:

1. Commit your changes:
   \`\`\`bash
   git add .
   git commit -m "Customize portfolio with my information"
   git push
   \`\`\`

2. Deploy to Vercel:
   - Go to vercel.com
   - Import your GitHub repository
   - Click deploy!

Your portfolio will be live at: `your-username.vercel.app`

## Need Help?

- Next.js docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Deployment: https://vercel.com/docs

---

Happy coding! 🚀
