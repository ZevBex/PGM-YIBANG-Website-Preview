# PGM × YIBANG GOLF — V9.42.23

## Current package — V9.42.23 OEM / ODM Homepage Refinement
This is the local-development website package based on V9.42.23 with a homepage-only OEM / ODM positioning update. Homepage PGM metrics now use a vertical hierarchy (number, title, descriptor). The compact YIBANG engineering and manufacturing band is restored immediately below the metrics and before Professional Golf Partnerships. The band replaces the oversized Who We Are intro section and retains its manufacturing-model link. See `V9.42.23-CHANGELOG.md` and `V9.42.23-LOCAL-PREVIEW.txt`. No deployment has been performed.

# PGM × YIBANG GOLF — V9.42.22

## Current package — V9.42.22 (24 November 2026)
This ZIP is the V9.42.22 local-development source package, based on V9.42.21. The homepage brand-strength area has returned to the original shallow horizontal proof-strip style, now expanded from four items to six PGM brand metrics. Source notes are hidden from the visual layout while source URLs and labels remain in each metric's data attributes. Desktop uses six columns, tablet three columns, and mobile two columns. The oversized 3×2 metric-card section and separate oversized YIBANG capability band have been removed from the homepage. Other pages, the all-pages WhatsApp CTA, bilingual behavior, navigation, forms and assets are preserved. This package is for local preview only; do not deploy until explicitly approved. See `V9.42.22-CHANGELOG.md` and `V9.42.22-LOCAL-PREVIEW.txt`.

## V9.42.22 Homepage Layout Refinement
- Restored the original compact proof-strip design shown in the user's reference screenshot.
- Expanded the strip from four to six PGM brand metrics.
- Source notes are not visually displayed; source URLs and labels remain attached as data attributes.
- Desktop: six columns in one shallow row.
- Tablet: three columns by two rows.
- Mobile: two columns by three rows.
- Removed the separate oversized YIBANG capability band from the homepage; YIBANG engineering and manufacturing information remains on the existing capabilities, manufacturing and OEM/ODM pages and in other homepage content.

## V9.42.21 Homepage Layout Refinement
- Previous version: six metric cards with separate YIBANG capability band.
- Superseded by V9.42.22 at the user's request to restore the original compact strip style.

## V9.19 Product Visual Integration
- Product-category visuals are now connected to the live homepage and product catalogue cards.
- Dynamic product detail pages use matching category concept imagery and clearly disclose that AI visuals are illustrative, not model-specific product photographs.
- CHONG Series uses a newly generated studio collection concept visual, clearly labelled as illustrative.

## V9.18 Image Enriched Update
- Added image-led hero panels to Buyer Guide, Insights, Market Impact, Products, and Contact.
- Reused official / owner-provided visuals where available.
- Added AI placeholder product visuals for product-category coverage where official images were not yet prepared.
- Added a dedicated V9.18 stylesheet for image-enrichment layouts.

# PGM × YIBANG GOLF — V9.17 Website

## Project status
- Current package version: **V9.42.21 — Compact PGM Brand Metrics + YIBANG Capability Band**
- Development mode: **local preview only — deployment explicitly deferred**
- Domain: **new independent domain not yet selected**
- Deployment: **not deployed**
- Scope: **professional golf clubs, golf-club development and manufacturing**

## V9.17 information architecture

The package contains 22 HTML pages: 17 core content / workflow pages, 3 support pages and 2 legacy redirect pages.

