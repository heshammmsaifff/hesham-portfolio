const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

const experienceElements = document.querySelectorAll(".experience");

experienceElements.forEach((exp) => {
  exp.addEventListener("mouseover", () => {
    exp.style.boxShadow = "0 0 20px orangered";
    exp.style.transform = "scale(1.05)";
  });

  exp.addEventListener("mouseout", () => {
    exp.style.boxShadow = "none";
    exp.style.transform = "scale(1)";
  });
});

window.addEventListener("load", () => {
  const heading = document.querySelector(".experiences h1");
  heading.classList.add("fade-in");
});

// scroll for bottom to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});
