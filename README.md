# Sophia's Chromatic Playground portfolio

A local portfolio with an interactive expression collage in the opening (concept C), a single red-top portrait in About (concept A), and thriftAssist as the only featured project.

## Run locally

Node.js 16+ is required. No dependencies to install.

```sh
cd ~/Desktop/PERSONALPROJECTS/sophia-portfolio
npm start
```

Open **http://localhost:5173**. Refresh after edits. Stop with **Ctrl+C**.

If the port is busy, run `PORT=5174 npm start`, then visit http://localhost:5174.

## Editing

- `index.html`: home, biography, experience, contact, and a preview linking to the work.
- `work.html`: the project gallery; each project has a linked card. Currently lists only thriftAssist.
- `thriftassist.html`: thriftAssist’s detail page, with the Dream Closet opening, Outfit Edit introduction, and Style Lab features.
- `assets/thrift-*.png`: the three selected fashion concept illustrations.
- `styles.css`: colors, typography, responsive composition, foreground masking, and sticker treatments.
- `script.js`: scroll parallax, portrait selection/hover tilt, section reveals, progress line, and motion preferences.
- `assets/portrait-*.png`: transparent cutout portraits prepared from the supplied photos.
- `assets/playground-layered.png`: scenic background aligned to the chosen collage.
- `assets/playground-foreground.png`: transparent loop, ramp, staircase, leaves, striped sphere, and letter sculptures placed in front of portraits.
- `assets/Sophia_Okoruwa_Resume.pdf`: downloadable resume.

The opening uses the same 1672:941 coordinate space for the background, portrait placement, and foreground. The scenery overlays the photos, keeping them tucked into the world. Portrait interactions remain beneath the foreground, preserving the intended composition. On phones the collage stacks below the heading.

System reduced-motion preferences and the Motion button disable parallax, hover tilt, section movement, and the scrolling ticker. Portrait controls work with keyboard focus and Enter/Space. If JavaScript is disabled, all content remains visible.

Typography uses Google Fonts with local fallbacks. The landscape and cutouts are bundled, so no remote image service is needed. The project illustrations are labeled as concept artwork. They are distinct from the actual thriftAssist interface. The only featured project is thriftAssist. Work navigation and the home opening CTA link to the `work.html` gallery. The thriftAssist card opens `thriftassist.html`; its All Projects links return to the gallery. About and Contact return to their home-page sections.

To add a project, add a sibling `<li>` inside `.project-list` in `work.html`, linking to a new detail page, and update the displayed project count. No placeholder projects are shown.

## Validation

`npm run check` verifies JavaScript syntax. Browser checks cover desktop/phone layouts, image loading, portrait selection, navigation, motion pause, and parallax.

## Content and assets

Experience, education, and skills come from the supplied resume; thriftAssist details were checked against the local project README and source. Links point to the supplied GitHub and LinkedIn profiles. The original photo files are unchanged.

The built-in image-generation tool prepared background-removal cutouts and scene layers from the selected visual concept. See `ASSET_PROMPTS.md` for the asset briefs.

This project has not been published or deployed.
