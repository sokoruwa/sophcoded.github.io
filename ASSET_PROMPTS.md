# Asset preparation briefs

Tool: built-in image generation. Originals were retained. Assets are bundled under `assets/`.

## Portrait cutouts

Source files: `IMG_3582.JPG` (red jacket), `IMG_8617.HEIC` (smiling car portrait), `IMG_7672.heic` (glasses), and `IMG_2541.jpg` (current About portrait; replaces the earlier `IMG_3721.JPG` cutout), from the supplied soph folder. HEIC inputs were previewed through Quick Look.

Prompt: Background extraction / identity preservation. Remove only the surroundings and other people; retain the source person's face, expression, eye direction, skin tone, proportions, hair, clothes, visible hands, jewelry, lighting and texture. No beautification or restyling. Keep the head and upper torso on a transparent canvas with minimal padding. Natural alpha edges, no white border, shadows, graphics, or text.

## Scene background

Reference: the selected C / Expression Playground mockup.

Prompt: Create a background plate in the same canvas and geometry. Remove the three portrait stickers, typography, navigation, CTA, and caption. Naturally continue the scenery beneath removed portraits. Preserve the blue loops, green arch, red staircase, striped sphere, yellow ramp, cream letter sculptures, checkerboard floor, and leaves in their original positions and scale. Keep the left third textured yellow. No new people, camera angle, or composition.

## Foreground layer

Reference: the selected C / Expression Playground mockup.

Prompt: Extract the front blue tube arcs, yellow ramp, foreground red staircase, cream S and O sculptures, front leaves, and striped sphere onto a transparent canvas matching the reference. Preserve their positions, proportions, illumination, and perspective. Remove portraits, UI/text, sky, and distant architecture. Transparent holes where portraits and background were. Do not recompose, recenter, zoom, or add borders/shadows.

These foreground pieces mask the photo cutouts in the actual HTML layout; the heading and navigation are real HTML, not baked into a screenshot.

## About portrait update

Asset: `assets/portrait-about-red-top.png`. Tool: built-in image generation, background-extraction. Edit target: `IMG_2541.jpg`. Prompt: Remove only the restaurant/city surroundings, chair, windows, lights, signage, and other people. Preserve Sophia’s face, expression, eye direction, skin tone, proportions, long hair, red clothing, arms, earrings, original lighting, and photographic detail. No beautification or restyling. Keep the full visible head and upper torso with natural alpha edges, minimal padding, and no border, shadow, graphics, or text.

## thriftAssist project artwork

The user selected concepts 1, 2 and 5. Built-in image generation produced these landscape fashion illustrations, copied locally into the project:

- `assets/thrift-outfit-edit.png`: Editorial collage with dark indigo barrel-leg denim, a butter-yellow asymmetrical knit, a cherry-red leather bag, silver flats, torn cream paper, cobalt marks, and forest green background.
- `assets/thrift-dream-closet.png`: Surreal walk-in closet with cobalt tubular rails, vintage brown leather jacket, red mesh layer, cream vest, checked skirt, burgundy cowboy boots, metallic bag, red sculptural displays, checkerboard floor, and green arch.
- `assets/thrift-style-lab.png`: Chunky cobalt retro computer on a cream/yellow set, displaying a red cardigan, charcoal skirt, silver Mary Janes and burgundy bag; surrounding fabric swatches and denim.

Shared prompt: Standalone art-directed visual for thriftAssist, an AI stylist for secondhand fashion, within a playful maximalist portfolio. Landscape 3:2, realistic clothing textures, curated expressive wearable thrifted fashion, palette of warm cream, sunflower yellow, forest green, cobalt and tomato red. No people or faces, no surrounding website/browser screenshot, no watermarks. These are concept illustrations, not captures of the working app.
