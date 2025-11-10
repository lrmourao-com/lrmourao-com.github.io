# LR Mourão - Next.js Website

A modern, statically generated website for LR Mourão built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Static Site Generation (SSG)**: Pre-rendered pages for optimal performance
- **TypeScript**: Type-safe code throughout the application
- **Tailwind CSS**: Modern utility-first CSS framework
- **Multi-language Support**: Portuguese (default) and English versions
- **Simple i18n**: Centralized content management in `app/content.ts`
- **Responsive Design**: Mobile-friendly layout
- **GitHub Pages Ready**: Configured for easy deployment

## 📦 Tech Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- Node.js 20+

## 🛠️ Development

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
npm run build
```

This generates a static export in the `out` directory.

## 🌐 Deployment to GitHub Pages

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

1. **Copy the workflow file**:
   ```bash
   cp -r .github /path/to/root/of/your/repo/
   ```

2. **Enable GitHub Pages in your repository**:
   - Go to Settings > Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

3. **Push to main/master branch**:
   ```bash
   git add .
   git commit -m "Add Next.js app"
   git push origin main
   ```

4. The site will automatically build and deploy to GitHub Pages.

### Option 2: Manual Deployment

1. **Build the static site**:
   ```bash
   npm run build
   ```

2. **Copy the contents of the `out` directory to the root of your repository**:
   ```bash
   cp -r out/* ../
   ```

3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Deploy Next.js site"
   git push origin main
   ```

## 📁 Project Structure

```
nextjs/
├── app/
│   ├── components/        # React components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Site footer
│   │   ├── ImageSlider.tsx
│   │   ├── BackToTop.tsx
│   │   └── PageContent.tsx # Shared page component
│   ├── en/                # English version
│   │   └── page.tsx
│   ├── content.ts         # i18n content (all translations)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Portuguese homepage (default)
├── public/                # Static assets
│   ├── images/            # Images
│   ├── css/               # Font files
│   ├── CNAME              # Custom domain
│   └── robots.txt
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions workflow
└── next.config.ts         # Next.js configuration
```

## 🌍 Multi-language Support

- **Portuguese (default)**: `/` (root)
- **English**: `/en/`

### How It Works

All translations are centralized in `app/content.ts`:
- Edit content for both languages in one place
- Type-safe with TypeScript interfaces
- Easy to add new content or languages

### Adding Content

1. Open `app/content.ts`
2. Update the content object for both `pt` and `en`
3. The changes will apply to both language versions automatically

### Adding a New Language

1. Add the new language to `app/content.ts`
2. Create `app/[lang-code]/page.tsx`
3. Import `PageContent` and pass the language code
4. Update Header component to include the new flag

## 🎨 Customization

### Updating Content

All content is in `app/content.ts`. Edit once, affects both languages.

### Styling

- Global styles: `app/globals.css`
- Component-specific styles: Inline Tailwind classes in components

### Images

Place images in the `public/images/` directory.

## 📝 Notes

- The site is configured for static export (`output: 'export'` in `next.config.ts`)
- Images are unoptimized for static export compatibility
- Custom fonts are loaded from `/public/css/fonts/`
- The CNAME file ensures your custom domain works with GitHub Pages
- Portuguese is the default language (as requested)

## 🔧 Configuration

### Custom Domain

If using a custom domain, ensure the `CNAME` file in `public/` contains your domain name.

### Base Path

If deploying to a subdirectory, update `basePath` in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  basePath: '/your-repo-name',
  // ...
};
```

## 📄 License

All rights reserved 2025 LR Mourão.

## 👨‍💻 Development by Vardas

Modernized and converted to Next.js while maintaining the original design and functionality.
