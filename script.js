let isSideBarOpen = false;

const sideBar = document.querySelector(".side-bar");
const sideOpen = document.querySelector(".side-open");

sideOpen.addEventListener("click", (element) => {
  console.log(isSideBarOpen);
  if (isSideBarOpen) {
    sideBar.classList.add("none");
    isSideBarOpen = false;
  } else {
    sideBar.classList.remove("none");
    isSideBarOpen = true;
  }
});
