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
