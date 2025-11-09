// -------------------------
// Rock Collector - Phase 3.5 (with quantities)
// -------------------------

// Rocks list
const ROCKS = [
  // COMMON ROCKS (20)
  { name: "Granite", rarity: "Common", description: "A sturdy speckled stone found in mountains and countertops alike." },
  { name: "Limestone", rarity: "Common", description: "Formed from ancient sea creatures, it fizzes when you add vinegar." },
  { name: "Sandstone", rarity: "Common", description: "Layers of sand compressed over millions of years into solid rock." },
  { name: "Basalt", rarity: "Common", description: "Dark volcanic rock that covers most of the ocean floor." },
  { name: "Slate", rarity: "Common", description: "Once used for school chalkboards, it splits into neat flat sheets." },
  { name: "Shale", rarity: "Common", description: "Soft sedimentary rock that crumbles easily between your fingers." },
  { name: "Marble", rarity: "Common", description: "Limestone transformed by heat and pressure into elegant swirls." },
  { name: "Pumice", rarity: "Common", description: "So full of air bubbles from volcanic eruptions that it floats on water." },
  { name: "Conglomerate", rarity: "Common", description: "Nature's concrete, made of pebbles cemented together." },
  { name: "Gneiss", rarity: "Common", description: "Pronounced 'nice,' this banded rock has survived intense metamorphism." },
  { name: "Pebble", rarity: "Common", description: "A humble smooth stone, perfect for skipping across water." },
  { name: "River Rock", rarity: "Common", description: "Worn smooth by countless years of flowing water." },
  { name: "Gravel", rarity: "Common", description: "Small, unremarkable, but essential for driveways everywhere." },
  { name: "Soapstone", rarity: "Common", description: "Soft and smooth to the touch, often carved into sculptures." },
  { name: "Clay Stone", rarity: "Common", description: "Hardened clay that still remembers its muddy origins." },
  { name: "Brick Fragment", rarity: "Common", description: "A piece of human history, broken from a forgotten wall." },
  { name: "Sidewalk Chunk", rarity: "Common", description: "Urban geology at its finest." },
  { name: "Mudstone", rarity: "Common", description: "Ancient mud compressed into a soft, earthy rock." },
  { name: "Dolomite", rarity: "Common", description: "Similar to limestone but with extra magnesium for that special touch." },
  { name: "Garden Quartz", rarity: "Common", description: "Clear quartz with little landscapes of minerals trapped inside." },

  // UNCOMMON ROCKS (20)
  { name: "Quartz", rarity: "Uncommon", description: "One of Earth's most abundant minerals, clear as glass or milky white." },
  { name: "Feldspar", rarity: "Uncommon", description: "Makes up 60% of Earth's crust but rarely gets the recognition it deserves." },
  { name: "Mica", rarity: "Uncommon", description: "Peels apart into thin, glittery sheets that catch the light." },
  { name: "Calcite", rarity: "Uncommon", description: "This crystal has a double image superpower called double refraction." },
  { name: "Hematite", rarity: "Uncommon", description: "Iron ore that leaves a reddish streak, like rust in stone form." },
  { name: "Pyrite", rarity: "Uncommon", description: "Fool's gold sparkles brilliantly but won't make you rich." },
  { name: "Gypsum", rarity: "Uncommon", description: "Soft enough to scratch with your fingernail, used to make drywall." },
  { name: "Schist", rarity: "Uncommon", description: "A metamorphic rock with visible layers of mica that shimmer." },
  { name: "Quartzite", rarity: "Uncommon", description: "Sandstone that got a serious upgrade through heat and pressure." },
  { name: "Serpentine", rarity: "Uncommon", description: "Green and scaly-looking, like it came from a dragon's back." },
  { name: "Talc", rarity: "Uncommon", description: "The softest mineral on Earth, it feels like soap." },
  { name: "Rose Quartz", rarity: "Uncommon", description: "Pink and cloudy, often called the stone of universal love." },
  { name: "Citrine", rarity: "Uncommon", description: "Yellow quartz that looks like captured sunshine." },
  { name: "Agate", rarity: "Uncommon", description: "Striped or banded chalcedony with mesmerizing patterns." },
  { name: "Flint", rarity: "Uncommon", description: "Sharp-edged stone used by ancient humans to make tools and start fires." },
  { name: "Chert", rarity: "Uncommon", description: "Flint's cousin, hard and smooth with a waxy luster." },
  { name: "Hornblende", rarity: "Uncommon", description: "A dark, complex mineral found in igneous and metamorphic rocks." },
  { name: "Moonstone", rarity: "Uncommon", description: "Catches light with a mysterious blue-white shimmer called adularescence." },
  { name: "Fluorite", rarity: "Uncommon", description: "Glows under UV light and comes in a rainbow of colors." },
  { name: "Magnetite", rarity: "Uncommon", description: "Naturally magnetic iron ore that attracts metal objects." },

  // RARE ROCKS (20)
  { name: "Obsidian", rarity: "Rare", description: "Volcanic glass formed when lava cools so fast crystals can't form." },
  { name: "Turquoise", rarity: "Rare", description: "Sky-blue stone treasured by ancient civilizations for thousands of years." },
  { name: "Malachite", rarity: "Rare", description: "Vivid green copper mineral with distinctive banded patterns." },
  { name: "Azurite", rarity: "Rare", description: "Deep blue copper mineral often found alongside malachite." },
  { name: "Garnet", rarity: "Rare", description: "Deep red gemstone that forms perfect twelve-sided crystals." },
  { name: "Peridot", rarity: "Rare", description: "Olive-green gem that sometimes falls from space in meteorites." },
  { name: "Carnelian", rarity: "Rare", description: "Reddish-orange chalcedony used in jewelry since ancient times." },
  { name: "Jasper", rarity: "Rare", description: "Opaque quartz with earthy reds, browns, and yellows." },
  { name: "Lapis Lazuli", rarity: "Rare", description: "Deep blue metamorphic rock flecked with golden pyrite." },
  { name: "Jade", rarity: "Rare", description: "Prized green stone harder than steel, carved for millennia." },
  { name: "Topaz", rarity: "Rare", description: "Hard gemstone that comes in many colors, especially golden yellow." },
  { name: "Aquamarine", rarity: "Rare", description: "Pale blue beryl gemstone named for its resemblance to seawater." },
  { name: "Labradorite", rarity: "Rare", description: "Dark stone that flashes with brilliant blue, green, and gold." },
  { name: "Amber", rarity: "Rare", description: "Fossilized tree resin millions of years old, sometimes containing ancient insects." },
  { name: "Opal", rarity: "Rare", description: "Hydrated silica that plays with light in a rainbow of colors." },
  { name: "Onyx", rarity: "Rare", description: "Banded chalcedony with striking parallel layers of black and white." },
  { name: "Sodalite", rarity: "Rare", description: "Rich blue stone often mistaken for lapis lazuli." },
  { name: "Unakite", rarity: "Rare", description: "Mottled green and pink stone that looks like an abstract painting." },
  { name: "Rhodonite", rarity: "Rare", description: "Rose-pink stone with distinctive black manganese veins." },
  { name: "Tiger's Eye", rarity: "Rare", description: "Golden-brown stone with a silky, shimmering band of light." },

  // ULTRA-RARE ROCKS (20)
  { name: "Amethyst", rarity: "Ultra-Rare", description: "Purple quartz formed by iron impurities and natural radiation." },
  { name: "Emerald", rarity: "Ultra-Rare", description: "Precious green beryl colored by traces of chromium or vanadium." },
  { name: "Sapphire", rarity: "Ultra-Rare", description: "Corundum gemstone that comes in every color except red." },
  { name: "Ruby", rarity: "Ultra-Rare", description: "Red corundum, one of the four precious gemstones." },
  { name: "Meteorite Fragment", rarity: "Ultra-Rare", description: "A genuine piece of space rock that survived Earth's atmosphere." },
  { name: "Fulgurite", rarity: "Ultra-Rare", description: "Hollow glass tubes created when lightning strikes sand." },
  { name: "Alexandrite", rarity: "Ultra-Rare", description: "Changes color from green in daylight to red under incandescent light." },
  { name: "Tanzanite", rarity: "Ultra-Rare", description: "Velvety blue-violet gemstone found only in one location on Earth." },
  { name: "Moldavite", rarity: "Ultra-Rare", description: "Olive-green natural glass formed by a meteorite impact 15 million years ago." },
  { name: "Benitoite", rarity: "Ultra-Rare", description: "Rare blue gemstone found primarily in California's San Benito County." },
  { name: "Sugilite", rarity: "Ultra-Rare", description: "Purple gemstone discovered in 1944, popular in the New Age movement." },
  { name: "Larimar", rarity: "Ultra-Rare", description: "Sky-blue stone found only in the Dominican Republic." },
  { name: "Charoite", rarity: "Ultra-Rare", description: "Swirling purple stone found in only one location in Siberia." },
  { name: "Ametrine", rarity: "Ultra-Rare", description: "Natural combination of amethyst and citrine in a single crystal." },
  { name: "Bumblebee Jasper", rarity: "Ultra-Rare", description: "Vibrant yellow and black stone from an Indonesian volcano." },
  { name: "Peacock Ore", rarity: "Ultra-Rare", description: "Iridescent copper mineral with rainbow tarnish on its surface." },
  { name: "Spectrolite", rarity: "Ultra-Rare", description: "Finnish labradorite with exceptionally vivid color play." },
  { name: "Pietersite", rarity: "Ultra-Rare", description: "Swirling blue and gold stone with a stormy, dramatic appearance." },
  { name: "Seraphinite", rarity: "Ultra-Rare", description: "Dark green stone with silvery feather-like patterns resembling angel wings." },
  { name: "Fire Opal", rarity: "Ultra-Rare", description: "Translucent orange-red opal that seems to contain living flames." },

  // LEGENDARY ROCKS (20)
  { name: "Diamond", rarity: "Legendary", description: "Pure carbon compressed under extreme pressure into Earth's hardest natural material." },
  { name: "Mystic Shard", rarity: "Legendary", description: "A translucent crystal that hums softly when held in moonlight." },
  { name: "Starfall Fragment", rarity: "Legendary", description: "This glowing stone is said to be a piece of a fallen star." },
  { name: "Void Crystal", rarity: "Legendary", description: "Black as the space between stars, it seems to absorb light itself." },
  { name: "Phoenix Ember", rarity: "Legendary", description: "Warm to the touch, this orange stone is rumored to contain eternal fire." },
  { name: "Dragon's Scale", rarity: "Legendary", description: "Iridescent and impossibly hard, could it really be from a dragon?" },
  { name: "Giggle Pebble", rarity: "Legendary", description: "A perfectly ordinary-looking pebble that makes you smile for no reason." },
  { name: "Time Stone", rarity: "Legendary", description: "Fossilized wood so ancient it seems to whisper stories of forgotten eras." },
  { name: "Cloudstone", rarity: "Legendary", description: "Impossibly light and fluffy-looking, like a cloud solidified into mineral form." },
  { name: "Singing Geode", rarity: "Legendary", description: "When opened, the crystals inside resonate with a melodious tone." },
  { name: "Wishstone", rarity: "Legendary", description: "A smooth white stone with a perfect ring around it. Collectors consider them lucky." },
  { name: "Celestial Pearl", rarity: "Legendary", description: "A luminous sphere that seems to contain swirling galaxies within." },
  { name: "Frost Heart", rarity: "Legendary", description: "Cold as winter's deepest night, it never melts or warms." },
  { name: "Fool's Diamond", rarity: "Legendary", description: "Sparkles more brilliantly than any real diamond, but has no monetary value whatsoever." },
  { name: "Memory Quartz", rarity: "Legendary", description: "Cloudy crystal that some say records the emotions of those who touch it." },
  { name: "Gigglestone", rarity: "Legendary", description: "Bounces with impossible enthusiasm, as if delighted by gravity." },
  { name: "Rainbow Prism", rarity: "Legendary", description: "Splits any light that touches it into impossibly vivid colors." },
  { name: "Philosopher's Pebble", rarity: "Legendary", description: "Just a rock, but it makes you ponder life's deepest questions." },
  { name: "Infinity Stone", rarity: "Legendary", description: "A mobius strip carved from solid crystalline material by unknown hands." },
  { name: "The First Rock", rarity: "Legendary", description: "According to legend, this is the very first rock that ever existed. Probably not though." }
];