1. `index.html` — full brand homepage with partnership proof, golf-club categories, four cooperation routes, interactive configurator, manufacturing preview, three PGM brand ambassadors and brand films.
2. `products.html` — golf-club product range with category filters for woods, irons / hybrids, wedges, putters, complete sets and junior clubs.
3. `product-detail.html` — model-level product information template.
4. `club-configurator.html` — illustrative golf-club configuration tool.
5. `partnership-solutions.html` — the four business cooperation models.
6. `oem-odm.html` — detailed golf-club customization and development workflow.
7. `project-builder.html` — structured golf-club RFQ form.
8. `manufacturing.html` — engineering, manufacturing processes, materials, finishing, assembly and QC overview.
9. `factory.html` — company-provided production photographs, guided factory photo tour and factory introduction video.
10. `quality.html` — detailed inspection resources and quality documentation.
11. `brand-heritage.html` — PGM history, official partnership evidence and brand records.
12. `player-collaboration.html` — PGM brand ambassador stories and professional player collaboration.
13. `co-brand-collaboration.html` — PGM co-brand collaboration approach and the featured CHONG Series case study.
14. `market-impact.html` — PGM brand market performance, events and industry activity.
15. `buyer-guide.html` — the single procurement checklist.
16. `insights.html` — technical-topic hub linking to the canonical engineering and customization pages.
17. `contact.html` — short business contact form.
18. `privacy.html`, `thank-you.html`, `404.html` — support pages.

## V9.17 design and interaction updates
- Rebuilt the homepage as a fuller brand presentation rather than a text-only gateway.
- Replaced the old mega-menu positioning and mobile scrolling menu with anchored desktop dropdowns and a two-level mobile navigation panel.
- Golf Clubs navigation now opens the full club taxonomy: drivers / fairway woods, irons / hybrids, wedges, putters, complete sets and junior clubs.
- Product category links pass their selected category into the product catalogue.
- Restored the `mfg-page` body class required by the Manufacturing layout styles; this was the direct cause of the broken page layout in V9.16.
- Centralized navigation behavior in `navigation-v98.js`; removed duplicate legacy dropdown handling from `site-shell.js` and old V7 language handling.
- Added self-hosted Inter / Inter Display, EB Garamond and Noto Sans SC web fonts. Font files are subsetted WOFF2 and include license notices in `assets/fonts/`.
- Added a Chinese-language coverage pass for visible page content, navigation, product filters, RFQ and contact text. Brand names, model codes and standard technical abbreviations remain unchanged where appropriate.

## Consolidated content architecture
- Products: golf-club product catalogue only.
- Partnership Solutions: the four business cooperation models.
- OEM / ODM: technical golf-club customization and development.
- Manufacturing: engineering, materials, process routes, assembly, QC overview and selected manufacturing client logos.
- Factory: company-provided workshop photographs, guided photo tour and factory video.
- Quality: detailed inspection equipment and quality documentation.
- Brand Heritage: PGM history, official CGA / national-team partnership evidence and documentary brand records.
- Player Collaboration: Feng Shanshan — Golf Club Ambassador; Liang Wenchong — Golf Training Aid Ambassador; Wu Ashun — Golf Simulator Ambassador.
- CHONG Series: dedicated golf-club collaboration case study.
- Insights: technical-topic hub; Buyer Guide remains the single sourcing checklist.

## Local preview
1. Extract the ZIP to a local folder.
2. Open `index.html` in Chrome or Edge.
3. Test the EN / 中文 switcher and desktop navigation.
4. On a phone-sized screen, open the menu, tap each category and confirm the second-level menu appears without scrolling the page.
5. Test Golf Clubs category links and confirm each opens the correct product filter.
6. Review `manufacturing.html`, `factory.html`, `quality.html`, `brand-heritage.html`, `player-collaboration.html` and `project-builder.html`.
7. Submit test enquiries only after confirming the FormSubmit receiving address and form behavior.

## Before deployment
- Select and connect the new independent domain.
- Update the FormSubmit `_next` destination to the final domain if a custom thank-you redirect is required.
- Generate a fresh `sitemap.xml` using the new canonical domain and add its URL to `robots.txt`.
- Confirm the canonical domain and all SEO metadata.
- Confirm permissions for player portraits, brand logos, association marks and event footage.
- Replace AI concept visuals with approved PGM product photography where indicated.
- Verify model-specific certificates, product specifications and commercial claims before publication.

No production-domain URLs are configured in this package; confirm the final domain before generating canonical URLs and a sitemap.

