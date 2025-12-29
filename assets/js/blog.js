async function loadPosts() {
    const posts = ["post1.md", "post2.md"];
    const list = document.getElementById("post-list");

    posts.forEach(name => {
        const btn = document.createElement("button");
        btn.textContent = name.replace(".md", "");
        btn.className = "btn";
        btn.onclick = () => loadPost(name);
        list.appendChild(btn);
    });
}

async function loadPost(file) {
    const res = await fetch(`posts/${file}`);
    const text = await res.text();
    document.getElementById("post-content").innerHTML =
        marked.parse(text);
}

loadPosts();
