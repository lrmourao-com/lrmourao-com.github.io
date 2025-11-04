# Quick Reference Guide

## 🚀 Common Commands

### Development
```bash
cd nextjs
npm run dev
```
Opens at: http://localhost:3000

### Build for Production
```bash
npm run build
```
Creates static files in `out/` directory

### Check for Errors
```bash
npm run lint
```

## 📁 File Locations

### To Edit Content
- **English Homepage**: `app/page.tsx`
- **Portuguese Homepage**: `app/pt/page.tsx`
- **Header/Navigation**: `app/components/Header.tsx`
- **Footer**: `app/components/Footer.tsx`

### To Change Styles
- **Global Styles**: `app/globals.css`
- **Component Styles**: Inline Tailwind classes in component files

### Static Assets
- **Images**: `public/images/`
- **Fonts**: `public/css/fonts/`
- **Other Files**: `public/`

## 🎨 Adding New Content

### Add a New Section
1. Open `app/page.tsx` (English) or `app/pt/page.tsx` (Portuguese)
2. Add a new `<section id="your-section">` 
3. Update navigation in `app/components/Header.tsx`
4. Update footer in `app/components/Footer.tsx`

### Add a New Language
1. Create `app/[lang-code]/page.tsx`
2. Copy content from `app/pt/page.tsx`
3. Translate the content
4. Add flag to `app/components/Header.tsx`

### Add New Images
1. Place in `public/images/`
2. Reference as `/images/your-image.png`

## 🔧 Configuration Files

### next.config.ts
Main Next.js configuration:
- `output: 'export'` - Enables static export
- `images.unoptimized: true` - For static hosting
- `basePath: ''` - For custom domain (change for subdirectory)

### package.json
Dependencies and scripts:
- Add new packages with `npm install package-name`
- Update Next.js with `npm install next@latest`

### tailwind.config.js
Tailwind CSS configuration (if you need custom colors/fonts)

## 🐛 Troubleshooting

### Build Fails
1. Check for TypeScript errors: `npm run lint`
2. Ensure all imports are correct
3. Verify all images exist in `public/`

### Styles Not Applying
1. Check `globals.css` is imported in `layout.tsx`
2. Verify Tailwind classes are spelled correctly
3. Clear browser cache

### Images Not Loading
1. Verify path starts with `/` (e.g., `/images/logo.png`)
2. Check file exists in `public/images/`
3. Check filename case matches exactly

### Navigation Not Working
1. Ensure IDs match: `<section id="contact">` and `href="#contact"`
2. Check smooth scroll is enabled in `globals.css`

## 📦 Updating Dependencies

### Update All Packages
```bash
npm update
```

### Update Specific Package
```bash
npm install package-name@latest
```

### Check for Outdated Packages
```bash
npm outdated
```

## 🌐 Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Check both English (/) and Portuguese (/pt/) pages
- [ ] Test navigation and smooth scrolling
- [ ] Verify all images load
- [ ] Test language switcher
- [ ] Check mobile responsiveness
- [ ] Verify CNAME file has correct domain
- [ ] Push to GitHub
- [ ] Wait for GitHub Pages deployment (~2-5 minutes)
- [ ] Test live site

## 🎯 Common Modifications

### Change Main Color
Find and replace `#3f66af` in:
- `app/globals.css`
- Component files (search for `bg-[#3f66af]` or `text-[#3f66af]`)

### Update Contact Information
Edit the contact section in:
- `app/page.tsx` (English)
- `app/pt/page.tsx` (Portuguese)

### Change Slider Images
Edit the `ImageSlider` component prop:
```tsx
<ImageSlider images={['/images/slides/slide1.png', '/images/slides/slide2.png']} />
```

### Update Footer Text
Edit `app/components/Footer.tsx`

### Modify Header Links
Edit `navItems` in `app/components/Header.tsx`

## 💡 Tips

1. **Always test locally** before deploying: `npm run dev`
2. **Build before deploying** to catch errors: `npm run build`
3. **Use relative paths** for links between pages
4. **Commit frequently** to track changes
5. **Keep backups** of working versions

## 📚 Documentation Links

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [GitHub Pages](https://docs.github.com/en/pages)

## 🆘 Getting Help

1. Check error messages in terminal
2. Search Next.js documentation
3. Check GitHub Issues for similar problems
4. Review this guide and DEPLOYMENT.md

---

**Quick tip**: Bookmark this file for easy reference! 📑