## V9.19 Product Visual Integration
- Integrated the six generated category visuals into the live product catalogue data used by both homepage and Products page cards.
- Product detail pages now use the matching generated category image as their lead visual, with a bilingual disclosure that AI visuals are illustrative and supporting factory images are general references.
- Added a new premium studio collection concept visual to the CHONG Series page, clearly labelled as AI concept imagery rather than exact model photography.


## V9.24 Partnership Routes
The Partnerships section now uses one overview page plus four independent detail pages:
- `partnership-solutions.html` — overview and route selection
- `brand-distribution.html` — PGM brand distribution and global product sales coverage
- `private-label.html` — existing-design private label
- `oem-odm.html` — fully customized OEM / ODM development
- `co-brand-collaboration.html` — PGM co-brand collaboration featuring the CHONG Series case

The distribution page distinguishes PGM brand-level product sales coverage from distributor counts and YIBANG standalone factory export figures. The CHONG Series page uses the supplied collaboration video and documented collaboration details; current product specifications and sales outcomes are not invented.


## V9.25 — Private Label Solutions
The former public-facing label "Existing-Design Private Label" is now presented as **Private Label Solutions / 自有品牌定制**. The dedicated page uses the positioning "Your Brand. A Golf Collection, Distinctly Yours." and explains that buyers start from selected available designs, then review model-specific logo, shaft, grip, color, finish and packaging options. The naming is consistent across the homepage, Partnership Solutions overview, navigation, footer, contact enquiry form and Project Builder / RFQ. Internal legacy RFQ project keys remain supported for compatibility.


## V9.26 — Brand Strength Reorganization
The selected past manufacturing brand wall now appears on `brand-heritage.html` as **Selected Brands We've Supported / 精选服务品牌**. It clarifies that YIBANG has supported brands across golf and other product categories and that the logos identify selected past manufacturing engagements only. The logo wall has been removed from `manufacturing.html`. The CHONG Series product-collaboration timeline item has been removed from Brand Strength; the full case remains on the dedicated Co-Brand Collaboration and CHONG Series pages.


## V9.27 — PGM Co-Brand Collaboration + CHONG Series Consolidation
- Consolidated the former standalone `chong-series.html` case study into `co-brand-collaboration.html`.
- The unified page now includes the featured case, collaboration video, official announcement link, bilingual collaboration gallery, project process and brand / player rights note.
- Removed the separate CHONG Series item from the global navigation and Brand & Trust footer; the single PGM Co-Brand Collaboration route remains under Partnerships.
- Updated homepage links: Liang Wenchong's athlete card now opens his professional player profile; the CHONG collaboration film CTA opens the unified case.
- Kept `chong-series.html` as a lightweight legacy redirect to the unified page so existing bookmarks and external links continue to work.


## V9.29 — CHONG Case Headline and Gallery
The Brand Co-Brand Collaboration case transition now says **A Successful Co-Brand Collaboration. / 一项成功的联名合作。** This describes the publicly launched product collaboration, not unverified sales performance. The CHONG Series media gallery has been rebuilt to match the full site container width and 16:10 equal-size media cards, with responsive mobile stacking, readable captions and inquiry buttons. The site uses a local collaboration poster fallback when the third-party press image is unavailable.


# V9.30 — Real Liang Wenchong Golf Club Collaboration Imagery

## Professional Player Partnerships
- Rebuilt the Featured Golf Club Collaboration block as a two-column editorial feature.
- Added the user-supplied PGM × Liang Wenchong golf-club poster (`主图-05.jpg`) as the primary visual.
- Kept the block focused on the golf-club collaboration and linked it to the CHONG Series case on the unified Co-Brand Collaboration page.
- Added responsive mobile stacking and consistent image framing.

## PGM Co-Brand Collaboration
- Replaced the remote Sina Sports gallery image and fallback poster with the user-supplied CHONG Series signing / launch photograph (`详情-04.jpg`).
- Applied a restrained brightness and shadow lift while retaining the navy background, white shirts and red signing table.
- Updated the image caption to identify the CHONG Series signing ceremony.
- Removed the external-image attribution and external news-image dependency.
- Changed the gallery media frames to square proportions so the supplied product-concept and signing images display consistently without aggressive cropping.

