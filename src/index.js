import './sass/styles.scss';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.scss';
import appendHome from './modules/appendHome.js';
import appendMenu from './modules/appendMenu.js';
import appendAbout from './modules/appendAbout.js';

document.addEventListener('DOMContentLoaded', () => {
   const navbarAnchors = [...document.getElementsByClassName('navigation-bar__anchor')];
   let currentPage = 'home';
   let currentPageNode;

   currentPageNode = appendHome();
   navbarAnchors.forEach(a => a.addEventListener('click', changePage));

   function changePage(e) {
      e.preventDefault();

      let location = e.target.getAttribute('href');

      if (currentPage === location) return;

      currentPageNode.remove();

      switch (location) {
         case 'home':
            currentPageNode = appendHome();
            currentPage = 'home';
            break;
         case 'menu':
            currentPageNode = appendMenu();
            currentPage = 'menu';
            break;
         case 'about':
            currentPageNode = appendAbout();
            currentPage = 'about';
            break;
      }

      navbarAnchors.forEach(anchor => anchor.classList.remove('navigation-bar__anchor--active'));
      e.target.classList.add('navigation-bar__anchor--active');
   }
});