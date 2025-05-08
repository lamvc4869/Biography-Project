const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".navbar-right a");
let isOverlayOpen = false; // biến kiểm tra overlay

window.addEventListener("scroll", () => {
    if (isOverlayOpen) {
        // Khi overlay mở, luôn làm sáng tab Blog
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
    document.getElementById('blogOverlay').style.display = 'block';
}

function closeBlog() {
    isOverlayOpen = false;
    document.getElementById('blogOverlay').style.display = 'none';
}
