const menuBars = document.getElementById("menu-bars");

menuBars.addEventListener("click", function () {
  const backModal = document.querySelector(".back-of-modal");
  backModal.classList.add("show");

  const modal = document.querySelector(".modal");
  modal.classList.add("show");
});

const closeModal = document.getElementById("close-modal");

closeModal.addEventListener("click", function () {
  const backModal = document.querySelector(".back-of-modal");
  backModal.classList.remove("show");

  const modal = document.querySelector(".modal");
  modal.classList.remove("show");
});

const socialMedia = document.getElementById("social-media");

socialMedia.addEventListener("click", function () {
  const facebook = document.querySelector(".facebook");
  const instagram = document.querySelector(".instagram");
  const shareBtn = document.querySelector(".share");

  facebook.classList.toggle("show");
  instagram.classList.toggle("show");
  shareBtn.classList.toggle("clicked");
});

const modalLink = document.querySelectorAll(".modal-link");

modalLink.forEach((ele) => {
  ele.addEventListener("click", function () {
    const backModal = document.querySelector(".back-of-modal");
    backModal.classList.toggle("show");
  });
});

const backModal = document.querySelector(".back-of-modal");

backModal.addEventListener("click", function () {
  backModal.classList.remove("show");
});

const personalSocialMedia = document.querySelectorAll(".personal-social-media");

personalSocialMedia.forEach((ele) => {
  ele.addEventListener("click", function () {
    const icons = this.closest(".box").querySelector(".icons");
    const blackBG = this.closest(".box").querySelector(".image");

    icons.classList.toggle("show");
    blackBG.classList.toggle("show");
  });
});

// Open Portfolio Images
function openModal(div) {
  const image = div.querySelector("img");

  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("image-modal-content");

  modal.style.display = "flex";
  modalImage.src = image.src;
}

function closeImageModal() {
  const modal = document.getElementById("image-modal");

  modal.style.display = "none";
}

// Scroll behavior smooth
const anchor = document.querySelectorAll('a[href^="#"]');

anchor.forEach((anchorTag) => {
  anchorTag.addEventListener("click", (element) => {
    element.preventDefault();

    document.querySelector(anchorTag.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// add IntersectionObserver
const mainTitles = document.querySelectorAll(".main-title");
const aboutUsContent = document.querySelector(".about-us .content");
const aboutUsImage = document.querySelector(".about-us .image");
const teamBoxes = document.querySelectorAll(".team .box");
const services = document.querySelector(".services .container");
const team = document.querySelector(".team");
const aboutUs = document.querySelector(".about-us .container");
const portfolioCols = document.querySelectorAll(".portfolio .col");
const reviewsFeedback = document.querySelectorAll(".review .feedback");
const reviewsPerson = document.querySelectorAll(".review .person");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      if (entry.target == aboutUs) {
        socialMedia.classList.add("show");
      }
    }
  });
});

mainTitles.forEach((mainTitle) => {
  observer.observe(mainTitle);
});

observer.observe(aboutUsContent);

observer.observe(aboutUsImage);

teamBoxes.forEach((box) => {
  observer.observe(box);
});

observer.observe(services);

observer.observe(aboutUs);

portfolioCols.forEach((col) => {
  observer.observe(col);
});

reviewsFeedback.forEach((feedback) => {
  observer.observe(feedback);
});

reviewsPerson.forEach((person) => {
  observer.observe(person);
});
