const dim = document.querySelector(".dim");
const navOpenBtn = document.querySelector(".nav-open-btn");
const navBar = document.querySelector(".navbar");
const navCloseBtn = document.querySelector(".nav-close-btn");

const navElems = [dim, navOpenBtn, navCloseBtn];

// 햄버거 메뉴 열기 버튼
for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navBar.classList.toggle("active");
    dim.classList.toggle("active");
  });
}