## Validation
- Verified both optimized WebP assets are present and referenced by the correct pages.
- Checked local links, internal fragments, CSS syntax and JavaScript syntax.


# V9.31 — CHONG Series Real Product Photography & Gallery Upgrade

## Image preparation
- Used the user-supplied real CHONG Series golf club set photograph (`7B6A4537.JPG`).
- Applied restrained color refinement: slight exposure lift, modest contrast improvement and a subtle reduction in green turf saturation.
- Preserved the actual product shape, logos, graphics, finishes and club arrangement.
- Prepared two optimized 3:4 WebP crops:
  - Full-set photograph: `chong-series-full-club-set-v931.webp`.
  - Clubhead and iron detail: `chong-series-clubhead-detail-v931.webp`.

## PGM Co-Brand Collaboration page
- Replaced the former AI-generated concept image in the CHONG Series gallery with the real full-set product photograph.
- Added a separate close-up clubhead / iron detail photograph.
- Retained the gently brightened PGM × Liang Wenchong signing photograph.
- Updated captions and bilingual introduction / note so all three images are described accurately.
- Changed the gallery to three consistent 3:4 image cards on desktop, two columns on medium screens and a single column on mobile.

## Professional Player Partnerships page
- Kept the Liang Wenchong / PGM promotional poster as the primary athlete-collaboration visual.
- Added a compact real-product photo strip using the close-up image, linking directly to the CHONG Series gallery.
- Preserved the existing player and co-brand collaboration page roles without duplicating the full case story.

## Validation
- Verified all three gallery image files and the player-page product thumbnail are local assets.
- Checked internal links and anchors, CSS syntax, JavaScript syntax and ZIP integrity.


# V9.32 — Sitewide Real-Material Placeholder System

## Purpose
- Added a consistent bilingual placeholder system so the site can be completed before all real company materials have been collected.
- Every placeholder is visibly marked as pending and carries a stable `data-media-slot` ID.
- Placeholders are design blocks only; they do not use AI-generated imagery or imply unverified manufacturing, customer, award or partnership evidence.
- Existing verified / user-provided imagery, videos and page content remain in place.

## Pages updated
- `brand-heritage.html` — brand event milestones and official recognition / honors.
- `market-impact.html` — international exhibitions, tournaments and international market activities.
- `manufacturing.html` — engineering drawings and 3D models; CNC, casting, forging, welding, polishing and surface finishing; assembly, automation and final inspection.
- `factory.html` — factory / workshop overview, production equipment and assembly lines. Existing factory introduction video remains.
- `quality.html` — head-weight measurement, Loft / Lie / swing-weight checks and final inspection.
- `player-collaboration.html` — approved player campaign photography, joint events and official player partnership video.
- `co-brand-collaboration.html` — additional co-brand product cases, launch events and future project video. The CHONG Series remains the featured completed case with its real photos and video.
- `oem-odm.html` — product brief / reference sample, 2D / 3D engineering, prototype review and approved finished product.

## Design
- Added one shared responsive stylesheet: `assets/css/v9.32-material-placeholders.css`.
- Unified card frames, status labels, icons, captions and aspect-ratio indicators.
- Desktop grids adapt to two columns on medium screens and one column on mobile.
- All placeholder copy is bilingual (English / Chinese).
- Added `ASSET-REPLACEMENT-PLAN.md` with 31 stable slot IDs, recommended image ratios and source-material guidance.

## Validation
- Checked local file references and internal fragment links.
- Checked CSS and JavaScript syntax.
- Confirmed all 31 slot IDs are unique and the placeholder stylesheet is loaded on every affected page.


# V9.34 — Ambassador Module and Portrait Refinement

## Homepage
- Updated the three ambassador card labels to show their product-category roles:
  - Feng Shanshan — Golf Club Ambassador.
  - Liang Wenchong — Golf Training Aid Ambassador.
  - Wu Ashun — Golf Simulator Ambassador.
