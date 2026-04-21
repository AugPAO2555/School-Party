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