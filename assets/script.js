document.addEventListener("DOMContentLoaded", () => {
    const slots = document.querySelectorAll(".slot");

    const main = document.querySelector("main");
    const filterContainer = document.createElement("div");
    filterContainer.className = "filter-container";

    const filterAll = document.createElement("button");
    filterAll.textContent = "Todos";
    filterAll.dataset.slot = "all";
    filterAll.classList.add("active");
    filterContainer.appendChild(filterAll);

    slots.forEach((slot, index) => {
        const btn = document.createElement("button");
        btn.textContent = slot.querySelector("h2").textContent.split("(")[0].trim();
        btn.dataset.slot = index;
        filterContainer.appendChild(btn);
    });

    main.insertBefore(filterContainer, main.firstChild);

    const filterTraits = (slotIndex) => {
        slots.forEach((slot, i) => {
            if (slotIndex === "all" || i == slotIndex) {
                slot.style.display = "block";
            } else {
                slot.style.display = "none";
            }
        });

        filterContainer.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
        if(slotIndex === "all") filterAll.classList.add("active");
        else filterContainer.querySelector(`button[data-slot="${slotIndex}"]`).classList.add("active");
    };

    filterContainer.querySelectorAll("button").forEach((btn) => {
        btn.addEventListener("click", () => {
            filterTraits(btn.dataset.slot);
        });
    });

    filterTraits("all");

    slots.forEach((slot) => {
        const header = slot.querySelector(".slot-header");
        const allTraits = slot.querySelectorAll(".traits");
        header.style.cursor = "pointer";
        header.addEventListener("click", () => {
            allTraits.forEach(traits => {
                traits.style.display = traits.style.display === "none" ? "grid" : "none";
            });
        });
    });
});
