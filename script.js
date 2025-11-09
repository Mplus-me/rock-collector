// -------------------------
// Rock Collector - Phase 3.5 (with quantities)
// -------------------------

// Rock database
const ROCKS = [
  { name: "Granite", rarity: "Common" },
  { name: "Obsidian", rarity: "Uncommon" },
  { name: "Quartz", rarity: "Common" },
  { name: "Amethyst", rarity: "Rare" },
  { name: "Mystic Shard", rarity: "Legendary" }
];

// Load collection (object with rockName: { rarity, count })
let collection = JSON.parse(localStorage.getItem("collection")) || {};

// Save collection
function saveCollection() {
  localStorage.setItem("collection", JSON.stringify(collection));
}

// Weighted random selection
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

// Collect a new rock
function collectRock() {
  const rock = getRandomRock();

  // If already have it, increase count
  if (collection[rock.name]) {
    collection[rock.name].count += 1;
  } else {
    collection[rock.name] = { rarity: rock.rarity, count: 1 };
  }

  saveCollection();

  const output = document.getElementById("output");
  output.textContent = rarityMessage(rock);

  updateCollectionDisplay();
  updateTopRocks();
}

// Feedback flavor
function rarityMessage(rock) {
  switch (rock.rarity) {
    case "Common":
      return `You found a ${rock.name}.`;
    case "Uncommon":
      return `Nice! You uncovered an ${rock.name}.`;
    case "Rare":
      return `✨ A rare discovery: ${rock.name}!`;
    case "Legendary":
      return `🌟 Incredible! You unearthed the ${rock.name}!`;
    default:
      return `You found: ${rock.name}.`;
  }
}

// Display full collection with quantities
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
    list.appendChild(item);
  });
  display.appendChild(list);
}

// Show top 5 rocks by rarity importance
function updateTopRocks() {
  const rarityOrder = ["Common", "Uncommon", "Rare", "Legendary"];
  const topDiv = document.getElementById("topRocks");

  const entries = Object.entries(collection);
  if (entries.length === 0) {
    topDiv.innerHTML = "";
    return;
  }

  // Sort by rarity and count
  const ranked = entries.sort((a, b) => {
    const rarityDiff =
      rarityOrder.indexOf(a[1].rarity) - rarityOrder.indexOf(b[1].rarity);
    if (rarityDiff !== 0) return rarityDiff;
    return a[1].count - b[1].count;
  });

  const topFive = ranked.slice(-5).reverse();
  topDiv.innerHTML = "<h3>Top Finds</h3>";

  const list = document.createElement("ol");
  topFive.forEach(([name, data]) => {
    const item = document.createElement("li");
    item.textContent = `${name} (${data.rarity}) — ${data.count}`;
    list.appendChild(item);
  });
  topDiv.appendChild(list);
}

// Init
document.getElementById("collectBtn").addEventListener("click", collectRock);
updateCollectionDisplay();
updateTopRocks();
