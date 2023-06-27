export function openModal() {
    const modal = document.getElementById("myModal");
    if (modal) {
        modal.style.display = "block";
    }
}

export function closeModal() {
    const modal = document.getElementById("myModal");
    if (modal) {
        modal.style.display = "none";
    }
}

let slideIndex = 1;
showSlides(slideIndex);

export function plusSlides(n) {
    showSlides((slideIndex += n));
}

export function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");
    if (slides.length === 0 || dots.length === 0) {
        return;
    }
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    if (captionText) {
        captionText.innerHTML = dots[slideIndex - 1].alt;
    }
}