- Retained the career-highlight lines and existing links to the professional player collaboration page.
- Updated the bilingual note to clarify that the displayed partnership scope remains subject to current agreements.

## Professional Player Collaboration page
- Refined all three image labels to the concise `PGM BRAND AMBASSADOR` treatment.
- Retained the user-provided PGM portrait attribution and the existing player career information and official profile links.
- Updated the disclaimer to distinguish professional career context from contractual endorsement scope.

## Responsive visual refinements
- Matched the profile image frame to the supplied 4:5 portrait ratio.
- Refined image positioning, overlay labels, card corners and text contrast.
- Kept the homepage portrait cards readable on desktop, tablet and mobile.
- Added one scoped stylesheet: `assets/css/v9.34-ambassador-refinement.css`.

## Scope
- Only the homepage ambassador module and the professional player collaboration page were changed, plus the shared stylesheet and version notes.
- Existing navigation, product catalog, partnership pages, manufacturing pages and other website sections were preserved.
- This package is a local release candidate; it has not been deployed to the live website.


# V9.35 — Buyer Resources Navigation and Content Refinement

## Navigation
- Renamed the global navigation label from `Resources` to `Buyer Resources`; Chinese label is `采购资源`.
- Updated the resources mega-menu introduction and descriptions to focus on sourcing decisions and practical product knowledge.
- Retained only two primary links in the Buyer Resources menu:
  - Buyer Guide — prepare a structured golf club sourcing brief.
  - Technical Notes — understand club engineering, manufacturing processes and customization.
- Removed duplicated links to Club Configurator, Manufacturing Capabilities and Quality Control from this menu. Those remain discoverable under their relevant Golf Clubs and Manufacturing navigation groups.
- Preserved the stable `data-nav-group="resources"` key so existing navigation scripts continue to work.
- Kept the existing dark mega-menu visual style and added a balanced two-card desktop layout. Mobile menu remains a single-column list.

## Content
- Repositioned `insights.html` as `Technical Notes` in the page title, SEO metadata, page introduction and breadcrumb. The file path remains unchanged to preserve existing links.
- Reframed the page description as a focused collection of practical technical notes, not a broad content hub.
- Added Chinese translations for the page hero, breadcrumb, topic category labels and closing CTA to keep the bilingual experience consistent.
- Added a reciprocal Technical Notes cross-link to the Buyer Guide before its final enquiry CTA.

## Scope
- Updated the shared Buyer Resources menu on 23 HTML pages.
- Updated `insights.html` and `buyer-guide.html` page content.
- Added:
  - `assets/css/v9.35-buyer-resources-navigation.css`
  - `assets/css/v9.35-resource-crosslink.css`
- No product pages, product data, partnership structures or manufacturing claims were changed.
- This is a local website package and has not been deployed to the live domain.


# V9.36 — Manufacturing Product Development Photo Integration

## Manufacturing page
- Replaced the illustrative engineering workspace image in `manufacturing.html` with the user-provided PGM product development photograph.
- Placement: `R&D & Engineering` section, within the main Product Development feature.
- Kept the original 16:9 composition and converted the 1920 × 1080 source to optimized WebP for faster website delivery.
- Updated the image alt text and visual label to identify the image as a PGM product development scene.
- Updated the bilingual feature copy to describe collaborative review of golf club samples, product details and development direction.
- Removed the illustrative-image label from this specific photo. Other illustrative visuals and pending material slots were not changed.

## Responsive presentation
- Added `assets/css/v9.36-product-development-photo.css`.
- Preserved the full-width image treatment within the existing engineering feature.
- Added a 16:9 mobile image frame so the photograph remains clear and balanced on smaller screens.

## Asset source
- `assets/images/owner-provided/pgm-product-development-meeting.webp`
- Source: user-provided photograph, 1920 × 1080.

## Scope
- Only the Manufacturing page, its new local photo asset, the scoped stylesheet, asset-source notes and version documentation were updated.
- Existing Buyer Resources navigation and all other V9.35 pages and content remain unchanged.
- This is a local website package and has not been deployed to the live domain.


# V9.37 — Buyer Resources Mega Menu Alignment

