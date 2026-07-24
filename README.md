# Mehedi Hasan — Portfolio Site

A 4-page static site: `index.html` (About), `research.html`, `publications.html`, `cv.html`, all sharing `style.css`. No build step — open any `.html` file directly in a browser, or host the folder as-is.

## Updating content

Each page is plain HTML with the visible text right in the file — search for the sentence you want to change and edit it directly. A few notes:

- **Adding a new publication:** copy an existing `<li>...</li>` block inside the relevant `<ul class="pub-list ...">` in `publications.html` and edit the text.
- **Adding a new job/experience entry:** copy a `<div class="timeline-item">...</div>` block in `research.html` (or `<div class="cv-entry">...</div>` in `cv.html`) and edit.
- **Updating the downloadable CV PDF:** replace `assets/Mehedi_Hasan_CV.pdf` with your new file (keep the same filename, or update the `href` in `index.html` and `cv.html` if you rename it).
- **Colors/fonts:** all defined once at the top of `style.css` under `:root` — change a value there and it updates everywhere.

You're also welcome to just paste your updated CV text into a chat with Claude and ask it to update these files for you.

## Adding your photos to the Gallery page

`gallery.html` has four sections — **Lab activities**, **Field & social activities**, **International exposure**, **Achievements & awards** — each a carousel of placeholder slides ready to swap for real photos.

1. Put your image files in the `assets/gallery/` folder. Use the exact filenames the placeholders suggest (`lab-01.jpg`, `lab-02.jpg`, `field-01.jpg`, `intl-01.jpg`, `award-01.jpg`, etc.) — or any name you like, as long as you match it in step 2.
2. In `gallery.html`, find the placeholder block you want to replace. It looks like this:
   ```html
   <div class="carousel-slide">
     <div class="slide-placeholder">
       ...
       <span class="slide-hint">Replace with <code>lab-01.jpg</code></span>
     </div>
     <p class="slide-caption">e.g. "PCR setup, AMR Laboratory"</p>
   </div>
   ```
   Replace the whole `<div class="slide-placeholder">...</div>` block with a single image tag:
   ```html
   <div class="carousel-slide">
     <img src="assets/gallery/lab-01.jpg" alt="PCR setup in the AMR Laboratory">
     <p class="slide-caption">PCR setup, AMR Laboratory</p>
   </div>
   ```
3. To add more photos than there are placeholders, just copy a whole `<div class="carousel-slide">...</div>` block and paste it before the closing `</div>` of that category's `.carousel-track`. The carousel arrows and dots update automatically — no other code changes needed.
4. **Photo tips:** landscape/wide photos (16:9-ish) look best since slides crop to that shape. Keep individual files under ~500KB (resize/export at web quality) so the page loads fast — most phone photos will need resizing first.
5. You're also welcome to upload your photos directly to a Claude chat and ask it to drop them into the right slides for you.

## Hosting it online (free options)

1. **GitHub Pages** — create a repo, upload this folder's contents, enable Pages in repo Settings → Pages → set source to the main branch. Your site will be live at `https://<username>.github.io/<repo>/`.
2. **Netlify Drop** — go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag this folder in. You get a live URL instantly, no account required (create one later to keep it permanently and get a custom domain).
3. **Cloudflare Pages / Vercel** — similar drag-and-drop or Git-based deploy flow, also free for a personal static site.

For a PhD application, a GitHub Pages or Netlify link you can drop into an email signature or a professor-outreach email works well.