// Load collection (object with rockName: { rarity, count, description })
let collection = JSON.parse(localStorage.getItem("collection")) || {};

// Save collection
function saveCollection() {
  localStorage.setItem("collection", JSON.stringify(collection));
}

// Weighted random selection with Ultra-Rare
function getRandomRock() {
  const weights = {
    Common: 0.5,
    Uncommon: 0.25,
    Rare: 0.15,
    Legendary: 0.08,
    "Ultra-Rare": 0.02
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
    collection[rock.name] = { rarity: rock.rarity, count: 1, description: rock.description };
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
    case "Ultra-Rare":
      return `💎 Ultra-Rare find: ${rock.name}!`;
    default:
      return `You found: ${rock.name}.`;
  }
}

// Display full collection with quantities and tooltips
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
    if (data.description) item.title = data.description; // Tooltip on hover
    list.appendChild(item);
  });
  display.appendChild(list);
}

// Show top 5 rocks by rarity importance
function updateTopRocks() {
  const rarityOrder = ["Common", "Uncommon", "Rare", "Legendary", "Ultra-Rare"];
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
    if (data.description) item.title = data.description; // Tooltip on hover
    list.appendChild(item);
  });
  topDiv.appendChild(list);
}

// Init
document.getElementById("collectBtn").addEventListener("click", collectRock);
updateCollectionDisplay();
updateTopRocks();
