# AuntieMode Picks (SG) - Complete Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Features](#features)
5. [How It Works](#how-it-works)
6. [Content Management](#content-management)
7. [Deployment](#deployment)
8. [SEO & Marketing](#seo--marketing)
9. [Placeholders to Replace](#placeholders-to-replace)
10. [Customization Guide](#customization-guide)
11. [Troubleshooting](#troubleshooting)
12. [Future Improvements](#future-improvements)

---

## Project Overview

**AuntieMode Picks (SG)** is a static affiliate-style curation website for home and lifestyle product recommendations, built specifically for Singapore homeowners.

### Key Characteristics:
- **Fully static** - No backend, no database, no server required
- **GitHub Pages hosted** - Free, reliable hosting
- **No tracking/cookies** - Privacy-first approach
- **Mobile-first design** - Responsive across all devices
- **Affiliate-ready** - Shopee affiliate link placeholders included

### Target Audience:
Singapore homeowners, particularly those living in HDB flats, looking for practical home and lifestyle product recommendations.

### Tone & Voice:
"Auntie practical" — friendly, direct, helpful, not salesy, no exaggerated claims.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Frontend framework |
| **React Router (HashRouter)** | Client-side routing (GitHub Pages compatible) |
| **Tailwind CSS** | Utility-first styling |
| **Shadcn/UI** | Pre-built accessible components |
| **Lucide React** | Icon library |
| **GitHub Actions** | Automated deployment |
| **GitHub Pages** | Static hosting |

### Why HashRouter?
GitHub Pages doesn't support server-side routing. HashRouter uses URL hashes (`/#/collections`) which work without server configuration.

---

## Project Structure

```
AuntieMode-picks/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── frontend/
│   ├── public/
│   │   ├── index.html          # HTML template with SEO meta tags
│   │   ├── robots.txt          # Search engine directives
│   │   └── sitemap.xml         # XML sitemap for SEO
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.jsx  # Navigation header
│   │   │   │   ├── Footer.jsx  # Site footer
│   │   │   │   └── Layout.jsx  # Page wrapper component
│   │   │   └── ui/             # Shadcn UI components
│   │   ├── data/
│   │   │   └── collections.js  # All product data (12 collections, 90+ items)
│   │   ├── pages/
│   │   │   ├── HomePage.jsx           # Home page (/)
│   │   │   ├── CollectionsPage.jsx    # Collections index (/collections)
│   │   │   ├── CollectionDetailPage.jsx # Individual collection (/collections/:slug)
│   │   │   ├── AboutPage.jsx          # About page (/about)
│   │   │   ├── ContactPage.jsx        # Contact page (/contact)
│   │   │   ├── DisclosurePage.jsx     # Affiliate disclosure (/disclosure)
│   │   │   ├── PrivacyPage.jsx        # Privacy policy (/privacy)
│   │   │   ├── TermsPage.jsx          # Terms of use (/terms)
│   │   │   └── NotFoundPage.jsx       # 404 page
│   │   ├── App.js              # Main app with routing
│   │   ├── App.css             # Global styles
│   │   └── index.css           # Design system tokens (colors, fonts)
│   ├── package.json            # Dependencies and scripts
│   ├── tailwind.config.js      # Tailwind configuration
│   └── README.md               # Quick start guide
└── DOCUMENTATION.md            # This file
```

---

## Features

### Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero section, Basket of the Week, Latest Collections |
| Collections | `/collections` | Grid of all 12 collections |
| Collection Detail | `/collections/:slug` | Individual collection with product cards |
| About | `/about` | Brand story and values |
| Contact | `/contact` | Contact email and information |
| Affiliate Disclosure | `/disclosure` | FTC-compliant affiliate disclosure |
| Privacy Policy | `/privacy` | Privacy practices (no tracking) |
| Terms of Use | `/terms` | Legal terms and disclaimers |

### Collections (12 Total)

1. **Small HDB Kitchen Organisers** - 8 items
2. **Laundry & Drying Hacks** - 7 items
3. **Bathroom Storage & Mold Prevention** - 8 items
4. **Bedding Essentials (Cooling, Anti-Dust)** - 7 items
5. **Cleaning Tools That Actually Work** - 8 items
6. **Living Room Cable Management** - 6 items
7. **WFH Desk Comfort Upgrades** - 8 items
8. **Closet & Wardrobe Organisers** - 8 items
9. **Dehumidifying & Home Fragrance Basics** - 7 items
10. **Pantry Storage & Label System** - 7 items
11. **LED Lighting & Ambience** - 7 items
12. **Pet-Friendly Home Basics** - 8 items

### Design Features

- **Warm neutral color palette** - Cream, terracotta, sage green
- **Playfair Display + DM Sans fonts** - Editorial heading, clean body text
- **Card-based layouts** - Easy scanning of products
- **Mobile hamburger menu** - Responsive navigation
- **Hover animations** - Subtle micro-interactions
- **Affiliate link disclosure** - Clear "Affiliate link" label under each button

---

## How It Works

### Development → Production Flow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    Emergent     │     │     GitHub      │     │  GitHub Pages   │
│  (Development)  │ ──► │  (Repository)   │ ──► │   (Hosting)     │
│                 │     │                 │     │                 │
│ Write/edit code │     │ Store code      │     │ Serve to users  │
│ Preview changes │     │ Trigger Actions │     │ Free hosting    │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                       │                       │
        │    "Save to GitHub"   │   Automatic build     │
        └───────────────────────┴───────────────────────┘
```

### Deployment Process (Automatic)

1. You press "Save to GitHub" on Emergent
2. Code is pushed to `gh-PagesHosting` branch
3. GitHub Actions workflow (`deploy.yml`) triggers
4. Workflow installs dependencies and builds React app
5. Built files are deployed to GitHub Pages
6. Site is live at `https://atanzh.github.io/AuntieMode-picks`

---

## Content Management

### Adding/Editing Products

All product data is in: `frontend/src/data/collections.js`

#### Product Structure:
```javascript
{
  id: 'unique-id',           // Unique identifier
  name: 'Product Name',      // Display name
  note: 'Auntie-style tip',  // 1-2 sentence recommendation
  priceRange: '$XX-XX',      // Price range (optional)
  affiliateLink: 'https://...'  // Shopee affiliate link
}
```

#### Collection Structure:
```javascript
{
  id: 'collection-id',
  slug: 'url-friendly-slug',      // Used in URL
  title: 'Collection Title',
  description: 'Short description',
  image: 'https://image-url.jpg', // Cover image
  icon: 'lucide-icon-name',       // Icon identifier
  itemCount: 8,                   // Number of items
  items: [...]                    // Array of products
}
```

### Adding a New Collection

1. Open `frontend/src/data/collections.js`
2. Add a new collection object to the `collections` array
3. Add products to the `items` array
4. Save and push to GitHub

### Updating Basket of the Week

In `frontend/src/data/collections.js`, find the `getBasketOfTheWeek()` function:

```javascript
export const getBasketOfTheWeek = () => {
  return [
    collections[0].items[0], // First item from first collection
    collections[2].items[6], // 7th item from 3rd collection
    // ... modify these to feature different products
  ];
};
```

---

## Deployment

### Automatic Deployment (Current Setup)

Every push to `gh-PagesHosting` branch triggers automatic deployment.

### Manual Deployment (Alternative)

If you need to deploy manually:

```bash
# Clone the repository
git clone https://github.com/ATANZH/AuntieMode-picks.git
cd AuntieMode-picks/frontend

# Install dependencies
yarn install

# Build the project
yarn build

# Deploy to GitHub Pages
yarn deploy
```

### GitHub Actions Workflow

Located at: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches:
      - gh-PagesHosting
# ... builds and deploys automatically
```

---

## SEO & Marketing

### Current SEO Setup

| Feature | Status | Location |
|---------|--------|----------|
| Page titles | ✅ | `index.html` |
| Meta descriptions | ✅ | `index.html` |
| Open Graph tags | ✅ | `index.html` |
| Twitter cards | ✅ | `index.html` |
| Sitemap | ✅ | `public/sitemap.xml` |
| Robots.txt | ✅ | `public/robots.txt` |
| Canonical URL | ✅ | `index.html` |

### Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Choose "URL prefix" method
4. Enter: `https://atanzh.github.io/AuntieMode-picks`
5. Verify using HTML tag method (add meta tag to `index.html`)
6. Submit sitemap: `https://atanzh.github.io/AuntieMode-picks/sitemap.xml`

### Indexing Timeline

| Stage | Expected Time |
|-------|---------------|
| Discovery by Google | 1-3 days after submission |
| Initial indexing | 3-7 days |
| Ranking for brand name | 1-2 weeks |
| Ranking for keywords | 1-3 months |

### Tips for Better SEO

1. **Unique content** - The "Auntie notes" are unique; expand them
2. **Internal linking** - Link between related collections
3. **Regular updates** - Add new products periodically
4. **Social sharing** - Share on social media for backlinks
5. **Blog content** - Consider adding blog posts about home tips

---

## Placeholders to Replace

### 1. Substack Newsletter URL

**Find:** `YOUR_SUBSTACK_URL`

**Files:**
- `frontend/src/components/layout/Header.jsx`
- `frontend/src/pages/HomePage.jsx`
- `frontend/src/pages/CollectionDetailPage.jsx`

**Replace with:** Your actual Substack URL (e.g., `auntiemodepicks.substack.com`)

### 2. Contact Email

**Find:** `hello@auntiemode.sg`

**File:** `frontend/src/pages/ContactPage.jsx`

**Replace with:** Your actual contact email

### 3. Affiliate Links

**Find:** `https://example.com/SHOPEE_AFFILIATE_LINK_PLACEHOLDER`

**File:** `frontend/src/data/collections.js`

**Replace with:** Your actual Shopee affiliate links

### How to Get Shopee Affiliate Links

1. Join [Shopee Affiliate Program](https://affiliate.shopee.sg/)
2. Get approved
3. Generate affiliate links for each product
4. Replace placeholder links in `collections.js`

---

## Customization Guide

### Changing Colors

Edit `frontend/src/index.css`:

```css
:root {
  /* Primary - Terracotta/Coral */
  --primary: 15 65% 50%;        /* Hue Saturation% Lightness% */
  
  /* Accent - Sage Green */
  --accent: 145 25% 72%;
  
  /* Background - Warm Cream */
  --background: 45 33% 97%;
}
```

### Changing Fonts

1. Update Google Fonts import in `frontend/src/index.css`
2. Update font-family in `frontend/tailwind.config.js`

### Adding New Pages

1. Create component in `frontend/src/pages/NewPage.jsx`
2. Add route in `frontend/src/App.js`:
```javascript
<Route path="/new-page" element={<NewPage />} />
```
3. Add link to navigation in `Header.jsx` and/or `Footer.jsx`

### Changing Images

Collection images are URLs in `frontend/src/data/collections.js`. Replace with:
- Your own hosted images
- Different Unsplash images
- Shopee product images (if allowed)

---

## Troubleshooting

### Site Not Updating After Push

1. Check GitHub Actions: `github.com/ATANZH/AuntieMode-picks/actions`
2. Look for failed workflows (red X)
3. Click to see error details
4. Common fixes:
   - Clear browser cache
   - Wait 2-3 minutes for deployment
   - Check if branch name matches workflow

### 404 Error on Pages

- This is normal for direct URL access with HashRouter
- Always access via hash URLs: `/#/collections`
- Links within the app work correctly

### Images Not Loading

- Check if image URLs are valid
- Ensure HTTPS URLs
- Check for CORS issues

### Build Failures

Common causes:
- Syntax errors in JavaScript
- Missing dependencies
- Invalid import paths

Check the Actions tab for detailed error messages.

---

## Future Improvements

### Potential Enhancements

1. **Blog section** - Add home tips articles for SEO
2. **Search functionality** - Search across products
3. **Filtering** - Filter by price range, category
4. **Email capture** - Integrate actual Substack embed
5. **Analytics** - Add privacy-friendly analytics (Plausible, Fathom)
6. **Comments/Reviews** - User reviews (would need backend)
7. **PWA** - Make it installable as an app
8. **Dark mode** - Toggle for dark theme

### Adding a Custom Domain

1. Buy a domain (e.g., `auntiemode.sg`)
2. In GitHub repo: Settings → Pages → Custom domain
3. Add DNS records at your domain registrar:
   - CNAME record: `www` → `atanzh.github.io`
   - A records for apex domain (GitHub IPs)
4. Enable "Enforce HTTPS"

---

## Quick Reference

### URLs

| Purpose | URL |
|---------|-----|
| Live Site | https://atanzh.github.io/AuntieMode-picks |
| GitHub Repo | https://github.com/ATANZH/AuntieMode-picks |
| Actions | https://github.com/ATANZH/AuntieMode-picks/actions |
| Settings | https://github.com/ATANZH/AuntieMode-picks/settings/pages |

### Key Files to Edit

| What to Change | File |
|----------------|------|
| Products & Collections | `frontend/src/data/collections.js` |
| Colors & Design | `frontend/src/index.css` |
| Navigation | `frontend/src/components/layout/Header.jsx` |
| Footer Links | `frontend/src/components/layout/Footer.jsx` |
| SEO Meta Tags | `frontend/public/index.html` |
| Sitemap | `frontend/public/sitemap.xml` |

### Commands

```bash
# Local development
cd frontend
yarn install
yarn start

# Build for production
yarn build

# Manual deploy (if needed)
yarn deploy
```

---

## Support

For issues with:
- **Code/Development** - Return to Emergent and describe the issue
- **GitHub Pages** - Check [GitHub Pages docs](https://docs.github.com/en/pages)
- **Shopee Affiliate** - Contact [Shopee Affiliate Support](https://affiliate.shopee.sg/)

---

*Documentation created: January 2025*
*Last updated: January 2025*
