const openNav = document.querySelector(".open");
const closeNav = document.querySelector(".close");
const nav = document.querySelector("nav");

openNav.addEventListener("click", function() {
    this.style.display = "none";
    closeNav.style.display = "block";
    nav.style.display = "block";
});

closeNav.addEventListener("click", function() {
    this.style.display = "none";
    openNav.style.display = "block";
    nav.style.display = "none";
});

// 

const downs = Array.from(document.querySelectorAll(".down"));
downs.forEach(down => {
    down.addEventListener("click",function() {
        this.children[1].style.display = "flex";
    });
});


//
const bgImages = [
    "../images/landing-01",
    "../images/landing-02",
    "../images/landing-03"
];
let start = 0;
const landing = document.querySelector(".landing");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

/*
arrowLeft.addEventListener("click", function() {
    console.log("clicked")
    if(start <= 0) {
        landing.style.backgroundImage.url = bgImages[bgImages.length - 1];
    } else {
        start--;
        landing.style.backgroundImage.url = bgImages[start];
        console.log(start)
    }
});
arrowRight.addEventListener("click", function() {
    console.log("clicked")
    if(start >= bgImages.length - 1) {
        landing.style.backgroundImage.url = bgImages[0];
    } else {
        start++;
        landing.style.backgroundImage.url = bgImages[start];
        console.log(start)
    }
});
*/

// panels

const titles = Array.from(document.querySelectorAll(".titles span"));
const boxes = Array.from(document.querySelectorAll(".boxes .box"));

titles.forEach(title => {
    title.addEventListener("click", function() {
        for(let i = 0; i < titles.length; i++) {
            titles[i].classList.remove("active");
        }
        boxes.forEach(box => {
            if(this.id == box.dataset.id) {
                box.classList.remove("hide");
            } else {
                box.classList.add("hide");
            }
        });
        this.classList.add("active");
    });
});

//

const testBoxes = Array.from(document.querySelectorAll(".testimonials .box"));
const bullets = Array.from(document.querySelectorAll(".bullets span"));

bullets.forEach(bullet => {
    bullet.addEventListener("click", function () {
        for(let i = 0; i < bullets.length; i++) {
            bullets[i].classList.remove("active");
        }
        testBoxes.forEach(box => {
            if(this.id == box.dataset.id) {
                box.classList.remove("hide");
            } else {
                box.classList.add("hide");
            }
        });
        this.classList.add("active");
    });
});

// 
const header = document.querySelector("header");
const up = document.querySelector(".up");
window.addEventListener("scroll", function () {
    if(window.scrollY == 0) {
        header.style.backgroundColor = "transparent";
        up.style.display = "none";
    }else if(window.scrollY > 150) {
        header.style.backgroundColor = "#000000cc";
    }
    if(this.window.scrollY > 500) {
        up.style.display = "flex";
    }
});

// projects
const categories = Array.from(document.querySelectorAll(".projects .shower span"));
const projects = Array.from(document.querySelectorAll(".projects .boxes .box"));
categories.forEach(category => {
    category.addEventListener("click", function(){
        for(let i = 0; i < categories.length; i++) {
            categories[i].classList.remove("active");
        }
        projects.forEach(project => {
            if(this.id == project.dataset.id && this.id != "all") {
                project.classList.remove("hide");
            } else if (this.id == "all") {
                project.classList.remove("hide");
            } else {
                project.classList.add("hide");
            }
        });
        this.classList.add("active");
    });
});

