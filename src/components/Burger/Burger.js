export const burgerInit = () => {
  let burger = document.querySelector(".burger");
  let sidebar = document.querySelector(".analytic__sidebar");
  burger.addEventListener("click", () => {
    sidebar.classList.toggle("analytic__sidebar--open");
    burger.classList.toggle("burger--open");
  });
};
