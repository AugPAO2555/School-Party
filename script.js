// ===== ACCORDION =====
document.querySelectorAll(".accordion").forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    panel.style.display =
      panel.style.display === "block" ? "none" : "block";
  });
});

// ===== PROFILE =====
const data = {
  1: { name: "นาย A", role: "ประธานนักเรียน", bio: "มีวิสัยทัศน์", img: "https://picsum.photos/200/300" },
  2: { name: "นาย B", role: "รองประธาน", bio: "ดูแลนักเรียน", img: "https://picsum.photos/200/301" },
  3: { name: "นาย C", role: "เลขาธิการ", bio: "บริหารงาน", img: "https://picsum.photos/200/302" }
};

function openProfile(id) {
  const user = data[id];
  document.getElementById("p-name").innerText = user.name;
  document.getElementById("p-role").innerText = user.role;
  document.getElementById("p-bio").innerText = user.bio;
  document.getElementById("p-img").src = user.img;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// ===== POSTS SYSTEM =====
let posts = JSON.parse(localStorage.getItem("posts")) || [];

// เปิด/ปิดฟอร์ม
function openForm() {
  document.getElementById("formPopup").style.display = "block";
}
function closeForm() {
  document.getElementById("formPopup").style.display = "none";
}

// เพิ่มโพสต์
function addPost() {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const image = document.getElementById("image").value;
  const detail = document.getElementById("detail").value;

  if (!title || !date || !image || !detail) {
    alert("กรอกให้ครบ");
    return;
  }

  const post = { id: Date.now(), title, date, image, detail };

  posts.unshift(post); // ใหม่อยู่บนสุด
  localStorage.setItem("posts", JSON.stringify(posts));

  location.reload();
}

// โหลดโพสต์
function loadPosts() {
  const container = document.getElementById("news");
  if (!container) return;

  container.innerHTML = "";

  posts.forEach((p) => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <p>${p.date}</p>
        <h3>${p.title}</h3>
        <a href="post.html?id=${p.id}" class="btn">อ่านต่อ</a>
      </div>
    `;
  });
}

// ===== หน้าอ่านข่าว =====
function loadPostDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const post = posts.find(p => p.id == id);
  if (!post) return;

  document.getElementById("d-img").src = post.image;
  document.getElementById("d-title").innerText = post.title;
  document.getElementById("d-date").innerText = post.date;
  document.getElementById("d-detail").innerText = post.detail;
}

// ===== ADMIN MODE =====
let isAdmin = true; // เปลี่ยนเป็น false = ซ่อนปุ่ม

window.onload = () => {
  loadPosts();
  loadPostDetail();

  const btn = document.getElementById("addBtn");

  if (btn) {
    btn.style.display = checkAdmin() ? "block" : "none";
  }
};
// ===== LOGIN =====
function login() {
  const pass = document.getElementById("password").value;

  if (pass === "admin123") {
    localStorage.setItem("isAdmin", "true");
    window.location.href = "index.html";
  } else {
    document.getElementById("error").innerText = "รหัสผิด";
  }
}

// เช็คสถานะ
function checkAdmin() {
  return localStorage.getItem("isAdmin") === "true";
}

// logout
function logout() {
  localStorage.removeItem("isAdmin");
  location.reload();
}
function updateNav() {
  const isAdmin = checkAdmin();

  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (!loginBtn || !logoutBtn) return;

  loginBtn.style.display = isAdmin ? "none" : "inline";
  logoutBtn.style.display = isAdmin ? "inline" : "none";
}

window.onload = () => {
  loadPosts();
  loadPostDetail();
  updateNav();

  const btn = document.getElementById("addBtn");
  if (btn) {
    btn.style.display = checkAdmin() ? "block" : "none";
  }
};