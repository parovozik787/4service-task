export const burgerInit = () => {
  let burger = document.querySelector(".burger");
  let sidebar = document.querySelector(".page__sidebar");
  burger.addEventListener("click", () => {
    sidebar.classList.toggle("page__sidebar--open");
    burger.classList.toggle("burger--open");
  });
};