## Navigation alignment
- Rebuilt the Buyer Resources mega-menu content into two independent link groups:
  - Buyer Guide / 采购指南
  - Technical Notes / 技术专题
- Each group now uses the same `.mega-link-group-v921` and `.mega-link-list-v921` structure as the Partnerships and Manufacturing mega-menus.
- Removed the V9.35 one-column/two-card layout hook and its dedicated stylesheet.
- Buyer Resources now uses the shared V9.21 mega-menu grid: two aligned content columns between the intro panel and the right-side feature card.
- Kept the existing dark navy background, gold accents, intro text, right-side contact card, destinations, and navigation interaction.
- Preserved the mobile single-column navigation behavior.

## Scope
- Updated the Buyer Resources mega-menu on all 23 HTML pages where the shared navigation appears.
- No page content, product information, manufacturing information, partnership structure, or enquiry forms were changed.
- Based on V9.36; the user-provided Manufacturing product-development photo remains included.
- This is a local website package and has not been deployed to the live domain.


# V9.38 — PGM and YIBANG Brand Architecture Refinement

## Header and footer identity
- Updated the shared brand lockup on all 23 pages that contain the site header and footer.
- PGM now carries its bilingual brand meaning directly beneath the PGM mark:
  - English: `PRO GOLF MASTER`
  - Chinese: `专业高尔夫装备大师`
- YIBANG is now identified separately as the manufacturing partner:
  - English: `GOLF CLUB DESIGN & MANUFACTURING`
  - Chinese: `高尔夫球杆设计与制造`
- Preserved the original PGM text mark, vertical gold divider, dark navy visual identity, existing header navigation and all destinations.
- Added responsive sizing for desktop and mobile layouts.

## Brand relationship copy
- Updated the footer introduction in English and Chinese to distinguish PGM as the golf equipment brand and YIBANG as the partner supporting golf club design, product development, assembly, quality control and coordinated manufacturing for OEM / ODM projects.
- Corrected the Brand Heritage Chinese translation of `PGM · PRO GOLF MASTER` to `PGM · 专业高尔夫装备大师`.

## Scope
- Updated 23 shared headers and 23 shared footer brand lockups.
- Updated the shared bilingual footer introduction and the existing i18n brand translation.
- Added `assets/css/v9.38-brand-architecture.css`.
- Preserved the V9.37 Buyer Resources navigation alignment and the V9.36 user-provided Manufacturing product-development photograph.
- No product data, product specifications, manufacturing claims elsewhere, or page navigation destinations were changed.
- This is a local website package and has not been deployed to the live domain.


# V9.39 — Official PGM Logo Integration

## Official PGM emblem
- Integrated the user-provided PGM red-and-black emblem into the shared site header and footer.
- The original supplied image contains the emblem symbol only, without the PGM letters or brand-meaning text. The emblem is therefore used as the graphic mark alongside the existing `PGM` wordmark.
- Cropped only the large transparent canvas around the visible mark; all visible logo pixels and their original red/black colors are preserved.
- Added a small white tile behind the mark so its black portions remain legible against the site's dark navy header and footer. No recoloring or redesign of the supplied mark was performed.
- Both English and Chinese site modes use the exact same image asset.

## Bilingual brand wording
- English: `PGM` / `PRO GOLF MASTER`
- Chinese: `PGM` / `专业高尔夫装备大师`
- Manufacturing partner identity remains separate:
  - English: `YIBANG` / `GOLF CLUB DESIGN & MANUFACTURING`
  - Chinese: `YIBANG` / `高尔夫球杆设计与制造`

## Responsive implementation
- Updated the shared logo lockup in all 23 pages containing the common header and footer.
- Added responsive sizing for the emblem tile and brand lockup.
- Added `assets/css/v9.39-official-pgm-logo.css`.
- Added `assets/images/brand/pgm-official-emblem.png`.

## Scope
- Based on V9.38. Preserved the V9.37 Buyer Resources menu alignment and the V9.36 user-provided Manufacturing product-development photograph.
- No navigation destinations, product content, manufacturing claims, partnership structures or enquiry forms were changed.
- This is a local website package and has not been deployed to the live domain.


