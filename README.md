# Hopewell "What's Next" — installable web app

A mobile-friendly, installable companion app for the six-week "What's Next"
sermon series. No backend, no database — everything runs in the browser and
each person's checkbox progress + notes are saved privately on their own
phone (via `localStorage`). Nothing is sent anywhere or shared between users.

## What's in this folder

```
index.html          the app shell
styles.css           all styling
app.js                content (all 6 weeks) + app logic
manifest.json         makes it installable ("Add to Home Screen")
service-worker.js     caches the app so it works offline after first load
icons/                app icons generated from the Hopewell logo mark
```

## 1. Test it locally (optional but recommended)

You already have Python, so from inside this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser. Try clicking through a
week, checking a box, adding a note, and reloading the page — your checks
and notes should still be there (that's `localStorage` working).

## 2. Push it to GitHub

If you don't already have a repo for this:

```bash
cd path/to/this/folder
git init
git add .
git commit -m "Initial commit: What's Next app"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

If you already made the repo on github.com first, skip `git init` and just
`git remote add origin ...` then push.

## 3. Turn on GitHub Pages

1. On your repo's GitHub page, go to **Settings → Pages**.
2. Under "Build and deployment," set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`.
4. Save. GitHub will give you a URL like:
   `https://<your-username>.github.io/<repo-name>/`
5. It usually takes 1–2 minutes to go live the first time.

That's it — no build step, no server to maintain.

## 4. Getting it onto people's phones

Share the GitHub Pages link (put it in the bulletin, a text, a QR code,
etc.). Once someone opens it:

- **iPhone (Safari):** tap the Share icon → "Add to Home Screen."
- **Android (Chrome):** tap the ⋮ menu → "Install app" (or Chrome may show
  an automatic "Add to Home Screen" banner).

Either way, it now behaves like a real app: its own icon, opens full-screen,
and works even with no signal after the first visit.

## 5. Updating content later

All six weeks' content lives in the `WEEKS` array near the top of `app.js` —
just edit the text there (title, scripture, "Now What" copy, etc.), commit,
and push. GitHub Pages redeploys automatically within a minute or two.

If you change `app.js`, `styles.css`, or `index.html`, it's a good idea to
bump the cache name in `service-worker.js` (e.g. `hopewell-whatsnext-v1` →
`v2`) so returning users actually get the update instead of a cached old
version.

## 6. Optional: a custom domain

If you'd rather it live at something like `whatsnext.hopewellumc.org`, that's
a CNAME record in your DNS plus a "Custom domain" entry in the same
Settings → Pages screen. Not required — the default github.io link works
fine on its own.
