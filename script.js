// -------------------------
// Rock Collector - Phase 4.5 (Favorites with Reordering)
// -------------------------

// Rocks
const ROCKS = [
  // COMMON (40)
  { name: "Granite", rarity: "Common" },
  { name: "Limestone", rarity: "Common" },
  { name: "Sandstone", rarity: "Common" },
  { name: "Basalt", rarity: "Common" },
  { name: "Slate", rarity: "Common" },
  { name: "Shale", rarity: "Common" },
  { name: "Marble", rarity: "Common" },
  { name: "Pumice", rarity: "Common" },
  { name: "Pebble", rarity: "Common" },
  { name: "River Rock", rarity: "Common" },
  { name: "Gravel", rarity: "Common" },
  { name: "Soapstone", rarity: "Common" },
  { name: "Clay Stone", rarity: "Common" },
  { name: "Brick Fragment", rarity: "Common" },
  { name: "Sidewalk Chunk", rarity: "Common" },
  { name: "Mudstone", rarity: "Common" },
  { name: "Garden Quartz", rarity: "Common" },
  { name: "Dewdrop", rarity: "Common" },
  { name: "Morning Ember", rarity: "Common" },
  { name: "Moss Whisper", rarity: "Common" },
  { name: "Sunset Flake", rarity: "Common" },
  { name: "Pale Drift", rarity: "Common" },
  { name: "Ashfall", rarity: "Common" },
  { name: "Clover Dust", rarity: "Common" },
  { name: "Creek Shimmer", rarity: "Common" },
  { name: "Dawn Spark", rarity: "Common" },
  { name: "Meadow Gleam", rarity: "Common" },
  { name: "Soft Glow", rarity: "Common" },
  { name: "Autumn Wisp", rarity: "Common" },
  { name: "Quiet Hum", rarity: "Common" },
  { name: "Breeze Mark", rarity: "Common" },
  { name: "Dust Mote", rarity: "Common" },
  { name: "Rain Drop", rarity: "Common" },
  { name: "Leaf Trace", rarity: "Common" },
  { name: "Soil Memory", rarity: "Common" },
  { name: "Simple Spark", rarity: "Common" },
  { name: "Warm Hush", rarity: "Common" },
  { name: "Gray Comfort", rarity: "Common" },
  { name: "Field Rest", rarity: "Common" },
  { name: "Gentle Echo", rarity: "Common" },

  // UNCOMMON (40)
  { name: "Quartz", rarity: "Uncommon" },
  { name: "Mica", rarity: "Uncommon" },
  { name: "Calcite", rarity: "Uncommon" },
  { name: "Hematite", rarity: "Uncommon" },
  { name: "Pyrite", rarity: "Uncommon" },
  { name: "Gypsum", rarity: "Uncommon" },
  { name: "Quartzite", rarity: "Uncommon" },
  { name: "Serpentine", rarity: "Uncommon" },
  { name: "Talc", rarity: "Uncommon" },
  { name: "Rose Quartz", rarity: "Uncommon" },
  { name: "Citrine", rarity: "Uncommon" },
  { name: "Agate", rarity: "Uncommon" },
  { name: "Flint", rarity: "Uncommon" },
  { name: "Moonstone", rarity: "Uncommon" },
  { name: "Fluorite", rarity: "Uncommon" },
  { name: "Magnetite", rarity: "Uncommon" },
  { name: "Gneiss", rarity: "Uncommon" },
  { name: "Twilight Spiral", rarity: "Uncommon" },
  { name: "Frostpetal", rarity: "Uncommon" },
  { name: "Wanderlight", rarity: "Uncommon" },
  { name: "Silver Thread", rarity: "Uncommon" },
  { name: "Duskbloom", rarity: "Uncommon" },
  { name: "Copperlight", rarity: "Uncommon" },
  { name: "Horizon Glow", rarity: "Uncommon" },
  { name: "Mist Walker", rarity: "Uncommon" },
  { name: "Spring Thaw", rarity: "Uncommon" },
  { name: "Storm Whisper", rarity: "Uncommon" },
  { name: "Winter's Breath", rarity: "Uncommon" },
  { name: "Cloud Drift", rarity: "Uncommon" },
  { name: "Forest Deep", rarity: "Uncommon" },
  { name: "Tide Mark", rarity: "Uncommon" },
  { name: "Moon Sigh", rarity: "Uncommon" },
  { name: "Star Dust", rarity: "Uncommon" },
  { name: "River Song", rarity: "Uncommon" },
  { name: "Thunder Mark", rarity: "Uncommon" },
  { name: "Shade Wisp", rarity: "Uncommon" },
  { name: "Golden Hour", rarity: "Uncommon" },
  { name: "Frost Kiss", rarity: "Uncommon" },
  { name: "Ocean Murmur", rarity: "Uncommon" },
  { name: "Wind Chime", rarity: "Uncommon" },

  // RARE (40)
  { name: "Obsidian", rarity: "Rare" },
  { name: "Turquoise", rarity: "Rare" },
  { name: "Malachite", rarity: "Rare" },
  { name: "Azurite", rarity: "Rare" },
  { name: "Garnet", rarity: "Rare" },
  { name: "Peridot", rarity: "Rare" },
  { name: "Jasper", rarity: "Rare" },
  { name: "Lapis Lazuli", rarity: "Rare" },
  { name: "Jade", rarity: "Rare" },
  { name: "Topaz", rarity: "Rare" },
  { name: "Aquamarine", rarity: "Rare" },
  { name: "Labradorite", rarity: "Rare" },
  { name: "Amber", rarity: "Rare" },
  { name: "Opal", rarity: "Rare" },
  { name: "Onyx", rarity: "Rare" },
  { name: "Sodalite", rarity: "Rare" },
  { name: "Tiger's Eye", rarity: "Rare" },
  { name: "Starweave", rarity: "Rare" },
  { name: "Shimmerwind", rarity: "Rare" },
  { name: "Lunar Tear", rarity: "Rare" },
  { name: "Crimsonbloom", rarity: "Rare" },
  { name: "Nightfall", rarity: "Rare" },
  { name: "Winterhold", rarity: "Rare" },
  { name: "Ember Heart", rarity: "Rare" },
  { name: "Celestial Dust", rarity: "Rare" },
  { name: "Aurora Veil", rarity: "Rare" },
  { name: "Shadowmere", rarity: "Rare" },
  { name: "Crystal Tide", rarity: "Rare" },
  { name: "Sunburst", rarity: "Rare" },
  { name: "Midnight Bloom", rarity: "Rare" },
  { name: "Silvermist", rarity: "Rare" },
  { name: "Tempest Core", rarity: "Rare" },
  { name: "Willow Wisp", rarity: "Rare" },
  { name: "Prismite", rarity: "Rare" },
  { name: "Glaciate", rarity: "Rare" },
  { name: "Phoenix Ash", rarity: "Rare" },
  { name: "Void Wisp", rarity: "Rare" },
  { name: "Dragon Breath", rarity: "Rare" },
  { name: "Mystic Dawn", rarity: "Rare" },
  { name: "Thunder's Gift", rarity: "Rare" },

  // ULTRA-RARE (40)
  { name: "Amethyst", rarity: "Ultra-Rare" },
  { name: "Emerald", rarity: "Ultra-Rare" },
  { name: "Sapphire", rarity: "Ultra-Rare" },
  { name: "Ruby", rarity: "Ultra-Rare" },
  { name: "Meteorite Fragment", rarity: "Ultra-Rare" },
  { name: "Fulgurite", rarity: "Ultra-Rare" },
  { name: "Alexandrite", rarity: "Ultra-Rare" },
  { name: "Tanzanite", rarity: "Ultra-Rare" },
  { name: "Moldavite", rarity: "Ultra-Rare" },
  { name: "Larimar", rarity: "Ultra-Rare" },
  { name: "Bumblebee Jasper", rarity: "Ultra-Rare" },
  { name: "Peacock Ore", rarity: "Ultra-Rare" },
  { name: "Spectrolite", rarity: "Ultra-Rare" },
  { name: "Pietersite", rarity: "Ultra-Rare" },
  { name: "Seraphinite", rarity: "Ultra-Rare" },
  { name: "Fire Opal", rarity: "Ultra-Rare" },
  { name: "Depthstone", rarity: "Ultra-Rare" },
  { name: "Ashenbright", rarity: "Ultra-Rare" },
  { name: "Dreamglass", rarity: "Ultra-Rare" },
  { name: "Eternal Coil", rarity: "Ultra-Rare" },
  { name: "Stormborn", rarity: "Ultra-Rare" },
  { name: "Cometborne", rarity: "Ultra-Rare" },
  { name: "Obsidianite", rarity: "Ultra-Rare" },
  { name: "Paradoxite", rarity: "Ultra-Rare" },
  { name: "Celestial Weave", rarity: "Ultra-Rare" },
  { name: "Dragonite", rarity: "Ultra-Rare" },
  { name: "Moonweaver", rarity: "Ultra-Rare" },
  { name: "Timeless Pearl", rarity: "Ultra-Rare" },
  { name: "Shadowheart", rarity: "Ultra-Rare" },
  { name: "Aurora's Crown", rarity: "Ultra-Rare" },
  { name: "Everfrost", rarity: "Ultra-Rare" },
  { name: "Sunfire Core", rarity: "Ultra-Rare" },
  { name: "Nebula Drift", rarity: "Ultra-Rare" },
  { name: "Eternity Shard", rarity: "Ultra-Rare" },
  { name: "Void Pearl", rarity: "Ultra-Rare" },
  { name: "Cosmic Tear", rarity: "Ultra-Rare" },
  { name: "Ancient Whisper", rarity: "Ultra-Rare" },
  { name: "Storm's Eye", rarity: "Ultra-Rare" },
  { name: "Fate Weaver", rarity: "Ultra-Rare" },
  { name: "Seraphite", rarity: "Ultra-Rare" },

  // LEGENDARY (40)
  { name: "Diamond", rarity: "Legendary" },
  { name: "The First Rock", rarity: "Legendary" },
  { name: "Philosopher's Pebble", rarity: "Legendary" },
  { name: "Heaven's Knot", rarity: "Legendary" },
  { name: "Forgotten Crown", rarity: "Legendary" },
  { name: "Worldheart", rarity: "Legendary" },
  { name: "Infinity Spiral", rarity: "Legendary" },
  { name: "Genesis Fragment", rarity: "Legendary" },
  { name: "Abyssalite", rarity: "Legendary" },
  { name: "Pyrogenesis", rarity: "Legendary" },
  { name: "Constellation", rarity: "Legendary" },
  { name: "Wyrmscale", rarity: "Legendary" },
  { name: "Phoenix Eternal", rarity: "Legendary" },
  { name: "Time's End", rarity: "Legendary" },
  { name: "Cosmic Genesis", rarity: "Legendary" },
  { name: "Void Emperor", rarity: "Legendary" },
  { name: "Heaven's Gate", rarity: "Legendary" },
  { name: "Fate's Thread", rarity: "Legendary" },
  { name: "Omnishard", rarity: "Legendary" },
  { name: "Reality Anchor", rarity: "Legendary" },
  { name: "Dreamweaver's Heart", rarity: "Legendary" },
  { name: "Celestial Throne", rarity: "Legendary" },
  { name: "Eternal Monarch", rarity: "Legendary" },
  { name: "Starchild", rarity: "Legendary" },
  { name: "Timeless Crown", rarity: "Legendary" },
  { name: "Infinite Echo", rarity: "Legendary" },
  { name: "Primordial Spark", rarity: "Legendary" },
  { name: "World's Tear", rarity: "Legendary" },
  { name: "Absolute Zero", rarity: "Legendary" },
  { name: "Sunborn Sovereign", rarity: "Legendary" },
  { name: "Chaos Bloom", rarity: "Legendary" },
  { name: "Destiny's Core", rarity: "Legendary" },
  { name: "The Nameless", rarity: "Legendary" },
  { name: "Alpha Fragment", rarity: "Legendary" },
  { name: "Omega Shard", rarity: "Legendary" },
  { name: "Universe Seed", rarity: "Legendary" },
  { name: "Godtear", rarity: "Legendary" },
  { name: "The Last Stone", rarity: "Legendary" },
  { name: "Memory of Stars", rarity: "Legendary" },
  { name: "Inevitable", rarity: "Legendary" }
];


