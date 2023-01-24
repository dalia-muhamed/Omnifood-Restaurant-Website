// TO MAKE YEAR IN FOOTER UP TO DATE
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnNav = document.querySelector(".btn-nav-mobile");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const allLink = document.querySelectorAll("a:link");
const img = document.querySelectorAll("img");

allLink.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      //   const sectionEl=href ; will print only href not the ele of href
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (link.classList.contains("main-nav-link")) {
      console.log("dddd");
      header.classList.toggle("nav-open");
    }
  });
});

// adding the sticky navbar to all section except hero-section

const sectionHero = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    // select section from the array
    const ent = entries[0];
    console.log(ent);
    //   if ent.intersecting == false means that not on the hero section ,if it's then add class of sticky.
    if (ent.isIntersecting == false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    // instructions : if it's right achieve the function on the top

    root: null, // root :null when related to viewport
    threshold: 0, // threeshold = 0 means that it's 0% from the hero section is on viewport
    rootMargin: "-88px",
    // value of rootmargin is the height of the sticky header to not to late
  }
);

obs.observe(sectionHero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
