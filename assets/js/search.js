import Fuse from "./fuse.min.mjs";

const grid = document.getElementById("kb-grid");

if (grid) {
  const input = document.getElementById("kb-search");
  const chips = Array.from(document.querySelectorAll(".kb-chip"));
  const empty = document.getElementById("kb-empty");
  const cards = Array.from(grid.querySelectorAll("[data-url]"));
  const cardByUrl = new Map(cards.map((c) => [c.dataset.url, c]));

  let fuse = null;
  let activeCategory = "all";
  let query = "";

  async function ensureFuse() {
    if (fuse) return;
    try {
      const res = await fetch("/search-index.json");
      const data = await res.json();
      fuse = new Fuse(data, {
        keys: [
          { name: "title", weight: 3 },
          { name: "category", weight: 1 },
          { name: "excerpt", weight: 1 },
          { name: "text", weight: 0.5 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
        minMatchCharLength: 2,
      });
    } catch (err) {
      fuse = null;
    }
  }

  function apply() {
    const q = query.trim();
    let order = cards.map((c) => c.dataset.url);
    let matched = null;

    if (q && fuse) {
      const results = fuse.search(q);
      order = results.map((r) => r.item.url);
      matched = new Set(order);
    }

    let visible = 0;
    cards.forEach((c) => {
      c.style.display = "none";
    });

    order.forEach((url) => {
      const card = cardByUrl.get(url);
      if (!card) return;
      const categoryOk =
        activeCategory === "all" || card.dataset.category === activeCategory;
      const queryOk = !matched || matched.has(url);
      if (categoryOk && queryOk) {
        card.style.display = "";
        grid.appendChild(card);
        visible += 1;
      }
    });

    if (empty) empty.style.display = visible === 0 ? "" : "none";
  }

  if (input) {
    input.addEventListener("input", async (e) => {
      query = e.target.value;
      await ensureFuse();
      apply();
    });
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      activeCategory = chip.dataset.category;
      chips.forEach((c) => {
        const on = c === chip;
        c.classList.toggle("btn-primary", on);
        c.classList.toggle("btn-ghost", !on);
      });
      apply();
    });
  });
}