const SIZES = [
  { name: "Extra Small", weight: 5 },
  { name: "Small", weight: 25 },
  { name: "Medium", weight: 40 },
  { name: "Large", weight: 25 },
  { name: "Extra Large", weight: 5 }
];

let collection = JSON.parse(localStorage.getItem("collection")) || {};
let topRocks = JSON.parse(localStorage.getItem("topRocks") || "[]");
let editFavoritesMode = false;

function saveCollection() {
  localStorage.setItem("collection", JSON.stringify(collection));
}
function saveTopRocks() {
  localStorage.setItem("topRocks", JSON.stringify(topRocks));
}

// Weighted random rock selection
function getRandomRock() {
  const weights = {
    Common: 0.5,
    Uncommon: 0.25,
    Rare: 0.15,
    "Ultra-Rare": 0.08,
    Legendary: 0.02,
  };

  const random = Math.random();
  let cumulative = 0;
  for (const rarity of Object.keys(weights)) {
    cumulative += weights[rarity];
    if (random <= cumulative) {
      const available = ROCKS.filter(r => r.rarity === rarity);
      return available[Math.floor(Math.random() * available.length)];
    }
  }
}

function getRandomSize() {
  const totalWeight = SIZES.reduce((sum, s) => sum + s.weight, 0);
  const rand = Math.random() * totalWeight;
  let cumulative = 0;
  for (const size of SIZES) {
    cumulative += size.weight;
    if (rand < cumulative) return size.name;
  }
}

