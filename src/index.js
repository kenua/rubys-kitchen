import insertHome from "./modules/home-module";
import insertMenu from "./modules/menu-module";
import insertAbout from "./modules/about-module";
import "./sass/styles.scss";

document.addEventListener("DOMContentLoaded", () => {
   const navbarUl = document.getElementById("navbar-ul");
   const navbarAnchors = [...document.getElementsByClassName("navbar__anchor")];

   let currentSectionNode;
   let currentSectionName;

   currentSectionNode = insertHome();
   currentSectionName = "home";
   navbarAnchors[0].className = "navbar__anchor navbar__anchor--active";

   navbarUl.addEventListener("click", changeSection);

   function changeSection(e) {
      e.preventDefault();

      let target = e.target;
      let href = target.getAttribute("href");

      if (!href || href === currentSectionName) return;

      currentSectionNode.remove();

      switch (href) {
         case "home":
            currentSectionNode = insertHome();
            currentSectionName = "home";
            break;
         case "menu":
            currentSectionNode = insertMenu();
            currentSectionName = "menu";
            break;
         case "about":
            currentSectionNode = insertAbout();
            currentSectionName = "about";
            break;
      }

      navbarAnchors.forEach((anchor) => (anchor.className = "navbar__anchor"));
      navbarAnchors.forEach((anchor) => {
         if (anchor.getAttribute("href") === currentSectionName) {
            anchor.className = "navbar__anchor navbar__anchor--active";
         }
      });
   }
});
