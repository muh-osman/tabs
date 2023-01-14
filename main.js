const tab = document.querySelectorAll("ul li");
const content = document.querySelectorAll(".content div");

tab.forEach((e) => {

  e.addEventListener("click", (ev) => {

    tab.forEach((el) => {
      el.classList.remove("active");
      e.classList.add("active");
    });

    content.forEach((ele) => {
      ele.style.display = "none";
      // ...................(   .one || .two || .three   )..............
      document.querySelector(ev.currentTarget.dataset.tab).style.display = "block";
    });

  });

});
