
let slideIndex = 0
//showSlide(slideIndex);
export function changeSlide(n) {
  showSlide(slideIndex += n);
}
export function showSlide(n) {
  let currentSlide = n;
  const slides = document.querySelectorAll(".slide_background");

  if (n >= slides.length) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[currentSlide].classList.add("active");

  slideIndex = currentSlide;
}