function collectRock() {
  // --------- FIX: THIS IS THE CHANGED PART ---------
  // const randomIndex = Math.floor(Math.random() * ROCKS.length);
  // const rock = ROCKS[randomIndex];
  const rock = getRandomRock(); // Now correctly uses your weighted function
  // -------------------------------------------------

  const size = getRandomSize();
  const key = `${rock.name} (${size})`;

  if (collection[key]) {
    collection[key].count += 1;
  } else {
    collection[key] = {
      name: rock.name,
      rarity: rock.rarity,
      size: size,
      count: 1
    };
  }

  saveCollection();
  updateCollectionDisplay();
  updateTopRocks();
}

// Update collection display
function updateCollectionDisplay() {
  const display = document.getElementById("collection");
  display.innerHTML = "<h3>Your Collection</h3>";

  const entries = Object.entries(collection);
  if (entries.length === 0) {
    display.innerHTML += "<p>No rocks collected yet.</p>";
    return;
  }

  const list = document.createElement("ul");

  entries.forEach(([name, data]) => {
    const item = document.createElement("li");
    item.textContent = `${name} (${data.rarity}) — ${data.count}`;

    if (topRocks.includes(name)) item.classList.add("selected");
    if (editFavoritesMode) item.classList.add("editable");
    else item.classList.remove("editable");

    item.addEventListener("click", () => {
      if (!editFavoritesMode) return;

      if (topRocks.includes(name)) {
        topRocks = topRocks.filter(r => r !== name);
      } else if (topRocks.length < 5) {
        topRocks.push(name);
      }

      saveTopRocks();
      updateCollectionDisplay();
      updateTopRocks();
    });

    list.appendChild(item);
  });

  display.appendChild(list);
}

