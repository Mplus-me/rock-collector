// -------------------------
// Rock Collector - Phase 4.5 (Favorites with Reordering)
// -------------------------

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
  const randomIndex = Math.floor(Math.random() * ROCKS.length);
  const rock = ROCKS[randomIndex];
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
  const topDiv = document.getElementById("topRocks");
  topDiv.innerHTML = "";

  if (topRocks.length === 0) {
    topDiv.innerHTML = "<p>No favorites selected yet.</p>";
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

  topDiv.appendChild(list);
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
