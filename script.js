// Initialize map centered on Monmouth County, NJ
const map = L.map('map', {
  center: [40.2673, -74.1313],
  zoom: 11,
  zoomControl: true
});

// Light tile layer — CARTO Positron (free, no API key needed)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// POI Data for Monmouth County
const pois = [
  {
    name: "Monmouth Battlefield State Park",
    lat: 40.2711,
    lng: -74.3949,
    category: "Historic Battlefield",
    icon: "⚔️",
    color: "#c0392b",
    description: "Site of the Battle of Monmouth on June 28, 1778 — one of the largest engagements of the American Revolutionary War. The park preserves over 1,800 acres of farmland and battlefield terrain.",
    history: "On June 28, 1778, General George Washington led Continental Army forces against British troops commanded by General Henry Clinton. The battle ended inconclusively but became famous for Mary Ludwig Hays — 'Molly Pitcher' — who reportedly carried water to soldiers and took over firing a cannon after her husband fell. It was one of the last major battles in the Northern theater of the war."
  },
  {
    name: "Sandy Hook",
    lat: 40.4660,
    lng: -74.0032,
    category: "National Recreation Area",
    icon: "🏖️",
    color: "#2980b9",
    description: "A 1,665-acre barrier peninsula forming the northern tip of the Jersey Shore. Part of the Gateway National Recreation Area, Sandy Hook offers beaches, historic structures, and spectacular views of the New York City skyline.",
    history: "Sandy Hook has been strategically significant for centuries. Henry Hudson spotted it in 1609. During the Revolutionary War, Loyalists used it as a base of operations. Fort Hancock was established here in 1895 as a key coastal defense installation and remained active through the Cold War era, housing Nike missile batteries. The Sandy Hook Lighthouse, built in 1764, is the oldest operating lighthouse in the United States."
  },
  {
    name: "Twin Lights of Navesink",
    lat: 40.3948,
    lng: -73.9872,
    category: "Historic Lighthouse",
    icon: "🔦",
    color: "#8e44ad",
    description: "A pair of historic light towers atop the Navesink Highlands in Atlantic Highlands, offering panoramic views of Sandy Hook Bay and the Atlantic Ocean. One of the most powerful lighthouses on the East Coast.",
    history: "The first lighthouse at this location was built in 1828. The current brownstone fortress-like structure was completed in 1862. In 1898, Guglielmo Marconi used the Twin Lights as the site from which radio transmissions reporting America's Cup yacht race results were sent — one of the first practical demonstrations of wireless telegraphy in the United States. The site is now a State Historic Site and museum."
  },
  {
    name: "Asbury Park Convention Hall",
    lat: 40.2201,
    lng: -74.0104,
    category: "Music & Culture",
    icon: "🎵",
    color: "#27ae60",
    description: "An iconic boardwalk landmark and concert venue in Asbury Park, famously associated with the New Jersey rock music scene. The stone building stretching over the beach has hosted legendary performances for over a century.",
    history: "Convention Hall opened in 1930 and quickly became a centerpiece of Asbury Park's golden age as a resort destination. In the 1970s, the venue became the proving ground for a new wave of rock musicians, most notably Bruce Springsteen, whose raw performances at the Stone Pony nearby and at Convention Hall helped ignite a national music movement. After years of decline and Hurricane Sandy damage in 2012, the hall was extensively restored and reopened, revitalizing the entire Asbury Park waterfront."
  },
  {
    name: "Allaire Village",
    lat: 40.1618,
    lng: -74.1248,
    category: "Historic Village",
    icon: "🏭",
    color: "#e67e22",
    description: "A preserved 19th-century iron-making community within Allaire State Park. The historic village features original industrial and residential buildings from the 1830s, offering a glimpse into early American industry.",
    history: "James P. Allaire purchased the Howell Works bog iron furnace in 1822 and transformed it into a self-sufficient industrial village employing over 400 workers. The village produced iron goods including pipes for New York City water mains and parts for steamships. When the bog iron industry collapsed due to competition from Pennsylvania's anthracite iron furnaces, Allaire closed the furnace in 1846. Allaire himself used the estate as a country retreat until his death in 1858. The village was later preserved and is now a popular living history museum."
  },
  {
    name: "Freehold Raceway",
    lat: 40.2629,
    lng: -74.2839,
    category: "Historic Racetrack",
    icon: "🏇",
    color: "#16a085",
    description: "America's oldest harness racing track, located in the heart of Freehold Borough. The half-mile oval has been in continuous operation since 1853, making it a living piece of American sporting history.",
    history: "Racing at Freehold dates to 1853, predating the Civil War. The track became famous during harness racing's golden era in the late 19th and early 20th centuries. The famous trotter Dan Patch and many other legendary horses competed here. Freehold Raceway survived the decline of harness racing in other areas and remains one of the few active harness tracks in New Jersey, hosting live racing and simulcast wagering year-round."
  },
  {
    name: "Long Branch Boardwalk",
    lat: 40.2987,
    lng: -73.9871,
    category: "Historic Resort",
    icon: "🌊",
    color: "#2980b9",
    description: "Once the most fashionable seaside resort in 19th-century America, Long Branch was the summer destination of choice for seven U.S. Presidents and Gilded Age society. Today its oceanfront remains a popular attraction.",
    history: "Long Branch began attracting wealthy visitors in the 1820s. By the 1860s it had become the 'Summer Capital of the United States.' Presidents Ulysses S. Grant, Rutherford B. Hayes, James Garfield, Chester Arthur, Benjamin Harrison, William McKinley, and Woodrow Wilson all vacationed here. In 1881, President James Garfield was brought to Long Branch to recover after being shot; he died there on September 19, 1881. The resort declined in the early 20th century but has undergone significant redevelopment."
  },
  {
    name: "Monmouth University (Wilson Hall)",
    lat: 40.3150,
    lng: -74.0180,
    category: "Landmark / University",
    icon: "🏛️",
    color: "#7f8c8d",
    description: "The centerpiece of Monmouth University's campus in West Long Branch, Wilson Hall is a stunning Gilded Age mansion that served as inspiration for Jay Gatsby's mansion in the 1974 film adaptation of F. Scott Fitzgerald's 'The Great Gatsby.'",
    history: "Wilson Hall was built in 1929 for Hubert Templeton Parson, president of F.W. Woolworth Company, as a summer estate. The 130-room mansion features interiors modeled after the Palace of Versailles. Muriel Guggenheim later purchased the estate. It was sold to become the campus of Monmouth College (now University) in 1956. The hall was used as the exterior of Gatsby's mansion in the 1974 film starring Robert Redford and Mia Farrow."
  },
  {
    name: "Fort Hancock & Sandy Hook Lighthouse",
    lat: 40.4674,
    lng: -74.0078,
    category: "Military History",
    icon: "🏰",
    color: "#c0392b",
    description: "The oldest operating lighthouse in the United States (1764) alongside the remains of Fort Hancock, an Army post that defended New York Harbor from the Civil War through the Cold War.",
    history: "The Sandy Hook Lighthouse was built in 1764 by the Province of New York to guide ships into New York Harbor. It survived the Revolutionary War despite British occupation of the peninsula. Fort Hancock grew up around it from 1895 onward, featuring Endicott-era disappearing gun batteries and later Nike Ajax and Nike Hercules missile batteries during the Cold War. The fort was deactivated in 1974 and transferred to the National Park Service. Today visitors can tour the lighthouse and explore the remains of Cold War-era missile launch facilities."
  },
  {
    name: "Holmdel Park & Bell Works",
    lat: 40.3615,
    lng: -74.1857,
    category: "Science & Innovation",
    icon: "📡",
    color: "#9b59b6",
    description: "Holmdel is home to the former Bell Labs facility — now called Bell Works — where some of the most important scientific discoveries of the 20th century were made, including the transistor and the detection of the cosmic microwave background radiation.",
    history: "Bell Telephone Laboratories moved major research operations to Holmdel in 1962, occupying a landmark modernist building designed by Eero Saarinen. In 1964, physicists Arno Penzias and Robert Wilson detected a persistent radio noise using a nearby horn antenna — later confirmed as the cosmic microwave background radiation left over from the Big Bang. This discovery earned them the 1978 Nobel Prize in Physics. The Holmdel Horn Antenna is now a National Historic Landmark. The Bell Works building was transformed into a mixed-use 'metroburb' development in 2018."
  }
];

