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

tsParticles.load("tsparticles", {
    fullScreen: {
      enable: false
    },
    background: {
      color: {
        value: "transparent"
      }
    },
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#1abc9c"
      },
      links: {
        enable: true,
        distance: 150,
        color: "#2980b9",
        opacity: 0.5,
        width: 5
      },
      move: {
        enable: true,
        speed: 2.0
      },
      size: {
        value: 7
      }
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        push: {
          quantity: 1
        }
      }
    }
  });
  