class SiteMenu extends HTMLElement {
  connectedCallback() {
    fetch("menu.html")
      .then(res => res.text())
      .then(html => {
        this.innerHTML = html;
        this.initMenuFeatures();
      });
  }

  initMenuFeatures() {
    // ===== Active Link Highlight =====
    const currentPage = location.pathname.split("/").pop() || "index.html";

    this.querySelectorAll("nav a").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
    });


    // ===== Smooth Scroll =====
    this.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", e => {
        const href = e.target.getAttribute("href");

        // 只處理 # 開頭的內部連結
        if (href.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });

    // ===== Theme Toggle =====
    const toggleBtn = this.querySelector("#theme-toggle");

    // 初始化主題
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";

    // 點擊切換主題
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const newTheme = current === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);

      toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
    });
  }
}

customElements.define("site-menu", SiteMenu);
