const pages = document.querySelectorAll(".page");
let currentPage = 0;

const changeCounter = (pageNumber) => {
  document.querySelector(".page-counter").innerHTML = pageNumber;
};

const showPage = (pageIndex) => {
  pages.forEach((page, index) => {
    if (index === pageIndex) {
      page.classList.add("active");
      changeCounter(pageIndex + 1);
    } else {
      page.classList.remove("active");
    }
  });
};

document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

document.getElementById("next").addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});
showPage(currentPage);
changeCounter(currentPage + 1);
