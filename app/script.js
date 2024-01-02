const hiddenElemns = document.querySelectorAll('.hidden');
const hiddenYElems = document.querySelectorAll('.hidden-y')

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  })

  const observeY = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
       if (entry.isIntersecting) {
         entry.target.classList.add('show-y')
       } else {
         entry.target.classList.remove('show-y')
       }
    })
  })
    
hiddenElemns.forEach((el) => observer.observe(el));
hiddenYElems.forEach((el) => observeY.observe(el))

const btnHamburger = document.querySelector("#btnhamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const button = document.querySelector('.button-1');

function toogleButtonVisibility() {
      if (window.scrollY > 300) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

toogleButtonVisibility();

window.addEventListener('scroll', toogleButtonVisibility)

button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


btnHamburger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    // close hamburger
    body.classList.remove("noscroll");
    header.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");

    fadeElems.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // open hamburger
    body.classList.add("noscroll");
    header.classList.add("open");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");

    fadeElems.forEach((element) => {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  }
});

