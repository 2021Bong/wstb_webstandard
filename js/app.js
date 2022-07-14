"use strict";

// main menu
const nav = document.querySelector(".nav");
const titBtn = document.querySelector(".tit .btn");

function handleTitleMenu() {
  if (nav.classList.contains("on")) {
    nav.classList.remove("on");
    titBtn.classList.remove("show");
  } else {
    nav.classList.add("on");
    titBtn.classList.add("show");
  }
}

titBtn.addEventListener("click", handleTitleMenu);

//tab menu
const tabMenu = document.querySelector("#tab_menu > ul");
const tabLi = document.querySelectorAll("#tab_menu > ul > li");

tabLi.forEach((item) => item.addEventListener("click", tabHandler));

function tabHandler(e) {
  e.preventDefault();
  const titleList = e.target.parentNode;

  if (titleList.classList !== "active") {
    tabLi.forEach((item) => {
      item.classList.remove("active");
    });
    titleList.classList.add("active");
  }
}
