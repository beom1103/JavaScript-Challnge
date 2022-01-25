const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// preloader
const preloader = document.querySelector(".preloader");

//로딩이 끝나면 시작!
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

// const $ = (name) => document.querySelector(name);

// $(".switch-btn").addEventListener("click", () => {
//   if (!$(".switch-btn").classList.contains("slide")) {
//     $(".switch-btn").classList.add("slide");
//     $(".video-container").pause();
//   } else {
//     $(".switch-btn").classList.remove("slide");
//     $(".video-container").play();
//   }
// });

// window.addEventListener("load", function () {
//   $(".preloader").classList.add("hide-preloader");
// });
