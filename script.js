// -------------------------
// Rock Collector - Phase 2
// -------------------------

// Rock database
const ROCKS = [
  { name: "Granite", rarity: "Common" },
  { name: "Obsidian", rarity: "Uncommon" },
  { name: "Quartz", rarity: "Common" },
  { name: "Amethyst", rarity: "Rare" },
  { name: "Mystic Shard", rarity: "Legendary" }
];

// Load existing collection or start new
let collection = JSON.parse(localStorage.getItem("collection")) || [];

// Save current collection
function saveCollection() {
  localStorage.setItem("collection", JSON.stringify(collection));
}

// Weighted random selection by rarity
function getRandomRock() {
  const weights = {
    Common: 0.6,
    Uncommon: 0.25,
    Rare: 0.1,
    Legendary: 0.05
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

// Add a new rock to collection and update display
function collectRock() {
  const rock = getRandomRock();
  collection.push(rock);
  saveCollection();

  const output = document.getElementById("output");
  output.textContent = `You found: ${rock.name} (${rock.rarity})!`;

  updateCollectionDisplay();
}

// Show the full collection
function updateCollectionDisplay() {
  const display = document.getElementById("collection");
  display.innerHTML = "<h3>Your Collection</h3>";

  if (collection.length === 0) {
    display.innerHTML += "<p>No rocks collected yet.</p>";
    return;
  }

  const list = document.createElement("ul");
  collection.forEach(r => {
    const item = document.createElement("li");
    item.textContent = `${r.name} (${r.rarity})`;
    list.appendChild(item);
  });
  display.appendChild(list);
}

// Event listeners
document.getElementById("collectBtn").addEventListener("click", collectRock);

// Initial display
updateCollectionDisplay();