# V9.40 — Direct Full PGM Logo Replacement

## Logo replacement
- Removed the previously rebuilt logo lockup approach.
- Replaced the shared header and footer brand area with the exact user-provided full logo file:
  - `assets/images/brand/pgm-official-full-logo-white.png`
- The uploaded image is used directly, without cropping, redrawing, recoloring or symbol-only extraction.
- The same full logo image is used in both English and Chinese site modes, exactly as requested.

## Brand wording scope
- The logo area now only shows the official PGM logo image.
- The previous `YIBANG` / `GOLF CLUB DESIGN & MANUFACTURING` wording has been removed from the logo position.
- Footer supporting copy remains as a general brand / cooperation description, not as part of the logo itself.

## Responsive implementation
- Updated the shared logo presentation on all 23 pages containing the common header and footer.
- Added `assets/css/v9.40-full-logo-direct.css` for responsive logo sizing.

## Scope
- Based on V9.39, while replacing the logo treatment to match the user instruction precisely.
- Preserved the V9.37 Buyer Resources menu alignment and the V9.36 user-provided Manufacturing product-development photograph.
- No navigation destinations, product content, manufacturing claims, partnership structures or enquiry forms were changed.
- This is a local website package and has not been deployed to the live domain.


# V9.41 — PGM and YIBANG Header Lockup

## Header and footer brand layout
- Rebuilt the shared brand lockup to match the user's two reference screenshots.
- Left: the exact original PGM logo image containing the red emblem, white `PGM` wordmark and `Pro Golf Master` wording.
- Center: a slim vertical gold divider.
- Right: `YIBANG` with a manufacturing descriptor below.
- English descriptor: `GOLF MANUFACTURING`.
- Chinese descriptor: `高尔夫球杆制造`.
- The PGM logo image is the exact original user-provided file. Its SHA-256 matches the uploaded source; it has not been cropped, redrawn, recolored, or otherwise modified.
- The same original PGM logo is used in both English and Chinese site modes. Only the YIBANG descriptor switches language.

## Implementation
- Updated the shared header and footer lockup on all 23 pages containing the site-wide header/footer.
- Removed the previous direct-logo-only lockup and the separate `GOLF CLUB DESIGN & MANUFACTURING` wording from the logo area.
- Added `assets/css/v9.41-pgm-yibang-lockup.css` for desktop, tablet and mobile sizing.
- Kept the existing PGM logo asset at `assets/images/brand/pgm-official-full-logo-white.png`.

## Validation
- 25 HTML pages checked.
- 23 header lockups and 23 footer lockups updated.
- No missing local file references, broken internal fragments, duplicate HTML IDs, CSS syntax errors or JavaScript syntax errors detected.

## Scope
- Based on V9.40.
- Preserved the V9.37 Buyer Resources menu alignment and V9.36 Manufacturing page imagery.
- No product data, manufacturing capability statements, partnership page content, enquiry forms or navigation destinations were changed.
- This is a local website package and has not been deployed to the live domain.


# V9.42 — Homepage Real Product Hero

## Homepage first-screen banner
- Replaced the homepage's AI-concept driver placeholder with a new PGM product-led hero visual.
- The visual uses the user's supplied MG088 black-and-gold driver image as the real product subject.
- The driver head and upper hosel/shaft were separated from the supplied white-background product image for composition. The product artwork, visible PGM mark, colors and geometry were not redrawn or regenerated.
- Created a premium dark navy / black / champagne-gold background with AI generation. The AI-generated portion contains only the background environment and lighting; it does not depict or replace the product.
- Added dedicated desktop and mobile hero image assets:
  - `assets/images/home/pgm-home-hero-desktop-v1.webp` (1920 × 900)
  - `assets/images/home/pgm-home-hero-mobile-v1.webp` (900 × 1500)
  - `assets/images/home/pgm-mg088-real-driver-cutout.png` (transparent product cutout)
