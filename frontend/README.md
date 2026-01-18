# AuntieMode Picks (SG)

A static affiliate-style curation site for home and lifestyle product recommendations, built for Singapore homeowners.

## Overview

AuntieMode Picks is a clean, mobile-first website featuring:
- 12 curated product collections for home & lifestyle
- "Basket of the Week" featured picks
- Newsletter signup via Substack
- Full compliance pages (affiliate disclosure, privacy, terms)
- No tracking cookies or analytics

## Tech Stack

- React 19
- React Router (HashRouter for GitHub Pages compatibility)
- Tailwind CSS
- Shadcn/UI components
- Lucide React icons

## GitHub Pages Deployment

### Your Site URL
```
https://ATANZH.github.io/AuntieMode-picks
```

### To Deploy:

1. **Clone your repo locally** (after saving to GitHub)
2. **Navigate to frontend folder:**
   ```bash
   cd frontend
   ```
3. **Install dependencies:**
   ```bash
   yarn install
   ```
4. **Deploy to GitHub Pages:**
   ```bash
   yarn deploy
   ```
5. **Configure GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` / `root`
   - Save

Your site will be live in 2-3 minutes!

---

## Things to Replace Before Going Live

### 1. Substack Newsletter URL

Search and replace all instances of:
```
https://YOUR_SUBSTACK_URL.substack.com
```

With your actual Substack URL, e.g.:
```
https://auntiemodepicks.substack.com
```

**Files to update:**
- `src/components/layout/Header.jsx`
- `src/pages/HomePage.jsx`
- `src/pages/CollectionDetailPage.jsx`

### 2. Contact Email

Replace placeholder email in:
- `src/pages/ContactPage.jsx`

Change:
```
hello@auntiemode.sg
```
To your actual contact email.

### 3. Affiliate Links

All product affiliate links use this placeholder format:
```
https://example.com/SHOPEE_AFFILIATE_LINK_PLACEHOLDER?subid=ITEM_ID
```

Replace these with your actual Shopee affiliate links.

**File to update:**
- `src/data/collections.js` (all `affiliateLink` fields)

### 4. Images (Optional)

Product images are currently using Unsplash placeholders. You can replace:
- Collection cover images in `src/data/collections.js` (the `image` field)
- Hero image in `src/pages/HomePage.jsx`

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Footer.jsx      # Site footer
│   │   └── Layout.jsx      # Page wrapper
│   └── ui/                 # Shadcn components
├── data/
│   └── collections.js      # Product data (12 collections)
├── pages/
│   ├── HomePage.jsx        # Home (/)
│   ├── CollectionsPage.jsx # Collections index (/collections)
│   ├── CollectionDetailPage.jsx # Collection detail (/collections/:slug)
│   ├── AboutPage.jsx       # About (/about)
│   ├── ContactPage.jsx     # Contact (/contact)
│   ├── DisclosurePage.jsx  # Affiliate disclosure (/disclosure)
│   ├── PrivacyPage.jsx     # Privacy policy (/privacy)
│   ├── TermsPage.jsx       # Terms of use (/terms)
│   └── NotFoundPage.jsx    # 404 page
├── App.js                  # Main app with routing
├── App.css                 # Global styles
└── index.css               # Design system tokens
```

## Collections Included

1. Small HDB Kitchen Organisers
2. Laundry & Drying Hacks
3. Bathroom Storage & Mold Prevention
4. Bedding Essentials (Cooling, Anti-Dust)
5. Cleaning Tools That Actually Work
6. Living Room Cable Management
7. WFH Desk Comfort Upgrades
8. Closet & Wardrobe Organisers
9. Dehumidifying & Home Fragrance Basics
10. Pantry Storage & Label System
11. LED Lighting & Ambience
12. Pet-Friendly Home Basics

## Adding/Editing Products

Edit `src/data/collections.js` to:
- Add new products to existing collections
- Create new collections
- Update product names, notes, prices, or links

Each product item structure:
```javascript
{
  id: 'unique-id',
  name: 'Product Name',
  note: 'Auntie-style description (1-2 sentences)',
  priceRange: '$XX-XX',
  affiliateLink: 'https://your-affiliate-link'
}
```

## SEO Considerations

For better SEO on GitHub Pages:

1. Update `public/index.html` with proper meta tags
2. Create a `sitemap.xml` manually and add to `public/`
3. Create a `robots.txt` and add to `public/`

### Sample robots.txt:
```
User-agent: *
Allow: /
Sitemap: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/sitemap.xml
```

## Local Development

```bash
# Install dependencies
yarn install

# Start dev server
yarn start

# Build for production
yarn build
```

## License

All rights reserved. Content and product recommendations are original work.

---

Built with ❤️ for Singapore homes.
