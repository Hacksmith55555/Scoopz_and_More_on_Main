// =============================
// MOBILE MENU
// =============================

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }

});

// Close menu when a link is clicked

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        menuBtn.innerHTML = "☰";

    });

});

// =============================
// BACK TO TOP BUTTON
// =============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// =============================
// SCROLL REVEAL
// =============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll(".card").forEach(card => {

    card.classList.add("fade");

    observer.observe(card);

});

const sections = document.querySelectorAll(".about, .gallery, .contact");

sections.forEach(section => {

    section.classList.add("fade");

    observer.observe(section);

});

// =============================
// NAVBAR SHADOW
// =============================

// =============================
// BUTTON RIPPLE EFFECT
// =============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = diameter + "px";

        circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter / 2 + "px";

        circle.style.top = e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

// =============================
// HERO PARALLAX
// =============================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    let offset = window.scrollY;

    hero.style.backgroundPositionY = offset * 0.35 + "px";

});

// =============================
// ACTIVE NAV LINK
// =============================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// =============================
// FLOATING EMOJI EFFECT
// =============================

const emojis = ["🍦","🍔","🍟","🥤"];

setInterval(() => {

    const emoji = document.createElement("div");

    emoji.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

    emoji.style.position = "fixed";

    emoji.style.left = Math.random()*100 + "vw";

    emoji.style.bottom = "-50px";

    emoji.style.fontSize = (20 + Math.random()*20) + "px";

    emoji.style.pointerEvents = "none";

    emoji.style.opacity = ".25";

    emoji.style.transition = "all 6s linear";

    emoji.style.zIndex = "1";

    document.body.appendChild(emoji);

    setTimeout(() => {

        emoji.style.transform = "translateY(-120vh) rotate(360deg)";

        emoji.style.opacity = "0";

    },100);

    setTimeout(() => {

        emoji.remove();

    },6500);

},2200);

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-track img");

let index = 0;

function moveSlide(){
    track.style.transform = `translateX(-${index * 100}%)`;
}

// NEXT
document.querySelector(".next").addEventListener("click", () => {
    index++;
    if(index >= slides.length) index = 0;
    moveSlide();
});

// PREV
document.querySelector(".prev").addEventListener("click", () => {
    index--;
    if(index < 0) index = slides.length - 1;
    moveSlide();
});

// AUTO PLAY
setInterval(() => {
    index++;
    if(index >= slides.length) index = 0;
    moveSlide();
}, 3000);