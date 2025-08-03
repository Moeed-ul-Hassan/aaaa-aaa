# Portfolio Website Clone

A modern, responsive portfolio website clone inspired by [Aayush Bharti's portfolio](https://aayushbharti.in/). Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Performance**: Optimized for speed and SEO
- **Animations**: Smooth scroll animations using Framer Motion
- **Accessibility**: Built with accessibility best practices
- **TypeScript**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚡ Performance Optimization

### Fast Development Mode
For faster compilation during development:

```bash
# Use Turbo mode for faster builds
npm run dev:fast

# Clean build cache if needed
npm run clean

# Type checking only (faster than full build)
npm run type-check
```

### Build Optimization
For optimized production builds:

```bash
# Fast production build
npm run build:fast

# Regular production build
npm run build
```

### Performance Tips
1. **Use Turbo Mode**: Set `NEXT_TURBO=1` for faster compilation
2. **Clean Cache**: Run `npm run clean` if builds become slow
3. **Incremental TypeScript**: Uses incremental compilation for faster type checking
4. **Optimized Tailwind**: JIT mode enabled for faster CSS compilation
5. **Webpack Optimization**: Vendor chunk splitting for better caching

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
  }
}
```

### Content
Update the content in the respective component files:
- `components/Hero.tsx` - Main hero section
- `components/About.tsx` - About section
- `components/Projects.tsx` - Project showcase
- `components/Skills.tsx` - Skills and technologies
- `components/Testimonials.tsx` - Client testimonials
- `components/Contact.tsx` - Contact information

### Images
Replace placeholder images with your own:
- Profile pictures
- Project screenshots
- Background images

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   ├── Projects.tsx         # Projects showcase
│   ├── Testimonials.tsx     # Client testimonials
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Original design inspiration from [Aayush Bharti's portfolio](https://aayushbharti.in/)
- Icons from [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub. 