- Added a responsive `<picture>` source so mobile devices load the tall composition rather than cropping the desktop banner.
- Removed the old AI-concept visual disclaimer from the hero.

## Homepage copy and calls to action
- English headline: `ENGINEERED FOR THE GAME. BUILT FOR YOUR MARKET.`
- Chinese headline: `为高尔夫而设计，为全球市场而打造。`
- Kept the existing bilingual supporting paragraph and first CTA to Products.
- Changed the second CTA to `BECOME A PARTNER` / `开启合作`, linking to `partnership-solutions.html`.
- Preserved the shared site navigation, logo lockup, proof strip and all homepage sections below the hero.

## Responsive styling
- Added `assets/css/v9.42-home-hero.css`.
- Adjusted the desktop image crop to keep the real product visible at common desktop aspect ratios.
- Added a mobile-specific typography and image treatment.

## Scope
- Based on V9.41.
- No other page content, navigation destinations, product catalog data, manufacturing statements or partnership claims were changed.
- This is a local website package and has not been deployed to the live domain.


## V9.42.6 — Holographic brand hero thumbnail
- Replaced the homepage's static fallback thumbnail with the user-provided PGM holographic product-development meeting image.
- Desktop and mobile use dedicated crops from the same supplied image.
- English and Chinese hero brand-film video sources remain unchanged.
- All other site pages, navigation, header/footer branding and content are preserved from V9.42.5.


## Latest homepage update — OEM / ODM
The homepage section 02 is now positioned as a golf club OEM / ODM manufacturing entry point. See `OEM-HOMEPAGE-UPDATE.md`. Product catalogue pages remain unchanged. Local preview only; not deployed.


## Latest local update — Six Core Golf-Club Categories
See `V9.42.23-SIX-CATEGORY-UPDATE.md` for the six-category navigation and Park Golf category handling.


## Latest local update — V9.42.26
See `V9.42.26-CLUB-CATEGORY-ARCHITECTURE.md` for the revised golf club category architecture.


## Current local draft — V9.42.26
The golf club taxonomy is organized into six core types: Drivers, Fairway Woods, Hybrids, Irons, Wedges and Putters. Complete Golf Club Sets and Park Golf Clubs are additional ranges; Junior Golf Clubs remains an additional player segment. See `V9.42.26-CLUB-CATEGORY-ARCHITECTURE.md`.


## Latest local update — V9.42.27
All nine product category cards now share one visual system. Park Golf Clubs is the ninth and final category. See `V9.42.27-UNIFORM-NINE-CATEGORIES.md`.


## Latest local update — V9.42.28
The nine homepage and catalogue category cards now use the corresponding real PGM product photos supplied by the user. Image framing is standardized to square 1:1. See `V9.42.28-REAL-PRODUCT-CATEGORY-IMAGES.md`.


## Latest local update — V9.42.29
Nine category images have been retouched into a consistent clean white studio presentation and applied to the homepage and Products catalogue. See `V9.42.29-REFINED-PRODUCT-IMAGES.md`.


## Latest local update — V9.42.30
Final homepage category-card polish: distinct Chinese eyebrow labels, clearer OEM / ODM partner copy, hover/focus-only corner arrows, and centered product-image framing without aggressive cropping. See `V9.42.30-CHANGELOG.md`.


## Latest local update — V9.42.32
The right-side label on the nine homepage category cards now reads `支持定制` in Chinese and `CUSTOM OPTIONS` in English. All other card styling and links remain unchanged.


## Latest local update — V9.42.33
The partnership module now prioritizes Private Label Solutions and Custom OEM / ODM Development, followed by PGM Brand Distribution and Strategic Brand Collaboration. The homepage and partnership overview page use the same order; partnership navigation and footer links were aligned. No deployment was performed.


## Latest local update — V9.42.34
The OEM / ODM detail page now explains OEM vs ODM, shows six development and manufacturing capabilities with company-provided imagery, presents a six-stage workflow, and distinguishes in-house engineering / assembly / QC from partner-supported specialist processing. Partnership page numbering is aligned with the homepage order. No deployment was performed.
