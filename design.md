# Monmouth County Explorer — Design Document

## Overview
A single-page static website that displays an interactive map of Monmouth County, New Jersey, with named Points of Interest (POIs). Clicking a marker opens a popup with a description and expandable historical background of that location.

## Architecture

### File separation
HTML, CSS, and JavaScript are kept in separate files (`index.html`, `style.css`, `script.js`) for maintainability. No build step or server is required — just open `index.html` in a browser.

### Libraries
| Library | Version | Purpose | License |
|---------|---------|---------|---------|
| [Leaflet.js](https://leafletjs.com) | 1.9.4 | Interactive map rendering | BSD-2 |

### Tile Provider
- **CARTO Positron** (free, no API key required) — clean, light theme  
  `https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png`  
  Data © OpenStreetMap contributors.

## Map Configuration
- **Center:** 40.2673° N, 74.1313° W (geographic center of Monmouth County, NJ)
- **Default zoom:** 11 (shows the full county)

## Points of Interest
Ten curated POIs covering the major historical, cultural, and scientific landmarks of Monmouth County:

| # | Name | Category |
|---|------|----------|
| 1 | Monmouth Battlefield State Park | Historic Battlefield |
| 2 | Sandy Hook | National Recreation Area |
| 3 | Twin Lights of Navesink | Historic Lighthouse |
| 4 | Asbury Park Convention Hall | Music & Culture |
| 5 | Allaire Village | Historic Village |
| 6 | Freehold Raceway | Historic Racetrack |
| 7 | Long Branch Boardwalk | Historic Resort |
| 8 | Monmouth University (Wilson Hall) | Landmark / University |
| 9 | Fort Hancock & Sandy Hook Lighthouse | Military History |
| 10 | Holmdel Park & Bell Works | Science & Innovation |

## UX Design
- **Custom colored pin markers** — each POI has a unique emoji icon and color to visually distinguish categories.
- **Popups** — clicking a marker opens a popup with:
  - Category badge
  - Short description (always visible)
  - "Show History" toggle button — expands/collapses a longer historical narrative without requiring page navigation
- **Light theme** — white/cream popups, green header, CARTO Positron tiles for a clean, readable appearance.
- **No external dependencies beyond Leaflet CDN** — no build step, works by opening `index.html` directly.

## File Structure
```
index.html   — HTML shell (structure only)
style.css    — all styles / light theme
script.js    — map initialization, POI data, marker & popup logic
design.md    — this document
AGENTS.md    — project rules
```

## Future Enhancements
- Add search/filter by category
- Add a sidebar panel listing all POIs
- Add photo galleries within popups
- Support mobile-optimized layout
- Add more POIs (historic homes, churches, parks)
