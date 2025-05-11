const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".navbar-right a");
let isOverlayOpen = false;
let currentPage = 1;
const itemsPerPage = 4;

function showPage(page) {
  const items = document.querySelectorAll(".blog-topic");
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  // Hide all items
  items.forEach((item) => (item.style.display = "none"));

  // Show only items of current page
  for (let i = start; i < end && i < items.length; i++) {
    items[i].style.display = "block";
  }

  currentPage = page;
  updatePagination();
}

function updatePagination() {
  const items = document.querySelectorAll(".blog-topic");
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const paginationContainer = document.getElementById("pagination");

  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("span");
    pageButton.textContent = i;
    if (i === currentPage) pageButton.classList.add("active");
    pageButton.onclick = () => showPage(i);
    paginationContainer.appendChild(pageButton);
  }
}

window.addEventListener("scroll", () => {
  if (isOverlayOpen) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#blog") {
        link.classList.add("active");
      }
    });
    return;
  }

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

function showBlog() {
  isOverlayOpen = true;
  document.getElementById("blogOverlay").style.display = "block";
}

function closeBlog() {
  isOverlayOpen = false;
  document.getElementById("blogOverlay").style.display = "none";
}

tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: "#1abc9c" },
    links: {
      enable: true,
      distance: 150,
      color: "#2980b9",
      opacity: 0.5,
      width: 5,
    },
    move: { enable: true, speed: 2.0 },
    size: { value: 7 },
  },
  interactivity: {
    events: { onClick: { enable: true, mode: "push" } },
    modes: { push: { quantity: 1 } },
  },
});

function expandContent(element) {
  element.classList.toggle("expanded");

  const expandBtn = element.querySelector(".expand-btn");
  expandBtn.textContent = element.classList.contains("expanded")
    ? "Thu gọn"
    : "Xem thêm";

  const allBlogTopics = document.querySelectorAll(".blog-topic");
  allBlogTopics.forEach((topic) => {
    if (topic !== element && topic.classList.contains("expanded")) {
      topic.classList.remove("expanded");
    }
  });

  const overlay = document.querySelector("#blogOverlay");
  overlay.style.display = element.classList.contains("expanded")
    ? "block"
    : "none";
}

// ✅ Gọi sau khi DOM đã load đầy đủ
document.addEventListener("DOMContentLoaded", () => {
  showPage(currentPage); // đảm bảo phân trang xảy ra

  // Sau phân trang, xử lý hiệu ứng mờ nếu nội dung dài
  const topics = document.querySelectorAll(".blog-topic");

  topics.forEach((topic) => {
    const content = topic.querySelector(".topic-content");
    if (!content) return;

    const rect = content.getBoundingClientRect(); // Lấy vị trí của phần tử
    const contentHeight = content.scrollHeight;
    const visibleHeight = content.offsetHeight;

    // Kiểm tra nếu khoảng cách giữa đáy phần tử và đáy cửa sổ <= 3px
    if (rect.bottom - window.innerHeight <= 30) {  // Thử thay 30px để hiệu ứng rõ ràng hơn
      content.classList.add("fade-bottom");
      content.style.position = "relative";
    }
  });
});


