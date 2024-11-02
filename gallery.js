const images = [
  { src: "images/gallery1.jpg", caption: "Caption for Image 1" },
  { src: "images/gallery/crystal_yang_code.jpeg", caption: "Dallas trip to Lockheed Martin with the CS Club Nerds" },
  { src: "images/gallery/crystal_yang_tower.jpeg", caption: "We built the tallest spaghetti tower in 10 minutes we are so engineering genius" },
  { src: "images/gallery/newsstation-crystal_yang.jpeg", caption: "First time on live TV!!!" },
  { src: "images/gallery/crystal_yang_cool.jpeg", caption: "M&TSI roomies!" },
  { src: "images/gallery6.jpg", caption: "Caption for Image 6" },
  { src: "images/gallery/state.png", caption: "All-State Orchestra Squad!" },
  { src: "images/gallery/crystal_yang_paris.jpeg", caption: "Taken on my trip to ACM ICMI in Paris" },
  { src: "images/gallery/gwc_officers.jpeg", caption: "Girls Who Code Officers <3" },
  { src: "images/gallery/horizonBeatles.png", caption: "Beatles crosswalk reference with my string quartet" },
  { src: "images/gallery11.jpg", caption: "Caption for Image 11" },
  { src: "images/gallery12.jpg", caption: "Caption for Image 12" },
  { src: "images/gallery13.jpg", caption: "Caption for Image 13" }
];

let currentIndex = 0;

function showSlide(index) {
  const imageElement = document.querySelector(".gallery-image");
  const captionElement = document.querySelector(".caption");
  currentIndex = (index + images.length) % images.length;
  imageElement.src = images[currentIndex].src;
  captionElement.textContent = images[currentIndex].caption;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function previousSlide() {
  showSlide(currentIndex - 1);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);
});
