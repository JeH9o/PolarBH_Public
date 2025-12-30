// ===================== Theme Toggle =====================
const toggleBtn = document.getElementById("theme-toggle");

// 初始化：讀取 localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (toggleBtn) toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
} else {
    if (toggleBtn) toggleBtn.textContent = "🌙";
}

// 點擊切換主題
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const newTheme = current === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
    });
}
