/* Goblin Girl Jewels — shared interactions */
(function () {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }

  // Scroll reveal
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((r) => io.observe(r));
  } else {
    reveals.forEach((r) => r.classList.add("in"));
  }

  // Email capture (front-end only placeholder — wire to a provider, see README)
  document.querySelectorAll("form[data-capture]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type=email]");
      const note = form.parentElement.querySelector("[data-capture-note]");
      if (input && input.value) {
        if (note) {
          note.textContent =
            "✨ You're on the list — welcome to the coven, " +
            input.value.split("@")[0] +
            ".";
          note.style.color = "var(--teal)";
        }
        input.value = "";
      }
    });
  });
})();
