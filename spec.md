# Home Discoveries

## Current State
New project — no existing files.

## Requested Changes (Diff)

### Add
- Home decor inspiration website for Pinterest user Homediscoveries2688
- Hero section with SEO-optimized headline and CTAs
- Pinterest boards section: embed 4 boards from Homediscoveries2688 using Pinterest widget embeds
- Amazon affiliate product section: 8 curated home decor product cards with affiliate links
- Blog/inspiration section: 3 editorial-style inspiration posts (static, SEO-friendly content)
- SEO meta tags: title, description, og:image, canonical URL, schema.org markup for affiliate site
- Affiliate disclosure page/modal
- Footer with links: About, Contact, Affiliate Disclosure, Terms, Privacy
- Navigation: Shop, Inspo, Trends, Blog, Search

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Backend: Store products (name, description, price, imageUrl, affiliateUrl, category), blog posts (title, excerpt, content, date, imageUrl), and site config data
2. Frontend: Build all sections matching the warm editorial design — hero, Pinterest boards, products, blog, footer
3. Pinterest embeds: Use Pinterest's JavaScript widget SDK to embed board widgets
4. SEO: Add React Helmet or meta tags in index.html, structured data for affiliate product pages
5. Affiliate disclosure: Modal or dedicated section in footer
