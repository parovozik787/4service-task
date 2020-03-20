export const sidebar = () => {
  let sidebarLink = document.querySelectorAll(".sidebar__link");
  let sidebarInner = document.querySelector(".sidebar__inner");

  sidebarInner.addEventListener(
    "click",
    evt => {
      sidebarLink.forEach(x => {
        x.classList.remove("sidebar__link--active");
      });
      if (evt.target.classList.contains("sidebar__link")) {
        evt.target.classList.add("sidebar__link--active");
      } else if (
        !evt.target.classList.contains("sidebar__link") &&
        evt.target.parentNode.classList.contains("sidebar__link")
      ) {
        evt.target.parentNode.classList.add("sidebar__link--active");
      }
    },
    false
  );
};
