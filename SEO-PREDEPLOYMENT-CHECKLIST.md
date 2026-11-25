# SEO & Publishing Checklist — V9.42.17

## Completed in this package
- Main content pages have page-specific `<title>` and meta descriptions.
- Project Builder and Club Configurator now include Open Graph title, description and image metadata.
- Social preview images for selected core pages use matching local assets rather than third-party image hotlinks or generic AI placeholders where an appropriate local image is available.
- The Brand Heritage Open Graph image now points to the locally stored PGM 20th-anniversary event image.
- 404 and legacy redirect pages are marked `noindex,follow`; the Thank You page was already `noindex,nofollow`.
- Product-category concept imagery is explicitly identified as AI-generated and not model-specific photography.

## Pending — do not submit until confirmed
- [ ] Confirm the final production domain and preferred host (`www` or non-`www`). The source README and launch notes in this package do not establish a confirmed production domain.
- [ ] Add one absolute canonical URL to each indexable page, using the confirmed preferred host.
- [ ] Add matching absolute `og:url` values.
- [ ] Convert local relative `og:image` paths to absolute URLs on the confirmed domain for social crawlers.
- [ ] Generate `sitemap.xml` with only canonical, indexable pages; exclude 404, Thank You and legacy redirect pages.
- [ ] Add the absolute sitemap URL to `robots.txt`.
- [ ] Verify HTTPS, redirects, and one-host consistency.
- [ ] Submit the sitemap in Google Search Console and Bing Webmaster Tools after the domain is live.
- [ ] Recheck every page title, description, social preview and broken link after deployment.

## Rights and factual checks
- [ ] Confirm written usage rights for professional player portraits, names, likenesses, event photography, association / national-team marks, customer logos and externally hosted video footage.
- [ ] Confirm all ranking, sales, patent, market-coverage and partnership statements against current approved source material.
- [ ] Replace any AI concept visual that could be mistaken for an exact product, model, production process or facility photograph before using it as product evidence.
