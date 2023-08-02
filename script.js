const menuBtn = document.querySelectorAll(".menu-btn");
const navigation = document.querySelector("#navigation");

menuBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    navigation.classList.toggle("-translate-x-full");
  });
});
