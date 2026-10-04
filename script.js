// Dexter Jhon Daguasi portfolio: small interactions shared by all pages.
(function () {
  "use strict";

  // Mobile menu toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // Close the mobile menu after choosing a link
  document.querySelectorAll(".nav__link").forEach(function (link) {
    link.addEventListener("click", function () {
      if (nav) { nav.classList.remove("is-open"); }
      if (toggle) { toggle.setAttribute("aria-expanded", "false"); }
    });
  });

  // Highlight the nav link for the section being viewed
  var links = document.querySelectorAll(".nav__link");
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        links.forEach(function (l) {
          if (l.getAttribute("href") === "#" + entry.target.id) {
            l.setAttribute("aria-current", "page");
          } else {
            l.removeAttribute("aria-current");
          }
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("main > section[id]").forEach(function (sec) { spy.observe(sec); });
  }

  // Current year in the footer
  var year = document.getElementById("year");
  if (year) { year.textContent = new Date().getFullYear(); }

})();
