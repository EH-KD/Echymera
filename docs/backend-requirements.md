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
