// Accordion
document.querySelectorAll(".accordion").forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    panel.style.display =
      panel.style.display === "block" ? "none" : "block";
  });
});
const data = {
  1: {
    name: "นาย A",
    role: "ประธานนักเรียน",
    bio: "มีวิสัยทัศน์ พัฒนาโรงเรียน",
    img: "https://picsum.photos/200/300"
  },
  2: {
    name: "นาย B",
    role: "รองประธาน",
    bio: "ดูแลนักเรียนทุกคน",
    img: "https://picsum.photos/200/301"
  },
  3: {
    name: "นาย C",
    role: "เลขาธิการ",
    bio: "บริหารงานเอกสาร",
    img: "https://picsum.photos/200/302"
  }
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
let posts = JSON.parse(localStorage.getItem("posts")) || [];

function openForm() {
  document.getElementById("formPopup").style.display = "block";
}

function closeForm() {
  document.getElementById("formPopup").style.display = "none";
}

function addPost() {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const image = document.getElementById("image").value;
  const detail = document.getElementById("detail").value;

  const post = { title, date, image, detail };

  posts.push(post);
  localStorage.setItem("posts", JSON.stringify(posts));

  location.reload();
}

function loadPosts() {
  const container = document.getElementById("news");

  posts.reverse().forEach((p, i) => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <p>${p.date}</p>
        <h3>${p.title}</h3>
        <button onclick="viewPost(${i})">อ่านต่อ</button>
      </div>
    `;
  });
}

function viewPost(i) {
  const p = posts[i];

  alert(p.title + "\n\n" + p.detail);
}

window.onload = loadPosts;