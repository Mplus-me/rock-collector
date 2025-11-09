document.getElementById("collectBtn").addEventListener("click", () => {
  const rocks = ["Granite", "Obsidian", "Quartz", "Amethyst", "Mystic Shard"];
  const randomRock = rocks[Math.floor(Math.random() * rocks.length)];
  document.getElementById("output").textContent = `You found: ${randomRock}!`;
});
