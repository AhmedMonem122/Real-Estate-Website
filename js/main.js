"use strict";

// owl carousel init

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    // loop: true,
    // autoplay: true,
    // autoplayTimeout: 5000,
    // autoplayHoverPause: true,
    dots: true,
    nav: false,
    // stagePadding: -5,
    rtl: true,
    margin: 20,
    responsiveBaseElement: "body",
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });
});

// $(".owl-carousel").owlCarousel({
//   loop: true,
//   autoplay: true,
//   autoplayTimeout: 5000,
//   autoplayHoverPause: true,
//   dots: true,
//   stagePadding: -5,
//   responsiveBaseElement: "body",
//   responsive: {
//     0: {
//       items: 1,
//     },
//     700: {
//       items: 2,
//     },
//     1220: {
//       items: 3,
//     },
//   },
// });

// Initialize Counter

$(".counter").counter({
  countFrom: 1,
});

// Disable the right click option
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Disable the keyboards shortcuts
document.addEventListener(
  "keydown",
  (event) => {
    console.log(event);

    if (event.code === "F12") {
      event.preventDefault();
      return false;
    } else if (
      (event.ctrlKey || event.metaKey) &&
      (event.shiftKey || event.altKey) &&
      (event.code === "KeyI" || event.code === "KeyJ" || event.code === "KeyC")
    ) {
      event.preventDefault();
      return false;
    } else if ((event.ctrlKey || event.metaKey) && event.code === "KeyU") {
      event.preventDefault();
      return false;
    }
  },
  false
);

// Disable the right click with alerts
if (document.addEventListener) {
  document.addEventListener(
    "contextmenu",
    (e) => {
      alert("You Can not Do This!");
      e.preventDefault();
    },
    false
  );
} else {
  document.attachEvent("oncontextmenu", function () {
    alert("You Can not Do This!");
    window.event.returnValue = false;
  });
}
