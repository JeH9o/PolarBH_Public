// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

const toggleBtn = document.getElementById("theme-toggle");

// 初始化：讀取 localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
} else {
    toggleBtn.textContent = "🌙"; // 預設亮色模式
}

// 點擊切換主題
toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // 切換圖標
    toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
});


// 初始化
const saved = localStorage.getItem("theme");
if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
}
