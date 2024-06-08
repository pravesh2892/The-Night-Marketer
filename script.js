// Carousel logic is here
let img = 0;
function controller(x) {
  img += x;
  slideshow(img);
}

function currentSlide(n) {
  img = n;
  slideshow(img);
}

function slideshow(z) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (z >= slides.length) {
    img = 0;
    z = 0;
  }
  if (z < 0) {
    img = slides.length - 1;
    z = slides.length - 1;
  }
  for (let slide of slides) {
    slide.style.display = "none";
  }
  for (let dot of dots) {
    dot.classList.remove("dot-active");
  }
  slides[z].style.display = "block";
  dots[z].classList.add("dot-active");
}

// Initialize the first slide
slideshow(img);

//trading card here

const tradCard = document.getElementById("trad");
for (let i = 0; i < 5; i++) {
  const card = document.createElement("div");
  card.classList.add("card", "trad-scroll");

  card.innerHTML = `
    <img src="./assets/lunch1.png" alt="" class="lunch-image" />
    <div class="content">
      <div class="hands">
        <div class="inner">
          <i class="fa-solid fa-hands-praying"></i>
        </div>
      </div>
      <div class="real-data" style="margin-top: 10px">
        <div class="view-section">
          <div class="view">
            <i class="fa-solid fa-eye"></i>
            <span>200</span>
          </div>
          <div class="view">
            <i class="fa-solid fa-comment"></i>
            <span>200</span>
          </div>
          <div class="view">
            <i class="fa-solid fa-share-nodes"></i>
            <span>200</span>
          </div>
          <div class="view">
            <i class="fa-solid fa-heart"></i>
            <span>200</span>
          </div>
        </div>
        <div class="real-data">
          <div class="view-round">
            <i class="fa-regular fa-bookmark"></i>
          </div>
          <div class="view-round">
            <i class="fa-solid fa-share-nodes"></i>
          </div>
        </div>
      </div>
      <h4 class="card-title">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and
      </h4>
      <p class="description">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the
        great explorer of the truth, the master-builder of human
        happiness. No one rejects, dislikes, or avoids pleasure itself,
        because it is pleasure, but because those who do not
      </p>
      <div class="real-data">
        <div class="user-data">
          <img src="./assets/user1.jpeg" alt="" class="user-image user1" />
          <img src="./assets/user2.jpeg" alt="" class="user-image user2" />
          <img src="./assets/user3.jpeg" alt="" class="user-image user3" />
        </div>
        <div class="discover-button">Discover Now</div>
      </div>
    </div>
  `;

  tradCard.appendChild(card);
}

function highlightCard() {
  const cards = document.querySelectorAll(".trad-scroll");
  const container = document.getElementById("trad");
  const containerRect = container.getBoundingClientRect();
  const containerCenter = containerRect.left + containerRect.width / 2;

  cards.forEach((card) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const distance = Math.abs(containerCenter - cardCenter);

    if (distance < cardRect.width / 2) {
      card.classList.add("highlighted");
    } else {
      card.classList.remove("highlighted");
    }
  });
}

tradCard.addEventListener("scroll", highlightCard);

// Initialize the first highlight
highlightCard();

function scrollNext() {
  const container = document.getElementById("trad");
  const scrollAmount = 500 + 20;
  container.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
  setTimeout(highlightCard, 500); // Wait for scrolling to finish before highlighting
}

function scrollPrev() {
  const container = document.getElementById("trad");
  const scrollAmount = 500 + 20;
  container.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
  setTimeout(highlightCard, 500); // Wait for scrolling to finish before highlighting
}

// Navbar toggle logic remains unchanged
function handleNavVisibility() {
  const navOne = document.getElementById("nav-one");
  const navTwo = document.getElementById("nav-two");
  const width = window.innerWidth;

  if (width >= 1210) {
    navOne.style.display = "block";
    navTwo.style.display = "none";
  } else {
    navOne.style.display = "none";
    navTwo.style.display = "block";
  }
}

function toggleNav(isOpen) {
  const openNav = document.getElementById("openNav");
  const closeNav = document.getElementById("closeNav");
  const navAbsolute = document.querySelector(".nav-absolute");

  if (isOpen) {
    navAbsolute.style.display = "block";
    openNav.style.display = "none";
    closeNav.style.display = "block";
  } else {
    navAbsolute.style.display = "none";
    openNav.style.display = "block";
    closeNav.style.display = "none";
  }
}

window.addEventListener("resize", handleNavVisibility);
window.addEventListener("DOMContentLoaded", handleNavVisibility);