// Build custom divIcon for each POI
function createMarkerIcon(poi) {
  const html = `
    <div class="marker-pin" style="background:${poi.color};">
      <span class="marker-icon-wrap">${poi.icon}</span>
    </div>`;
  return L.divIcon({
    html,
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -34]
  });
}

// Build popup HTML for each POI
function buildPopup(poi) {
  const id = poi.name.replace(/\s+/g, '_');
  return `
    <div class="poi-popup">
      <span class="category-badge">${poi.category}</span>
      <h2>${poi.icon} ${poi.name}</h2>
      <p class="description">${poi.description}</p>
      <button class="history-toggle" onclick="toggleHistory('${id}', this)">📜 Show History</button>
      <div class="history" id="hist_${id}">${poi.history}</div>
    </div>`;
}

// Add markers to map
pois.forEach(poi => {
  const marker = L.marker([poi.lat, poi.lng], { icon: createMarkerIcon(poi) });
  marker.bindPopup(buildPopup(poi), { maxWidth: 340, minWidth: 280 });
  marker.addTo(map);
});

// Toggle history section
function toggleHistory(id, btn) {
  const el = document.getElementById('hist_' + id);
  el.classList.toggle('open');
  btn.textContent = el.classList.contains('open') ? '📜 Hide History' : '📜 Show History';
}
