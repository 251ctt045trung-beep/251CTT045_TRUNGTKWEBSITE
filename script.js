document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".hero-slider .slide");
    let currentSlideIndex = 0;

    function nextSlide() {
        if (slides.length > 0) {
            slides[currentSlideIndex].classList.remove("active");
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            slides[currentSlideIndex].classList.add("active");
        }
    }
   
    setInterval(nextSlide, 4000);
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                currentSectionId = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            const hrefValue = link.getAttribute("href");
            
            if (hrefValue === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });
    const contactForm = document.querySelector(".contact-form form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const fullName = contactForm.querySelector('input[type="text"]').value;
            alert(`Xin chào ${fullName}! Cảm ơn bạn đã gửi lời nhắn cho The Coffee Cup.`);
            contactForm.reset();
        });
    }
});