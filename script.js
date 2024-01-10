const actionBtn = document.querySelectorAll(".mobile-bottom-navigation ul li");
actionBtn.forEach((item, index) => {
  item.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    item.classList.add("active");
  });
});


// 
////searchpage

const searchpage = document.querySelector(".search-page");
const searchheader = document.querySelector(".header_search");
const searchopen = document.querySelector(".searchcon");
const goback = document.querySelector(".go-back");





searchopen.addEventListener("click", () => {
  searchpage.classList.toggle("active");
  document.querySelector(".searchbox").focus();
});
searchheader.addEventListener("click", () => {
  searchpage.classList.toggle("active");
  document.querySelector(".searchbox").focus();
});
goback.addEventListener("click", () => {
  searchpage.classList.toggle("active");
});