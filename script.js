const furnitureData = [
  {
    id: 1,
    name: "Nordic Lounge Chair",
    price: "$1,299",
    image: "https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg",
    description:
      "Embrace Scandinavian elegance with our Nordic Lounge Chair. Crafted from sustainably sourced beechwood with premium wool upholstery, this piece brings warmth and sophistication to any living space.",
  },
  {
    id: 2,
    name: "Velvet Cloud Sofa",
    price: "$3,450",
    image: "https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg",
    description:
      "Sink into luxury with the Velvet Cloud Sofa. Features Italian velvet upholstery over high-density foam cushions, supported by a kiln-dried hardwood frame built to last generations.",
  },
  {
    id: 3,
    name: "Oak Heritage Table",
    price: "$2,890",
    image: "https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg",
    description:
      "A centerpiece worthy of your finest gatherings. Hand-finished solid oak with subtle grain patterns, featuring traditional joinery techniques passed down through generations of craftsmen.",
  },
  {
    id: 4,
    name: "Serene Platform Bed",
    price: "$2,199",
    image: "https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg",
    description:
      "Transform your bedroom into a sanctuary. The Serene Platform Bed combines minimalist design with exceptional comfort, featuring a floating base design and integrated headboard.",
  },
  {
    id: 5,
    name: "Artisan Accent Chair",
    price: "$899",
    image: "https://images.pexels.com/photos/2249959/pexels-photo-2249959.jpeg",
    description:
      "A statement piece that commands attention. Hand-woven rattan meets mid-century modern design, creating a perfect balance of texture, form, and function.",
  },
  {
    id: 6,
    name: "Marble Nest Table",
    price: "$1,150",
    image: "https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg",
    description:
      "Versatile elegance for modern living. Each table features a unique Carrara marble top paired with brushed brass legs, offering both beauty and flexibility.",
  },
  {
    id: 7,
    name: "Architect Bookshelf",
    price: "$1,890",
    image: "https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg",
    description:
      "Display your treasures with pride. The Architect Bookshelf features asymmetrical shelving in solid walnut, creating visual interest while providing ample storage.",
  },
  {
    id: 8,
    name: "Executive Oak Desk",
    price: "$1,650",
    image: "https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg",
    description:
      "Where productivity meets artistry. This executive desk combines clean lines with practical features, including cable management and hidden storage compartments.",
  },
  {
    id: 9,
    name: "Sculptural Floor Lamp",
    price: "$475",
    image: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg",
    description:
      "Illuminate your space with intention. This sculptural floor lamp features a hand-blown glass shade atop a brushed brass stem, casting a warm ambient glow.",
  },
];

// DOM Elements
const navbar = document.querySelector(".navbar");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalDesc = document.getElementById("modal-desc");
const modalClose = document.querySelector(".modal-close");
const furnitureCards = document.querySelectorAll(".furniture-card");

// Navbar Scroll Effect
function handleNavbarScroll() {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", handleNavbarScroll);

// Modal Functions
function openModal(id) {
  const furniture = furnitureData.find((item) => item.id === parseInt(id));

  if (furniture) {
    modalImg.src = furniture.image;
    modalImg.alt = furniture.name;
    modalTitle.textContent = furniture.name;
    modalPrice.textContent = furniture.price;
    modalDesc.textContent = furniture.description;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Event Listeners for Cards
furnitureCards.forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.dataset.id;
    openModal(id);
  });
});

// Close Modal Events
modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const navHeight = navbar.offsetHeight;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  handleNavbarScroll();
});