// Update Top Rocks
function updateTopRocks() {
  const topList = document.getElementById("topRocksList");
  topList.innerHTML = "";

  if (topRocks.length === 0) {
    topList.innerHTML = "<p>No favorites selected yet.</p>";
    return;
  }

  const list = document.createElement("ol");

  topRocks.forEach((key, index) => {
    const data = collection[key];
    if (!data) return;
    const item = document.createElement("li");
    item.textContent = `${key} (${data.rarity}) — ${data.count}`;

    if (editFavoritesMode) {
      const upBtn = document.createElement("button");
      upBtn.textContent = "↑";
      upBtn.classList.add("reorder-btn");
      upBtn.disabled = index === 0;
      upBtn.addEventListener("click", () => moveFavorite(index, -1));

      const downBtn = document.createElement("button");
      downBtn.textContent = "↓";
      downBtn.classList.add("reorder-btn");
      downBtn.disabled = index === topRocks.length - 1;
      downBtn.addEventListener("click", () => moveFavorite(index, 1));

      item.appendChild(upBtn);
      item.appendChild(downBtn);
    }

    list.appendChild(item);
  });

  topList.appendChild(list);
}

// Reordering function
function moveFavorite(index, direction) {
  const newIndex = index + direction;
  if (newIndex < 0 || newIndex >= topRocks.length) return;
  [topRocks[index], topRocks[newIndex]] = [topRocks[newIndex], topRocks[index]];
  saveTopRocks();
  updateTopRocks();
}

// Toggle Edit mode
const editBtn = document.getElementById("editFavoritesBtn");
editBtn.addEventListener("click", () => {
  editFavoritesMode = !editFavoritesMode;
  editBtn.classList.toggle("active", editFavoritesMode);
  editBtn.textContent = editFavoritesMode ? "Done" : "Edit Favorites";
  updateCollectionDisplay();
  updateTopRocks();
});

// Init
document.getElementById("collectBtn").addEventListener("click", collectRock);
updateCollectionDisplay();
updateTopRocks();
