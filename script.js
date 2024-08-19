let isSideBarOpen = false;

const sideBar = document.querySelector(".side-bar");
const sideOpen = document.querySelector(".side-open");
const sideBarBack = document.querySelector(".side-bar-back");

sideOpen.addEventListener("click", (element) => {
  console.log(isSideBarOpen);
  if (isSideBarOpen) {
    sideBar.classList.remove("open");
    sideBarBack.classList.add("close");
    isSideBarOpen = false;
  } else {
    sideBar.classList.add("open");
    sideBarBack.classList.remove("close");
    isSideBarOpen = true;
  }
});

sideBarBack.addEventListener("click", () => {
  console.log("화면 클릭");
  if (sideOpen) {
    sideBar.classList.remove("open");
    sideBarBack.classList.add("close");
    isSideBarOpen = false;
  }
});
