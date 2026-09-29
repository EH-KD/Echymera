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
