# Backend requirements discovered from frontend

Running list. Each item is added when a frontend feature implies backend work.
At the end of the frontend phase this list drives the backend design
(architecture, DB schema, API endpoints, auth, media storage, admin).

## Site-wide
1. **Editable site settings**: studio name, tagline, description, contact email, social links currently live in `src/lib/site.ts`. An admin should be able to edit these.
2. **Base URL configuration**: `NEXT_PUBLIC_SITE_URL` env var drives `metadataBase` (canonical/OG URLs). Needs per-environment config.

## Media
3. **Media storage + CDN**: images and video will be hosted outside the repo. Needs upload, storage, and stable public URLs.
4. **Video delivery**: hero and case-study videos need adaptive streaming (e.g. HLS), poster frames and thumbnails generated from uploads.

## SEO
5. **Per-page/per-project SEO metadata** (title, description, Open Graph image) should be stored with each project and returned by the API for `generateMetadata`.

## Homepage content
6. **Editable homepage content**: hero headline, description, CTAs and the hero media choice (image or video) currently live in `src/data/home.ts`. An admin should be able to edit them and switch the hero between image and video.
7. **Remote media hosts**: when media moves to a CDN, its domain must be added to `images.remotePatterns` in `next.config.ts`, or `next/image` will refuse to load it.
8. **Video posters are mandatory**: every video needs a poster still (shown instantly and used for reduced-motion / data-saver visitors). The upload pipeline should generate or require one.
9. **Smaller video renditions**: the hero video should have a lighter mobile version. Transcoding belongs to the media pipeline (see item 4).

## Projects (portfolio)
10. **Projects CRUD**: title, slug (unique, URL-safe), category, description, optional client, year, featured flag, services, credits. Source: `src/types/project.ts`.
11. **Categories**: currently a fixed list in `projectCategories`. Decide whether categories are a table (admin-editable) or a fixed enum; the Work page filter will need them.
12. **Featured selection and order**: homepage "Featured work" shows projects flagged `featured`, in array order. Needs an explicit sort/position field so an admin can control which project leads.
13. **Thumbnail focal point**: cards crop the same thumbnail at different aspect ratios (4:3, 16:9, 21:9). Each image needs an optional focal point (e.g. `object-position`) so the crop keeps the subject in frame.
14. **Media relations**: a project owns one thumbnail, one hero (image or video) and an ordered gallery. Media records need alt text, dimensions, type and poster references.
