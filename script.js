document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#2b1f15"; 
            header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
        } else {
            header.style.backgroundColor = "#4a3525";
            header.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
        }
    });
    const contactForm = document.querySelector(".contact-form form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = contactForm.querySelector("input[type='text']").value;
            const email = contactForm.querySelector("input[type='email']").value;
            const message = contactForm.querySelector("textarea").value;
            alert(`Cảm ơn ${name}! Yêu cầu đặt bàn của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại qua email: ${email} sớm nhất có thể.`);
            contactForm.reset();
        });
    }
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            console.log(`Đang chuyển đến phần: ${link.textContent}`);
        });
    });
});